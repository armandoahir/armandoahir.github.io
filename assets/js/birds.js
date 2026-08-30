// birds.js - la lista avifauna
const birdEntries = [
  { common: "Coot", latin: "Fulica atra", date: "21.02.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/622103449/320" },
  { common: "Mallard", latin: "Anas platyrhynchos", date: "21.02.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/308743051/320" },
  { common: "Mute swan", latin: "Cygnus olor", date: "21.02.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/59954151/320" },
  { common: "Great tit", latin: "Parus major", date: "28.03.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/169357911/320" },
  { common: "Eurasian collared dove", latin: "Streptopelia decaocto", date: "28.03.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/308119951/320" },
  { common: "Eurasian magpie", latin: "Pica pica", date: "28.03.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/610797531/320" },
  { common: "Eurasian blackbird", latin: "Turdus merula", date: "28.03.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/44584641/320" },
  { common: "European serin", latin: "Serinus serinus", date: "01.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/256533791/320" },
  { common: "Hooded crow", latin: "Corvus cornix", date: "02.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/261728341/320" },
  { common: "Italian sparrow", latin: "Passer italiae", date: "02.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/257827951/320" },
  { common: "Common wood pigeon", latin: "Columba palumbus", date: "02.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/242173971/320" },
  { common: "Eurasian tree sparrow", latin: "Passer montanus", date: "02.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/305890841/320" },
  { common: "House sparrow", latin: "Passer domesticus", date: "02.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/305880301/320" },
  { common: "Western cattle egret", latin: "Ardea ibis", date: "02.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/304971031/320" },
  { common: "Domestic pigeon", latin: "Columba livia", date: "02.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/308065631/320" },
  { common: "African sacred ibis", latin: "Threskiornis aethiopicus", date: "02.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/54249461/320" },
  { common: "Eurasian chaffinch", latin: "Fringilla coelebs", date: "03.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/601874521/320" },
  { common: "Long-tailed tit", latin: "Aegithalos caudatus", date: "03.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/612496830/320" },
  { common: "Eurasian blackcap", latin: "Sylvia atricapilla", date: "03.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/459237421/320" },
  { common: "Little egret", latin: "Egretta garzetta", date: "03.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/168489091/320" },
  { common: "Common starling", latin: "Sturnus vulgaris", date: "03.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/303928891/320" },
  { common: "Common moorhen", latin: "Gallinula chloropus", date: "03.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/620374233/320" },
  { common: "Cetti's warbler", latin: "Cettia cetti", date: "08.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/615717250/320" },
  { common: "Common chiffchaff", latin: "Phylloscopus collybita", date: "08.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/256567401/320" },
  { common: "Meadow pipit", latin: "Anthus pratensis", date: "08.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/257684731/320" },
  { common: "Western yellow wagtail", latin: "Motacilla flava", date: "08.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/45206771/320" },
  { common: "Barn swallow", latin: "Hirundo rustica", date: "08.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/305765591/320" },
  { common: "Common redstart", latin: "Phoenicurus phoenicurus", date: "08.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/257901941/320" },
  { common: "European greenfinch", latin: "Chloris chloris", date: "08.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/621602853/320" },
  { common: "Grey heron", latin: "Ardea cinerea", date: "10.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/254741801/320" },
  { common: "Green woodpecker", latin: "Picus viridis", date: "10.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/258101151/320" },
  { common: "Great spotted woodpecker", latin: "Dendrocopos major", date: "11.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/256154511/320" },
  { common: "European goldfinch", latin: "Carduelis carduelis", date: "11.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/256706831/320" },
  { common: "Eurasian blue tit", latin: "Cyanistes caeruleus", date: "11.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/46409481/320" },
  { common: "Common swift", latin: "Apus apus", date: "11.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/44951021/320" },
  { common: "Red crested grebe", latin: "Podiceps cristatus", date: "19.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/242170941/320" },
  { common: "Red crested pochard", latin: "Netta rufina", date: "19.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/44942321/320" },
  { common: "Yellow-legged Gull", latin: "Larus michahellis", date: "19.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/44945251/320" },
  { common: "Great Reed Warbler", latin: "Acrocephalus arundinaceus", date: "19.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/45042681/320" },
  { common: "Western jackdown", latin: "Coloeus monedula", date: "19.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/611135886/320" },
  { common: "Great cormorant", latin: "Phalacrocorax carbo", date: "19.04.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/66026521/320" },
  { common: "Spotted flycatcher", latin: "Muscicapa striata", date: "23.05.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/613402295/320" },
  { common: "Cirl bunting", latin: "Emberiza cirlus", date: "29.07.2026", img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/169219721/320" },
  { common: "Pygmy cormorant", latin: "Microcarbo pygmaeus", date: "30.08.2026", img:"https://cdn.download.ams.birds.cornell.edu/api/v1/asset/258089531/320"}, 
  { common: "Eurasian jay" , latin: "Garrulus glandarius", date: "30.08.2026", img:"https://cdn.download.ams.birds.cornell.edu/api/v1/asset/252252921/320" }
];

const lastUpdated = birdEntries
.map(b => {
  const [d, m, y] = b.date.split('.');
  return new Date(y, m - 1, d);
})
.reduce((max, d) => d > max ? d : max, new Date(0));

window.birdEntries = birdEntries;
window.lastUpdated = lastUpdated;
