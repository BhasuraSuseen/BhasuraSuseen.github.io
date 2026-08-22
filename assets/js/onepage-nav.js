// Highlights the top navbar tab matching whichever section of the merged
// one-page home (_layouts/about.html) is currently in view. Deliberately
// independent of Bootstrap's ScrollSpy: the toc-sidebar feature (common.js)
// already attaches its own ScrollSpy instance to <body> for the left
// quick-nav, and only one such instance can live on a given element, so this
// uses a plain IntersectionObserver instead of fighting over that slot.
// No-op on any page that doesn't have matching #id sections (i.e. every page
// except the home page).
var onepageNavObserver = null;

function initOnePageNav() {
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('#navbar .navbar-nav > .nav-item > a.nav-link[href*="#"]')
  );

  var sections = navLinks.reduce(function (acc, link) {
    var hash = link.getAttribute('href').split('#')[1];
    var el = hash && document.getElementById(hash);
    if (el) acc.push({ link: link, el: el });
    return acc;
  }, []);

  if (!sections.length || typeof IntersectionObserver === 'undefined') return;

  if (onepageNavObserver) onepageNavObserver.disconnect();

  var setActive = function (activeLink) {
    sections.forEach(function (s) {
      s.link.classList.toggle('active', s.link === activeLink);
    });
  };

  onepageNavObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var match = sections.filter(function (s) { return s.el === entry.target; })[0];
        if (match) setActive(match.link);
      });
    },
    { rootMargin: '-88px 0px -70% 0px', threshold: 0 }
  );

  sections.forEach(function (s) { onepageNavObserver.observe(s.el); });
}

document.addEventListener('DOMContentLoaded', initOnePageNav);

// Re-run on a back/forward-cache restore (see assets/js/common.js for why):
// DOMContentLoaded doesn't fire again, and while the previous observer
// keeps running, it won't have fired for the section already in view when
// the page was frozen, so the highlighted tab can be stale until the user
// scrolls. Re-creating it re-evaluates the current scroll position.
window.addEventListener('pageshow', function (event) {
  if (event.persisted) {
    initOnePageNav();
  }
});
