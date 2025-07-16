// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
  }
});

// Add click handlers for CTA buttons
document.querySelector('.btn-primary').addEventListener('click', () => {
  alert('Thank you for your interest! This would redirect to the volunteer sign-up page.');
});

document.querySelector('.btn-secondary').addEventListener('click', () => {
  alert('This would open our organization story video.');
});

document.querySelector('.donate-btn').addEventListener('click', () => {
  alert('Thank you for considering a donation! This would redirect to the donation page.');
});

// Animate stats on scroll
const observerOptions = {
  threshold: 0.7,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateStats();
    }
  });
}, observerOptions);

const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
  observer.observe(statsSection);
}

function animateStats() {
  const stats = document.querySelectorAll('.stat-number');
  stats.forEach((stat, index) => {
    const finalValue = stat.textContent;
    const numericValue = parseInt(finalValue.replace(/[^0-9]/g, ''));
    const suffix = finalValue.replace(/[0-9]/g, '');
    
    let current = 0;
    const increment = numericValue / 100;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        stat.textContent = finalValue;
        clearInterval(timer);
      } else {
        stat.textContent = Math.floor(current) + suffix;
      }
    }, 20);
  });
}