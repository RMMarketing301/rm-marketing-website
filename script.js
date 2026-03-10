// ── NAV SCROLL ──
const nav = document.querySelector('nav');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll(
  '.card, .paquete, .nicho-chip, .sobre-foto-main, .sobre-foto-sub, .visibilidad-img-wrap, .addon-box, blockquote'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  observer.observe(el);
});

// ── SECTION TITLES REVEAL ──
const titleEls = document.querySelectorAll('h2, .section-label, .eyebrow');
const titleObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      titleObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

titleEls.forEach(el => {
  el.classList.add('reveal-title');
  titleObserver.observe(el);
});
