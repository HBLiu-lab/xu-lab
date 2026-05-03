---
layout: page
title: Research
---

<div class="research-grid">
  {% for area in site.data.research %}
  <article class="research-card">
    <img src="{{ area.image | relative_url }}" alt="{{ area.title }}">
    <div class="research-card-body">
      <h2>{{ area.title }}</h2>
      <p>{{ area.description }}</p>
    </div>
  </article>
  {% endfor %}
</div>
