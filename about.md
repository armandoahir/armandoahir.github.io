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

/* Layout a due colonne SOLO per la parte affiancata all'immagine */
.about-flex-layout {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  margin-bottom: 2rem;
}

/* Colonna Testo (sinistra) */
.about-text-column {
  flex: 1.5; 
  color: #333;
  line-height: 1.7;
  font-size: 1.05rem;
}

.about-text-column p {
  margin-bottom: 1.5rem;
}

/* Colonna Immagine (destra) */
.about-image-column {
  flex: 1; 
  max-width: 350px;
}

.profile-pic {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 0; 
  border: none;
  object-fit: cover;
}

/* Testo a larghezza piena (dopo l'immagine) */
.full-width-text {
  color: #333;
  line-height: 1.7;
  font-size: 1.05rem;
  margin-top: 1rem;
}

.full-width-text p {
  margin-bottom: 1.5rem;
}

/* Liste di interessi */
.interests-list {
  list-style: none;
  padding: 0;
  margin-top: 2rem;
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

  <!-- PRIMA PARTE: TESTO AFFIANCATO ALL'IMMAGINE (due colonne) -->
  <div class="about-flex-layout">
    <section class="about-text-column">
      <p>
        I'm Armando, born in the year 2000 in Italy. I grew up in a house where I never 
        really called the shots, and to be honest, I still survive there today—between 
        studying, books, films, and a fair amount of generational compromise. 
        I trained to become a software engineer, and that's what I am. I live by code, 
        but not <em>for</em> code. That tension—being inside the machine while 
        distrusting it—is the first real crack in my relationship with technology.
      </p>
      <p>
        For years, I didn't ask questions. Then came Covid. And after Covid came the 
        years when my mood and my days were dictated by other people's lives—filtered, 
        curated, accelerated. I watched myself get dragged along by social media not 
        because I wanted to, but because I had no distance left. That was the turning 
        point.
      </p>
    </section>
    <aside class="about-image-column">
      <img src="{{ '/assets/arma.png' | relative_url }}" alt="Armando Ahir" class="profile-pic">
    </aside>
  </div>

  <div class="full-width-text">
    <p>
      I started looking into <strong>digital minimalism</strong>, not as an aesthetic, 
      but as survival.
    </p>
    <p>
      Here's what matters now: I'm done being emotionally attached to habits, ideas, 
      or dispositions that cause me harm. I don't have a grand philosophy yet. 
      I have a terminal, a pair of binoculars, and a quiet conviction that the most 
      important thing is to learn how to correct errors—especially your own.
    </p>
    <p>
      So if you ever hear me say something that rubs you the wrong way, don't worry. 
      I'm probably just arguing with my past self. And I intend to win.
    </p>
  </div>

  <h2>Interests & work experience</h2>     
  <ul class="interests-list">
    <li>
      <strong>STEM</strong> : focus on electronics, software development, and building functional systems. 
    </li>
    <li>
      <strong>Chess</strong>: ex chess player. Catch me for a blitz match on <a href="https://www.chess.com/member/itsarma" target="_blank">Chess.com</a>.
    </li>
    <li>
      <strong>Birding</strong>: since 2026 I've been documenting avifauna. You can follow my sightings in my <a href="{{ '/birding-list' | relative_url }}">birding List</a>.
    </li>
    <li>
      <strong>work experience</strong>View my <a href="{{ '/assets/files/cv.pdf' | relative_url }}">CV here</a>
    </li>
  </ul>
</div>