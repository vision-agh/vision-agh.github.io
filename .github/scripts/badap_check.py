#!/usr/bin/env python3
"""Check BaDAP AGH for group publications that are not yet in _bibliography/papers.bib.

For every author listed in .github/badap.json the script downloads the author's publication
list from BaDAP (https://badap.agh.edu.pl), skips publications that are already in the
bibliography (matched by BaDAP ID, DOI or title) or listed in "ignore", and adds a BibTeX
entry for each new one at the top of the bibliography.

Usage: python .github/scripts/badap_check.py [--bib PATH] [--config PATH] [--dry-run]

Writes a Markdown summary of the new publications to the file given by --summary
(used as the pull-request body by .github/workflows/badap-check.yml).
Standard library only, so it runs on a bare GitHub Actions runner.
"""

import argparse
import json
import re
import sys
import time
import unicodedata
import urllib.request

BADAP = "https://badap.agh.edu.pl"
USER_AGENT = "vision-agh-site-badap-check/1.0 (+https://github.com/vision-agh/vision-agh.github.io)"
BS = chr(92)


def fetch(url, as_json=True):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=60) as resp:
                body = resp.read().decode("utf-8")
            return json.loads(body) if as_json else body
        except Exception:
            if attempt == 2:
                raise
            time.sleep(5)


def author_publications(slug):
    """IDs of all publications of a BaDAP author."""
    data = fetch(f"{BADAP}/a/author_solo/{slug}?limit=1000")
    return [str(hit["_id"]) for hit in data["publ"]["hits"]["hits"]]


def publication(pub_id):
    """Full record of a publication, taken from the JSON embedded in its BaDAP page."""
    page = fetch(f"{BADAP}/publikacja/{pub_id}", as_json=False)
    blob = re.search(r'<script id="__NEXT_DATA__" type="application/json">(.*?)</script>', page, re.S)
    return json.loads(blob.group(1))["props"]["pageProps"]["data"]


def ascii_text(text):
    text = (text or "").replace("ł", "l").replace("Ł", "L")
    return unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode("ascii")


def norm_title(text):
    text = re.sub(re.escape(BS) + r"[a-zA-Z]+", "", text or "")
    text = "".join(ch for ch in text if ch not in "{}$" + BS)
    return " ".join(re.sub(r"[^a-z0-9 ]", " ", ascii_text(text).lower()).split())


def norm_doi(doi):
    return re.sub(r"^https?://(dx\.)?doi\.org/", "", (doi or "").strip().lower())


def bib_value(text):
    """Make a string safe inside a braced BibTeX field."""
    text = re.sub(r"\s+", " ", text or "").strip()
    text = text.replace("{", "(").replace("}", ")").replace(BS, "")
    return text.replace("%", BS + "%").replace("&", BS + "&")


def existing(bib):
    """BaDAP IDs, DOIs and titles already present in the bibliography."""
    ids = set(re.findall(r"^@\w+\{badap-agh:(\d+)", bib, re.M))
    dois = {norm_doi(d) for d in re.findall(r"^\s*doi\s*=\s*\{([^}]*)\}", bib, re.M | re.I)}
    titles = {norm_title(t) for t in re.findall(r"^\s*title\s*=\s*\{(.*)\},?\s*$", bib, re.M | re.I)}
    return ids, dois, titles


def to_bibtex(pub_id, data):
    desc = data.get("description") or {}
    citation = (desc.get("ascii") or "").replace("\xa0", " ")
    genre = data.get("publication_genre") or ""
    journal = (data.get("journal_of_source") or [{}])[0].get("journal_title")

    authors = []
    for author in sorted(data.get("authors") or [], key=lambda a: a.get("order_authors", 0)):
        if author.get("author_role", "autor") != "autor":
            continue
        parts = ascii_text(author.get("author", "")).split()
        if parts:
            authors.append(f"{parts[0]}, {' '.join(parts[1:])}" if len(parts) > 1 else parts[0])

    fields = [("title", bib_value(data.get("title"))), ("author", " and ".join(authors))]
    if data.get("year_of_publish"):
        fields.append(("year", str(data["year_of_publish"])))

    if genre.startswith("artyku"):
        entry_type = "article"
        if journal:
            fields.append(("journal", bib_value(journal)))
    else:
        entry_type = "inproceedings" if "konferenc" in (data.get("publication_type") or "") else "misc"
        container = re.search(r"//\s*W:\s*(.*?)\s*(?: / |\. — )", citation)
        if container:
            fields.append(("booktitle", bib_value(container.group(1))))
        elif journal:
            fields.append(("booktitle", bib_value(journal)))

    volume = re.search(r"\bvol\.\s*([\w-]+)", citation)
    if volume:
        fields.append(("volume", volume.group(1)))
    number = re.search(r"\bno\.\s*([\w-]+)", citation)
    if number and "art. no." not in citation:
        fields.append(("number", number.group(1)))
    pages = re.search(r"art\. no\.\s*([\w-]+)", citation) or re.search(r"\b[sS]\.\s*(\d+[–-]\d+)", citation)
    if pages:
        fields.append(("pages", pages.group(1).replace("–", "--")))
    if data.get("doi"):
        fields.append(("doi", data["doi"].strip()))

    abstracts = [a for a in desc.get("abstract") or [] if a.get("abstract_text")]
    english = [a for a in abstracts if a.get("abstract_lang") == "angielski"]
    if english or abstracts:
        fields.append(("abstract", bib_value((english or abstracts)[0]["abstract_text"])))

    fields.append(("bibtex_show", "true"))
    body = ",\n".join(f"  {name:<13} = {{{value}}}" for name, value in fields if value)
    return f"@{entry_type}{{badap-agh:{pub_id},\n{body}\n}}\n"


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--bib", default="_bibliography/papers.bib")
    parser.add_argument("--config", default=".github/badap.json")
    parser.add_argument("--summary", default=None, help="write a Markdown list of new publications here")
    parser.add_argument("--dry-run", action="store_true", help="only list new publications")
    args = parser.parse_args()

    config = json.load(open(args.config, encoding="utf-8"))
    ignore = {str(i) for i in config.get("ignore", [])}
    bib = open(args.bib, encoding="utf-8", newline="").read()
    have_ids, have_dois, have_titles = existing(bib)

    candidates = []
    for slug in config["authors"]:
        for pub_id in author_publications(slug):
            if pub_id not in have_ids and pub_id not in ignore and pub_id not in candidates:
                candidates.append(pub_id)

    new_entries, summary = [], []
    for pub_id in candidates:
        data = publication(pub_id)
        time.sleep(1)
        if norm_doi(data.get("doi")) in have_dois - {""} or norm_title(data.get("title")) in have_titles:
            continue  # already in the bibliography under another key
        new_entries.append(to_bibtex(pub_id, data))
        summary.append(f"- [{data.get('title')}]({BADAP}/publikacja/{pub_id}) ({data.get('year_of_publish')})")

    print(f"{len(new_entries)} new publication(s) in BaDAP")
    print("\n".join(summary))
    if args.summary:
        with open(args.summary, "w", encoding="utf-8") as fh:
            fh.write("\n".join(summary) + "\n")
    if not new_entries or args.dry_run:
        return 0

    newline = "\r\n" if "\r\n" in bib else "\n"
    first = bib.find("\n@") + 1 if not bib.startswith("@") else 0
    added = "".join(new_entries).replace("\n", newline)
    with open(args.bib, "w", encoding="utf-8", newline="") as fh:
        fh.write(bib[:first] + added + bib[first:])
    return 0


if __name__ == "__main__":
    sys.exit(main())
