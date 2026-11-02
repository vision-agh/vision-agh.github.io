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

{% assign research_partners = site.data.collaboration | where_exp: "p", "p.category != 'Erasmus+'" %}
{% assign erasmus_partners = site.data.collaboration | where: "category", "Erasmus+" %}
{% assign partner_countries = site.data.collaboration | map: "country" | compact | uniq %}
{% capture collab_stats -%}
{{ research_partners.size }}|research partners;{{ partner_countries.size }}|countries;{{ erasmus_partners.size }}|Erasmus+ universities
{%- endcapture %}
{% include page_stats.liquid items=collab_stats %}
{% include collaboration_filters.liquid %}

{% assign categories = "Academic,Industry,Erasmus+" | split: "," %}
{% for category in categories %}
{% assign partners = site.data.collaboration | where: "category", category %}
{% if partners.size > 0 %}

  <div class="collab-section">
  <h2 class="category page-section-title">{{ category }} partners</h2>
  <div class="row row-cols-1 row-cols-md-{% if category == 'Erasmus+' %}3{% else %}2{% endif %}">
    {% for partner in partners %}
      {% include collaboration_card.liquid %}
    {% endfor %}
  </div>
  </div>
  {% endif %}
{% endfor %}

{% assign head_member = site.members | where: "team_head", true | first %}
{% assign contact_url = head_member.profile.email | prepend: "mailto:" %}
{% include cta_banner.liquid title="Interested in working with us?" text="Joint projects, research visits, co-supervised theses and Erasmus+ exchanges." button="Contact us" url=contact_url %}
