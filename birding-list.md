---
layout: page
title: Birding list
permalink: /birding-list/
---

<style>
  /* Reset & base – clean, airy, nature-inspired */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #fafaf7;
    font-family: system-ui, -apple-system, 'Segoe UI', 'Roboto', 'Noto Sans', sans-serif;
    line-height: 1.4;
  }

  .birding-wrap {
    font-family: inherit;
    padding: 2rem 1.5rem;
    color: #1e2f3e;
    max-width: 820px;
    margin: 0 auto;
  }

  .birding-container {
    width: 100%;
    background: transparent;
  }

  /* header: left + right alignment, but with last-updated moved left */
  .birding-wrap .header-flex {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.8rem 1.2rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #e2e6e9;
    padding-bottom: 1rem;
  }

  /* left group: contains last-updated + optional title (title hidden but we keep structure) */
  .header-left-group {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 1rem;
    column-gap: 1.8rem;
  }

  .birding-wrap .last-updated {
    font-size: 0.85rem;
    font-weight: 450;
    color: #2c4c6e;
    background: #eef3fa;
    padding: 0.25rem 0.8rem;
    border-radius: 24px;
    letter-spacing: 0.2px;
    display: inline-block;
    white-space: nowrap;
  }

  /* optional title area (kept but empty to preserve future edits) */
  .birding-wrap .title-area h1 {
    font-size: 1.8rem;
    font-weight: 600;
    background: linear-gradient(135deg, #102a43, #1a365d);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  /* bird count card stays on the right side */
  .birding-wrap .bird-count-card {
    font-size: 0.95rem;
    font-weight: 500;
    color: #1a365d;
    background: #ffffffdd;
    backdrop-filter: blur(2px);
    padding: 0.2rem 0.9rem;
    border-radius: 40px;
    border: 1px solid #dce5ec;
    box-shadow: 0 1px 2px rgba(0,0,0,0.02);
  }

  .birding-wrap .bird-count-card span {
    font-weight: 700;
    font-size: 1.3rem;
    color: #0c4e6e;
  }

  /* two column grid for bird species */
  .birding-wrap .two-col-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 2rem;
    margin-top: 1.2rem;
  }

  .birding-wrap .species-list-compact {
    list-style: none;
  }

  .birding-wrap .species-list-compact li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid #edf2f5;
    transition: background 0.1s ease;
  }

  .birding-wrap .species-list-compact li:hover {
    background: #fefcf5;
    border-radius: 12px;
    padding-left: 6px;
    padding-right: 6px;
    margin-left: -6px;
    margin-right: -6px;
  }

  /* Miniature foto */
  .birding-wrap .species-thumb {
    width: 52px;
    height: 52px;
    object-fit: cover;
    border-radius: 10px;
    border: 1px solid #e2e9ef;
    flex-shrink: 0;
    background: #fff;
    transition: transform 0.2s ease, box-shadow 0.2s;
  }

  .birding-wrap a:hover .species-thumb {
    transform: scale(1.02);
    box-shadow: 0 6px 12px rgba(0,0,0,0.05);
    border-color: #bdd3e6;
  }

  .birding-wrap .bird-info {
    flex: 1;
    min-width: 0;
  }

  .birding-wrap .bird-name {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .birding-wrap .common-name {
    font-weight: 540;
    font-size: 0.96rem;
    color: #1f3b4c;
    letter-spacing: -0.2px;
  }

  .birding-wrap .latin-name {
    font-style: italic;
    color: #6f8ea0;
    font-size: 0.75rem;
  }

  .birding-wrap .date-obs {
    font-size: 0.7rem;
    font-family: 'SF Mono', 'Fira Code', monospace;
    color: #2a6f8f;
    font-weight: 500;
    background: #eef4fa;
    padding: 0.2rem 0.6rem;
    border-radius: 20px;
    white-space: nowrap;
    letter-spacing: -0.1px;
  }

  .birding-wrap .footer-note {
    margin-top: 2.4rem;
    padding-top: 1rem;
    font-size: 0.75rem;
    color: #4f6f8a;
    border-top: 1px solid #e2e9ef;
    text-align: center;
  }

  .birding-wrap a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
    color: inherit;
  }

  /* responsive: on narrow screens single column & date stays left, count right */
  @media (max-width: 600px) {
    .birding-wrap .two-col-grid {
      grid-template-columns: 1fr;
      gap: 0;
    }
    .birding-wrap .header-flex {
      flex-direction: row;
      flex-wrap: wrap;
    }
    .header-left-group {
      flex: 2;
      min-width: 140px;
    }
    .birding-wrap .last-updated {
      white-space: normal;
      font-size: 0.75rem;
    }
    .birding-wrap .date-obs {
      font-size: 0.65rem;
      white-space: nowrap;
    }
  }

  @media (max-width: 480px) {
    .birding-wrap {
      padding: 1.2rem;
    }
    .birding-wrap .species-thumb {
      width: 44px;
      height: 44px;
    }
    .birding-wrap .common-name {
      font-size: 0.85rem;
    }
  }
</style>

<div class="birding-wrap">
  <div class="birding-container">
    <!-- header-flex: last-update now on left side before species count -->
    <div class="header-flex">
      <!-- LEFT group: contains last updated (moved to left) -->
      <div class="header-left-group">
        <span class="last-updated" id="dynamic-date">last updated: --</span>
      </div>
      <!-- RIGHT group: species count stays on the right -->
      <div class="bird-count-card">
        <span id="species-count">0</span> species recorded
      </div>
    </div>

    <!-- bird grid: two columns -->
    <div class="two-col-grid" id="bird-grid">
      <ul class="species-list-compact" id="col-left"></ul>
      <ul class="species-list-compact" id="col-right"></ul>
    </div>

    <div class="footer-note">
      <span class="source">📸 All photos are from Cornell Lab Macaulay Library</span>
    </div>
  </div>
</div>

<script type="module">
  import { birdEntries } from '{{"/assets/js/birds.js" | relative_url}}';
  
  // Helper: create a bird list item
  function createBirdItem(bird) {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = bird.img;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    // image thumbnail
    const img = document.createElement('img');
    img.src = bird.img;
    img.className = "species-thumb";
    img.loading = "lazy";
    img.onerror = function() {
      if (!this.src.includes('placehold')) {
        this.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Silhouette_bird.svg/512px-Silhouette_bird.svg.png';
      }
    };
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

    // date span (observation date)
    const dateSpan = document.createElement('span');
    dateSpan.className = "date-obs";
    let displayDate = bird.date;
    if (bird.date && bird.date.match(/^\d{4}-\d{2}-\d{2}$/)) {
      const parts = bird.date.split('-');
      const d = new Date(Date.UTC(parts[0], parts[1]-1, parts[2]));
      if (!isNaN(d.getTime())) {
        displayDate = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      }
    }
    dateSpan.textContent = displayDate;
    
    li.appendChild(link);
    li.appendChild(dateSpan);
    return li;
  }

  // two-column split render (dynamic balancing)
  function renderTwoColumns() {
    const leftContainer = document.getElementById('col-left');
    const rightContainer = document.getElementById('col-right');
    if (!leftContainer || !rightContainer) return;
    
    // Clear existing content before re-render
    leftContainer.innerHTML = '';
    rightContainer.innerHTML = '';
    
    const mid = Math.ceil(birdEntries.length / 2);
    const leftCol = birdEntries.slice(0, mid);
    const rightCol = birdEntries.slice(mid);
    
    leftCol.forEach(bird => leftContainer.appendChild(createBirdItem(bird)));
    rightCol.forEach(bird => rightContainer.appendChild(createBirdItem(bird)));
    
    const speciesCountSpan = document.getElementById('species-count');
    if (speciesCountSpan) speciesCountSpan.innerText = birdEntries.length;
  }

  // dynamic date update: shows current date as "last updated: Month Day, Year"
  function setDynamicDate() {
    const now = new Date();
    const formatted = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const dateElement = document.getElementById('dynamic-date');
    if (dateElement) {
      dateElement.innerHTML = `last updated: ${formatted}`;
    }
  }

  // EXECUTION
  renderTwoColumns();
  setDynamicDate();
</script>