// =====================
// Theme Toggle
// =====================

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Cargar tema guardado al iniciar
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateToggleIcon(savedTheme);
}

// Actualizar icono del botón
function updateToggleIcon(theme) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Event listener del botón toggle
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleIcon(newTheme);
});

// Inicializar tema al cargar la página
initTheme();

// =====================
// Aviso de desarrollo
// =====================

function initDevBanner() {
    const header = document.querySelector('.header');
    if (!header) return;

    const banner = document.createElement('div');
    banner.className = 'dev-banner';
    banner.id = 'devBanner';
    banner.setAttribute('role', 'status');
    banner.innerHTML = `
        <div class="container dev-banner__inner">
            <p class="dev-banner__text">La página sigue en Desarrollo</p>
            <button type="button" class="dev-banner__close" aria-label="Cerrar aviso" title="Cerrar">&times;</button>
        </div>
    `;

    header.appendChild(banner);

    banner.querySelector('.dev-banner__close').addEventListener('click', () => {
        banner.classList.add('dev-banner--hidden');
        setTimeout(() => banner.remove(), 300);
    });
}

initDevBanner();

// =====================
// Manejo del Formulario
// =====================

const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener valores del formulario
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validación básica
    if (!name || !email || !phone || !subject || !message) {
        showFeedback('Por favor completa todos los campos', 'error');
        return;
    }

    // Validar email
    if (!isValidEmail(email)) {
        showFeedback('Por favor ingresa un correo válido', 'error');
        return;
    }

    // Validar teléfono (al menos 10 dígitos)
    if (!isValidPhone(phone)) {
        showFeedback('Por favor ingresa un teléfono válido (mínimo 10 dígitos)', 'error');
        return;
    }

    // Simular envío (en producción aquí iría una petición al servidor)
    simulateSendMessage(name, email, phone, subject, message);
});

// Función para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para validar teléfono
function isValidPhone(phone) {
    const phoneRegex = /^\d{10,}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
}

// Función para mostrar feedback
function showFeedback(message, type) {
    formFeedback.textContent = message;
    formFeedback.className = `form-feedback ${type}`;
    
    // Limpiar feedback después de 5 segundos
    setTimeout(() => {
        formFeedback.textContent = '';
        formFeedback.className = 'form-feedback';
    }, 5000);
}

// Función para simular envío del mensaje
function simulateSendMessage(name, email, phone, subject, message) {
    // Mostrar mensaje de carga
    showFeedback('Enviando mensaje...', '');

    // Simular delay de envío
    setTimeout(() => {
        // En una aplicación real, aquí harías una petición HTTP
        // fetch('/api/contact', { method: 'POST', body: JSON.stringify({name, email, phone, subject, message}) })

        // Log en consola (para demostración)
        console.log('Mensaje enviado:', { name, email, phone, subject, message });

        // Mostrar éxito
        showFeedback('¡Mensaje enviado correctamente! Te contactaremos pronto.', 'success');

        // Limpiar formulario
        contactForm.reset();
    }, 1000);
}

// =====================
// Background hero dynamic
// =====================

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroSection.addEventListener('pointermove', (e) => {
        const { currentTarget: el, clientX: x, clientY: y } = e;
        const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
        el.style.setProperty('--posX', x - l - w / 2);
        el.style.setProperty('--posY', y - t - h / 2);
    });
}

// =====================
// Smooth Scroll
// =====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // No hacer smooth scroll si es el primer enlace vacío
        if (href === '#') return;

        e.preventDefault();

        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =====================
// Intersection Observer - Fade In on Scroll
// =====================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar todos los elementos con clase fade-in-section
document.querySelectorAll('.fade-in-section').forEach(element => {
    observer.observe(element);
});

// =====================
// Efecto de carga
// =====================

// Agregar clase cuando la página carga
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portafolio de video cargado correctamente');
    
    // Puedes agregar animaciones adicionales aquí
    animateElementsOnScroll();
});

// =====================
// Animaciones al scroll
// =====================

function animateElementsOnScroll() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Agregar delay progresivo entre elementos
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 150); // Aumentado a 150ms para más espaciado
            }
        });
    }, observerOptions);

    // Observar elementos de la galería con clase específica
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.classList.add('animate-element');
        observer.observe(item);
    });

    // Observar elementos de la sección "Sobre mí"
    document.querySelectorAll('.about h2, .about-text, .stat').forEach((item, index) => {
        item.classList.add('animate-element');
        // Agregar delay diferente a cada elemento
        item.style.animationDelay = `${index * 0.15}s`;
        observer.observe(item);
    });
}

// Estilos para animación (agregados dinámicamente)
const style = document.createElement('style');
style.textContent = `
    .animate-element {
        opacity: 0;
        transform: translateY(60px) scale(0.95);
        transition: opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), 
                    transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    
    .animate-element.animate-in {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
    
    /* Smooth scroll behavior para todos los navegadores */
    html {
        scroll-behavior: smooth;
    }
`;
document.head.appendChild(style);

// =====================
// Logger para debugging
// =====================

console.log('%c🎬 Portafolio de Video Cargado', 'color: #0066ff; font-size: 14px; font-weight: bold;');
console.log('%cDisponible en tu navegador', 'color: #666; font-size: 12px;');
