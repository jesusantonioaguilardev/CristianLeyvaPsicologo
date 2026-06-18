/* Lic. Christian Martínez Leyva – Psicólogo Clínico
   Scripts principales */

document.addEventListener('DOMContentLoaded', () => {

  /* 1. MENÚ MÓVIL */
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  // Cierra el menú al hacer clic en un enlace
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });


  /* 2. FONDO DEL NAV AL HACER SCROLL */
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    navbar.style.background = window.scrollY > 60
      ? 'rgba(10, 26, 58, 0.98)'
      : 'rgba(10, 26, 58, 0.92)';
  });


  /* 3. SCROLL REVEAL */
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
  
  lucide.createIcons();

  /* 4. BOTÓN DE WHATSAPP */
  document.getElementById('btnEnviarWhatsapp').addEventListener('click', function() {
  // 1. Capturar los valores de los campos del formulario
  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const motivo = document.getElementById('motivo').value;
  const mensaje = document.getElementById('mensaje').value.trim();

  // 2. Validación básica
  if (!nombre || !apellido || !email || !telefono || !motivo) {
    alert('Por favor, completa todos los campos obligatorios antes de enviar.');
    return;
  }

  // 3. Tu número de WhatsApp real (Hermosillo)
  const miTelefonoWA = "526621448882"; // <-- Cambia esto por tu número real

  // 4. Construir el cuerpo del mensaje
  let cuerpoMensaje = `*Nueva solicitud de consulta*\n\n`;
  cuerpoMensaje += `*Nombre:* ${nombre} ${apellido}\n`;
  cuerpoMensaje += `*Correo electrónico:* ${email}\n`;
  cuerpoMensaje += `*Teléfono / WhatsApp:* ${telefono}\n`;
  cuerpoMensaje += `*Motivo de consulta:* ${motivo}\n`;
  
  if (mensaje) {
    cuerpoMensaje += `*Mensaje adicional:* ${mensaje}\n`;
  }

  // 5. Codificar de forma segura
  const textoCodificado = encodeURIComponent(cuerpoMensaje);

  // 6. Construir el enlace final y abrirlo
  const urlWhatsApp = `https://wa.me/${miTelefonoWA}?text=${textoCodificado}`;
  window.open(urlWhatsApp, '_blank');
});

});
