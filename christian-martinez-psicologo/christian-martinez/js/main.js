/* ══════════════════════════════════════════════
   Lic. Christian Martínez Leyva – Psicólogo Clínico
   Scripts principales
   ══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. MENÚ MÓVIL ── */
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  // Cierra el menú al hacer clic en un enlace
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });


  /* ── 2. FONDO DEL NAV AL HACER SCROLL ── */
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    navbar.style.background = window.scrollY > 60
      ? 'rgba(10, 26, 58, 0.98)'
      : 'rgba(10, 26, 58, 0.92)';
  });


  /* ── 3. SCROLL REVEAL ── */
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));

});
