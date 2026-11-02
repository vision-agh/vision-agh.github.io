// Text search and year / type / funding / supervisor / AVADER filters for the Students page (_pages/students.md)
document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelector(".list-filters");
  if (!filters) return;

  const state = { year: "", type: "", funding: "", supervisor: "", avader: "" };
  let query = "";
  const countEl = document.getElementById("thesis-filter-count");
  const resetEl = document.getElementById("list-filter-reset");
  const emptyEl = document.getElementById("thesis-filter-empty");
  const searchEl = document.getElementById("thesis-search");
  const plural = (n) => `${n} ${n === 1 ? "thesis" : "theses"}`;

  // Search text of every thesis: title, author, supervisor, collaborators and abstract, without accents and case
  const normalize = (text) =>
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  const items = [...document.querySelectorAll(".thesis-item")];
  items.forEach((item) => {
    const parts = item.querySelectorAll(".title, .author, .periodical, .abstract");
    item.searchText = normalize([...parts].map((el) => el.textContent).join(" "));
  });

  const applyFilters = () => {
    const words = query.split(/\s+/).filter(Boolean);
    let visibleTotal = 0;
    document.querySelectorAll(".thesis-section").forEach((section) => {
      let visibleInSection = 0;
      section.querySelectorAll(".thesis-item").forEach((item) => {
        const match =
          Object.entries(state).every(([key, value]) => !value || item.dataset[key] === value) &&
          words.every((word) => item.searchText.includes(word));
        item.hidden = !match;
        if (match) visibleInSection++;
      });
      section.hidden = visibleInSection === 0;
      visibleTotal += visibleInSection;
      const sectionCount = section.querySelector(".section-count");
      if (sectionCount) {
        sectionCount.dataset.label = sectionCount.dataset.label || sectionCount.textContent;
        sectionCount.textContent = filtering() ? plural(visibleInSection) : sectionCount.dataset.label;
      }
    });

    // collapsible academic years of defended theses: hide empty years, show filtered counts,
    // expand every matching year while filtering and only the newest one otherwise
    document.querySelectorAll(".thesis-year").forEach((year, index) => {
      const visible = year.querySelectorAll(".thesis-item:not([hidden])").length;
      const yearCount = year.querySelector(".thesis-year-count");
      year.hidden = visible === 0;
      yearCount.dataset.label = yearCount.dataset.label || yearCount.textContent;
      if (filtering()) {
        yearCount.textContent = plural(visible);
        year.open = visible > 0;
      } else {
        yearCount.textContent = yearCount.dataset.label;
        year.open = index === 0;
      }
    });

    countEl.textContent = plural(visibleTotal);
    resetEl.hidden = !filtering();
    emptyEl.hidden = visibleTotal > 0;
  };

  const filtering = () => Boolean(query) || Object.values(state).some((value) => value);

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

  let searchTimer;
  if (searchEl) {
    searchEl.addEventListener("input", () => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        query = normalize(searchEl.value.trim());
        applyFilters();
      }, 150);
    });
  }

  resetEl.addEventListener("click", () => {
    filters.querySelectorAll(".list-filter-group").forEach((group) => setActive(group, ""));
    if (searchEl) searchEl.value = "";
    query = "";
    applyFilters();
  });

  applyFilters();
});
