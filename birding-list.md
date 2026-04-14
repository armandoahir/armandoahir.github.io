<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Birding life list</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: #f0f2ea;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
      padding: 2rem;
      color: #1a2a1f;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      border-radius: 24px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.05);
      padding: 2rem;
    }

    h1 {
      font-size: 1.8rem;
      font-weight: 600;
      color: #2d5a2c;
      margin-bottom: 0.25rem;
    }

    .subhead {
      color: #6b8c5c;
      font-style: italic;
      margin-bottom: 1rem;
      border-bottom: 2px solid #e2ecd9;
      padding-bottom: 0.75rem;
    }

    .journal-note {
      background: #fafdf5;
      border-left: 3px solid #8fc97f;
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
      color: #4a6b3a;
      margin-bottom: 1.5rem;
      border-radius: 0 12px 12px 0;
    }

    .stats {
      display: inline-block;
      background: #eef3e8;
      padding: 0.25rem 1rem;
      border-radius: 40px;
      font-size: 0.85rem;
      margin-bottom: 1.5rem;
    }

    .two-columns {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    .bird-list {
      list-style: none;
    }

    .bird-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.75rem 0;
      border-bottom: 1px solid #edf2e6;
    }

    .bird-img {
      width: 60px;
      height: 60px;
      background: #e8efdf;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      overflow: hidden;
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.8), 0 1px 3px rgba(0,0,0,0.1);
    }

    .bird-img img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .bird-info {
      flex: 1;
    }

    .bird-name {
      font-weight: 600;
      font-size: 1rem;
    }

    .latin {
      font-style: italic;
      color: #7c9a6c;
      font-size: 0.75rem;
      margin-left: 0.5rem;
      font-weight: normal;
    }

    .bird-date {
      font-family: monospace;
      font-size: 0.7rem;
      background: #f0f4ea;
      padding: 0.2rem 0.6rem;
      border-radius: 20px;
      color: #567d3e;
      white-space: nowrap;
    }

    .footer {
      margin-top: 2rem;
      padding-top: 1rem;
      border-top: 1px solid #e2ecd9;
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
      color: #8aa87d;
    }

    @media (max-width: 700px) {
      body { padding: 1rem; }
      .two-columns { grid-template-columns: 1fr; gap: 0; }
      .bird-img { width: 50px; height: 50px; }
    }
  </style>
</head>
<body>
<div class="container">
  <h1>🪶 Birding life list</h1>
  <div class="subhead">chronological sightings — compact double column</div>

  <div class="journal-note">
    📘 <strong>my personal bird journal</strong> — each photo links to high-res original (Cornell Lab Macaulay Library)
  </div>

  <div class="stats">
    📋 <strong id="count">0</strong> species recorded
  </div>

  <div class="two-columns" id="columns-container">
    <ul class="bird-list" id="col-left"></ul>
    <ul class="bird-list" id="col-right"></ul>
  </div>

  <div class="footer">
    <span>🌿 life list · sightings from Italy & Europe</span>
    <span id="update-date"></span>
  </div>
</div>

<script>
  // LISTA DEGLI UCCELLI (in ordine cronologico) - SENZA EMOJI
  const birds = [
    { name: "Coot", latin: "Fulica atra", date: "21.02.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🦆" },
    { name: "Mallard", latin: "Anas platyrhynchos", date: "21.02.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🦆" },
    { name: "Mute swan", latin: "Cygnus olor", date: "21.02.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🦢" },
    { name: "Great tit", latin: "Parus major", date: "28.03.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🐦" },
    { name: "Eurasian collared dove", latin: "Streptopelia decaocto", date: "28.03.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🕊️" },
    { name: "Eurasian magpie", latin: "Pica pica", date: "28.03.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🐦‍⬛" },
    { name: "Eurasian blackbird", latin: "Turdus merula", date: "28.03.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🐦" },
    { name: "European serin", latin: "Serinus serinus", date: "01.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🐤" },
    { name: "Hooded crow", latin: "Corvus cornix", date: "02.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🐦‍⬛" },
    { name: "Italian sparrow", latin: "Passer italiae", date: "02.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🐦" },
    { name: "Common wood pigeon", latin: "Columba palumbus", date: "02.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🕊️" },
    { name: "Eurasian tree sparrow", latin: "Passer montanus", date: "02.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🐦" },
    { name: "House sparrow", latin: "Passer domesticus", date: "02.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🐦" },
    { name: "Western cattle egret", latin: "Ardea ibis", date: "02.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🕊️" },
    { name: "Domestic pigeon", latin: "Columba livia", date: "02.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🕊️" },
    { name: "African sacred ibis", latin: "Threskiornis aethiopicus", date: "02.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🐦" },
    { name: "Eurasian chaffinch", latin: "Fringilla coelebs", date: "03.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🐦" },
    { name: "Long-tailed tit", latin: "Aegithalos caudatus", date: "03.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🐦" },
    { name: "Eurasian blackcap", latin: "Sylvia atricapilla", date: "03.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🐦" },
    { name: "Little egret", latin: "Egretta garzetta", date: "03.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🕊️" },
    { name: "Common starling", latin: "Sturnus vulgaris", date: "03.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🐦" },
    { name: "Common moorhen", latin: "Gallinula chloropus", date: "03.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🦆" },
    { name: "Cetti's warbler", latin: "Cettia cetti", date: "08.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🐦" },
    { name: "Common chiffchaff", latin: "Phylloscopus collybita", date: "08.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🐦" },
    { name: "Meadow pipit", latin: "Anthus pratensis", date: "08.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🐦" },
    { name: "Western yellow wagtail", latin: "Motacilla flava", date: "08.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🐦" },
    { name: "Barn swallow", latin: "Hirundo rustica", date: "08.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🐦" },
    { name: "Common redstart", latin: "Phoenicurus phoenicurus", date: "08.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🐦" },
    { name: "European greenfinch", latin: "Chloris chloris", date: "08.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🐦" },
    { name: "Grey heron", latin: "Ardea cinerea", date: "10.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🕊️" },
    { name: "Green woodpecker", latin: "Picus viridis", date: "10.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🐦" },
    { name: "Great spotted woodpecker", latin: "Dendrocopos major", date: "11.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🐦" },
    { name: "European goldfinch", latin: "Carduelis carduelis", date: "11.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🐦" },
    { name: "Eurasian blue tit", latin: "Cyanistes caeruleus", date: "11.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🐦" },
    { name: "Common swift", latin: "Apus apus", date: "11.04.2026", img: "https://placehold.co/60x60/e8efdf/7c9a6c?text=🐦" }
  ];

  function createBirdItem(bird) {
    const li = document.createElement('li');
    li.className = 'bird-item';

    // Contenitore immagine con link
    const imgDiv = document.createElement('div');
    imgDiv.className = 'bird-img';
    
    const link = document.createElement('a');
    link.href = bird.img;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    const img = document.createElement('img');
    img.src = bird.img;
    img.alt = bird.name;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    
    link.appendChild(img);
    imgDiv.appendChild(link);

    // Info uccello
    const infoDiv = document.createElement('div');
    infoDiv.className = 'bird-info';
    
    const nameSpan = document.createElement('div');
    nameSpan.className = 'bird-name';
    nameSpan.innerHTML = `${bird.name} <span class="latin">(${bird.latin})</span>`;
    infoDiv.appendChild(nameSpan);

    // Data
    const dateSpan = document.createElement('div');
    dateSpan.className = 'bird-date';
    dateSpan.textContent = bird.date;

    li.appendChild(imgDiv);
    li.appendChild(infoDiv);
    li.appendChild(dateSpan);
    
    return li;
  }

  function distribuisciColonne(arr) {
    const meta = Math.ceil(arr.length / 2);
    return {
      left: arr.slice(0, meta),
      right: arr.slice(meta)
    };
  }

  function render() {
    const { left, right } = distribuisciColonne(birds);
    const colLeft = document.getElementById('col-left');
    const colRight = document.getElementById('col-right');
    
    colLeft.innerHTML = '';
    colRight.innerHTML = '';
    
    left.forEach(b => colLeft.appendChild(createBirdItem(b)));
    right.forEach(b => colRight.appendChild(createBirdItem(b)));
    
    document.getElementById('count').textContent = birds.length;
  }

  // Data odierna nel footer
  const oggi = new Date();
  const dataFooter = oggi.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  document.getElementById('update-date').textContent = `📅 last updated: ${dataFooter}`;

  render();
</script>
</body>
</html>