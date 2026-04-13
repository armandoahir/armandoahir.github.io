---
layout: page
title: "Birding list"
permalink: /birding-list/
---

<style>
  .count-wrapper {
    font-size: 1.2em;
    margin-bottom: 20px;
    font-weight: bold;
    color: #333;
  }
  #species-count {
    color: #fcba03; /* #2e7d32; */
  }
  .species-list {
    column-count: 2;
    column-gap: 50px;
    list-style-position: inside;
    padding-left: 0;
    line-height: 1.8;
  }
  .species-list li {
    border-bottom: 1px solid #eee;
    padding: 8px 0;
    font-size: 0.95em;
    display: flex;
    align-items: center;
    break-inside: avoid;
  }

  /* Stile Immagini: Grandezza doppia rispetto al testo (2.2em) */
  .species-thumb, .no-photo {
    width: 2.2em;
    height: 2.2em;
    object-fit: cover;
    display: inline-block;
    margin-right: 12px;
    border-radius: 6px;
  }
  .species-thumb {
    border: 1px solid #ddd;
    transition: transform 0.2s;
  }
  .photo-link:hover .species-thumb {
    transform: scale(1.1);
    border-color: #2e7d32;
  }
  .no-photo {
    background-color: transparent; /* vuoto se non c'è la foto */
  }

  .latin-name {
    font-style: italic;
    color: #666;
    font-size: 0.85em;
    flex-grow: 1;
    margin-left: 5px;
  }
  .date-obs {
    color: #999;
    font-size: 0.8em;
    margin-left: 10px;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    .species-list { column-count: 1; }
  }
</style>

<div class="count-wrapper">
  Current bird count: <span id="species-count">0</span> species
</div>

This is my personal birding life list, where I track my sightings in chronological order.

<div class="species-container">
  <ol class="species-list" id="main-list">
    <li>
      <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/622103449/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/622103449/1200" class="species-thumb">
      </a>
      Coot <span class="latin-name">(Fulica atra)</span> <span class="date-obs">21.02.2026</span>
    </li>
    <li>
      <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/308743051/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/308743051/1200" class="species-thumb">
      </a>
      Mallard <span class="latin-name">(Anas platyrhynchos)</span> <span class="date-obs">21.02.2026</span></li>
     <li>
      <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/59954151/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/59954151/1200" class="species-thumb">
      </a>
     Mute swan <span class="latin-name">(Cygnus olor)</span> <span class="date-obs">21.02.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/169357911/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/169357911/1200" class="species-thumb">
      </a>
      Great tit <span class="latin-name">(Parus major)</span> <span class="date-obs">28.03.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/308119951/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/308119951/1200" class="species-thumb">
      </a>
      Eurasian collared dove <span class="latin-name">(Streptopelia decaocto)</span> <span class="date-obs">28.03.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/610797531/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/610797531/1200" class="species-thumb">
      </a>
      Eurasian magpie <span class="latin-name">(Pica pica)</span> <span class="date-obs">28.03.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/44584641/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/44584641/1200" class="species-thumb">
      </a>
      Eurasian blackbird <span class="latin-name">(Turdus merula)</span> <span class="date-obs">28.03.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/256533791/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/256533791/1200" class="species-thumb">
      </a>
      European serin <span class="latin-name">(Serinus serinus)</span> <span class="date-obs">01.04.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/261728341/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/261728341/1200" class="species-thumb">
      </a>
      Hooded crow <span class="latin-name">(Corvus cornix)</span> <span class="date-obs">02.04.2026</span></li>
    <li>
        <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/257827951/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/257827951/1200" class="species-thumb">
      </a>
       Italian sparrow <span class="latin-name">(Passer italiae)</span> <span class="date-obs">02.04.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/242173971/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/242173971/1200" class="species-thumb">
      </a>
      Common wood pigeon <span class="latin-name">(Columba palumbus)</span> <span class="date-obs">02.04.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/305890841/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/305890841/1200" class="species-thumb">
      </a>
      Eurasian tree sparrow <span class="latin-name">(Passer montanus)</span> <span class="date-obs">02.04.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/305880301/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/305880301/1200" class="species-thumb">
      </a>
      House sparrow <span class="latin-name">(Passer domesticus)</span> <span class="date-obs">02.04.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/304971031/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/304971031/1200" class="species-thumb">
      </a>
      Western cattle egret <span class="latin-name">(Ardea ibis)</span> <span class="date-obs">02.04.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/308065631/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/308065631/1200" class="species-thumb">
      </a>
      Domestic pigeon <span class="latin-name">(Columba livia)</span> <span class="date-obs">02.04.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/54249461/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/54249461/1200" class="species-thumb">
      </a>
      African sacred ibis <span class="latin-name">(Threskiornis aethiopicus)</span> <span class="date-obs">02.04.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/601874521/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/601874521/1200" class="species-thumb">
      </a>
      Eurasian chaffinch <span class="latin-name">(Fringilla coelebs)</span> <span class="date-obs">03.04.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/612496830/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/612496830/1200" class="species-thumb">
      </a>
      Long-tailed tit <span class="latin-name">(Aegithalos caudatus)</span> <span class="date-obs">03.04.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/459237521/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/459237521/1200" class="species-thumb">
      </a>
      Eurasian blackcap <span class="latin-name">(Sylvia atricapilla)</span> <span class="date-obs">03.04.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/168489091/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/168489091/1200" class="species-thumb">
      </a>
      Little egret <span class="latin-name">(Egretta garzetta)</span> <span class="date-obs">03.04.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/303928891/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/303928891/1200" class="species-thumb">
      </a>
      Common starling <span class="latin-name">(Sturnus vulgaris)</span> <span class="date-obs">03.04.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/620374233/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/620374233/1200" class="species-thumb">
      </a>
      Common moorhen <span class="latin-name">(Gallinula chloropus)</span> <span class="date-obs">03.04.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/615717250/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/615717250/1200" class="species-thumb">
      </a>
      Cetti's warbler <span class="latin-name">(Cettia cetti)</span> <span class="date-obs">08.04.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/256567401/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/256567401/1200" class="species-thumb">
      </a>
      Common chiffchaff <span class="latin-name">(Philloscopus collybita)</span> <span class="date-obs">08.04.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/257684731/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/257684731/1200" class="species-thumb">
      </a>
      Meadow pipit <span class="latin-name">(Anthus pratensis)</span> <span class="date-obs">08.04.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/257824121/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/257824121/1200" class="species-thumb">
      </a>
      Western Yellow Wagtail <span class="latin-name">(Motacilla flava)</span> <span class="date-obs">08.04.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/312652671/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/312652671/1200" class="species-thumb">
      </a>
      Swallows <span class="latin-name">(Hirundo rustica)</span> <span class="date-obs">08.04.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/45200391/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/45200391/1200" class="species-thumb">
      </a>
      Common redstart <span class="latin-name">(Phoenicurus phoenicurus)</span> <span class="date-obs">08.04.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/621602853/1200" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/621602853/1200" class="species-thumb">
      </a>
      European greenfinch <span class="latin-name">(Chloris chloris)</span> <span class="date-obs">08.04.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/254741801/1800" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/254741801/1800" class="species-thumb">
      </a>
      Gray heron <span class="latin-name">(Ardea cinerea)</span> <span class="date-obs">10.04.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/258101091/1800" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/258101091/1800" class="species-thumb">
      </a>
      Green woodpecker <span class="latin-name">(Picus viridis)</span> <span class="date-obs">10.04.2026</span></li>
    <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/256154511/1800" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/256154511/1800" class="species-thumb">
      </a>
      Great spotted woodpecker <span class="latin-name">(Dendrocopos major)</span> <span class="date-obs">11.04.2026</span></li>
     <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/256707351/1800" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/256707351/1800" class="species-thumb">
      </a>
      European goldfinch <span class="latin-name">(Carduelis carduelis)</span> <span class="date-obs">11.04.2026</span></li>
     <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/46409481/1800" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/46409481/1800" class="species-thumb">
      </a>
      Eurasian blue tit <span class="latin-name">(Cyanistes caeruleus)</span> <span class="date-obs">11.04.2026</span></li>
      <li>
       <a href="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/44951041/1800" target="_blank" class="photo-link">
        <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/44951041/1800" class="species-thumb">
      </a>
      Common swift <span class="latin-name">(Apus apus)</span> <span class="date-obs">11.04.2026</span></li>
    </ol>
    </div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    const listCount = document.querySelectorAll('#main-list li').length;
    document.getElementById('species-count').innerText = listCount;
  });
</script>

---
*Last updated: {{ "now" | date: "%B %d, %Y" }}*
