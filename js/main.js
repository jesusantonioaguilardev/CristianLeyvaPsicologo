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
      navbar.style.background = window.scrollY > 60
        ? 'rgba(10, 26, 58, 0.98)'
        : 'rgba(10, 26, 58, 0.92)';
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
  btnEnviar.addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const motivo = document.getElementById('motivo').value;
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !apellido || !email || !telefono || !motivo) {
      alert('Por favor, completa todos los campos obligatorios antes de enviar.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Por favor, ingresa un correo válido.');
      return;
    }

    const miTelefonoWA = "526621448882";

    let cuerpoMensaje = `*Nueva solicitud de consulta*\n\n`;
    cuerpoMensaje += `*Nombre:* ${nombre} ${apellido}\n`;
    cuerpoMensaje += `*Correo electrónico:* ${email}\n`;
    cuerpoMensaje += `*Teléfono / WhatsApp:* ${telefono}\n`;
    cuerpoMensaje += `*Motivo de consulta:* ${motivo}\n`;
    
    if (mensaje) {
      cuerpoMensaje += `*Mensaje adicional:* ${mensaje}\n`;
    }

    const textoCodificado = encodeURIComponent(cuerpoMensaje);
    const urlWhatsApp = `https://wa.me/${miTelefonoWA}?text=${textoCodificado}`;
    window.open(urlWhatsApp, '_blank');
  });
  
  btnEnviar.addEventListener('touchstart', function() {
    this.style.opacity = '0.8';
  });
  
  btnEnviar.addEventListener('touchend', function() {
    this.style.opacity = '1';
  });

});


