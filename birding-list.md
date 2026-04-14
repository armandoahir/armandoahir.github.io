---
layout: page
title: "Birding list"
permalink: /birding-list/
---

<style>
.bird-count {
  font-size: 1.1em;
  margin-bottom: 8px;
}
#species-count {
  color: #000080;
  font-weight: bold;
}
.species-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.species-list li {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}
.species-thumb {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #ddd;
  flex-shrink: 0;
}
.bird-name {
  flex: 1;
  font-size: 0.95em;
}
.latin-name {
  font-style: italic;
  color: #888;
  font-size: 0.85em;
}
.date-obs {
  color: #aaa;
  font-size: 0.8em;
  white-space: nowrap;
}

/* Stili per il layout a due colonne compatto */
.two-column-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 2rem;
}

@media (max-width: 768px) {
  .two-column-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<p class="bird-count">🐦 Current bird count: <span id="species-count">0</span> species</p>

<p><em>This is my personal birding life list, where I track my sightings in chronological order.</em></p>

<div class="two-column-grid" id="bird-list-container">
  <!-- Left column -->
  <ul class="species-list" id="col-left"></ul>
  <!-- Right column -->
  <ul class="species-list" id="col-right"></ul>
</div>

<script>
// Dati degli uccelli (tutti i tuoi avvistamenti)
const birdData = [
  { name: "Coot", latin: "Fulica atra", date: "21.02.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/622103449/1200" },
  { name: "Mallard", latin: "Anas platyrhynchos", date: "21.02.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/308743051/1200" },
  { name: "Mute swan", latin: "Cygnus olor", date: "21.02.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/59954151/1200" },
  { name: "Great tit", latin: "Parus major", date: "28.03.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/169357911/1200" },
  { name: "Eurasian collared dove", latin: "Streptopelia decaocto", date: "28.03.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/308119951/1200" },
  { name: "Eurasian magpie", latin: "Pica pica", date: "28.03.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/610797531/1200" },
  { name: "Eurasian blackbird", latin: "Turdus merula", date: "28.03.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/44584641/1200" },
  { name: "European serin", latin: "Serinus serinus", date: "01.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/261728341/1200" },
  { name: "Hooded crow", latin: "Corvus cornix", date: "02.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/257827951/1200" },
  { name: "Italian sparrow", latin: "Passer italiae", date: "02.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/242173971/1200" },
  { name: "Common wood pigeon", latin: "Columba palumbus", date: "02.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/305890841/1200" },
  { name: "Eurasian tree sparrow", latin: "Passer montanus", date: "02.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/305880301/1200" },
  { name: "House sparrow", latin: "Passer domesticus", date: "02.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/304971031/1200" },
  { name: "Western cattle egret", latin: "Ardea ibis", date: "02.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/308065631/1200" },
  { name: "Domestic pigeon", latin: "Columba livia", date: "02.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/54249461/1200" },
  { name: "African sacred ibis", latin: "Threskiornis aethiopicus", date: "02.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/601874521/1200" },
  { name: "Eurasian chaffinch", latin: "Fringilla coelebs", date: "03.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/612496830/1200" },
  { name: "Long-tailed tit", latin: "Aegithalos caudatus", date: "03.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/459237521/1200" },
  { name: "Eurasian blackcap", latin: "Sylvia atricapilla", date: "03.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/168489091/1200" },
  { name: "Little egret", latin: "Egretta garzetta", date: "03.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/303928891/1200" },
  { name: "Common starling", latin: "Sturnus vulgaris", date: "03.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/620374233/1200" },
  { name: "Common moorhen", latin: "Gallinula chloropus", date: "03.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/615717250/1200" },
  { name: "Cetti's warbler", latin: "Cettia cetti", date: "08.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/256567401/1200" },
  { name: "Common chiffchaff", latin: "Phylloscopus collybita", date: "08.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/257684731/1200" },
  { name: "Meadow pipit", latin: "Anthus pratensis", date: "08.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/257824121/1200" },
  { name: "Western yellow wagtail", latin: "Motacilla flava", date: "08.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/312652671/1200" },
  { name: "Barn swallow", latin: "Hirundo rustica", date: "08.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/45200391/1200" },
  { name: "Common redstart", latin: "Phoenicurus phoenicurus", date: "08.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/621602853/1200" },
  { name: "European greenfinch", latin: "Chloris chloris", date: "08.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/254741801/1800" },
  { name: "Grey heron", latin: "Ardea cinerea", date: "10.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/258101091/1800" },
  { name: "Green woodpecker", latin: "Picus viridis", date: "10.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/256154511/1800" },
  { name: "Great spotted woodpecker", latin: "Dendrocopos major", date: "11.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/256707351/1800" },
  { name: "European goldfinch", latin: "Carduelis carduelis", date: "11.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/46409481/1800" },
  { name: "Eurasian blue tit", latin: "Cyanistes caeruleus", date: "11.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/44951041/1800" },
  { name: "Common swift", latin: "Apus apus", date: "11.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/44951041/1800" }
];

function buildBirdList() {
  const mid = Math.ceil(birdData.length / 2);
  const leftData = birdData.slice(0, mid);
  const rightData = birdData.slice(mid);
  
  const leftCol = document.getElementById('col-left');
  const rightCol = document.getElementById('col-right');
  
  leftData.forEach(bird => {
    leftCol.appendChild(createBirdItem(bird));
  });
  
  rightData.forEach(bird => {
    rightCol.appendChild(createBirdItem(bird));
  });
  
  document.getElementById('species-count').innerText = birdData.length;
}

function createBirdItem(bird) {
  const li = document.createElement('li');
  
  const link = document.createElement('a');
  link.href = bird.img;
  link.target = '_blank';
  
  const img = document.createElement('img');
  img.src = bird.img;
  img.alt = bird.name;
  img.className = 'species-thumb';
  img.loading = 'lazy';
  
  const nameSpan = document.createElement('span');
  nameSpan.className = 'bird-name';
  nameSpan.innerHTML = `${bird.name} <span class="latin-name">(${bird.latin})</span>`;
  
  const dateSpan = document.createElement('span');
  dateSpan.className = 'date-obs';
  dateSpan.textContent = bird.date;
  
  link.appendChild(img);
  link.appendChild(nameSpan);
  li.appendChild(link);
  li.appendChild(dateSpan);
  
  return li;
}

document.addEventListener('DOMContentLoaded', buildBirdList);
</script>

<p><em>Last updated: {{ "now" | date: "%B %d, %Y" }}</em></p>