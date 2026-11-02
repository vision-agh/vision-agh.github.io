// Year / scope / type / conference filters for the Conferences page (_pages/conference.md)
document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelector(".conference-filters");
  if (!filters) return;

  const TYPE_LABELS = { presentation: "Presentation", poster: "Poster", demo: "Demo" };
  const SCOPE_LABELS = { International: "International", National: "National" };
  const items = [...document.querySelectorAll(".conf-item")];
  const state = { year: "", scope: "", type: "", conference: "" };
  const countEl = document.getElementById("conference-filter-count");
  const resetEl = document.getElementById("conference-filter-reset");
  const emptyEl = document.getElementById("conference-filter-empty");

  const unique = (key) => [...new Set(items.map((item) => item.dataset[key]).filter(Boolean))];
  const groupOf = (filter) => filters.querySelector(`[data-filter="${filter}"]`);

  // Build the options from the cards on the page
  const yearSelect = groupOf("year").querySelector(".list-filter-select");
  unique("year")
    .sort((a, b) => b - a)
    .forEach((year) => yearSelect.add(new Option(year, year)));

  const conferenceSelect = groupOf("conference").querySelector(".list-filter-select");
  unique("conference")
    .sort((a, b) => a.localeCompare(b))
    .forEach((name) => conferenceSelect.add(new Option(name, name)));

  const addChips = (filter, labels) => {
    const chips = groupOf(filter).querySelector(".list-filter-chips");
    Object.keys(labels)
      .filter((value) => unique(filter).includes(value))
      .forEach((value) => {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "filter-chip";
        chip.dataset.value = value;
        chip.textContent = labels[value];
        chips.appendChild(chip);
      });
  };
  addChips("scope", SCOPE_LABELS);
  addChips("type", TYPE_LABELS);

  const applyFilters = () => {
    let visibleTotal = 0;
    document.querySelectorAll(".conf-section").forEach((section) => {
      let visibleInSection = 0;
      section.querySelectorAll(".conf-item").forEach((item) => {
        const match = Object.entries(state).every(([key, value]) => !value || item.dataset[key] === value);
        item.hidden = !match;
        if (match) visibleInSection++;
      });
      section.hidden = visibleInSection === 0;
      visibleTotal += visibleInSection;
      const scopeCount = section.closest(".conf-scope")?.querySelector(".section-count");
      if (scopeCount) scopeCount.textContent = visibleInSection;
    });
    document.querySelectorAll(".conf-scope").forEach((scope) => {
      scope.hidden = !scope.querySelector(".conf-section:not([hidden])");
    });

    countEl.textContent = `${visibleTotal} ${visibleTotal === 1 ? "contribution" : "contributions"}`;
    resetEl.hidden = Object.values(state).every((value) => !value);
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
