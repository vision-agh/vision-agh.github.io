---
layout: page
title: Collaboration
permalink: /collaboration/
description: Academic and industrial partners we work with.
nav: true
nav_order: 7
---

{% assign categories = "Academic,Industry" | split: "," %}
{% for category in categories %}
{% assign partners = site.data.collaboration | where: "category", category %}
{% if partners.size > 0 %}

  <h2 class="category">{{ category }} partners</h2>
  <div class="row row-cols-1 row-cols-md-2">
    {% for partner in partners %}
      {% include collaboration_card.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endfor %}
