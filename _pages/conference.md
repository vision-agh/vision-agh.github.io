---
layout: page
title: Conferences
permalink: /conferences/
description:
nav: true
nav_order: 6

display_categories: []
horizontal: false

# Conferences (by `name` in _data/conferences.yml) listed under "National"; all others are "International"
national_conferences: ["KU KDM", "SPA", "TYGIEL", "MMAR", "Automation", "ICCVG", "PP-RAI"]
---

{% assign scopes = "International,National" | split: "," %}
{% assign categories = "presentation,poster,demo"  | split: "," %}

{% include conference_filters.liquid %}

<!-- pages/projects.md -->
<div class="projects">

{% for scope in scopes %}

<div class="conf-scope">
<h2 class="conf-scope-title">{{ scope }} conferences</h2>

{% for category in categories %}
{% assign categorized_projects = site.data.conferences | where: "presentation_type", category %}
{% assign sorted_projects = categorized_projects | sort: "start_date" | reverse %}

{% capture cards %}{% for project in sorted_projects %}{% if page.national_conferences contains project.name %}{% assign project_scope = "National" %}{% else %}{% assign project_scope = "International" %}{% endif %}{% if project_scope == scope %}{% include conferences.liquid %}{% endif %}{% endfor %}{% endcapture %}

{% if cards contains "conf-item" %}

<div class="conf-section">
<h3 class="category">{{ category | capitalize }}</h3>
  <div class="row row-cols-1 row-cols-md-3">
    {{ cards }}
  </div>
</div>
{% endif %}

{% endfor %}

</div>

{% endfor %}

</div>
