---
layout: page
permalink: /students/
title: Students
description: Bachelor's and master's theses carried out in our group.
nav: true
nav_order: 5

# "Looking for a thesis topic?" banner
thesis_cta:
  title: Looking for a thesis topic?
  text: >-
    We offer bachelor's and master's topics in embedded vision, drones, autonomous vehicles and event cameras –
    often linked to our research projects, with IDUB funding available.
  topics:
    - UAV & PX4 / ROS 2
    - Embedded perception & control
    - SoC FPGA / embedded GPU
    - Event cameras
    - Neuromorphic computing
    - Embedded AI
---

<!-- _pages/students.md -->

{% assign bsc_theses = site.data.theses | where: "type", "BSc" %}
{% assign msc_theses = site.data.theses | where: "type", "MSc" %}
{% assign ongoing_theses = site.data.theses | where_exp: "t", "t.group != 'Alumni'" | sort: "year" | reverse %}
{% assign alumni_theses = site.data.theses | where: "group", "Alumni" | sort: "year" | reverse %}
{% assign idub_theses = site.data.theses | where: "funding", "IDUB" %}
{% capture thesis_stats -%}
{{ site.data.theses.size }}|theses;{{ bsc_theses.size }}|bachelor's;{{ msc_theses.size }}|master's;{{ ongoing_theses.size }}|ongoing;{{ idub_theses.size }}|supported by IDUB
{%- endcapture %}
{% include page_stats.liquid items=thesis_stats %}

{% assign head_member = site.members | where: "team_head", true | first %}

<div class="thesis-cta">
  <div class="thesis-cta-text">
    <h3>{{ page.thesis_cta.title }}</h3>
    <p>{{ page.thesis_cta.text }}</p>
    <div class="thesis-cta-topics">
      {% for topic in page.thesis_cta.topics %}<span>{{ topic }}</span>{% endfor %}
    </div>
  </div>
  <div class="thesis-cta-buttons">
    <a class="home-btn home-btn-primary" href="mailto:{{ head_member.profile.email }}"><i class="fa-solid fa-envelope"></i> Contact a supervisor</a>
  </div>
</div>

{% include thesis_filters.liquid %}

<div class="publications">
  {% if ongoing_theses.size > 0 %}
    <div class="thesis-section" id="ongoing">
      <h2 class="bibliography has-count">Ongoing theses <span class="section-count">{{ ongoing_theses.size }}</span></h2>
      <ol class="bibliography">
        {% for thesis in ongoing_theses %}{% include thesis.liquid %}{% endfor %}
      </ol>
    </div>
  {% endif %}

{% if alumni_theses.size > 0 %}

<div class="thesis-section" id="alumni">
<h2 class="bibliography has-count">Alumni <span class="section-count">{{ alumni_theses.size }} defended theses · grouped by year</span></h2>
<!-- defended theses grouped by academic year, newest year expanded -->
{% assign years = alumni_theses | group_by: "year" %}
{% for year in years %}
{% assign year_msc = year.items | where: "type", "MSc" %}
{% assign year_bsc = year.items | where: "type", "BSc" %}
<details class="thesis-year"{% if forloop.first %} open{% endif %}>
<summary>
<span class="thesis-year-label">{{ year.name }}</span>
<span class="thesis-year-count">
{{- year.size }} {% if year.size == 1 %}thesis{% else %}theses{% endif %} · {{ year_msc.size }} MSc · {{ year_bsc.size }} BSc
</span>
</summary>
<ol class="bibliography">
{% for thesis in year.items %}{% include thesis.liquid %}{% endfor %}
</ol>
</details>
{% endfor %}
</div>
{% endif %}

</div>
