---
layout: page
title: Showcase
permalink: /showcase/
---

<div class="media-gallery">
  {% for file in site.static_files %}
    {% if file.path contains '/assets/images/gifs/' %}
      <div class="media-item">
        <img src="{{ site.baseurl }}{{ file.path }}" alt="My Video Work" loading="lazy">
      </div>
    {% endif %}
  {% endfor %}
</div>

<style>
  .media-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
  }
  .media-item img {
    width: 100%;
    border-radius: 4px; 
    display: block;
    filter: grayscale(20%); 
    transition: filter 0.3s ease;
  }
  .media-item img:hover {
    filter: grayscale(0%);
  }
</style>
