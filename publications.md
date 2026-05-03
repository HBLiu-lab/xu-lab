---
layout: page
title: Publications
---

{% assign sorted = site.data.publications | sort: "year" | reverse %}
{% assign years = sorted | map: "year" | uniq %}
{% for year in years %}
<section class="pub-year-group">
  <h2>{{ year }}</h2>
  <ol class="pub-list">
    {% for pub in sorted %}
      {% if pub.year == year %}
      {% include pub_entry.html pub=pub %}
      {% endif %}
    {% endfor %}
  </ol>
</section>
{% endfor %}
