# Sitio Web – Lic. Christian Martínez Leyva
**Psicólogo Clínico · Hermosillo, Sonora**

---

## Estructura del proyecto

```
christian-martinez/
├── index.html          ← Página principal
├── css/
│   └── styles.css      ← Todos los estilos
├── js/
│   └── main.js         ← Menú móvil, scroll reveal, nav
├── img/                ← CREA esta carpeta y pon aquí las imágenes
│   └── christian-martinez.jpg   ← Foto profesional (cuando la tengas)
└── README.md           ← Este archivo
```

---

## Pasos para activar la foto

1. Crea la carpeta `img/` dentro del proyecto.
2. Guarda la foto con el nombre `christian-martinez.jpg`.
3. Abre `index.html` y busca el bloque comentado en la sección HERO.
4. Reemplaza el `<div class="photo-placeholder">` por:

```html
<img
  src="img/christian-martinez.jpg"
  alt="Lic. Christian Martínez Leyva, Psicólogo Clínico"
/>
```

---

## Datos que debes actualizar en index.html

| Campo | Dónde buscarlo | Qué poner |
|---|---|---|
| Teléfono / WhatsApp | Sección CONTACT | Número real del Lic. Christian |
| Correo electrónico | Sección CONTACT | Email profesional real |
| Horario | Sección CONTACT | Días y horas reales de consulta |

---

## Conectar el formulario (elige una opción)

### Opción A – WhatsApp directo (más fácil)
Reemplaza el botón `btn-submit` en `index.html` por un enlace:

```html
<a
  href="https://wa.me/526620000000?text=Hola,%20me%20gustaría%20agendar%20una%20consulta"
  target="_blank"
  class="btn-primary"
  style="display:block; text-align:center; width:100%;"
>
  Contactar por WhatsApp
</a>
```

### Opción B – Formspree (correo gratuito)
1. Regístrate en https://formspree.io
2. Crea un nuevo formulario y obtén tu endpoint
3. En `index.html`, agrega `action="https://formspree.io/f/TU_ID"` y `method="POST"` al formulario
4. Cambia el `<button type="button">` por `<button type="submit">`

---

## Colores del sitio

| Nombre | Hex | Uso |
|---|---|---|
| Verde Pino | `#2C3E35` | Secciones claras, tarjeta About |
| Azul Marino | `#0A1A3A` | Hero, Servicios, Footer |
| Crema | `#F5F0E8` | Fondo principal, textos sobre oscuro |
| Arena | `#E8E0D0` | Sección "Mi enfoque" |
| Dorado | `#C8A96E` | Acentos, botones, eyebrows |

---

## Cómo publicarlo

- **Gratis:** Netlify (arrastra la carpeta a https://app.netlify.com/drop)
- **Con dominio propio:** Hostinger, cPanel, o cualquier hosting compartido
- **GitHub Pages:** Sube el proyecto a un repo público y activa Pages
