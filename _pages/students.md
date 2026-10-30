---
layout: page
permalink: /students/
title: Students
description: Bachelor's and master's theses completed in our group.
nav: true
nav_order: 5
---

<!-- _pages/students.md -->

{% include thesis_filters.liquid %}

{% assign sections = "MSc,Bachelor,Alumni" | split: "," %}

<div class="publications">
{% for section in sections %}
  {% assign theses = site.data.theses | where: "group", section | sort: "year" | reverse %}
  {% if theses.size > 0 %}
    <div class="thesis-section">
      <h2 class="bibliography">{{ section }}</h2>
      <ol class="bibliography">
        {% for thesis in theses %}{% include thesis.liquid %}{% endfor %}
      </ol>
    </div>
  {% endif %}
{% endfor %}
</div>
