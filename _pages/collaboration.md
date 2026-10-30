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
      <div class="col mb-4">
        <div class="card h-100 hoverable">
          <div class="card-body">
            <h3 class="card-title">
              {% if partner.url %}<a href="{{ partner.url }}" target="_blank" rel="noopener">{{ partner.name }}</a>{% else %}{{ partner.name }}{% endif %}
            </h3>
            {% if partner.country %}<p class="card-text text-muted mb-2">{{ partner.country }}</p>{% endif %}
            {% if partner.description %}<p class="card-text">{{ partner.description }}</p>{% endif %}
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
  {% endif %}
{% endfor %}
