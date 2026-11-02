---
layout: page
title: Conferences
permalink: /conferences/
description: Talks, posters and live demos presented by our group.
nav: true
nav_order: 6

display_categories: []
horizontal: false

# Conferences (by `name` in _data/conferences.yml) listed under "National"; all others are "International"
national_conferences: ["KU KDM", "SPA", "TYGIEL", "MMAR", "Automation", "ICCVG", "PP-RAI"]
---

{% assign scopes = "International,National" | split: "," %}
{% assign categories = "presentation,poster,demo"  | split: "," %}

{% assign conf_names = "" | split: "" %}
{% assign conf_national = 0 %}
{% assign conf_demos = 0 %}
{% for conf in site.data.conferences %}
{% assign c = conf[1] %}
{% assign conf_names = conf_names | push: c.name %}
{% if page.national_conferences contains c.name %}{% assign conf_national = conf_national | plus: 1 %}{% endif %}
{% if c.presentation_type == "demo" %}{% assign conf_demos = conf_demos | plus: 1 %}{% endif %}
{% endfor %}
{% assign conf_unique = conf_names | uniq %}
{% assign conf_international = site.data.conferences.size | minus: conf_national %}
{% capture conf_stats -%}
{{ site.data.conferences.size }}|contributions;{{ conf_unique.size }}|conferences;{{ conf_international }}|international;{{ conf_national }}|national;{{ conf_demos }}|live demos
{%- endcapture %}
{% include page_stats.liquid items=conf_stats %}
{% include conference_filters.liquid %}

<!-- pages/projects.md -->
<div class="projects">

{% for scope in scopes %}

<div class="conf-scope">
<h2 class="conf-scope-title page-section-title">{{ scope }} conferences</h2>

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
