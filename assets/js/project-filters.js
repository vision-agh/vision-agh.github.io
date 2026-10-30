// Year / type filters for the Projects page (_pages/projects.md).
// A project matches a year if it was active in that year; projects without an end date are treated as ongoing.
document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelector(".project-filters");
  if (!filters) return;

  const currentYear = new Date().getFullYear();
  const items = [...document.querySelectorAll(".project-item")].map((el) => {
    const start = parseInt(el.dataset.start, 10);
    const end = parseInt(el.dataset.end, 10);
    return { el, type: el.dataset.type, start, end: Number.isNaN(end) ? Math.max(currentYear, start) : end };
  });

  const state = { year: "", type: "" };
  const countEl = document.getElementById("project-filter-count");
  const resetEl = document.getElementById("project-filter-reset");
  const emptyEl = document.getElementById("project-filter-empty");
  const groupOf = (filter) => filters.querySelector(`[data-filter="${filter}"]`);

  // Years in which at least one project was active, newest first
  const years = new Set();
  items.forEach(({ start, end }) => {
    if (Number.isNaN(start)) return;
    for (let y = start; y <= end; y++) years.add(y);
  });
  const yearSelect = groupOf("year").querySelector(".list-filter-select");
  [...years].sort((a, b) => b - a).forEach((year) => yearSelect.add(new Option(year, year)));

  // Types in the order of the sections on the page
  const typeChips = groupOf("type").querySelector(".list-filter-chips");
  [...new Set(items.map(({ type }) => type).filter(Boolean))].forEach((type) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "filter-chip";
    chip.dataset.value = type;
    chip.textContent = type;
    typeChips.appendChild(chip);
  });

  const applyFilters = () => {
    const year = parseInt(state.year, 10);
    let visibleTotal = 0;
    document.querySelectorAll(".project-section").forEach((section) => {
      let visibleInSection = 0;
      section.querySelectorAll(".project-item").forEach((el) => {
        const item = items.find((i) => i.el === el);
        const match = (!state.type || item.type === state.type) && (!state.year || (item.start <= year && year <= item.end));
        el.hidden = !match;
        if (match) visibleInSection++;
      });
      section.hidden = visibleInSection === 0;
      visibleTotal += visibleInSection;
    });

    countEl.textContent = `${visibleTotal} ${visibleTotal === 1 ? "project" : "projects"}`;
    resetEl.hidden = !state.year && !state.type;
    emptyEl.hidden = visibleTotal > 0;
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
    applyFilters();
  });

  applyFilters();
});
