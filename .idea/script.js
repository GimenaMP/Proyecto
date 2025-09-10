// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.innerHTML = navMenu.classList.contains('active') ?
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Hours Panel Toggle
const hoursTab = document.querySelector('.hours-tab');
const hoursContent = document.querySelector('.hours-content');
const closeHours = document.querySelector('.close-hours');

hoursTab.addEventListener('click', () => {
    hoursContent.classList.add('active');
});

closeHours.addEventListener('click', () => {
    hoursContent.classList.remove('active');
});

// Close hours panel when clicking outside
document.addEventListener('click', (e) => {
    if (!hoursContent.contains(e.target) && e.target !== hoursTab) {
        hoursContent.classList.remove('active');
    }
});

// Reservation Modal
const reservarBtn = document.getElementById('reservarBtn');
const reservationModal = document.getElementById('reservationModal');
const closeModal = document.querySelector('.close-modal');

reservarBtn.addEventListener('click', () => {
    reservationModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    reservationModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === reservationModal) {
        reservationModal.style.display = 'none';
    }
});

// Form submission
document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Reserva enviada con éxito! Nos pondremos en contacto contigo pronto.');
    reservationModal.style.display = 'none';
    this.reset();
});

// Scroll to top button
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'linear-gradient(to right, var(--color-primary), var(--color-secondary))';
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'linear-gradient(to right, var(--color-primary), var(--color-secondary))';
        header.style.boxShadow = 'var(--shadow)';
    }
});

// Add animation to elements on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('float-animation');
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .about-card').forEach(card => {
    observer.observe(card);
});