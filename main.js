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

// Floating heart effect on the sponsor button
function createFloatHearts() {
  const svg = document.querySelector('.sponsor-btn .hearts');
  if (!svg) return;
  for (let i = 0; i < 3; i++) {
    let heart = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    heart.setAttribute('d', 'M20 36s-8-7.33-12-12c-3.5-4.25-2-10 4-10 2.86 0 4 2 4 2s1.14-2 4-2c6 0 7.5 5.75 4 10-4 4.67-12 12-12 12z');
    heart.setAttribute('class', 'heart');
    svg.appendChild(heart);

    anime({
      targets: heart,
      translateY: [-15, -50 - Math.random() * 15],
      scale: [0.6, 1 + Math.random() * 0.2],
      opacity: [0.7, 0],
      easing: 'easeOutCubic',
      delay: i * 300 + Math.random() * 200,
      duration: 1500 + Math.random() * 800,
      complete: function(anim) {
        svg.removeChild(heart);
      }
    });
  }
}

document.querySelector('.sponsor-btn').addEventListener('mouseenter', function() {
  createFloatHearts();
});
