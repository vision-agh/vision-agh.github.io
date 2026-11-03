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
national_conferences: ["KU KDM", "SPA", "TYGIEL", "MMAR", "Automation", "ICCVG", "PP-RAI", "KKA", "PiAS"]
---

{% assign scopes = "International,National" | split: "," %}

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

{% if site.data.conference_organisation.size > 0 %}

<div class="conf-organisation">
<h2 class="conf-scope-title page-section-title has-count">Conference organisation <span class="section-count">{{ site.data.conference_organisation.size }}</span></h2>
<div class="conf-org-section">
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
    {% for org in site.data.conference_organisation %}
    {% assign org_logo = org.img %}
    {% unless org_logo %}{% assign org_logo_file = site.data.conference_logos[org.name] %}{% if org_logo_file %}{% assign org_logo = org_logo_file | prepend: 'assets/img/conferences/' %}{% endif %}{% endunless %}
    <div class="col mb-4">
      <div class="card h-100 conf-card">
        {% if org_logo %}
        <div class="conf-logo"><img src="{{ org_logo | relative_url }}" alt="{{ org.name }} logo" loading="lazy"></div>
        {% else %}
        <div class="conf-logo conf-logo-placeholder"><span>{{ org.name }}</span></div>
        {% endif %}
        <div class="card-body">
          <div class="conf-card-head">
            <h2 class="card-title">{% if org.url %}<a href="{{ org.url }}" target="_blank" rel="noopener">{{ org.name }}</a>{% else %}{{ org.name }}{% endif %}</h2>
            <span class="conf-type">organisation</span>
          </div>
          {% if org.years %}<div class="conf-date"><i class="fa-regular fa-calendar"></i> {{ org.years }}</div>{% endif %}
          <p class="conf-topic">{{ org.full_name }}</p>
          {% if org.role %}<p class="conf-authors">{{ org.role }}</p>{% endif %}
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
</div>

{% endif %}
{% include conference_filters.liquid %}

<div class="projects">
{% assign sorted_projects = site.data.conferences | where_exp: "c", "c.name" | sort: "start_date" | reverse %}
{% for scope in scopes %}
{% if scope == "National" %}{% assign scope_count = conf_national %}{% else %}{% assign scope_count = conf_international %}{% endif %}

<div class="conf-scope">
<h2 class="conf-scope-title page-section-title has-count">{{ scope }} conferences <span class="section-count">{{ scope_count }}</span></h2>
<div class="conf-section">
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
    {% for project in sorted_projects %}{% if page.national_conferences contains project.name %}{% assign project_scope = "National" %}{% else %}{% assign project_scope = "International" %}{% endif %}{% if project_scope == scope %}{% include conferences.liquid %}{% endif %}{% endfor %}
  </div>
</div>
</div>

{% endfor %}

</div>
