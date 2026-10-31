---
layout: page
title: Collaboration
permalink: /collaboration/
description: Academic and industrial partners we work with.
nav: true
nav_order: 7
---

<blockquote class="collab-quote">
  <p>Coming together is a beginning, keeping together is progress, working together is success.</p>
</blockquote>

{% include collaboration_filters.liquid %}

{% assign categories = "Academic,Industry,Erasmus+" | split: "," %}
{% for category in categories %}
{% assign partners = site.data.collaboration | where: "category", category %}
{% if partners.size > 0 %}

  <div class="collab-section">
  <h2 class="category">{{ category }} partners</h2>
  <div class="row row-cols-1 row-cols-md-{% if category == 'Erasmus+' %}3{% else %}2{% endif %}">
    {% for partner in partners %}
      {% include collaboration_card.liquid %}
    {% endfor %}
  </div>
  </div>
  {% endif %}
{% endfor %}
