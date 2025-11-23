---
layout: default
title: Home
---

<h2>Contact</h2>

<p>If you'd like to get in touch, I'm available via:</p>
<ul>
<li> Email: <a href="mailto:eduardbrhas@outlook.it">eduardbrhas@outlook.it</a></li>
<li> GitHub: <a href="https://github.com/toita86" target="_blank" rel="noopener">github.com/toita86</a></li>
<li> LinkedIn: <a href="https://www.linkedin.com/in/eduard-brahas" target="_blank" rel="noopener">linkedin.com/in/eduard-brahas</a></li>
</ul>

<h2>Latest Posts</h2>
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      - <small>{{ post.date | date: "%B %d, %Y" }}</small>
    </li>
  {% endfor %}
</ul>

