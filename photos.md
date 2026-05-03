---
layout: page
title: Photos
---

<div class="gallery-grid">
  {% for item in site.data.gallery %}
  <a class="gallery-item" href="{{ item.src | relative_url }}" data-lightbox>
    <img src="{{ item.thumb | relative_url }}" alt="{{ item.caption }}" loading="lazy">
    <span>{{ item.caption }}</span>
  </a>
  {% endfor %}
</div>

<div class="lightbox" data-lightbox-viewer aria-hidden="true">
  <button type="button" data-lightbox-close aria-label="Close image">&times;</button>
  <img src="" alt="">
  <p></p>
</div>
