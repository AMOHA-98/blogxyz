---
title: /home
layout: home
permalink: /
---

# Welcome to xyz-zyx

Hello! I'm Ahmed, a 3rd year Computer Science student. I recently completed a summer internship as an AI Engineer and I'm currently working on my dissertation. This site serves as a portfolio of my projects and a blog where I share my thoughts on various topics in technology, AI, and possible futures.

## Recent Posts

{% for post in site.posts limit:3 %}
  <article>
    <h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>
    <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date_to_long_string }}</time>
    <p>{{ post.content | strip_html | truncatewords: 30 }}</p>
  </article>
{% endfor %}

[View all posts]({{ site.baseurl }}/blog/)

## Featured Projects

- [Projects coming soon...]({{ site.baseurl }}/projects/)

[View all projects]({{ site.baseurl }}/projects/)
