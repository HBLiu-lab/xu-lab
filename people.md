---
layout: page
title: People
---

<div class="jump-links">
  <a href="#pi">PI</a>
  <a href="#postdocs">Postdoctoral Associates</a>
  <a href="#phd">PhD Students</a>
  <a href="#ra">Research Assistants</a>
  <a href="#alumni">Former Members</a>
</div>

<h2 id="pi">Principal Investigator</h2>
<table class="people-table">
  <tr class="person-row">
    <td class="spacer"></td>
    <td class="photo"><img src="{{ site.data.people.pi.photo | relative_url }}" alt="{{ site.data.people.pi.name }}"></td>
    <td class="bio">
      <div class="name">{{ site.data.people.pi.name }}</div>
      <div class="title">{{ site.data.people.pi.title }}</div>
      <div class="affiliation">{{ site.data.people.pi.affiliation }}</div>
      <div class="meta"><a href="mailto:{{ site.data.people.pi.email }}">{{ site.data.people.pi.email }}</a></div>
      <div class="meta"><a href="{{ site.data.people.pi.scholar }}" target="_blank" rel="noopener">Google Scholar</a></div>
      <p>{{ site.data.people.pi.bio }}</p>
    </td>
    <td class="spacer"></td>
  </tr>
</table>

<h2 id="postdocs">Postdoctoral Associates</h2>
<table class="people-table">
  {% for member in site.data.people.postdocs %}
  {% include people_card.html member=member %}
  {% endfor %}
</table>

<h2 id="phd">PhD Students</h2>
<table class="people-table">
  {% for member in site.data.people.phd_students %}
  {% include people_card.html member=member %}
  {% endfor %}
</table>

<h2 id="ra">Research Assistants</h2>
<table class="people-table">
  {% for member in site.data.people.research_assistants %}
  {% include people_card.html member=member %}
  {% endfor %}
</table>

<h2 id="alumni">Former Group Members</h2>
<ul class="alumni-list">
  {% for alum in site.data.people.alumni %}
  <li><strong>{{ alum.name }}</strong> ({{ alum.period }}) - {{ alum.current_position }}</li>
  {% endfor %}
</ul>
