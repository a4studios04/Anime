// Hero section entry animations
anime.timeline({ easing: 'easeOutExpo', duration: 1100 })
  .add({
    targets: '.hero-title',
    translateY: [60, 0],
    opacity: [0, 1]
  })
  .add({
    targets: '.hero-subtitle',
    translateY: [40, 0],
    opacity: [0, 1]
  }, '-=800')
  .add({
    targets: '.hero-btn',
    scale: [0.7, 1],
    opacity: [0, 1]
  }, '-=700');

// Animate sections as they scroll into view
const revealEls = document.querySelectorAll('.reveal');

function animateReveal(el) {
  anime({
    targets: el,
    translateY: [40, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo'
  });
}

function handleScrollReveal() {
  revealEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80 && el.style.opacity !== '1') {
      animateReveal(el);
      el.style.opacity = '1';
    }
  });
}

window.addEventListener('scroll', handleScrollReveal, { passive: true });
window.addEventListener('DOMContentLoaded', handleScrollReveal);
