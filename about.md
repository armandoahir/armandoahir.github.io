---
layout: page
title: About me
permalink: /about/
---

<style>
/* Allineamento al tema del blog */
.about-container {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: inherit;
}

/* Sezione profilo */
.profile-section {
  text-align: center;
  margin: 2.5rem 0;
}

.profile-pic {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #e0e0e0;
  margin-bottom: 1.5rem;
  padding: 4px;
  background: #fff;
}

.about-name {
  font-size: 1.8rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.about-subtitle {
  color: #666;
  font-size: 1rem;
  letter-spacing: 0.5px;
  margin-bottom: 2rem;
}

/* Contenuto testuale */
.about-content {
  color: #333;
  line-height: 1.7;
  font-size: 1.05rem;
}

.about-content h2 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.interests-list {
  list-style: none;
  padding: 0;
}

.interests-list li {
  margin-bottom: 1.2rem;
  padding-left: 1rem;
  border-left: 2px solid #e0e0e0;
}

.interests-list strong {
  display: block;
  color: #1a1a1a;
  margin-bottom: 0.2rem;
}

/* Bottone CV (stile identico al Submit del form) */
.cv-container {
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.cv-button {
  display: inline-block;
  padding: 12px 40px;
  font-size: 0.95rem;
  font-weight: 500;
  background: #1a1a1a;
  color: white !important;
  text-decoration: none;
  border-radius: 40px;
  transition: opacity 0.2s;
  letter-spacing: 0.5px;
}

.cv-button:hover {
  opacity: 0.85;
}

@media (max-width: 600px) {
  .about-name { font-size: 1.5rem; }
  .profile-pic { width: 140px; height: 140px; }
}
</style>

<div class="about-container">
  
  <header class="profile-section">
    <img src="{{ '/assets/arma.jpeg' | relative_url }}" alt="Armando Ahir" class="profile-pic">
    <h1 class="about-name">Armando Ahir</h1>
  </header>

  <section class="about-content">
    <p>
      Welcome to my personal corner of the internet. I'm a junior IT engineer, passionate about how things work from complex software to embedded circuits. I use this space as my digital notebook for projects, technical reflections, and observations.
    </p>
    <h2>Interests & work experience</h2>
    <ul class="interests-list">
      <li>
        <strong>STEM</strong>
        I focus on electronics, software development, and building functional systems. 
      </li>
      <li>
        <strong>Chess</strong>
        A retired chess player. Catch me for a blitz match on <a href="https://www.chess.com/member/itsarma" target="_blank">Chess.com</a>.
      </li>
      <li>
        <strong>Birding</strong>
        Since 2026 i've been documenting avifauna. You can follow my sightings in my <a href="{{ '/birding-list' | relative_url }}">Birding List</a>.
      </li>
      <li>
        <strong>Work experience</strong>
        View my <a href="{{ '/assets/files/cv.pdf' | relative_url }}">CV here</a>
        </li>
    </ul>
  </section>
</div>