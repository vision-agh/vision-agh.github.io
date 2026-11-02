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
{% include page_stats.liquid items=paper_stats %}
{% include paper_filters.liquid %}

<div class="publications">

{% bibliography %}

</div>
