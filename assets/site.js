/* YancoTV release site — motion, tabs, folds, and the live version read.
   No framework, no build step. Everything degrades to a working page if
   this file never loads. */
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── scroll reveal ───────────────────────────────────────────────── */

  // Array.prototype.slice, not NodeList.forEach: older TV browsers ship a
  // NodeList without forEach, and this must not be the thing that throws.
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  if (!reduced && "IntersectionObserver" in window) {
    try {
      // Added first so there's no flash of visible-then-hidden; the catch
      // below takes it straight back off if anything here fails, which
      // restores every block to visible rather than stranding it hidden.
      document.documentElement.classList.add("js-reveal");

      var io = new IntersectionObserver(function (entries) {
        for (var j = 0; j < entries.length; j++) {
          if (!entries[j].isIntersecting) continue;
          entries[j].target.classList.add("is-in");
          io.unobserve(entries[j].target);
        }
      }, { rootMargin: "0px 0px -12% 0px", threshold: 0.08 });

      for (var i = 0; i < reveals.length; i++) {
        // Stagger siblings a touch so a grid doesn't snap in as one block.
        reveals[i].style.transitionDelay = (Math.min(i % 4, 3) * 70) + "ms";
        io.observe(reveals[i]);
      }
    } catch (err) {
      document.documentElement.classList.remove("js-reveal");
    }
  }

  /* ── sticky nav ──────────────────────────────────────────────────── */

  var nav = document.getElementById("nav");
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("is-stuck", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ── install tabs ────────────────────────────────────────────────── */

  var tabWrap = document.querySelector(".tabs");
  if (tabWrap) {
    var tabs = Array.prototype.slice.call(tabWrap.querySelectorAll(".tab"));
    var ink = tabWrap.querySelector(".tab-ink");

    var moveInk = function (tab) {
      if (!ink || !tab) return;
      // Physical offsets on purpose: this works unchanged when the page
      // flips to RTL, which inset-inline positioning would not.
      ink.style.transform = "translateX(" + tab.offsetLeft + "px)";
      ink.style.width = tab.offsetWidth + "px";
    };

    var select = function (tab) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.classList.toggle("is-on", on);
        t.setAttribute("aria-selected", on ? "true" : "false");
        var panel = document.getElementById(t.getAttribute("aria-controls"));
        if (!panel) return;
        panel.hidden = !on;
        panel.classList.toggle("is-on", on);
        if (on && !reduced) {
          panel.classList.remove("is-entering");
          void panel.offsetWidth;           // restart the animation
          panel.classList.add("is-entering");
        }
      });
      moveInk(tab);
    };

    tabs.forEach(function (tab, idx) {
      tab.addEventListener("click", function () { select(tab); });
      tab.addEventListener("keydown", function (e) {
        var d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        // In RTL the arrow that "moves forward" is the other one.
        if (document.documentElement.dir === "rtl") d = -d;
        var next = tabs[(idx + d + tabs.length) % tabs.length];
        next.focus();
        select(next);
      });
    });

    var syncInk = function () { moveInk(tabWrap.querySelector(".tab.is-on")); };
    window.addEventListener("resize", syncInk);
    window.addEventListener("yanco:lang", function () { setTimeout(syncInk, 30); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(syncInk);
    syncInk();
  }

  /* ── copy buttons ────────────────────────────────────────────────── */

  document.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest(".copy") : null;
    if (!btn) return;

    var text = btn.getAttribute("data-copy") || "";
    var done = function () {
      var was = btn.textContent;
      btn.textContent = btn.getAttribute("data-copied") || "Copied";
      btn.classList.add("is-done");
      setTimeout(function () {
        btn.textContent = was;
        btn.classList.remove("is-done");
      }, 1600);
    };

    var legacy = function () {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); done(); } catch (err) {}
      document.body.removeChild(ta);
    };

    // Fall back rather than give up: the async clipboard rejects on
    // insecure origins and wherever permission is refused, and a Copy
    // button that silently does nothing is worse than no button.
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, legacy);
    } else {
      legacy();
    }
  });

  /* ── live version, straight from the update feed ─────────────────── */

  // update.json is the manifest the installed app already polls for updates.
  // Reading it here means the page can never advertise a version that the
  // app doesn't actually consider current -- there is only one number to
  // maintain, and it is the one that already gets maintained every release.
  fetch("update.json", { cache: "no-cache" })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (d) {
      if (!d) return;

      if (d.versionName) {
        var v = "v" + d.versionName;
        ["ver-badge", "ver-badge-2"].forEach(function (id) {
          var el = document.getElementById(id);
          if (el) el.textContent = v;
        });
      }

      var sha = document.getElementById("sha-box");
      if (sha && d.sha256) sha.textContent = d.sha256;

      var notes = document.getElementById("rel-notes");
      if (notes && d.releaseNotes) {
        notes.textContent = d.releaseNotes;
        notes.parentElement.hidden = false;
      }
    })
    .catch(function () { /* offline, or opened as a file:// — the page still works */ });
})();
