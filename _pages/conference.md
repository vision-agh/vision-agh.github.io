---
layout: page
title: Conferences
permalink: /conferences/
description: 
nav: true
nav_order: 6

display_categories: []
horizontal: false
---
{% assign categories = "presentation,poster"  | split: "," %}
{% assign conferences = site.data.conferences %}

<!-- {{ conferences | jsonify }} -->

<!-- pages/projects.md -->
<div class="projects">

  <!-- Display categorized projects -->
  {% for category in categories %}
    <h2 class="category">{{ category | capitalize }}</h2>

  {% assign categorized_projects = site.data.conferences | where: "presentation_type", category %}
  {% assign sorted_projects = categorized_projects | sort: "start_date" | reverse  %}
  <!-- Generate cards for each project -->
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include conferences.liquid %}
    {% endfor %}
  </div>

  {% endfor %}
</div>


