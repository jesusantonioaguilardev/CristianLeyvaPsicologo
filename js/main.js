document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');

  const closeMenu = () => links.classList.remove('open');

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !links.contains(e.target)) {
      closeMenu();
    }
  });

  links.addEventListener('touchend', () => {
    setTimeout(closeMenu, 200);
  });

  const navbar = document.getElementById('navbar');

  let scrollTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (window.scrollY > 60) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.classList.add('scrolled');
      } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.classList.remove('scrolled');
      }
    }, 10);
  }, { passive: true });

  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));

  lucide.createIcons();

  const btnEnviar = document.getElementById('btnEnviarWhatsapp');

  btnEnviar.addEventListener('click', function () {
    const nombre   = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email    = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const motivo   = document.getElementById('motivo').value;
    const mensaje  = document.getElementById('mensaje').value.trim();

    if (!nombre || !apellido || !email || !telefono || !motivo) {
      alert('Por favor, completa todos los campos obligatorios antes de enviar.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Por favor, ingresa un correo válido.');
      return;
    }

    const miTelefonoWA = "526621448882";

    let cuerpo = `*Nueva solicitud de consulta*\n\n`;
    cuerpo += `*Nombre:* ${nombre} ${apellido}\n`;
    cuerpo += `*Correo electrónico:* ${email}\n`;
    cuerpo += `*Teléfono / WhatsApp:* ${telefono}\n`;
    cuerpo += `*Motivo de consulta:* ${motivo}\n`;
    if (mensaje) cuerpo += `*Mensaje adicional:* ${mensaje}\n`;

    const url = `https://wa.me/${miTelefonoWA}?text=${encodeURIComponent(cuerpo)}`;
    window.open(url, '_blank');
  });

  btnEnviar.addEventListener('touchstart', function () { this.style.opacity = '0.8'; });
  btnEnviar.addEventListener('touchend',   function () { this.style.opacity = '1'; });

});
