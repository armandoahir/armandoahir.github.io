// ── components.js ──────────────────────────────────────────
(function () {

  // ── 1. NAV ──────────────────────────────────────────────
  const links = [
    { href: 'index.html',      label: 'home',      key: 'home'    },
    { href: 'about.html',      label: 'about me',  key: 'about'   },
  ];

  const currentPage = document.body.dataset.page || '';
  const nav = document.createElement('nav');
  
  nav.innerHTML = links.map(l => {
    const isHome = l.key === 'home';
    const active = (currentPage === l.key) ? ' class="active"' : '';
    if (isHome && currentPage === 'home') return `<span class="site-title">arma's webpage</span>`;
    return `<a href="${l.href}"${active}>${l.label}</a>`;
  }).join('\n');

  if (currentPage === 'home') {
    nav.innerHTML = `<span class="site-title">arma's webpage</span>\n<a href="about.html">about me</a>`;
  }
  document.body.insertBefore(nav, document.body.firstChild);


  // ── 2. FOOTER ───────────────────────────────────────────
  const year = new Date().getFullYear();
  const visitKey = `visits_${year}_${new Date().getMonth() + 1}`;
  
  if (!sessionStorage.getItem('visited_this_session')) {
    sessionStorage.setItem('visited_this_session', '1');
    localStorage.setItem(visitKey, (parseInt(localStorage.getItem(visitKey) || '0') + 1).toString());
  }
  const visits = localStorage.getItem(visitKey) || '1';

  const footer = document.createElement('small');
  footer.innerHTML =
    `© ${year} <a href="https://github.com/armandoahir">Armando Ahir</a>` +
    ` · ` +
    `site weight: <SITE_WEIGHT>236.9 kB</SITE_WEIGHT>` + 
    ` · ` +
    `${visits} visits this month`;

  document.body.appendChild(footer);

})();
