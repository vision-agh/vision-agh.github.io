---
layout: page
permalink: /students/
title: Students
description: Bachelor's and master's theses carried out in our group.
nav: true
nav_order: 5
---

<!-- _pages/students.md -->

{% assign bsc_theses = site.data.theses | where: "type", "BSc" %}
{% assign msc_theses = site.data.theses | where: "type", "MSc" %}
{% assign ongoing_theses = site.data.theses | where_exp: "t", "t.group != 'Alumni' and t.defense_date == nil" %}
{% assign idub_theses = site.data.theses | where: "funding", "IDUB" %}
{% capture thesis_stats -%}
{{ site.data.theses.size }}|theses;{{ bsc_theses.size }}|bachelor's;{{ msc_theses.size }}|master's;{{ ongoing_theses.size }}|ongoing;{{ idub_theses.size }}|supported by IDUB
{%- endcapture %}
{% include page_stats.liquid items=thesis_stats %}
{% include avader_card.liquid %}

{% include thesis_filters.liquid %}

{% assign sections = "MSc,Bachelor,Alumni" | split: "," %}

<div class="publications">
{% for section in sections %}
  {% assign theses = site.data.theses | where: "group", section | sort: "year" | reverse %}
  {% if theses.size > 0 %}
    <div class="thesis-section">
      <h2 class="bibliography">
        {%- case section -%}
          {%- when "MSc" -%}Ongoing master's theses
          {%- when "Bachelor" -%}Ongoing bachelor's theses
          {%- else -%}Defended theses
        {%- endcase -%}
      </h2>
      {% if section == "Alumni" %}
        <!-- defended theses grouped by academic year, newest year expanded -->
        {% assign years = theses | group_by: "year" %}
        {% for year in years %}
          {% assign year_msc = year.items | where: "type", "MSc" %}
          {% assign year_bsc = year.items | where: "type", "BSc" %}
          <details class="thesis-year"{% if forloop.first %} open{% endif %}>
            <summary>
              <span class="thesis-year-label">{{ year.name }}</span>
              <span class="thesis-year-count" data-total="{{ year.size }}">
                {{- year.size }} {% if year.size == 1 %}thesis{% else %}theses{% endif %} · {{ year_msc.size }} MSc · {{ year_bsc.size }} BSc
              </span>
            </summary>
            <ol class="bibliography">
              {% for thesis in year.items %}{% include thesis.liquid %}{% endfor %}
            </ol>
          </details>
        {% endfor %}
      {% else %}
        <ol class="bibliography">
          {% for thesis in theses %}{% include thesis.liquid %}{% endfor %}
        </ol>
      {% endif %}
    </div>
  {% endif %}
{% endfor %}
</div>
