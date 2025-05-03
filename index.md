---
title: /home
layout: home
permalink: /
---

# Welcome to xyz-zyx

Hello! I'm Ahmed, a recent Computer Science graduate. I recently completed my dissertation, worked as a Data Scientist at a biomaterials company, and spent a summer last year working as an ML Engineer. I'm now preparing for an MSc and have recently secured a research internship at Google DeepMind. This site is my portfolio and blog, where I share my thoughts on technology, AI, and possible futures.

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

- [ML Projects]({{ site.baseurl }}/projects/)
- [More coming soon!]

[View all projects]({{ site.baseurl }}/projects/)
