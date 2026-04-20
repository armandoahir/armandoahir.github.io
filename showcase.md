---
layout: page
title: Showcase
permalink: /showcase/
---

<div class="gallery">
  {% for file in site.static_files %}
    {% if file.path contains '/assets/gifs/' %}
      {% if file.extname == '.webp' or file.extname == '.gif' %}
        <div class="gallery-item">
          <img src="{{ site.baseurl }}{{ file.path }}" alt="Video Clip" loading="lazy">
        </div>
      {% endif %}
    {% endif %}
  {% endfor %}
</div>
