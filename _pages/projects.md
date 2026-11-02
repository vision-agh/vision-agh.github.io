---
layout: page
title: Projects
permalink: /projects/
description: Research projects carried out by the group, funded by NCN, NCBR, the EU and AGH.
nav: true
nav_order: 6

display_categories: [NCN, NCBR, EU, IDUB, Industrial]
horizontal: false
---

<!-- pages/projects.md -->

{% assign today = site.time | date: '%Y%m%d' %}
{% assign ongoing_projects = 0 %}
{% for p in site.projects %}
{% assign p_end = p.end_date | date: '%Y%m%d' %}
{% if p.end_date == nil or p_end >= today %}{% assign ongoing_projects = ongoing_projects | plus: 1 %}{% endif %}
{% endfor %}
{% assign funders = site.projects | map: 'category' | uniq %}
{% capture project_stats -%}
{{ site.projects.size }}|projects;{{ ongoing_projects }}|ongoing;{{ funders.size }}|funding bodies
{%- endcapture %}
{% include page_stats.liquid items=project_stats %}
{% include project_filters.liquid %}

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <div class="project-section">
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "start_date" | reverse  %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  </div>
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
