/* Animated backgrounds + content reveal.
   - Reveals .reveal / [data-anim] via a local IntersectionObserver so content
     never waits on the GSAP CDN (fixes "content loads slowly").
   - Lazily turns animated backgrounds on/off as sections enter the viewport.
   - Fully disabled under prefers-reduced-motion. */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    var revealEls = document.querySelectorAll('.reveal, [data-anim], .cs-reveal');

    // 1) Content reveal, independent of any CDN library.
    if (reduce || !('IntersectionObserver' in window)) {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
      var ro = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('is-visible'); ro.unobserve(e.target); }
        });
      }, { rootMargin: '0px 0px -6% 0px', threshold: 0.04 });
      revealEls.forEach(function (el) { ro.observe(el); });
    }

    // 2) Animated backgrounds: activate only while visible (and never under reduced motion).
    if (reduce || !('IntersectionObserver' in window)) return;
    var bgs = document.querySelectorAll('.anim-bg');
    if (!bgs.length) return;
    var bo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { e.target.classList.toggle('is-on', e.isIntersecting); });
    }, { rootMargin: '140px' });
    bgs.forEach(function (el) { bo.observe(el); });
  });
})();
