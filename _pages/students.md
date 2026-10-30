---
layout: page
permalink: /students/
title: Students
description: Bachelor's, master's and doctoral theses completed in our group.
nav: true
nav_order: 5
---

<!-- _pages/students.md -->

{% assign theses_by_year = site.data.theses | group_by: "year" | sort: "name" | reverse %}

<div class="publications">
{% for year_group in theses_by_year %}
  <h2 class="bibliography">{{ year_group.name }}</h2>
  <ol class="bibliography">
  {% for thesis in year_group.items %}
    <li>
      <div class="row">
        {% if thesis.image %}
          <div class="col col-sm-2 abbr preview-col">
            {% assign thesis_img = thesis.image | prepend: '/assets/img/theses/' %}
            {%
              include figure.liquid
              loading="eager"
              path=thesis_img
              sizes="200px"
              class="preview z-depth-1 rounded"
              zoomable=true
              avoid_scaling=true
              alt=thesis.title
            %}
          </div>
        {% endif %}

        <div class="{% if thesis.image %}col-sm-10{% else %}col-sm-12{% endif %}">
          {% if thesis.type %}
            <div class="abbr"><abbr class="badge">{{ thesis.type }}</abbr></div>
          {% endif %}
          <div class="title">{{ thesis.title }}</div>
          <div class="author">{{ thesis.author }}</div>
          {% if thesis.supervisor %}
            <div class="periodical"><em>Supervisor: {{ thesis.supervisor }}</em></div>
          {% endif %}

          <div class="links">
            {% if thesis.abstract %}
              <a class="abstract btn btn-sm z-depth-0" role="button">Abstract</a>
            {% endif %}
            {% if thesis.pdf %}
              <a href="{{ thesis.pdf }}" class="btn btn-sm z-depth-0" role="button">PDF</a>
            {% endif %}
            {% if thesis.code %}
              <a href="{{ thesis.code }}" class="btn btn-sm z-depth-0" role="button">Code</a>
            {% endif %}
          </div>

          {% if thesis.abstract %}
            <div class="abstract hidden">
              <p>{{ thesis.abstract }}</p>
            </div>
          {% endif %}
        </div>
      </div>
    </li>
  {% endfor %}
  </ol>
{% endfor %}
</div>
