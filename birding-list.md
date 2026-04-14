<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>Birding life list · Compact two‑column view</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: #f5f7f2;
      font-family: system-ui, -apple-system, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
      padding: 2rem 1.2rem;
      color: #1a2a1f;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
      background: white;
      border-radius: 28px;
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.02);
      overflow: hidden;
      padding: 2rem 1.8rem 2.2rem 1.8rem;
    }

    .header-flex {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: baseline;
      gap: 0.8rem;
      margin-bottom: 1.6rem;
      border-bottom: 2px solid #dce8d2;
      padding-bottom: 1rem;
    }

    .title-area h1 {
      font-size: 1.9rem;
      font-weight: 600;
      letter-spacing: -0.3px;
      background: linear-gradient(135deg, #2b5e2f, #1c4d2a);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      margin-bottom: 0.2rem;
    }

    .title-area p {
      color: #4f6b3c;
      font-size: 0.9rem;
      font-style: italic;
    }

    .bird-count-card {
      background: #eef3e9;
      padding: 0.45rem 1rem;
      border-radius: 60px;
      font-size: 1.05rem;
      font-weight: 500;
      color: #1e3a1e;
      box-shadow: inset 0 0 0 1px #cbdcc0, 0 1px 2px rgba(0,0,0,0.02);
    }

    .bird-count-card span {
      font-weight: 700;
      font-size: 1.4rem;
      color: #1c6b2b;
      margin-right: 0.2rem;
    }

    .two-col-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem 1.6rem;
      margin: 1.2rem 0 1.5rem 0;
    }

    .species-list-compact {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .species-list-compact li {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px 0;
      border-bottom: 1px solid #e9ede4;
      transition: background 0.1s ease;
    }

    .species-list-compact li:hover {
      background: #fafdf7;
      border-radius: 12px;
      padding-left: 4px;
      padding-right: 4px;
      margin: 0 -4px;
    }

    .species-thumb {
      width: 64px;
      height: 64px;
      object-fit: cover;
      border-radius: 12px;
      border: 1px solid #cfdec4;
      background: #fefcf5;
      box-shadow: 0 1px 3px rgba(0,0,0,0.03);
      transition: transform 0.1s ease;
      flex-shrink: 0;
    }

    a:hover .species-thumb {
      transform: scale(1.01);
      border-color: #9bc18a;
    }

    .bird-info {
      flex: 1;
      min-width: 0;
    }

    .bird-name {
      font-weight: 590;
      font-size: 0.92rem;
      color: #1e2f1c;
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: 4px;
    }

    .common-name {
      font-weight: 620;
    }

    .latin-name {
      font-style: italic;
      color: #6c8262;
      font-size: 0.75rem;
      font-weight: 400;
      letter-spacing: -0.1px;
    }

    .date-obs {
      font-size: 0.7rem;
      font-family: monospace;
      background: #f0f4ea;
      padding: 2px 8px;
      border-radius: 30px;
      color: #4c6b3b;
      white-space: nowrap;
      letter-spacing: -0.2px;
      font-weight: 450;
      margin-left: 6px;
      flex-shrink: 0;
    }

    .footer-note {
      margin-top: 2rem;
      border-top: 1px solid #e0e9d7;
      padding-top: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.8rem;
      font-size: 0.8rem;
      color: #6f8662;
    }

    .last-updated {
      background: #f9fbf6;
      padding: 0.2rem 0.9rem;
      border-radius: 40px;
      font-size: 0.75rem;
    }

    @media (max-width: 780px) {
      body {
        padding: 1rem;
      }
      .container {
        padding: 1.5rem;
      }
      .two-col-grid {
        grid-template-columns: 1fr;
        gap: 0.2rem;
      }
      .species-thumb {
        width: 56px;
        height: 56px;
      }
      .date-obs {
        font-size: 0.65rem;
        padding: 2px 6px;
      }
      .bird-name {
        font-size: 0.85rem;
      }
    }

    @media (max-width: 480px) {
      .header-flex {
        flex-direction: column;
        align-items: flex-start;
      }
      .species-list-compact li {
        gap: 8px;
        flex-wrap: wrap;
      }
      .date-obs {
        margin-left: auto;
      }
    }

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 12px;
      flex: 1;
      min-width: 0;
    }

    a:focus-visible {
      outline: 2px solid #3c8c40;
      border-radius: 16px;
    }

    ::-webkit-scrollbar {
      width: 6px;
      background: #e9efe2;
    }
    ::-webkit-scrollbar-thumb {
      background: #baceaa;
      border-radius: 8px;
    }
  </style>
</head>
<body>
<div class="container">
  <div class="header-flex">
    <div class="title-area">
      <h1>🪶 Birding life list</h1>
      <p>chronological sightings — compact double column</p>
    </div>
    <div class="bird-count-card">
      📋 <span id="species-count">0</span> species recorded
    </div>
  </div>

  <p style="margin-bottom: 0.75rem; font-size: 0.85rem; color: #567d46; border-left: 3px solid #aacf9e; padding-left: 12px;">
    ✨ my personal bird journal — each photo links to high-res original (Cornell Lab Macaulay Library)
  </p>

  <div class="two-col-grid" id="bird-grid">
    <ul class="species-list-compact" id="col-left"></ul>
    <ul class="species-list-compact" id="col-right"></ul>
  </div>

  <div class="footer-note">
    <span>🌿 <strong>life list</strong> · sightings from Italy & Europe</span>
    <span class="last-updated" id="dynamic-date">📅 last updated: --</span>
  </div>
</div>

<script>
  // Dati degli uccelli in ordine cronologico
  const birdEntries = [
    { common: "Coot", latin: "Fulica atra", date: "21.02.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/622103449/1200" },
    { common: "Mallard", latin: "Anas platyrhynchos", date: "21.02.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/308743051/1200" },
    { common: "Mute swan", latin: "Cygnus olor", date: "21.02.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/59954151/1200" },
    { common: "Great tit", latin: "Parus major", date: "28.03.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/169357911/1200" },
    { common: "Eurasian collared dove", latin: "Streptopelia decaocto", date: "28.03.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/308119951/1200" },
    { common: "Eurasian magpie", latin: "Pica pica", date: "28.03.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/610797531/1200" },
    { common: "Eurasian blackbird", latin: "Turdus merula", date: "28.03.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/44584641/1200" },
    { common: "European serin", latin: "Serinus serinus", date: "01.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/261728341/1200" },
    { common: "Hooded crow", latin: "Corvus cornix", date: "02.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/257827951/1200" },
    { common: "Italian sparrow", latin: "Passer italiae", date: "02.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/242173971/1200" },
    { common: "Common wood pigeon", latin: "Columba palumbus", date: "02.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/305890841/1200" },
    { common: "Eurasian tree sparrow", latin: "Passer montanus", date: "02.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/305880301/1200" },
    { common: "House sparrow", latin: "Passer domesticus", date: "02.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/304971031/1200" },
    { common: "Western cattle egret", latin: "Ardea ibis", date: "02.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/308065631/1200" },
    { common: "Domestic pigeon", latin: "Columba livia", date: "02.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/54249461/1200" },
    { common: "African sacred ibis", latin: "Threskiornis aethiopicus", date: "02.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/601874521/1200" },
    { common: "Eurasian chaffinch", latin: "Fringilla coelebs", date: "03.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/612496830/1200" },
    { common: "Long-tailed tit", latin: "Aegithalos caudatus", date: "03.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/459237521/1200" },
    { common: "Eurasian blackcap", latin: "Sylvia atricapilla", date: "03.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/168489091/1200" },
    { common: "Little egret", latin: "Egretta garzetta", date: "03.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/303928891/1200" },
    { common: "Common starling", latin: "Sturnus vulgaris", date: "03.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/620374233/1200" },
    { common: "Common moorhen", latin: "Gallinula chloropus", date: "03.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/615717250/1200" },
    { common: "Cetti's warbler", latin: "Cettia cetti", date: "08.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/256567401/1200" },
    { common: "Common chiffchaff", latin: "Phylloscopus collybita", date: "08.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/257684731/1200" },
    { common: "Meadow pipit", latin: "Anthus pratensis", date: "08.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/257824121/1200" },
    { common: "Western yellow wagtail", latin: "Motacilla flava", date: "08.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/312652671/1200" },
    { common: "Barn swallow", latin: "Hirundo rustica", date: "08.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/45200391/1200" },
    { common: "Common redstart", latin: "Phoenicurus phoenicurus", date: "08.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/621602853/1200" },
    { common: "European greenfinch", latin: "Chloris chloris", date: "08.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/254741801/1800" },
    { common: "Grey heron", latin: "Ardea cinerea", date: "10.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/258101091/1800" },
    { common: "Green woodpecker", latin: "Picus viridis", date: "10.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/256154511/1800" },
    { common: "Great spotted woodpecker", latin: "Dendrocopos major", date: "11.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/256707351/1800" },
    { common: "European goldfinch", latin: "Carduelis carduelis", date: "11.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/46409481/1800" },
    { common: "Eurasian blue tit", latin: "Cyanistes caeruleus", date: "11.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/44951041/1800" },
    { common: "Common swift", latin: "Apus apus", date: "11.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/44951041/1800" }
  ];

  function createBirdItem(bird) {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = bird.img;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    
    const img = document.createElement('img');
    img.src = bird.img;
    img.alt = bird.common;
    img.className = "species-thumb";
    img.loading = "lazy";
    
    // Gestione errori di caricamento immagini
    img.onerror = function() {
      this.src = 'https://via.placeholder.com/64x64?text=No+Image';
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
    latinSpan.textContent = `(${bird.latin})`;
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

  function distributeColumns(arr) {
    const mid = Math.ceil(arr.length / 2);
    const leftCol = arr.slice(0, mid);
    const rightCol = arr.slice(mid);
    return { leftCol, rightCol };
  }

  function renderTwoColumns() {
    const { leftCol, rightCol } = distributeColumns(birdEntries);
    const leftContainer = document.getElementById('col-left');
    const rightContainer = document.getElementById('col-right');
    
    leftContainer.innerHTML = '';
    rightContainer.innerHTML = '';
    
    leftCol.forEach(bird => {
      leftContainer.appendChild(createBirdItem(bird));
    });
    
    rightCol.forEach(bird => {
      rightContainer.appendChild(createBirdItem(bird));
    });
    
    document.getElementById('species-count').innerText = birdEntries.length;
  }
  
  function setDynamicDate() {
    const dateElem = document.getElementById('dynamic-date');
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    dateElem.innerHTML = `📅 last updated: ${formattedDate}`;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    renderTwoColumns();
    setDynamicDate();
  });
</script>
</body>
</html>