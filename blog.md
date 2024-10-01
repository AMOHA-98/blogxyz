---
layout: page
title: /blog
permalink: /blog/
---

# Blog Posts

Stay posted for upcoming articles!

{% for post in site.posts %}
  <article>
    <h2>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span style="float: right; font-size: 0.8em;">{{ post.date | date: "%B %d, %Y %H:%M" }}</span>
    </h2>
  </article>
{% endfor %}