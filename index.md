---
title: /home
layout: home
permalink: /
---

# Welcome to xyz-zyx

Hello! I'm Ahmed, a recent Computer Science graduate. I recently completed my dissertation and now work as a Data Scientist at a biomaterials company. Last summer I served as a Machine Learning Engineer at a telehealth startup. I'm preparing for an MSc and have secured a research internship at Google DeepMind. I love project-based learning and tackling new ideas. This site is my portfolio and blog, where I share thoughts on technology, AI, and possible futures. You can also learn more [about me]({{ site.baseurl }}/about/).

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

[View all projects]({{ site.baseurl }}/projects/)
