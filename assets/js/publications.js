/*
 * Publications page: search, type filter, grouping by year or type,
 * abstract / BibTeX panels.
 *
 * The list is static HTML generated from HAL by
 * academic_life/python/generate_publications.py (_includes/publications_hal.html).
 * This script only rearranges the <li class="pub"> elements it finds there.
 */
(function () {
  'use strict';

  var list = document.getElementById('pub-list');
  var toolbar = document.getElementById('pub-toolbar');
  if (!list || !toolbar) { return; }

  var search = document.getElementById('pub-search');
  var chips = document.getElementById('pub-types');
  var groupBy = document.getElementById('pub-groupby');
  var count = document.getElementById('pub-count');
  var navList = document.querySelector('nav ul');
  var home = document.querySelector('.pub-back a');

  // [[key, title], ...] in display order, written by the generator.
  var GROUPS = JSON.parse(list.getAttribute('data-groups') || '[]');

  function fold(text) {
    return text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  }

  // Document order is most recent first; it is kept in every view.
  var pubs = Array.prototype.map.call(list.querySelectorAll('li.pub'), function (el) {
    var text = ['.pub-title', '.pub-authors', '.pub-venue'].map(function (selector) {
      var node = el.querySelector(selector);
      return node ? node.textContent : '';
    });
    text.push(el.getAttribute('data-year'), el.getAttribute('data-kw') || '');
    return {
      el: el,
      year: el.getAttribute('data-year') || 'Undated',
      group: el.getAttribute('data-group'),
      text: fold(text.join(' '))
    };
  });

  var state = { q: '', type: 'all', groupBy: 'year' };

  // ---- state <-> URL (so that a filtered view can be linked) ---------------

  function readUrl() {
    var params = new URLSearchParams(window.location.search);
    var type = params.get('type');
    state.q = params.get('q') || '';
    state.type = GROUPS.some(function (g) { return g[0] === type; }) ? type : 'all';
    state.groupBy = params.get('group') === 'type' ? 'type' : 'year';
  }

  function writeUrl() {
    var params = new URLSearchParams();
    if (state.q) { params.set('q', state.q); }
    if (state.type !== 'all') { params.set('type', state.type); }
    if (state.groupBy !== 'year') { params.set('group', state.groupBy); }
    var query = params.toString();
    window.history.replaceState(null, '', window.location.pathname + (query ? '?' + query : ''));
  }

  // ---- toolbar -------------------------------------------------------------

  function buildChips() {
    [['all', 'All']].concat(GROUPS).forEach(function (g) {
      if (g[0] !== 'all' && !pubs.some(function (p) { return p.group === g[0]; })) { return; }
      var chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'pub-chip';
      chip.setAttribute('data-type', g[0]);
      chip.appendChild(document.createTextNode(g[1] + ' '));
      chip.appendChild(document.createElement('span')).className = 'pub-chip-count';
      chips.appendChild(chip);
    });
  }

  function updateToolbar(found) {
    Array.prototype.forEach.call(chips.children, function (chip) {
      var type = chip.getAttribute('data-type');
      var n = found.filter(function (p) { return type === 'all' || p.group === type; }).length;
      chip.lastChild.textContent = n;
      chip.setAttribute('aria-pressed', String(type === state.type));
    });
    Array.prototype.forEach.call(groupBy.querySelectorAll('button'), function (button) {
      button.setAttribute('aria-pressed', String(button.getAttribute('data-groupby') === state.groupBy));
    });
  }

  // ---- list ----------------------------------------------------------------

  function sectionsOf(visible) {
    var sections = [];
    if (state.groupBy === 'type') {
      GROUPS.forEach(function (g) {
        var items = visible.filter(function (p) { return p.group === g[0]; });
        if (items.length) { sections.push({ id: 'type-' + g[0], title: g[1], items: items }); }
      });
    } else {
      visible.forEach(function (p) {
        var last = sections[sections.length - 1];
        if (!last || last.title !== p.year) {
          last = { id: 'year-' + p.year, title: p.year, items: [] };
          sections.push(last);
        }
        last.items.push(p);
      });
    }
    return sections;
  }

  function renderNav(sections) {
    if (!navList) { return; }
    function add(className, label, href) {
      var a = navList.appendChild(document.createElement('li')).appendChild(document.createElement('a'));
      a.parentNode.className = className;
      a.href = href;
      a.textContent = label;
    }
    navList.textContent = '';
    navList.className = state.groupBy === 'year' ? 'pub-nav-years' : '';
    if (home) { add('tag-h1', home.textContent, home.getAttribute('href')); }
    add('tag-h1', 'Publications', '#publications');
    sections.forEach(function (s) { add('tag-h2', s.title, '#' + s.id); });
  }

  function render() {
    var terms = fold(state.q).split(/\s+/).filter(Boolean);
    var found = pubs.filter(function (p) {
      return terms.every(function (term) { return p.text.indexOf(term) !== -1; });
    });
    var visible = found.filter(function (p) { return state.type === 'all' || p.group === state.type; });
    var sections = sectionsOf(visible);

    list.textContent = '';
    sections.forEach(function (s) {
      var title = list.appendChild(document.createElement('h2'));
      title.className = 'pub-group-title';
      title.id = s.id;
      title.textContent = s.title + ' ';
      var n = title.appendChild(document.createElement('span'));
      n.className = 'pub-group-count';
      n.textContent = s.items.length;
      var ul = list.appendChild(document.createElement('ul'));
      ul.className = 'pubs';
      s.items.forEach(function (p) { ul.appendChild(p.el); });
    });
    if (!visible.length) {
      list.appendChild(document.createElement('p')).className = 'pub-empty';
      list.lastChild.textContent = 'No publication matches these criteria.';
    }

    count.textContent = visible.length === pubs.length
      ? ''
      : visible.length + ' of ' + pubs.length + ' publications shown';
    updateToolbar(found);
    renderNav(sections);
  }

  function update() {
    writeUrl();
    render();
  }

  // ---- abstract / BibTeX panels -------------------------------------------

  function togglePanel(pub, name) {
    Array.prototype.forEach.call(pub.querySelectorAll('.pub-panel'), function (panel) {
      panel.hidden = panel.getAttribute('data-panel') !== name || !panel.hidden;
    });
    Array.prototype.forEach.call(pub.querySelectorAll('.pub-toggle'), function (button) {
      var panel = pub.querySelector('.pub-panel[data-panel="' + button.getAttribute('data-panel') + '"]');
      button.setAttribute('aria-expanded', String(!panel.hidden));
    });
  }

  function copyBibtex(button) {
    var pre = button.parentNode.querySelector('pre');
    function done(label) {
      button.textContent = label;
      window.setTimeout(function () { button.textContent = 'Copy'; }, 1500);
    }
    function selectText() {  // no clipboard access: leave the text selected for Ctrl/Cmd+C
      var range = document.createRange();
      range.selectNodeContents(pre);
      var selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      done('Selected');
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(pre.textContent).then(function () { done('Copied'); }, selectText);
    } else {
      selectText();
    }
  }

  // ---- wiring --------------------------------------------------------------

  function init() {
    readUrl();
    buildChips();
    search.value = state.q;

    pubs.forEach(function (p) {
      Array.prototype.forEach.call(p.el.querySelectorAll('.pub-toggle'), function (button) {
        button.hidden = false;
      });
    });
    toolbar.hidden = false;
    var summary = document.querySelector('.pub-summary');  // keep it right under the title
    if (summary) { toolbar.parentNode.insertBefore(summary, toolbar); }

    search.addEventListener('input', function () {
      state.q = search.value.trim();
      update();
    });
    chips.addEventListener('click', function (event) {
      var chip = event.target.closest('.pub-chip');
      if (!chip) { return; }
      state.type = chip.getAttribute('data-type');
      update();
    });
    groupBy.addEventListener('click', function (event) {
      var button = event.target.closest('button');
      if (!button) { return; }
      state.groupBy = button.getAttribute('data-groupby');
      update();
    });
    list.addEventListener('click', function (event) {
      var button = event.target.closest('button');
      if (!button) { return; }
      if (button.classList.contains('pub-toggle')) {
        togglePanel(button.closest('li.pub'), button.getAttribute('data-panel'));
      } else if (button.classList.contains('pub-copy')) {
        copyBibtex(button);
      }
    });

    render();

    // The headings (and their ids) are created by render(): honour a #hal-... or #year-... link now.
    if (window.location.hash.length > 1) {
      var target = document.getElementById(window.location.hash.slice(1));
      if (target) {
        try {
          target.scrollIntoView({ behavior: 'instant' });  // no animation on page load
        } catch (e) {
          target.scrollIntoView();
        }
      }
    }
  }

  // assets/js/main.js fills the side menu from the headings on jQuery's ready event;
  // registering after it guarantees that this page's menu replaces that one.
  if (window.jQuery) {
    window.jQuery(init);
  } else if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
