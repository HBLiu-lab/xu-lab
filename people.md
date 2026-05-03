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
<table class="people-table pi-table">
  <tr class="person-row">
    <td class="spacer"></td>
    <td class="photo"><img src="{{ site.data.people.pi.photo | relative_url }}" alt="{{ site.data.people.pi.name }}"></td>
    <td class="bio">
      <div class="name">{{ site.data.people.pi.name }}</div>
      <div class="title">{{ site.data.people.pi.title }}</div>
      <div class="affiliation">{{ site.data.people.pi.affiliation }}</div>
      <div class="person-links">
        <a href="mailto:{{ site.data.people.pi.email }}">{{ site.data.people.pi.email }}</a>
        <a href="{{ site.data.people.pi.scholar }}" target="_blank" rel="noopener">Google Scholar</a>
      </div>
      <p>{{ site.data.people.pi.bio }}</p>
      {% if site.data.people.pi.awards %}
      <h3>Selected Awards</h3>
      <ul class="content-list">
        {% for award in site.data.people.pi.awards %}
        <li>{{ award }}</li>
        {% endfor %}
      </ul>
      {% endif %}
      {% if site.data.people.pi.editorial_roles %}
      <h3>Editorial Roles</h3>
      <ul class="content-list">
        {% for role in site.data.people.pi.editorial_roles %}
        <li>{{ role }}</li>
        {% endfor %}
      </ul>
      {% endif %}
    </td>
    <td class="spacer"></td>
  </tr>
</table>

<h2 id="postdocs">Postdoctoral Associates</h2>
{% if site.data.people.postdocs and site.data.people.postdocs.size > 0 %}
<table class="people-table">
  {% for member in site.data.people.postdocs %}
  {% include people_card.html member=member %}
  {% endfor %}
</table>
{% else %}
<p>TODO: Postdoctoral associate profiles will be added after verification.</p>
{% endif %}

<h2 id="phd">PhD Students</h2>
{% if site.data.people.phd_students and site.data.people.phd_students.size > 0 %}
<table class="people-table">
  {% for member in site.data.people.phd_students %}
  {% include people_card.html member=member %}
  {% endfor %}
</table>
{% else %}
<p>TODO: PhD student profiles will be added after verification.</p>
{% endif %}

<h2 id="ra">Research Assistants</h2>
{% if site.data.people.research_assistants and site.data.people.research_assistants.size > 0 %}
<table class="people-table">
  {% for member in site.data.people.research_assistants %}
  {% include people_card.html member=member %}
  {% endfor %}
</table>
{% else %}
<p>TODO: Research assistant profiles will be added after verification.</p>
{% endif %}

<h2 id="pending">Members Pending Role Confirmation</h2>
{% if site.data.people.members_pending_confirmation and site.data.people.members_pending_confirmation.size > 0 %}
<table class="people-table">
  {% for member in site.data.people.members_pending_confirmation %}
  {% include people_card.html member=member %}
  {% endfor %}
</table>
{% else %}
<p>TODO: Additional member information will be added after verification.</p>
{% endif %}

<h2 id="alumni">Former Group Members</h2>
{% if site.data.people.alumni and site.data.people.alumni.size > 0 %}
<ul class="alumni-list">
  {% for alum in site.data.people.alumni %}
  <li><strong>{{ alum.name }}</strong> ({{ alum.period }}) - {{ alum.current_position }}</li>
  {% endfor %}
</ul>
{% else %}
<p>TODO: Former member information will be added after verification.</p>
{% endif %}
