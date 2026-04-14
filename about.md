---
layout: page
title: About me
permalink: /about/
---

<style>
  .about-container {
    max-width: 750px;
    margin: 0 auto;
    padding: 40px 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.6;
    color: #2c3e50;
  }

  .profile-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .profile-pic {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #edf2f7;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }

  .name {
    font-size: 2.2rem;
    font-weight: 700;
    margin: 0;
    color: #1a365d;
  }

  .subtitle {
    font-size: 1.1rem;
    color: #718096;
    margin-top: 0.5rem;
  }

  .bio-content {
    font-size: 1.15rem;
    margin-bottom: 2.5rem;
    text-align: center;
  }

  .section-title {
    font-size: 1.5rem;
    color: #2d3748;
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 8px;
    margin-bottom: 1.5rem;
  }

  .interest-item {
    margin-bottom: 1.5rem;
  }

  .interest-item strong {
    color: #2f855a;
    display: block;
    font-size: 1.1rem;
    margin-bottom: 4px;
  }

  .cv-wrapper {
    text-align: center;
    margin-top: 3rem;
  }

  .cv-button {
    display: inline-block;
    background-color: #2f855a;
    color: white !important;
    padding: 12px 30px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: background-color 0.2s;
  }

  .cv-button:hover {
    background-color: #276749;
  }

  /* Utility to prevent standard theme indenting */
  p { text-indent: 0 !important; }
</style>

<div class="about-container">
  
  <header class="profile-header">
    <img src="{{ '/assets/arma.jpg' | relative_url }}" alt="Armando Ahir" class="profile-pic">
    <h1 class="name">Armando Ahir</h1>
    <p class="subtitle">Computer Science Engineering · Italy</p>
  </header>

  <div class="bio-content">
    <p>
      Welcome to my personal corner of the internet. I am a student and maker 
      passionate about how things work—whether it's code, circuits, or the natural world. 
      I use this space to document my projects, share technical notes, and keep track of my hobbies.
    </p>
  </div>

  <h2 class="section-title">Interests</h2>

  <div class="interest-item">
    <strong>🔬 STEM & Prototyping</strong>
    Focusing on electronics, software development, and building functional systems from scratch. I enjoy the intersection of hardware and software.
  </div>

  <div class="interest-item">
    <strong>♟ Chess</strong>
    A retired competitive player who still enjoys the strategic depth of the game. You can find me for a quick blitz match on <a href="https://www.chess.com/member/itsarma" target="_blank" rel="noopener">Chess.com</a>.
  </div>

  <div class="interest-item">
    <strong>🪶 Birding</strong>
    Since 2026, I've been dedicated to observing and documenting bird species across Italy. You can view my progress on my <a href="{{ '/birding-list' | relative_url }}">Birding List</a>.
  </div>

  <div class="cv-wrapper">
    <a href="{{ '/assets/files/cv.pdf' | relative_url }}" class="cv-button">Download Curriculum Vitae</a>
    <p style="font-size: 0.9rem; color: #a0aec0; margin-top: 10px;">Experience, skills, and academic background</p>
  </div>

</div>