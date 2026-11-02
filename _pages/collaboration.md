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

<div class="collab-section">
  <h2 class="page-section-title has-count">Research partners <span class="section-count">{{ research_partners.size }}</span></h2>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
    {% for partner in research_partners %}
      {% include collaboration_card.liquid %}
    {% endfor %}
  </div>
</div>

{% if erasmus_partners.size > 0 %}

<div class="collab-section">
  <h2 class="page-section-title has-count">Erasmus+ partner universities <span class="section-note">student and staff mobility</span></h2>
  <div class="erasmus-logos">
    {% for partner in erasmus_partners %}
      <a
        class="collab-item erasmus-logo"
        href="{{ partner.url }}"
        target="_blank"
        rel="noopener"
        title="{{ partner.name }}{% if partner.country %}, {{ partner.country }}{% endif %}"
        data-type="{{ partner.category }}"
        data-country="{{ partner.country }}"
        data-keywords="{{ partner.keywords | join: '|' }}"
      >
        {% if partner.logo %}
          <img src="{{ partner.logo | prepend: '/assets/img/collaboration/' | relative_url }}" alt="{{ partner.name }}" loading="lazy">
        {% else %}
          {{ partner.name }}
        {% endif %}
      </a>
    {% endfor %}
  </div>
</div>
{% endif %}

{% assign head_member = site.members | where: "team_head", true | first %}
{% assign contact_url = head_member.profile.email | prepend: "mailto:" %}
{% include cta_banner.liquid title="Interested in working with us?" text="Joint projects, research visits, co-supervised theses and Erasmus+ exchanges." button="Contact us" url=contact_url %}
