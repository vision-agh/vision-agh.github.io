---
layout: page
permalink: /publications/
title: Papers
description: Journal and conference publications of the group, newest first.
nav: true
nav_order: 4
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

{% capture paper_stats -%}
{% bibliography_count %}|publications;{% bibliography_count --query @article %}|journal articles;{% bibliography_count --query @inproceedings %}|conference papers
{%- endcapture %}

<!-- numbers (left) and publications per year (right) -->

{% assign this_year = site.time | date: "%Y" | plus: 0 %}
{% assign chart_years = "" | split: "" %}
{% assign chart_counts = "" | split: "" %}
{% assign chart_max = 1 %}
{% for offset in (0..30) %}
{% assign y = this_year | minus: offset %}
{% capture c %}{% bibliography_count --query @*[year={{ y }}] %}{% endcapture %}
{% assign c = c | strip | plus: 0 %}
{% assign chart_years = chart_years | push: y %}
{% assign chart_counts = chart_counts | push: c %}
{% if c > chart_max %}{% assign chart_max = c %}{% endif %}
{% endfor %}
{% comment %} drop the empty years before the first publication {% endcomment %}
{% assign first_index = 0 %}
{% for c in chart_counts %}{% if c > 0 %}{% assign first_index = forloop.index0 %}{% endif %}{% endfor %}

<div class="papers-overview">
  {% include page_stats.liquid items=paper_stats %}
  <div class="papers-chart" role="img" aria-label="Number of publications per year">
    <div class="papers-chart-title">Publications per year</div>
    <div class="papers-chart-bars">
      {% for i in (0..first_index) reversed %}
        {% assign y = chart_years[i] %}
        {% assign c = chart_counts[i] %}
        {% assign h = c | times: 100 | divided_by: chart_max %}
        <div class="papers-chart-bar{% if c == chart_max %} papers-chart-bar-max{% endif %}" title="{{ y }}: {{ c }} publications">
          <span class="papers-chart-value">{{ c }}</span>
          <span class="papers-chart-fill" style="height: {{ h }}%"></span>
          <span class="papers-chart-year">{{ y | modulo: 100 | prepend: '0' | slice: -2, 2 }}</span>
        </div>
      {% endfor %}
    </div>
  </div>
</div>
{% include paper_filters.liquid %}

<div class="publications">

{% bibliography %}

</div>
