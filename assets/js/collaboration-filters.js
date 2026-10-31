// Country / keyword filters for the Collaboration page (_pages/collaboration.md)
document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelector(".collab-filters");
  if (!filters) return;

  const items = [...document.querySelectorAll(".collab-item")].map((el) => ({
    el,
    country: el.dataset.country || "",
    keywords: (el.dataset.keywords || "").split("|").filter(Boolean),
  }));
  const state = { country: "", keyword: "" };
  const countEl = document.getElementById("collab-filter-count");
  const resetEl = document.getElementById("collab-filter-reset");
  const emptyEl = document.getElementById("collab-filter-empty");
  const groupOf = (filter) => filters.querySelector(`[data-filter="${filter}"]`);

  // Build the options from the partner cards on the page
  const countrySelect = groupOf("country").querySelector(".list-filter-select");
  [...new Set(items.map(({ country }) => country).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b))
    .forEach((country) => countrySelect.add(new Option(country, country)));
  if (countrySelect.options.length <= 1) groupOf("country").hidden = true;

  const keywordChips = groupOf("keyword").querySelector(".list-filter-chips");
  [...new Set(items.flatMap(({ keywords }) => keywords))]
    .sort((a, b) => a.localeCompare(b))
    .forEach((keyword) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "filter-chip";
      chip.dataset.value = keyword;
      chip.textContent = keyword;
      keywordChips.appendChild(chip);
    });

  const applyFilters = () => {
    let visibleTotal = 0;
    document.querySelectorAll(".collab-section").forEach((section) => {
      let visibleInSection = 0;
      section.querySelectorAll(".collab-item").forEach((el) => {
        const item = items.find((i) => i.el === el);
        const match = (!state.country || item.country === state.country) && (!state.keyword || item.keywords.includes(state.keyword));
        el.hidden = !match;
        if (match) visibleInSection++;
      });
      section.hidden = visibleInSection === 0;
      visibleTotal += visibleInSection;
    });

    countEl.textContent = `${visibleTotal} ${visibleTotal === 1 ? "partner" : "partners"}`;
    resetEl.hidden = !state.country && !state.keyword;
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
