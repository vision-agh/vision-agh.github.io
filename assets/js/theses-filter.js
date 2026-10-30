// Year / type filters for the Students page (_pages/students.md)
document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelector(".list-filters");
  if (!filters) return;

  const state = { year: "", type: "" };
  const countEl = document.getElementById("thesis-filter-count");
  const resetEl = document.getElementById("list-filter-reset");
  const emptyEl = document.getElementById("thesis-filter-empty");

  const applyFilters = () => {
    let visibleTotal = 0;
    document.querySelectorAll(".thesis-section").forEach((section) => {
      let visibleInSection = 0;
      section.querySelectorAll(".thesis-item").forEach((item) => {
        const match = (!state.year || item.dataset.year === state.year) && (!state.type || item.dataset.type === state.type);
        item.hidden = !match;
        if (match) visibleInSection++;
      });
      section.hidden = visibleInSection === 0;
      visibleTotal += visibleInSection;
    });

    countEl.textContent = `${visibleTotal} ${visibleTotal === 1 ? "thesis" : "theses"}`;
    resetEl.hidden = !state.year && !state.type;
    emptyEl.hidden = visibleTotal > 0;
  };

  const setActive = (group, value) => {
    state[group.dataset.filter] = value;
    group.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.toggle("active", chip.dataset.value === value));
  };

  filters.querySelectorAll(".list-filter-group").forEach((group) => {
    group.addEventListener("click", (event) => {
      const chip = event.target.closest(".filter-chip");
      if (!chip) return;
      setActive(group, chip.dataset.value);
      applyFilters();
    });
  });

  resetEl.addEventListener("click", () => {
    filters.querySelectorAll(".list-filter-group").forEach((group) => setActive(group, ""));
    applyFilters();
  });

  applyFilters();
});
