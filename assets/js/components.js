// ── components.js ──────────────────────────────────────────
// Renders <nav> and <footer> on every page automatically.
// Usage: <script src="assets/js/components.js"></script>
//        Place at the TOP of <body>, before any page content.
//
// The nav highlights the current page automatically via
// data-page on <body>:  <body data-page="about">
// ───────────────────────────────────────────────────────────

(function () {

  // ── NAV ────────────────────────────────────────────────
  const links = [
    { href: 'index.html',       label: 'home',       key: 'home'    },
    { href: 'about.html',       label: 'about me',   key: 'about'   },
  ];

  const currentPage = document.body.dataset.page || '';

  const nav = document.createElement('nav');
  nav.innerHTML = links.map(l => {
    const isHome = l.key === 'home';
    const tag    = isHome ? 'span' : 'a';
    const href   = isHome ? '' : `href="${l.href}"`;
    const active = (currentPage === l.key) ? ' class="active"' : '';

    if (isHome && currentPage === 'home') {
      return `<span class="site-title">arma's webpage</span>`;
    }
    if (isHome) {
      return `<a href="${l.href}"${active}>${l.label}</a>`;
    }
    return `<a href="${l.href}"${active}>${l.label}</a>`;
  }).join('\n');

  // Special case: on home page the logo is a <span>, not a link
  if (currentPage === 'home') {
    nav.innerHTML = `<span class="site-title">arma's webpage</span>
<a href="about.html">about me</a>`;
  }

  document.body.insertBefore(nav, document.body.firstChild);


  // ── FOOTER ─────────────────────────────────────────────
  const year = new Date().getFullYear();

  // Monthly visit counter (localStorage, resets each month)
  const visitKey    = `visits_${year}_${new Date().getMonth() + 1}`;
  const sessionFlag = 'visited_this_session';
  if (!sessionStorage.getItem(sessionFlag)) {
    sessionStorage.setItem(sessionFlag, '1');
    localStorage.setItem(
      visitKey,
      (parseInt(localStorage.getItem(visitKey) || '0') + 1).toString()
    );
  }
  const visits = localStorage.getItem(visitKey) || '1';

  const footer = document.createElement('small');
  footer.innerHTML =
    `© ${year} <a href="https://github.com/armandoahir">Armando Ahir</a>` +
    `&nbsp;·&nbsp;` +
    `site weight: <!-- SITE_WEIGHT -->237.9 kB<!-- /SITE_WEIGHT -->` +
    `&nbsp;·&nbsp;` +
    `${visits} visits this month`;

  document.body.appendChild(footer);

})();
