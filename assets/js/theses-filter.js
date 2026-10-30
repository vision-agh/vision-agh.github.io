// Year / type filters for the Students page (_pages/students.md)
document.addEventListener("DOMContentLoaded", () => {
  const yearSelect = document.getElementById("thesis-filter-year");
  const typeSelect = document.getElementById("thesis-filter-type");
  if (!yearSelect || !typeSelect) return;

  const applyFilters = () => {
    const year = yearSelect.value;
    const type = typeSelect.value;
    let visibleTotal = 0;

    document.querySelectorAll(".thesis-section").forEach((section) => {
      let visibleInSection = 0;
      section.querySelectorAll(".thesis-item").forEach((item) => {
        const match = (!year || item.dataset.year === year) && (!type || item.dataset.type === type);
        item.style.display = match ? "" : "none";
        if (match) visibleInSection++;
      });
      section.style.display = visibleInSection ? "" : "none";
      visibleTotal += visibleInSection;
    });

    document.getElementById("thesis-filter-empty").style.display = visibleTotal ? "none" : "";
  };

  yearSelect.addEventListener("change", applyFilters);
  typeSelect.addEventListener("change", applyFilters);
});
