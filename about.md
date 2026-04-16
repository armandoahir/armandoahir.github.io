---
layout: page
title: About
permalink: /about/
---

<style>
/* Container principale */
.about-container {
  max-width: 900px;
  margin: 2.5rem auto;
  padding: 0 20px;
  font-family: inherit;
}

/* Titolo centrato */
.about-header {
  text-align: center;
  margin-bottom: 3rem;
}

.about-header h1 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #1a1a1a;
}

/* Layout a due colonne */
.about-flex-layout {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

/* Colonna Testo */
.about-text-column {
  flex: 1.5; 
  color: #333;
  line-height: 1.7;
  font-size: 1.05rem;
}

.about-text-column p {
  margin-bottom: 1.5rem;
}

/* Colonna Immagine - Rettangolare come in foto */
.about-image-column {
  flex: 1; 
  max-width: 350px;
}

.profile-pic {
  width: 100%;
  height: auto;
  display: block;
  /* Rimosso padding, background e border-radius per renderla rettangolare pura */
  border-radius: 0; 
  border: none;
  object-fit: cover;
}

/* Liste di interessi */
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

/* Responsività */
@media (max-width: 800px) {
  .about-flex-layout {
    flex-direction: column-reverse;
    align-items: center;
  }
  .about-image-column {
    width: 100%;
    max-width: 300px;
    margin-bottom: 2rem;
  }
}
</style>

<div class="about-container">
  <header class="about-header">
    <h1>About Me</h1>
  </header>

  <div class="about-flex-layout">
    <section class="about-text-column">
      <p>
        Welcome to my personal corner of the internet. I'm a junior IT engineer, passionate about how things work—from complex software to embedded circuits. I use this space as my digital notebook for projects, technical reflections, and observations.
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
    <aside class="about-image-column">
      <img src="{{ '/assets/arma.png' | relative_url }}" alt="Armando Ahir" class="profile-pic">
    </aside>
  </div>
</div>