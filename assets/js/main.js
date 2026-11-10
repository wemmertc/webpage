/*
 * Script of the web page (all pages).
 *  - In the menus flagged with data-spy, marks the link of the part of the page being read.
 *  - Turns the links without address of the generated lists ([Name]()) into plain text.
 */
(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var scheduled = false;

  // The element a menu link points to, when it is in this page.
  function targetOf(link) {
    if (!link.hash || link.pathname !== window.location.pathname) { return null; }
    try {
      return document.getElementById(decodeURIComponent(link.hash.slice(1)));
    } catch (e) {
      return null;
    }
  }

  // The current part is the last one whose top has passed under the top bar.
  function spy() {
    scheduled = false;
    var line = (header ? header.getBoundingClientRect().bottom : 0) + 28;
    var doc = document.documentElement;
    var atEnd = doc.scrollHeight > window.innerHeight + 2 &&
                window.innerHeight + window.pageYOffset >= doc.scrollHeight - 2;

    Array.prototype.forEach.call(document.querySelectorAll('[data-spy]'), function (menu) {
      var links = Array.prototype.filter.call(menu.querySelectorAll('a'), targetOf);
      var current = links[0];
      links.forEach(function (link) {
        if (atEnd || targetOf(link).getBoundingClientRect().top <= line) { current = link; }
      });
      links.forEach(function (link) {
        if (link === current) {
          link.setAttribute('aria-current', 'true');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    });
  }

  function schedule() {
    if (!scheduled) {
      scheduled = true;
      window.requestAnimationFrame(spy);
    }
  }

  window.siteSpy = schedule;  // for the pages that build a menu themselves (publications.js)
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  window.addEventListener('load', schedule);
  document.addEventListener('toggle', schedule, true);  // a collapsible list was opened or closed

  Array.prototype.forEach.call(document.querySelectorAll('main a[href=""]'), function (link) {
    link.removeAttribute('href');
  });

  schedule();
})();
