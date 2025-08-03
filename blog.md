---
layout: page
title: Blog
permalink: /blog/
---

{% for post in site.posts %}
  <article class="card">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}{% if post.categories %} — {{ post.categories | join: ", " }}{% endif %}</p>
    <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
  </article>
{% endfor %}

