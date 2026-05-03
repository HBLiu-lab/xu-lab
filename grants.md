---
layout: page
title: Grants
---

<ol class="grant-list">
  {% for grant in site.data.grants %}
  <li>
    <p><strong>{{ grant.title }}</strong></p>
    <p>{{ grant.funder }}. Grant No. {{ grant.number }}. Amount: {{ grant.amount }}. Period: {{ grant.period }}. Status: {{ grant.status }}. Role: {{ grant.role }}.</p>
  </li>
  {% endfor %}
</ol>
