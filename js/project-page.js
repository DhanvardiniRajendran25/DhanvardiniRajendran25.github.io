/* =========================================================
   Project case-study pages - shared behavior.
   Theme toggle, scroll progress, Lenis, GSAP reveals,
   interactive PRD tabs, prototype (chat + court), slide deck.
   Every block is guarded so pages can omit any component.
   ========================================================= */
(function () {
  'use strict';

  var prefersReduced = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Theme toggle ---------- */
  var toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme');
      var next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  /* ---------- Mobile nav toggle (hamburger) ---------- */
  (function mobileNav() {
    var header = document.querySelector('.site-header');
    var nav = header && header.querySelector('.site-nav');
    if (!header || !nav) return;
    var btn = document.createElement('button');
    btn.className = 'nav-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Toggle navigation menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML =
      '<svg class="icon-menu" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>' +
      '<svg class="icon-close" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
    var themeBtn = document.getElementById('themeToggle');
    if (themeBtn && themeBtn.parentNode === header) header.insertBefore(btn, themeBtn);
    else header.appendChild(btn);

    function setOpen(open) {
      header.classList.toggle('nav-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    btn.addEventListener('click', function () { setOpen(!header.classList.contains('nav-open')); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 860) setOpen(false); });
  })();

  /* ---------- Scroll progress bar ---------- */
  var bar = document.getElementById('csProgress');
  if (bar) {
    var onScroll = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var pct = max > 0 ? (h.scrollTop || document.body.scrollTop) / max * 100 : 0;
      bar.style.width = pct + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Interactive PRD tabs ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('.prd'), function (prd) {
    var tabs = prd.querySelectorAll('.prd-tab');
    var panels = prd.querySelectorAll('.prd-panel');
    Array.prototype.forEach.call(tabs, function (tab, i) {
      tab.addEventListener('click', function () {
        Array.prototype.forEach.call(tabs, function (t) { t.classList.remove('is-active'); });
        Array.prototype.forEach.call(panels, function (p) { p.classList.remove('is-active'); });
        tab.classList.add('is-active');
        if (panels[i]) panels[i].classList.add('is-active');
      });
    });
  });

  /* ---------- Prototype: tab switching (Scout / Simulator etc.) ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('.proto-frame'), function (frame) {
    var tabs = frame.querySelectorAll('.proto-tab');
    var screens = frame.querySelectorAll('.proto-screen');
    Array.prototype.forEach.call(tabs, function (tab, i) {
      tab.addEventListener('click', function () {
        Array.prototype.forEach.call(tabs, function (t) { t.classList.remove('is-active'); });
        Array.prototype.forEach.call(screens, function (s) { s.classList.remove('is-active'); });
        tab.classList.add('is-active');
        if (screens[i]) screens[i].classList.add('is-active');
      });
    });
  });

  /* ---------- Prototype: chat chips -> answers ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('[data-chat]'), function (screen) {
    var chips = screen.querySelectorAll('.proto-chip');
    var qEl = screen.querySelector('.proto-q');
    var aEl = screen.querySelector('.proto-a');
    if (!aEl) return;
    var answers = screen.querySelectorAll('.proto-answer');

    function show(chip) {
      Array.prototype.forEach.call(chips, function (c) { c.classList.remove('is-active'); });
      chip.classList.add('is-active');
      var targetId = chip.getAttribute('data-target');
      if (qEl) qEl.textContent = chip.getAttribute('data-q') || chip.textContent;
      aEl.innerHTML = '<p class="proto-typing">Scouting' + '…' + '</p>';
      var delay = prefersReduced ? 0 : 650;
      setTimeout(function () {
        var src = document.getElementById(targetId);
        aEl.innerHTML = src ? src.innerHTML : '<p>No data.</p>';
      }, delay);
    }
    Array.prototype.forEach.call(chips, function (chip) {
      chip.addEventListener('click', function () { show(chip); });
    });
    if (chips.length) show(chips[0]); // open first by default
  });

  /* ---------- Prototype: court simulator ---------- */
  (function court() {
    var root = document.getElementById('court');
    if (!root || !window.COURT) return;
    var C = window.COURT;
    var ball = root.querySelector('#ball');
    var scA = root.querySelector('.pts.ta');
    var scB = root.querySelector('.pts.tb');
    var clockEl = root.querySelector('.court-clock');
    var feed = root.querySelector('.court-plays');
    var ctrls = root.querySelectorAll('.court-btn');
    var idx = 0, pressed = false;

    function moveBall(loc) {
      if (!ball || !C.loc[loc]) return;
      ball.setAttribute('cx', C.loc[loc].x);
      ball.setAttribute('cy', C.loc[loc].y);
    }
    function render(chunk) {
      if (!chunk) return;
      chunk.plays.forEach(function (p) {
        var row = document.createElement('div');
        row.className = 'court-play' + (p.coach ? ' coach' : '');
        row.innerHTML = p.coach
          ? ('📣 COACH: ' + p.text)
          : ('<b>' + p.t + '</b> ' + p.team + ' · ' + p.text);
        feed.appendChild(row);
        if (p.loc) moveBall(p.loc);
        if (p.score) { if (scA) scA.textContent = p.score[0]; if (scB) scB.textContent = p.score[1]; }
      });
      if (chunk.clock && clockEl) clockEl.textContent = C.teamA + ' ' + (chunk.label || '') + ' · Q4 ' + chunk.clock;
      feed.scrollTop = feed.scrollHeight;
    }

    Array.prototype.forEach.call(ctrls, function (btn) {
      btn.addEventListener('click', function () {
        var act = btn.getAttribute('data-act');
        if (act === 'press' && !pressed && C.press) {
          pressed = true;
          render(C.press);
          btn.disabled = true;
        } else if (act === 'continue') {
          if (idx < C.chunks.length) { render(C.chunks[idx]); idx++; }
          if (idx >= C.chunks.length) { btn.disabled = true; btn.textContent = 'Final'; }
        }
      });
    });
    // seed first chunk
    if (C.chunks.length) { render(C.chunks[0]); idx = 1; }
  })();

  /* ---------- Slide deck ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('.deck'), function (deck) {
    var slides = deck.querySelectorAll('.deck-slide');
    var dotsWrap = deck.querySelector('.deck-dots');
    var prev = deck.querySelector('[data-deck="prev"]');
    var next = deck.querySelector('[data-deck="next"]');
    var i = 0;
    var dots = [];
    if (dotsWrap) {
      Array.prototype.forEach.call(slides, function (s, n) {
        var d = document.createElement('button');
        d.className = 'deck-dot' + (n === 0 ? ' is-active' : '');
        d.setAttribute('aria-label', 'Slide ' + (n + 1));
        d.addEventListener('click', function () { go(n); });
        dotsWrap.appendChild(d); dots.push(d);
      });
    }
    function go(n) {
      i = (n + slides.length) % slides.length;
      Array.prototype.forEach.call(slides, function (s, k) { s.classList.toggle('is-active', k === i); });
      dots.forEach(function (d, k) { d.classList.toggle('is-active', k === i); });
    }
    if (prev) prev.addEventListener('click', function () { go(i - 1); });
    if (next) next.addEventListener('click', function () { go(i + 1); });
    deck.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') go(i - 1);
      if (e.key === 'ArrowRight') go(i + 1);
    });
    deck.setAttribute('tabindex', '0');
  });

  /* ---------- Lenis smooth scroll ---------- */
  var lenis = null;
  if (typeof Lenis !== 'undefined' && !prefersReduced) {
    lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    if (bar) lenis.on('scroll', function (e) {
      var max = e.dimensions ? (e.dimensions.scrollHeight - e.dimensions.height) : 0;
      if (max > 0) bar.style.width = (e.scroll / max * 100) + '%';
    });
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href');
        if (id.length > 1) {
          var target = document.querySelector(id);
          if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: -70 }); }
        }
      });
    });
  }

  /* ---------- GSAP scroll reveals ---------- */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && !prefersReduced) {
    gsap.registerPlugin(ScrollTrigger);
    if (lenis) lenis.on('scroll', ScrollTrigger.update);
    document.querySelectorAll('.cs-reveal').forEach(function (el) {
      ScrollTrigger.create({
        trigger: el, start: 'top 86%', once: true,
        onEnter: function () { el.classList.add('is-visible'); }
      });
    });
  } else {
    document.querySelectorAll('.cs-reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
