---
layout: page
title: Showcase
permalink: /showcase/
---

<div class="gallery">
  {% for file in site.static_files %}
    {% if file.path contains '/assets/gifs/' %}
      {% if file.extname == '.webp' or file.extname == '.gif' or file.extname == '.jpg' or file.extname == '.jpeg' or file.extname == '.png' %}
        <div class="gallery-item">
          <div class="aspect-ratio-box">
            <img src="{{ site.baseurl }}{{ file.path }}" alt="Media content" loading="lazy">
          </div>
        </div>
      {% endif %}
    {% endif %}
  {% endfor %}
</div>
