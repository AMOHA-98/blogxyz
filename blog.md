---
layout: page
title: ""
permalink: /blog/
---

{% for post in site.posts %}
  <article class="card">
    <a class="card-link" href="{{ post.url | relative_url }}">
      <h3>{{ post.title }}</h3>
      <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}{% if post.categories %} — {{ post.categories | join: ", " }}{% endif %}</p>
      <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    </a>
  </article>
{% endfor %}

