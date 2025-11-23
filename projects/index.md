---
layout: default
title: Projects
permalink: /projects/
---

<h1>Projects</h1>

<p>Below are projects I've worked on.</p>

<ul>
{% for p in site.projects %}
  <li>
    <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
    {% if p.excerpt %} — {{ p.excerpt }}{% endif %}
  </li>
{% endfor %}
</ul>
