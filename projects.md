---
layout: page
permalink: /projects/
---

<div class="projects-grid">
  {% for project in site.data.projects %}
    <div class="project-card">
      <h2 class="project-title">
        {% if project.link %}
          <a href="{{ project.link }}" target="_blank" rel="noopener noreferrer">{{ project.title }}</a>
        {% else %}
          {{ project.title }}
        {% endif %}
      </h2>
      
      <div class="project-content">
        <p class="project-description">{{ project.description }}</p>

        {% if project.image %}
          <img src="{{ project.image | relative_url }}" alt="{{ project.title }} screenshot" class="project-image">
        {% endif %}
        
        {% if project.link %}
          <a href="{{ project.link }}" class="project-link-button" target="_blank" rel="noopener noreferrer">
            {{ project.link_text | default: "View Project" }} <span class="arrow">→</span>
          </a>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>
