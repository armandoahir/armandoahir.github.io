---
layout: page
title: About me
permalink: /about/
---

<style>
  /* Reset e variabili */
  .about-page * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .about-page {
    font-family: system-ui, -apple-system, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    color: #1a2a1f;
  }

  /* Card profilo */
  .profile-card {
    background: linear-gradient(135deg, #f8fbf5 0%, #f2f7ed 100%);
    border-radius: 32px;
    padding: 2rem;
    margin-bottom: 2.5rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(100, 80, 40, 0.05);
  }

  .profile-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  @media (min-width: 600px) {
    .profile-inner {
      flex-direction: row;
      align-items: flex-start;
      gap: 2rem;
    }
  }

  /* Immagine */
  .profile-image {
    flex-shrink: 0;
  }

  .profile-image img {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    border: 3px solid white;
    transition: transform 0.2s ease;
  }

  .profile-image img:hover {
    transform: scale(1.02);
  }

  @media (min-width: 600px) {
    .profile-image img {
      width: 180px;
      height: 180px;
    }
  }

  @media (min-width: 900px) {
    .profile-image img {
      width: 200px;
      height: 200px;
    }
  }

  /* Testo profilo */
  .profile-text {
    flex: 1;
    text-align: center;
  }

  @media (min-width: 600px) {
    .profile-text {
      text-align: left;
    }
  }

  .profile-text h2 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #2d4a2a;
    letter-spacing: -0.3px;
  }

  .profile-text .badge {
    display: inline-block;
    background: #e6efdf;
    padding: 0.2rem 0.8rem;
    border-radius: 40px;
    font-size: 0.8rem;
    font-weight: 500;
    color: #3a6b2f;
    margin-bottom: 1rem;
  }

  .profile-text .description {
    font-size: 1rem;
    line-height: 1.5;
    color: #3a4a35;
  }

  /* Sezioni interessi */
  .interests-section {
    margin-bottom: 2rem;
  }

  .interests-section h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2d4a2a;
    margin-bottom: 1.2rem;
    padding-bottom: 0.5rem;
    border-bottom: 3px solid #cde2c0;
    display: inline-block;
  }

  .interests-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 640px) {
    .interests-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.2rem;
    }
  }

  .interest-card {
    background: white;
    border-radius: 20px;
    padding: 1.2rem 1.2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04), 0 0 0 1px #e8ede2;
    transition: all 0.2s ease;
  }

  .interest-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px #cde2c0;
  }

  .interest-icon {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  .interest-card h4 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #2d4a2a;
    margin-bottom: 0.5rem;
  }

  .interest-card p {
    font-size: 0.9rem;
    color: #5a6e52;
    line-height: 1.4;
    margin-bottom: 0.8rem;
  }

  .interest-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.85rem;
    color: #4a8b3a;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
  }

  .interest-link:hover {
    color: #2a5a1e;
    text-decoration: underline;
  }

  /* Sezione CV */
  .cv-section {
    background: white;
    border-radius: 20px;
    padding: 1.5rem;
    margin-top: 1.5rem;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04), 0 0 0 1px #e8ede2;
  }

  .cv-button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, #2d6b2a, #1f5220);
    color: white;
    text-decoration: none;
    padding: 0.8rem 1.8rem;
    border-radius: 60px;
    font-weight: 500;
    font-size: 1rem;
    transition: all 0.2s ease;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  .cv-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
    background: linear-gradient(135deg, #1f5a1c, #184518);
  }

  .cv-section p {
    margin-top: 1rem;
    font-size: 0.85rem;
    color: #7a8f6e;
  }

  /* Utility */
  p {
    text-indent: 0 !important;
  }
</style>

<div class="about-page">
  <div class="profile-card">
    <div class="profile-inner">
      <div class="profile-image">
        <img src="{{ '/assets/images/arma.png' | relative_url }}" alt="Armando Ahir">
      </div>
      <div class="profile-text">
        <h2>Armando Ahir</h2>
        <div class="badge">Computer Science Engineering · Italy</div>
        <div class="description">
          This is my personal space on the internet, where I share notes, projects, photos, and reflections.
        </div>
      </div>
    </div>
  </div>

  <div class="interests-section">
    <h3>✨ Interests</h3>
    <div class="interests-grid">
      <!-- STEM Card -->
      <div class="interest-card">
        <div class="interest-icon">🔬⚡</div>
        <h4>STEM</h4>
        <p>Electronics, software development, and prototyping. Building things that work.</p>
      </div>
      <!-- Chess Card -->
      <div class="interest-card">
        <div class="interest-icon">♟️</div>
        <h4>Chess</h4>
        <p>Retired chess player. Still love the game and occasional blitz matches.</p>
        <a href="https://www.chess.com/member/itsarma" target="_blank" rel="noopener noreferrer" class="interest-link">
          Chess.com profile →
        </a>
      </div>
      <!-- Birding Card -->
      <div class="interest-card">
        <div class="interest-icon">🪶</div>
        <h4>Birding</h4>
        <p>Since 2026. Observing and documenting bird species in Italy.</p>
        <a href="{{ '/birding-list' | relative_url }}" class="interest-link">
          View my birding list →
        </a>
      </div>
    </div>
  </div>

  <div class="cv-section">
    <a href="{{ '/assets/files/cv.pdf' | relative_url }}" class="cv-button">
      View my CV
    </a>
    <p>Skills, work experiences, and education background</p>
  </div>
</div>