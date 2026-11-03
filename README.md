# EPAS Group – website

Source of [vision-agh.github.io](https://vision-agh.github.io) (Embedded Perception and Autonomous Systems Group, AGH University of Krakow). Built with Jekyll and [al-folio](https://github.com/alshedivat/al-folio); every push to `main` is deployed automatically.

## Where things live

- `_members/` – team profiles (photos in `assets/img/people/`), `_data/alumni.yml` – alumni
- `_projects/` – research projects, `_data/projects.yml` – project badges on papers
- `_bibliography/papers.bib` – publications
- `_data/` – conferences, conference organisation, partners (`collaboration.yml`), theses, news
- `_pages/about.md` – home page, `_config.yml` – site settings

Each data file starts with a comment listing its fields.

## Run locally

```bash
docker compose up   # http://localhost:8080
```

## Formatting

CI runs Prettier; use the pinned versions (`npm ci`), not a newer plugin:

```bash
npm ci && npx prettier . --write
```

## License

Theme: [MIT License](https://github.com/alshedivat/al-folio/blob/main/LICENSE), based on the [\*folio theme](https://github.com/bogoli/-folio) by [Lia Bogoev](https://liabogoev.com).
