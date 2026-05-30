# Instrucciones de Copilot - Portafolio de Editor de Video

Este proyecto es un portafolio minimalista de edición de video construido con HTML, CSS y JavaScript vanilla.

## Estructura del Proyecto

```
VIDEO EDITOR CV/
├── index.html          # Página principal con estructura HTML
├── styles.css          # Estilos minimalistas y responsivos
├── script.js           # Funcionalidad con JavaScript puro
├── README.md          # Documentación completa
└── .github/
    └── copilot-instructions.md  # Este archivo
```

## Guía de Personalización

### 1. Personalizar la sección de presentación (Hero)
- Abre `index.html`
- Busca la sección `<!-- Hero Section - PERSONALIZA AQUÍ -->`
- Cambia:
  - `Tu Título Aquí` → tu nombre o tagline
  - `Tu descripción o frase motivadora aquí` → tu presentación personal
- La sección ocupa la pantalla completa (100vh) con animaciones suaves

### 2. Personalizar la sección "Sobre mí"
- En `index.html`, busca `<!-- Sección Sobre mí -->`
- Reemplaza los placeholders:
  - `[TU EXPERIENCIA]` → años y tipo de experiencia
  - `[TU ESPECIALIDAD 1], [TU ESPECIALIDAD 2], [TU ESPECIALIDAD 3]` → tus especialidades
  - `[TUS HOBBIES/INTERESES]` → tus pasatiempos
- Modifica los números en las tarjetas de estadísticas
- Personaliza los textos de "Proyectos completados", "Años de experiencia", "Clientes satisfechos"

### 3. Cambiar el nombre del portafolio
- Abre `index.html`
- Busca `<h1>VídeoCreator</h1>` en el header
- Reemplaza con tu nombre o marca

### 4. Agregar tus videos
- En `index.html`, busca las secciones `<iframe>`
- Reemplaza los IDs de YouTube con los de tus videos
- Ejemplo: `src="https://www.youtube.com/embed/TU_ID_AQUI"`

### 5. Cambiar colores
- Abre `styles.css`
- Modifica las variables CSS en `:root`
- Colores principales:
  - `--color-primary`: #1a1a1a (negro)
  - `--color-secondary`: #0066ff (azul)
  - `--color-light`: #f5f5f5 (gris claro)

### 6. Actualizar descripciones
- En `index.html`, modifica:
  - Títulos de proyectos (etiquetas `<h3>`)
  - Descripciones (etiquetas `<p>`)
  - Texto del formulario

## Características Principales

- ✨ Diseño minimalista y profesional
- 📱 Totalmente responsivo (mobile, tablet, desktop)
- 🎥 Galería de videos incrustados
- 📧 Formulario de contacto funcional
- ⚡ Sin dependencias externas
- 🚀 Carga rápida y rendimiento optimizado

## Funcionalidades JavaScript

### Formulario de Contacto
- Validación de campos
- Validación de email
- Feedback visual de envío
- Limpiar formulario tras envío

### Smooth Scroll
- Navegación suave entre secciones
- Enlaces internos con transiciones fluidas

### Animaciones
- Efectos hover en elementos
- Animaciones al hacer scroll
- Transiciones suaves

## Integración con Backend

Para conectar el formulario con un servidor:

1. En `script.js`, busca la función `simulateSendMessage()`
2. Reemplaza el contenido con:

```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
})
.then(response => response.json())
.then(data => {
    showFeedback('¡Mensaje enviado!', 'success');
    contactForm.reset();
})
.catch(error => {
    showFeedback('Error al enviar. Intenta de nuevo.', 'error');
});
```

## Mejoras Sugeridas

1. **Agregar redes sociales** en el footer
2. **Agregar filtros** a la galería (trabajos, categorías)
3. **Agregar testimonios** de clientes
4. **Mejorar SEO** con meta tags
5. **Agregar animaciones** más avanzadas
6. **Integrar Google Analytics**

## Notas de Desarrollo

- No hay dependencias npm, todo es vanilla
- Compatible con navegadores modernos
- Optimizado para rendimiento
- Fácil de mantener y actualizar

---

Para preguntas sobre personalización, consulta el README.md del proyecto.
