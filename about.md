---
layout: page
title:
permalink: /about/
---

<style>
.about-container {
  max-width: 900px;
  margin: 2.5rem auto;
  padding: 0 20px;
  font-family: inherit;
  color: #333;
}

.about-header {
  text-align: center;
  margin-bottom: 3rem;
}

.about-header h1 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #1a1a1a;
}

/* --- IL TRUCCO "TERRA TERRA" --- */
.profile-pic {
  float: right;          
  width: 35%;            
  max-width: 350px;
  height: auto;
  margin-left: 30px;     
  margin-bottom: 15px;   
  display: block;
}

/* Pulizia dei float per gli elementi successivi (come il titolo degli interessi) */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

.about-content p {
  line-height: 1.7;
  font-size: 1.05rem;
  margin-bottom: 1.5rem;
  text-align: justify; /* Opzionale: per renderlo ancora più simile alla foto */
}

h2 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 2rem;
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
}

/* Responsività per cellulari */
@media (max-width: 600px) {
  .profile-pic {
    float: none;
    width: 100%;
    margin: 0 0 2rem 0;
  }
}
</style>

<div class="about-container clearfix">
  <header class="about-header">
    <h1>About Me</h1>
  </header>

  <img src="{{ '/assets/arma.png' | relative_url }}" alt="Armando Ahir" class="profile-pic">

  <div class="about-content">
    <p>
      I'm Armando, born in the year 2000 in Italy. I grew up in a house where i never 
      really called the shots, and to be honest; i still survive there today between 
      studying, books, films, and a fair amount of generational compromise. Studying software engineering, soon i will get into cybersecurity.
    </p>
    <p>
      For years, I didn't ask questions. Then came Covid. During covid i watched myself get dragged along by social media not 
      because i wanted to, but because i had no distance left. That was the turning point. I started looking into <u>digital minimalism</u>, not as an aesthetic, but as survival.
    </p>
    <p>
      So if you ever hear me say something that rubs you the wrong way, don't worry. 
      I'm probably just arguing with my past self. And I intend to win.
    </p>
  </div>

  <h2>Interests & work experience</h2>     
  <ul class="interests-list">
    <li>
      <strong>STEM</strong>: focus on electronics, software development, and building functional systems. 
    </li>
    <li>
      <strong>Chess</strong>: ex chess player. Catch me for a blitz match on <a href="https://www.chess.com/member/itsarma" target="_blank">Chess.com</a>.
    </li>
    <li>
      <strong>Birding</strong>: since 2026 I've been documenting avifauna. You can follow my sightings in my <a href="{{ '/birding-list' | relative_url }}">Birding List</a>.
    </li>
    <li>
      <strong>Work experience</strong>: view my <a href="{{ '/assets/files/cv.pdf' | relative_url }}">CV here</a>.
    </li>
  </ul>
</div>