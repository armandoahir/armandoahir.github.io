---
layout: page
title: About
permalink: /about/
---

<style>
/* Allineamento al tema del blog */
.page-content, .wrapper {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Sezione about centrata */
.about-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto 2rem auto;
  text-align: center;
}

.about-img { 
  display: block;
  margin-bottom: 1rem;
  width: 160px;
  height: auto;
  border-radius: 0px;  /* Rettangolo squadrato */
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.caption {
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
  max-width: 500px;
  margin: 0 auto;
}

.caption strong {
  font-size: 1.1rem;
  color: #000;
}

/* Testi generali uniformati */
.about-content {
  max-width: 620px;
  margin: 0 auto;
}

.about-content p {
  font-size: 1rem;
  line-height: 1.65;
  color: #333;
  margin-bottom: 1.2rem;
  text-indent: 0 !important;
}

.about-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.8rem;
  margin-bottom: 0.75rem;
  color: #111;
  letter-spacing: -0.2px;
}

.about-content ul {
  padding-left: 1.5rem;
  margin: 0.75rem 0 1.2rem 0;
  list-style-type: disc;
}

.about-content li {
  font-size: 1rem;
  line-height: 1.65;
  margin-bottom: 0.5rem;
  color: #333;
}

.about-content a {
  color: #1a1a1a;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
}

.about-content a:hover {
  color: #555;
  text-decoration-thickness: 2px;
}

/* Linea separatrice */
.separator {
  margin: 1.5rem 0;
  border: 0;
  height: 1px;
  background: #eee;
}

/* Mobile */
@media (max-width: 600px) {
  .about-img {
    width: 130px;
  }
  
  .caption {
    font-size: 0.9rem;
    padding: 0 10px;
  }
  
  .about-content p,
  .about-content li {
    font-size: 0.95rem;
  }
  
  .about-content h3 {
    font-size: 1.15rem;
  }
}
</style>

<div class="about-section">
  <img src="{{ '/assets/images/arma.png' | relative_url }}" alt="Armando Ahir" class="about-img">
  <div class="caption">
    <strong>Armando Ahir</strong>, student in computer science engineering, based in Italy.<br>
    This is my personal space on the internet, where I share notes, projects, photos, and reflections.
  </div>
</div>

<div class="about-content">
  <h3>Interests</h3>
  <ul>
    <li><strong>STEM</strong> — Electronics, software development, and prototyping.</li>
    <li><strong>Chess</strong> — Retired chess player. <a href="https://www.chess.com/member/itsarma" target="_blank" rel="noopener noreferrer">Visit my Chess.com profile →</a></li>
    <li><strong>Birding</strong> — Since 2026. <a href="{{ '/birding-list' | relative_url }}">View my birding list →</a></li>
  </ul>

  <hr class="separator">

  <p><strong>Work</strong><br>
  For my skills and work experiences <a href="{{ '/assets/files/cv.pdf' | relative_url }}">view my CV →</a></p>
</div>