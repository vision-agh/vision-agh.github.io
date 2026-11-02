// Research-area filter for the Team page (_layouts/team.liquid).
// A chip's value is a "|"-separated list of texts; a member matches if one of their keywords contains one of them.
document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelector(".team-filters");
  if (!filters) return;

  const emptyEl = document.getElementById("team-filter-empty");
  const items = [...document.querySelectorAll(".team-item")].map((el) => ({
    el,
    keywords: (el.dataset.keywords || "").split("|").filter(Boolean),
  }));

  const applyFilter = (value) => {
    const needles = value.split("|").filter(Boolean);
    items.forEach(({ el, keywords }) => {
      el.hidden = needles.length > 0 && !keywords.some((keyword) => needles.some((needle) => keyword.includes(needle)));
    });

    let visibleTotal = 0;
    document.querySelectorAll(".team-section").forEach((section) => {
      const visible = section.querySelectorAll(".team-item:not([hidden])").length;
      section.hidden = visible === 0;
      visibleTotal += visible;
      const count = section.querySelector(".section-count");
      if (count) count.textContent = `${visible} ${visible === 1 ? "person" : "people"}`;
    });
    emptyEl.hidden = visibleTotal > 0;
  };

  filters.addEventListener("click", (event) => {
    const chip = event.target.closest(".filter-chip");
    if (!chip) return;
    filters.querySelectorAll(".filter-chip").forEach((c) => c.classList.toggle("active", c === chip));
    applyFilter(chip.dataset.value);
  });
});
