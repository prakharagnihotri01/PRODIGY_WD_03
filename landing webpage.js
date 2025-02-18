// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Hero button animation
const heroButton = document.querySelector('.hero-btn');
heroButton.addEventListener('mouseenter', () => {
    heroButton.style.transform = 'scale(1.1)';
});
heroButton.addEventListener('mouseleave', () => {
    heroButton.style.transform = 'scale(1)';
});

// Sticky navbar effect on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(0, 0, 0, 0.8)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.3)';
    }
});

// Add animation to hero text on page load
window.addEventListener('load', () => {
    document.querySelector('.hero-content h2').style.opacity = '1';
    document.querySelector('.hero-content h2').style.transform = 'translateY(0)';
});
