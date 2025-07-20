---
title: /home
layout: home
permalink: /
---

# Welcome to xyz-zyx

Hello! I'm Ahmed, a recent Computer Science graduate experienced in architecting and deploying end-to-end machine-learning systems. My domain focus spans data engineering, computer vision, and Large Language Models. I thrive in project-driven environments and enjoy translating research into production solutions.

Currently, I'm contributing to research at Google DeepMind via the University of Exeter on "Scientific Paper Understanding with Multimodal LLMs and Knowledge Graphs" while previously a data scientist at Kelpi, a biomaterials company. 

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

- [Technical Projects & Case Studies]({{ site.baseurl }}/projects/)
- [Professional Experience]({{ site.baseurl }}/about/#experience)

[View all projects]({{ site.baseurl }}/projects/)
