---
layout: page
title: cv
permalink: /cv/
---

<div class="cv-page">
  <h1>My currivulum vitae</h1>

  <div class="pdf-container">
    <iframe 
      src="{{ '/assets/cv.pdf' | relative_url }}#view=FitH" 
      width="100%" 
      height="800px"
      style="border: 1px solid #ddd; border-radius: 8px;">
      <p>Il tuo browser non supporta PDF. 
        <a href="{{ '/assets/cv.pdf' | relative_url }}" download>
          Scaricalo qui
        </a>
      </p>
    </iframe>
  </div>
  
  <!-- Link download -->
  <div class="cv-links">
    <a href="{{ '/assets/cv.pdf' | relative_url }}" 
       class="button" 
       download="CV.pdf">
       📥 Scarica PDF
    </a>
    <a href="{{ '/assets/cv.tex' | relative_url }}" 
       class="button secondary">
       📝 Sorgente LaTeX
    </a>
  </div>
</div>

<!-- Stili -->
<style>
.pdf-container {
  margin: 2rem 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.cv-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #007acc;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.button.secondary {
  background: #6c757d;
}
</style>
