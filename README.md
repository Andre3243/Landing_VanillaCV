# Portafolio 

Un portafolio profesional y minimalista para mostrar trabajos de edición de video. Construido con **HTML, CSS y JavaScript vanilla** sin dependencias externas.

## 📋 Características

- ✨ **Diseño Minimalista y Moderno** - Interfaz limpia y profesional
- 📱 **Responsive Design** - Se adapta perfectamente a todos los dispositivos
- 🎥 **Galería de Vídeos** - Muestra tus proyectos con incrustaciones de YouTube
- 📧 **Formulario de Contacto** - Permite que los clientes se comuniquen contigo- ✨ **Animaciones de Scroll** - Elementos aparecen elegantemente conforme scrolleas
- 🎬 **Hero Pantalla Completa** - Presentación de impacto en la primera vista- 🚀 **Sin Dependencias** - Solo HTML, CSS y JavaScript puro
- ⚡ **Rendimiento Rápido** - Carga instantánea sin librerías pesadas

## 🏗️ Estructura del Proyecto

```
VIDEO EDITOR CV/
├── index.html          # Página principal
├── styles.css          # Estilos de la aplicación
├── script.js           # Funcionalidad JavaScript
└── README.md          # Este archivo
```

## 🎯 Secciones Principales

### 1. **Header (Encabezado)**
- Logo y nombre del portafolio
- Navegación con enlaces suave (smooth scroll)
- Diseño sticky que se queda en la parte superior

### 2. **Hero Section (Presentación)**
- **Pantalla completa** (100vh) para un impacto máximo
- Título personalizable con tu nombre o tagline
- Descripción de tu presentación
- Animaciones suaves de entrada
- Efecto parallax suave al hacer scroll

### 3. **Sección Sobre mí**
- **Texto largo y personalizable** para presentarte en profundidad
- Párrafos con placeholders para tus logros y especialidades
- Tarjetas con estadísticas (proyectos, experiencia, clientes)
- Animaciones de entrada progresivas

### 3. **Sección Sobre mí**
- **Texto largo y personalizable** para presentarte en profundidad
- Párrafos con placeholders para tus logros y especialidades
- Tarjetas con estadísticas (proyectos, experiencia, clientes)
- Animaciones de entrada progresivas

### 4. **Galería de Proyectos**
- Grilla responsiva (3 columnas en desktop, 1 en móvil)
- Incrustaciones de videos de YouTube
- Títulos y descripciones para cada proyecto
- Efectos hover interactivos
- **Animaciones al hacer scroll** - Los videos aparecen gradualmente conforme scrolleas

### 5. **Formulario de Contacto**
- Campos: Nombre, Correo, Mensaje
- Validación de email
- Feedback visual de envío
- Almacenamiento en consola (listo para integración con backend)

### 6. **Footer (Pie de página)**
- Información de copyright
- Diseño limpio y minimalista

## 🚀 Cómo Usar

### 1. **Abrir en el navegador**
```bash
# Simplemente abre index.html en tu navegador
# O usa un servidor local
python -m http.server 8000
```

### 2. **Personalizar el Portafolio**

#### Cambiar nombre y logo
En `index.html`, busca:
```html
<h1>VídeoCreator</h1>
```

#### Agregar tus vídeos
En `index.html`, reemplaza los enlaces de YouTube. Busca:
```html
<iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" ...>
```

Reemplaza `dQw4w9WgXcQ` con el ID de tu vídeo de YouTube.

#### Cambiar colores
En `styles.css`, modifica las variables CSS:
```css
:root {
    --color-primary: #1a1a1a;      /* Negro principal */
    --color-secondary: #0066ff;    /* Azul de acentos */
    --color-light: #f5f5f5;        /* Gris claro */
    --color-text: #333;            /* Color del texto */
    --color-border: #e0e0e0;       /* Color de bordes */
}
```

#### Integrar un backend para contacto
En `script.js`, reemplaza la función `simulateSendMessage()`:
```javascript
function simulateSendMessage(name, email, message) {
    // Reemplaza esto con tu backend
    fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        showFeedback('¡Mensaje enviado!', 'success');
        contactForm.reset();
    });
}
```

## 🎨 Personalizaciones Recomendadas

1. **Agregar tu información**
   - Cambiar "VídeoCreator" por tu nombre
   - Actualizar la descripción en la sección hero
   - Agregar tus videos reales

2. **Mejorar el diseño**
   - Agregar una foto de perfil
   - Agregar redes sociales en el footer
   - Personalizar colores según tu marca

3. **Funcionalidad avanzada**
   - Integrar con un servicio de email (Formspree, EmailJS)
   - Agregar filtros a la galería
   - Agregar blog o sección de testimonios

## 📱 Breakpoints Responsivos

- **Desktop**: 1200px (ancho máximo)
- **Tablet**: 768px
- **Mobile**: 480px

El diseño se adapta automáticamente a cualquier pantalla.

## 🔧 Requisitos

- Un navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code recomendado)
- Opcional: Servidor local para desarrollo

## 📚 Recursos Útiles

- [YouTube Embed](https://www.youtube.com/watch?v=dQw4w9WgXcQ) - Cómo obtener IDs de videos
- [CSS Grid Guide](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout)
- [Smooth Scroll](https://developer.mozilla.org/es/docs/Web/API/Element/scrollIntoView)

## 💡 Tips

- Usa videos de YouTube para mejor rendimiento
- Carga rápida sin necesidad de almacenar videos
- Fácil de mantener y actualizar
- Excelente punto de partida para un portafolio profesional

## 📄 Licencia

Libre para usar y modificar según tus necesidades.

---

**¡Listo para mostrar tus proyectos de edición de video!** 🎬✨
