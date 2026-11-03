// Text search and year / type filters for the Papers page (_pages/publications.md).
// Works alongside bibsearch.js: search hides entries with `.unloaded`, these filters use `.filtered-out`.
document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelector(".paper-filters");
  if (!filters) return;

  const TYPE_ORDER = ["Journal", "Conference", "Book chapter", "Book", "Other"];
  const items = [...document.querySelectorAll(".publications ol.bibliography > li")]
    .map((li) => ({ li, row: li.querySelector("[data-paper-type]") }))
    .filter(({ row }) => row);

  // ?partner=<id> (link from the Collaboration page): show only papers with that partner
  const partner = new URLSearchParams(window.location.search).get("partner") || "";
  const state = { year: "", type: "", project: "", featured: "", query: "", partner };
  const featuredEl = filters.querySelector(".featured-toggle");
  const searchEl = document.getElementById("paper-search");

  // Search text of every paper: title, authors, venue and abstract, without accents and case
  const normalize = (text) =>
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  items.forEach((item) => {
    const parts = item.li.querySelectorAll(".title, .author, .periodical, .abstract");
    item.text = normalize([...parts].map((el) => el.textContent).join(" "));
  });
  const countEl = document.getElementById("paper-filter-count");
  const resetEl = document.getElementById("paper-filter-reset");
  const emptyEl = document.getElementById("paper-filter-empty");

  // Build the chips from the papers actually on the page
  const years = [...new Set(items.map(({ row }) => row.dataset.paperYear).filter(Boolean))].sort((a, b) => b - a);
  const types = TYPE_ORDER.filter((type) => items.some(({ row }) => row.dataset.paperType === type));
  const addChips = (filter, values) => {
    const container = filters.querySelector(`[data-filter="${filter}"] .list-filter-chips`);
    values.forEach((value) => {
      if (container.querySelector(`.filter-chip[data-value="${value}"]`)) return; // already rendered in HTML
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "filter-chip";
      chip.dataset.value = value;
      chip.textContent = value;
      container.appendChild(chip);
    });
  };
  const yearSelect = filters.querySelector('[data-filter="year"] .list-filter-select');
  years.forEach((year) => yearSelect.add(new Option(year, year)));
  addChips("type", types);

  const isVisible = (li) => !li.classList.contains("unloaded") && !li.classList.contains("filtered-out");

  // Hide year headings (h2) and lists (ol) that have no visible entries left
  const updateGroups = () => {
    document.querySelectorAll(".publications ol.bibliography").forEach((ol) => {
      const anyVisible = [...ol.querySelectorAll(":scope > li")].some(isVisible);
      ol.classList.toggle("filter-hidden", !anyVisible);
      const heading = ol.previousElementSibling;
      if (heading && heading.tagName === "H2") {
        heading.classList.toggle("filter-hidden", !anyVisible);
        // number of (visible) publications on the right of the year heading
        const visibleInYear = [...ol.querySelectorAll(":scope > li")].filter(isVisible).length;
        let count = heading.querySelector(".section-count");
        if (!count) {
          heading.classList.add("has-count");
          count = document.createElement("span");
          count.className = "section-count";
          heading.appendChild(count);
        }
        count.textContent = `${visibleInYear} ${visibleInYear === 1 ? "publication" : "publications"}`;
      }
    });
    const visibleTotal = items.filter(({ li }) => isVisible(li)).length;
    countEl.textContent = `${visibleTotal} ${visibleTotal === 1 ? "paper" : "papers"}`;
    emptyEl.hidden = visibleTotal > 0;
  };

  const applyFilters = () => {
    items.forEach(({ li, row, text }) => {
      const words = state.query.split(/\s+/).filter(Boolean);
      const match =
        (!state.year || row.dataset.paperYear === state.year) &&
        (!state.type || row.dataset.paperType === state.type) &&
        (!state.project || (row.dataset.paperProjects || "").split(",").includes(state.project)) &&
        (!state.featured || row.dataset.paperFeatured === "yes") &&
        (!state.partner || (row.dataset.paperPartners || "").split(",").includes(state.partner)) &&
        words.every((word) => text.includes(word));
      li.classList.toggle("filtered-out", !match);
    });
    resetEl.hidden = !state.year && !state.type && !state.project && !state.featured && !state.query && !state.partner;
    updateGroups();
  };

  const setActive = (group, value) => {
    state[group.dataset.filter] = value;
    group.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.toggle("active", chip.dataset.value === value));
    const select = group.querySelector(".list-filter-select");
    if (select) select.value = value;
  };

  filters.querySelectorAll(".list-filter-group").forEach((group) => {
    group.addEventListener("click", (event) => {
      const chip = event.target.closest(".filter-chip");
      if (!chip) return;
      setActive(group, chip.dataset.value);
      applyFilters();
    });
    group.addEventListener("change", (event) => {
      if (!event.target.matches(".list-filter-select")) return;
      setActive(group, event.target.value);
      applyFilters();
    });
  });

  resetEl.addEventListener("click", () => {
    filters.querySelectorAll(".list-filter-group").forEach((group) => setActive(group, ""));
    searchEl.value = "";
    state.query = "";
    state.featured = "";
    featuredEl.setAttribute("aria-pressed", "false");
    if (state.partner) {
      state.partner = "";
      partnerEl.hidden = true;
      history.replaceState(null, "", window.location.pathname);
    }
    applyFilters();
  });

  // Note above the list naming the partner whose papers are shown
  const partnerEl = document.getElementById("paper-filter-partner");
  if (state.partner && partnerEl) {
    partnerEl.querySelector("span").textContent = partnerEl.dataset[`name${state.partner.toLowerCase()}`] || state.partner;
    partnerEl.hidden = false;
  }

  let searchTimer;
  searchEl.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.query = normalize(searchEl.value.trim());
      applyFilters();
    }, 150);
  });

  // "Featured only" toggle: papers marked selected={true}
  featuredEl.addEventListener("click", () => {
    state.featured = state.featured ? "" : "yes";
    featuredEl.setAttribute("aria-pressed", String(Boolean(state.featured)));
    applyFilters();
  });

  // Download the BibTeX of the papers currently shown
  document.getElementById("paper-bibtex-download").addEventListener("click", () => {
    const entries = items
      .filter(({ li }) => isVisible(li))
      .map(({ li }) => li.querySelector(".bibtex.hidden"))
      .filter(Boolean)
      .map((el) => el.textContent.trim());
    const blob = new Blob([entries.join("\n\n") + "\n"], { type: "application/x-bibtex" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "epas-papers.bib";
    link.click();
    URL.revokeObjectURL(link.href);
  });

  // Re-evaluate after the text search (bibsearch.js) changes what is visible
  const search = document.getElementById("bibsearch");
  if (search) search.addEventListener("input", () => setTimeout(updateGroups, 350));
  window.addEventListener("hashchange", () => setTimeout(updateGroups, 0));

  applyFilters();
});
