---
layout: page
title: Birding life list
permalink: /birding-list/
---

<style>
  .birding-wrap * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .birding-wrap {
    font-family: inherit;
    padding: 2rem 0;
    color: #333;
    max-width: 720px; /* Allineato al tuo blog */
    margin: 0 auto;
  }

  /* Rimosso box shadow e bordi arrotondati eccessivi */
  .birding-container {
    width: 100%;
    background: transparent;
  }

  .birding-wrap .header-flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 1rem;
  }

  /* Titolo in Navy Blue */
  .birding-wrap .title-area h1 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #1a365d; 
    margin: 0;
  }

  /* Contatore in Navy Blue senza card di sfondo */
  .birding-wrap .bird-count-card {
    font-size: 1rem;
    font-weight: 500;
    color: #1a365d;
  }

  .birding-wrap .bird-count-card span {
    font-weight: 700;
    font-size: 1.3rem;
  }

  .birding-wrap .two-col-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 2rem;
    margin-top: 1rem;
  }

  .birding-wrap .species-list-compact {
    list-style: none;
  }

  .birding-wrap .species-list-compact li {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid #f0f0f0;
  }

  .birding-wrap .species-thumb {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 6px;
    border: 1px solid #eee;
    flex-shrink: 0;
  }

  .birding-wrap .bird-info {
    flex: 1;
    min-width: 0;
  }

  .birding-wrap .bird-name {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .birding-wrap .common-name {
    font-weight: 500;
    font-size: 0.95rem;
    color: #1a1a1a;
  }

  .birding-wrap .latin-name {
    font-style: italic;
    color: #777;
    font-size: 0.8rem;
  }

  /* Date in Navy Blue */
  .birding-wrap .date-obs {
    font-size: 0.7rem;
    font-family: monospace;
    color: #1a365d;
    font-weight: 600;
    opacity: 0.8;
  }

  .birding-wrap .footer-note {
    margin-top: 2rem;
    padding-top: 1rem;
    font-size: 0.8rem;
    color: #1a365d; /* Navy Blue */
  }

  .birding-wrap .last-updated {
    font-weight: 500;
  }

  .birding-wrap a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
  }

  @media (max-width: 600px) {
    .birding-wrap .two-col-grid {
      grid-template-columns: 1fr;
    }
    .birding-wrap .header-flex {
        flex-direction: column;
        align-items: flex-start;
    }
  }
</style>

<div class="birding-wrap">
  <div class="birding-container">
    <div class="header-flex">
      <div class="title-area">
        <h1>Birding life list</h1>
      </div>
      <div class="bird-count-card">
        <span id="species-count">0</span> species recorded
      </div>
    </div>

    <p style="margin-bottom: 1.5rem; font-size: 0.85rem; color: #666; border-left: 2px solid #eee; padding-left: 12px; font-style: italic;">
      My personal bird journal — photos from Cornell Lab Macaulay Library
    </p>

    <div class="two-col-grid" id="bird-grid">
      <ul class="species-list-compact" id="col-left"></ul>
      <ul class="species-list-compact" id="col-right"></ul>
    </div>

    <div class="footer-note">
      <span class="last-updated" id="dynamic-date">last updated: --</span>
    </div>
  </div>
</div>

<script type="module">
  import { birdEntries } from '{{"/assets/js/birds.js" | relative_url}}';
  
  function createBirdItem(bird) {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = bird.img;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const img = document.createElement('img');
    img.src = bird.img;
    img.className = "species-thumb";
    img.loading = "lazy";
    link.appendChild(img);

    const infoDiv = document.createElement('div');
    infoDiv.className = "bird-info";

    const nameSpan = document.createElement('div');
    nameSpan.className = "bird-name";
    const commonSpan = document.createElement('span');
    commonSpan.className = "common-name";
    commonSpan.textContent = bird.common;
    const latinSpan = document.createElement('span');
    latinSpan.className = "latin-name";
    latinSpan.textContent = bird.latin;
    
    nameSpan.appendChild(commonSpan);
    nameSpan.appendChild(latinSpan);
    infoDiv.appendChild(nameSpan);
    link.appendChild(infoDiv);

    const dateSpan = document.createElement('span');
    dateSpan.className = "date-obs";
    dateSpan.textContent = bird.date;

    li.appendChild(link);
    li.appendChild(dateSpan);
    return li;
  }

  function renderTwoColumns() {
    const mid = Math.ceil(birdEntries.length / 2);
    const leftCol = birdEntries.slice(0, mid);
    const rightCol = birdEntries.slice(mid);
    const leftContainer = document.getElementById('col-left');
    const rightContainer = document.getElementById('col-right');
    
    leftCol.forEach(bird => leftContainer.appendChild(createBirdItem(bird)));
    rightCol.forEach(bird => rightContainer.appendChild(createBirdItem(bird)));
    document.getElementById('species-count').innerText = birdEntries.length;
  }

  function setDynamicDate() {
    const now = new Date();
    const formatted = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('dynamic-date').innerHTML = `last updated: ${formatted}`;
  }

  renderTwoColumns();
  setDynamicDate();
</script>