// Animate hero elements in
anime.timeline({ easing: 'easeOutExpo', duration: 920 })
  .add({
    targets: '.hero-title',
    translateX: [-30, 0],
    opacity: [0, 1]
  })
  .add({
    targets: '.hero-desc',
    translateX: [-20, 0],
    opacity: [0, 1]
  }, '-=700')
  .add({
    targets: '.hero-actions',
    translateX: [-15, 0],
    opacity: [0, 1]
  }, '-=500');

// Hero SVG circular glow pulse
anime({
  targets: '.hero-orb > circle:first-child',
  strokeDashoffset: [anime.setDashoffset, 0],
  duration: 2000,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});

// Hero SVG animated line dash/pulse
anime({
  targets: '#animatedLine',
  strokeDashoffset: [0, -500],
  duration: 1800,
  loop: true,
  easing: 'linear'
});

// Animate 'waveform' polyline
anime({
  targets: '#waveform',
  stroke: [
    { value: '#ff414d' },
    { value: '#ff8a00' },
    { value: '#e52e71' },
    { value: '#ff414d' }
  ],
  delay: 0,
  duration: 2400,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});

// Animated dots along the ring (sample for effect)
const dotsG = document.getElementById('animatedDots');
for (let i = 0; i < 17; i++) {
  let dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  let angle = (2 * Math.PI / 17) * i + Math.PI/6;
  let r = 100, cx = 170 + r * Math.cos(angle), cy = 170 + r * Math.sin(angle);
  dot.setAttribute('cx', cx); dot.setAttribute('cy', cy);
  dot.setAttribute('r', 5);
  dot.setAttribute('fill', '#ff414d');
  dot.setAttribute('opacity', '0.65');
  dotsG.appendChild(dot);

  anime({
    targets: dot,
    scale: [
      { value: 1.35, duration: 900, easing: 'easeInOutSine' },
      { value: 1, duration: 900, easing: 'easeInOutSine' }
    ],
    loop: true,
    delay: i * 80
  });
}

// Sponsor button (heart pulse)
const sponsorBtn = document.querySelector('.sponsor-btn');
const heartIcon = sponsorBtn.querySelector('.heart-icon path');

function pulseHeart() {
  anime({
    targets: heartIcon,
    scale: [
      { value: 1.2, duration: 180, easing: 'easeOutCubic' },
      { value: 1, duration: 320, easing: 'easeInOutBack' }
    ],
    fill: [
      { value: "#f46363", duration: 100 },
      { value: "#e25555", duration: 400 }
    ]
  });
}
sponsorBtn.addEventListener('mouseenter', pulseHeart);
sponsorBtn.addEventListener('focus', pulseHeart);
