---
layout: page
title: Blog
permalink: /blog/
---

<div class="posts">
{% for post in site.posts %}
  <article class="card">
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}{% if post.categories %} — {{ post.categories | join: ", " }}{% endif %}</p>
    <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    <a href="{{ post.url | relative_url }}" class="read-more">Read more</a>
  </article>
{% endfor %}
</div>

