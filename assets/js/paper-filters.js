// Year / type filters for the Papers page (_pages/publications.md).
// Works alongside bibsearch.js: search hides entries with `.unloaded`, these filters use `.filtered-out`.
document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelector(".paper-filters");
  if (!filters) return;

  const TYPE_ORDER = ["Journal", "Conference", "Book chapter", "Book", "Other"];
  const items = [...document.querySelectorAll(".publications ol.bibliography > li")]
    .map((li) => ({ li, row: li.querySelector("[data-paper-type]") }))
    .filter(({ row }) => row);

  const state = { year: "", type: "" };
  const countEl = document.getElementById("paper-filter-count");
  const resetEl = document.getElementById("paper-filter-reset");
  const emptyEl = document.getElementById("paper-filter-empty");

  // Build the chips from the papers actually on the page
  const years = [...new Set(items.map(({ row }) => row.dataset.paperYear).filter(Boolean))].sort((a, b) => b - a);
  const types = TYPE_ORDER.filter((type) => items.some(({ row }) => row.dataset.paperType === type));
  const addChips = (filter, values) => {
    const container = filters.querySelector(`[data-filter="${filter}"] .list-filter-chips`);
    values.forEach((value) => {
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
      if (heading && heading.tagName === "H2") heading.classList.toggle("filter-hidden", !anyVisible);
    });
    const visibleTotal = items.filter(({ li }) => isVisible(li)).length;
    countEl.textContent = `${visibleTotal} ${visibleTotal === 1 ? "paper" : "papers"}`;
    emptyEl.hidden = visibleTotal > 0;
  };

  const applyFilters = () => {
    items.forEach(({ li, row }) => {
      const match = (!state.year || row.dataset.paperYear === state.year) && (!state.type || row.dataset.paperType === state.type);
      li.classList.toggle("filtered-out", !match);
    });
    resetEl.hidden = !state.year && !state.type;
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
    applyFilters();
  });

  // Re-evaluate after the text search (bibsearch.js) changes what is visible
  const search = document.getElementById("bibsearch");
  if (search) search.addEventListener("input", () => setTimeout(updateGroups, 350));
  window.addEventListener("hashchange", () => setTimeout(updateGroups, 0));

  applyFilters();
});
