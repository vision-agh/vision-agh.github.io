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

{% assign projects_by_date = site.projects | sort: "start_date" | reverse %}
{% assign completed_projects = site.projects.size | minus: ongoing_projects %}

<div class="projects">
  {% assign statuses = "Ongoing,Completed" | split: "," %}
  {% for status in statuses %}
    {% if status == "Ongoing" %}{% assign status_count = ongoing_projects %}{% else %}{% assign status_count = completed_projects %}{% endif %}
    {% if status_count > 0 %}
    <div class="project-section" data-status-section="{{ status }}">
      <h2 class="page-section-title has-count">{{ status }} <span class="section-count">{{ status_count }} {% if status_count == 1 %}project{% else %}projects{% endif %}</span></h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {% for project in projects_by_date %}
          {% assign p_end = project.end_date | date: "%Y%m%d" %}
          {% if project.end_date == nil or p_end >= today %}{% assign p_status = "Ongoing" %}{% else %}{% assign p_status = "Completed" %}{% endif %}
          {% if p_status == status %}{% include projects.liquid %}{% endif %}
        {% endfor %}
      </div>
    </div>
    {% endif %}
  {% endfor %}
</div>
