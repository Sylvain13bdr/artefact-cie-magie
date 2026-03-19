'use strict';

/* ── DONNÉES PHOTOS ── */
var PHOTOS = {
  'fantaisies': [
    ['assets/img/photos/fantaisies/fantaisies-01.png', 'Fantaisies et Sorcelleries — photo 1'],
    ['assets/img/photos/fantaisies/fantaisies-02.png', 'Fantaisies et Sorcelleries — photo 2'],
    ['assets/img/photos/fantaisies/fantaisies-03.png', 'Fantaisies et Sorcelleries — photo 3'],
    ['assets/img/photos/fantaisies/fantaisies-04.png', 'Fantaisies et Sorcelleries — photo 4'],
    ['assets/img/photos/fantaisies/fantaisies-05.png', 'Fantaisies et Sorcelleries — photo 5'],
    ['assets/img/photos/fantaisies/fantaisies-06.png', 'Fantaisies et Sorcelleries — photo 6']
  ],
  'petitchap': [
    ['assets/img/photos/petitchap/chap-01.png', "Le Petit Chap' — photo 1"],
    ['assets/img/photos/petitchap/chap-02.png', "Le Petit Chap' — photo 2"],
    ['assets/img/photos/petitchap/chap-03.png', "Le Petit Chap' — photo 3"],
    ['assets/img/photos/petitchap/chap-04.png', "Le Petit Chap' — photo 4"],
    ['assets/img/photos/petitchap/chap-05.png', "Le Petit Chap' — photo 5"],
    ['assets/img/photos/petitchap/chap-06.png', "Le Petit Chap' — photo 6"]
  ],
  'raiponce': [
    ['assets/img/photos/raiponce/raiponce-01.png', 'Raiponce — photo 1'],
    ['assets/img/photos/raiponce/raiponce-02.png', 'Raiponce — photo 2'],
    ['assets/img/photos/raiponce/raiponce-03.png', 'Raiponce — photo 3'],
    ['assets/img/photos/raiponce/raiponce-04.png', 'Raiponce — photo 4'],
    ['assets/img/photos/raiponce/raiponce-05.png', 'Raiponce — photo 5'],
    ['assets/img/photos/raiponce/raiponce-06.png', 'Raiponce — photo 6']
  ],
  'noel': [
    ['assets/img/photos/noel/silver-01.png', "Noel de M. Silver — photo 1"],
    ['assets/img/photos/noel/silver-02.png', "Noel de M. Silver — photo 2"],
    ['assets/img/photos/noel/silver-03.png', "Noel de M. Silver — photo 3"],
    ['assets/img/photos/noel/silver-04.png', "Noel de M. Silver — photo 4"],
    ['assets/img/photos/noel/silver-05.png', "Noel de M. Silver — photo 5"],
    ['assets/img/photos/noel/silver-06.png', "Noel de M. Silver — photo 6"]
  ],
  'bois-dormant': [
    ['assets/img/photos/bois-dormant/bois-dormant-01.png', 'Les Reves du Bois Dormant — photo 1'],
    ['assets/img/photos/bois-dormant/bois-dormant-02.png', 'Les Reves du Bois Dormant — photo 2'],
    ['assets/img/photos/bois-dormant/bois-dormant-03.png', 'Les Reves du Bois Dormant — photo 3'],
    ['assets/img/photos/bois-dormant/bois-dormant-04.png', 'Les Reves du Bois Dormant — photo 4'],
    ['assets/img/photos/bois-dormant/bois-dormant-05.png', 'Les Reves du Bois Dormant — photo 5'],
    ['assets/img/photos/bois-dormant/bois-dormant-06.png', 'Les Reves du Bois Dormant — photo 6']
  ],
  'peter-pan': [
    ['assets/img/photos/peter-pan/peter-pan-01.png', 'Peter Pan — photo 1'],
    ['assets/img/photos/peter-pan/peter-pan-02.png', 'Peter Pan — photo 2'],
    ['assets/img/photos/peter-pan/peter-pan-03.png', 'Peter Pan — photo 3'],
    ['assets/img/photos/peter-pan/peter-pan-04.png', 'Peter Pan — photo 4'],
    ['assets/img/photos/peter-pan/peter-pan-05.png', 'Peter Pan — photo 5'],
    ['assets/img/photos/peter-pan/peter-pan-06.png', 'Peter Pan — photo 6']
  ]
};

/* ── ÉTAT LIGHTBOX ── */
var lbShow = '';
var lbIdx  = 0;

/* ── LIGHTBOX ── */
function lbGetEl(id) { return document.getElementById(id); }

function lbRender() {
  var photos = PHOTOS[lbShow];
  if (!photos) return;
  var entry = photos[lbIdx];
  var img = lbGetEl('lbImg');
  var tit = lbGetEl('lbTitle');
  var cnt = lbGetEl('lbCounter');
  if (img) { img.src = entry[0]; img.alt = entry[1]; }
  if (tit) tit.textContent = entry[1];
  if (cnt) cnt.textContent = (lbIdx + 1) + ' / ' + photos.length;
}

function lbGo(dir) {
  var photos = PHOTOS[lbShow];
  if (!photos) return;
  lbIdx = (lbIdx + dir + photos.length) % photos.length;
  lbRender();
}

function lbClose() {
  var lb = lbGetEl('lightbox');
  if (lb) lb.hidden = true;
  document.body.style.overflow = '';
}

window.openLightbox = function(show, idx) {
  var photos = PHOTOS[show];
  if (!photos) return;
  var lb  = lbGetEl('lightbox');
  var btn = lbGetEl('lbClose');
  if (!lb) return;
  lbShow = show;
  lbIdx  = idx || 0;
  lbRender();
  lb.hidden = false;
  document.body.style.overflow = 'hidden';
  if (btn) btn.focus();
};

document.addEventListener('DOMContentLoaded', function() {

  /* ── LIGHTBOX : boutons et raccourcis ── */
  var lb    = lbGetEl('lightbox');
  var btnClose = lbGetEl('lbClose');
  var btnPrev  = lbGetEl('lbPrev');
  var btnNext  = lbGetEl('lbNext');

  if (btnClose) btnClose.addEventListener('click', lbClose);
  if (btnPrev)  btnPrev.addEventListener('click',  function() { lbGo(-1); });
  if (btnNext)  btnNext.addEventListener('click',  function() { lbGo(1); });

  if (lb) {
    lb.addEventListener('click', function(e) {
      if (e.target === lb) lbClose();
    });
  }

  document.addEventListener('keydown', function(e) {
    var lb2 = lbGetEl('lightbox');
    if (!lb2 || lb2.hidden) return;
    if (e.key === 'Escape')     lbClose();
    if (e.key === 'ArrowLeft')  lbGo(-1);
    if (e.key === 'ArrowRight') lbGo(1);
  });

  /* Swipe tactile lightbox */
  if (lb) {
    var ltx = null;
    lb.addEventListener('touchstart', function(e) {
      ltx = e.changedTouches[0].clientX;
    }, { passive: true });
    lb.addEventListener('touchend', function(e) {
      if (ltx === null) return;
      var dx = e.changedTouches[0].clientX - ltx;
      if (Math.abs(dx) > 40) lbGo(dx < 0 ? 1 : -1);
      ltx = null;
    }, { passive: true });
  }

  /* ── ANNÉE FOOTER ── */
  var yearEl = lbGetEl('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── PARTICULES MAGIQUES ── */
  var emojis = ['✨','⭐','🌟','💫','🎭','🎪','🦄','🌈','🎠','🎡'];
  setInterval(function() {
    var p = document.createElement('div');
    p.className = 'magic-particle';
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    p.style.left = Math.random() * 100 + '%';
    p.style.bottom = '0';
    p.style.animationDuration = (4 + Math.random() * 4) + 's';
    p.style.animationDelay = '0s';
    p.style.fontSize = (0.8 + Math.random() * 0.8) + 'rem';
    document.body.appendChild(p);
    setTimeout(function() { p.remove(); }, 8000);
  }, 1200);

  /* ── ÉTOILES ── */
  var starsEl = lbGetEl('stars');
  if (starsEl) {
    for (var i = 0; i < 60; i++) {
      var s = document.createElement('div');
      s.className = 'star';
      var sz = Math.random() * 4 + 2;
      var colors = ['#ffcc00','#ff80c0','#80d0ff','#80ff99','#ff8080'];
      s.style.cssText =
        'width:' + sz + 'px;height:' + sz + 'px;' +
        'top:' + (Math.random() * 100) + '%;' +
        'left:' + (Math.random() * 100) + '%;' +
        'background:' + colors[Math.floor(Math.random() * colors.length)] + ';' +
        'animation-delay:' + (Math.random() * 5) + 's;' +
        'animation-duration:' + (2 + Math.random() * 4) + 's';
      starsEl.appendChild(s);
    }
  }

  /* ── NAV SCROLL ── */
  var nav = lbGetEl('nav');
  window.addEventListener('scroll', function() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 70);
  }, { passive: true });

  /* ── BURGER MENU ── */
  var burger   = lbGetEl('burger');
  var navLinks = lbGetEl('navLinks');
  if (burger && navLinks) {
    burger.addEventListener('click', function() {
      var open = navLinks.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    navLinks.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        navLinks.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        burger.focus();
        document.body.style.overflow = '';
      }
    });
  }

  /* ── CARROUSEL AVIS : pause au clic / tap ── */
  var track = lbGetEl('carousel-track');
  var hint  = document.querySelector('.carousel-hint');
  if (track) {
    var isPaused = false;
    function setPaused(val) {
      isPaused = val;
      track.classList.toggle('paused', val);
      if (hint) {
        hint.textContent = val ? '▶ Cliquez pour reprendre' : '⏸ Cliquez pour mettre en pause';
        hint.classList.toggle('is-paused', val);
      }
    }
    track.addEventListener('click', function() { setPaused(!isPaused); });
    var ctx = 0, ctt = 0;
    track.addEventListener('touchstart', function(e) {
      ctx = e.changedTouches[0].clientX;
      ctt = Date.now();
    }, { passive: true });
    track.addEventListener('touchend', function(e) {
      if (Math.abs(e.changedTouches[0].clientX - ctx) < 10 && Date.now() - ctt < 200) {
        setPaused(!isPaused);
      }
    }, { passive: true });
  }

  /* ── NEWSLETTER ── */
  var nlForm = lbGetEl('nlForm');
  if (nlForm) {
    nlForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var email   = lbGetEl('nl-email');
      var success = lbGetEl('nl-success');
      if (!email || !email.checkValidity()) { if (email) email.focus(); return; }
      nlForm.style.display = 'none';
      if (success) success.classList.add('show');
    });
  }

}); /* fin DOMContentLoaded */
