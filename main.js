// Particle Background Effect
function createParticles() {
  const particlesContainer = document.getElementById('particles-bg');
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.background = '#ff3d3d';
    particle.style.borderRadius = '50%';
    particle.style.opacity = Math.random() * 0.5 + 0.2;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particlesContainer.appendChild(particle);

    anime({
      targets: particle,
      translateX: () => anime.random(-50, 50),
      translateY: () => anime.random(-50, 50),
      scale: [0.5, 1.5],
      opacity: [0.2, 0.8],
      duration: () => anime.random(2000, 4000),
      easing: 'easeInOutSine',
      loop: true,
      direction: 'alternate',
      delay: () => anime.random(0, 2000)
    });
  }
}

// Initialize particles
createParticles();

// Hero animations
anime.timeline({ easing: 'easeOutExpo', duration: 1000 })
  .add({
    targets: '.hero-title',
    translateX: [50, 0],
    opacity: [0, 1]
  })
  .add({
    targets: '.hero-desc',
    translateX: [30, 0],
    opacity: [0, 1]
  }, '-=700')
  .add({
    targets: '.hero-actions',
    translateX: [20, 0],
    opacity: [0, 1]
  }, '-=500');

// SVG Animations
anime({
  targets: '.hero-orb circle:first-child',
  strokeDashoffset: [anime.setDashoffset, 0],
  duration: 3000,
  loop: true,
  easing: 'easeInOutSine'
});

anime({
  targets: '#animatedLine',
  strokeDashoffset: [0, -628],
  duration: 2000,
  loop: true,
  easing: 'linear'
});

// Floating particles in hero SVG
const floatingParticles = document.getElementById('floatingParticles');
for (let i = 0; i < 20; i++) {
  const particle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  particle.setAttribute('cx', Math.random() * 400);
  particle.setAttribute('cy', Math.random() * 400);
  particle.setAttribute('r', Math.random() * 3 + 1);
  particle.setAttribute('fill', '#ff3d3d');
  particle.setAttribute('opacity', Math.random() * 0.7 + 0.3);
  floatingParticles.appendChild(particle);

  anime({
    targets: particle,
    cx: () => anime.random(0, 400),
    cy: () => anime.random(0, 400),
    r: [1, 4],
    opacity: [0.3, 1],
    duration: () => anime.random(3000, 6000),
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate',
    delay: () => anime.random(0, 3000)
  });
}

// Animated dots
const dotsContainer = document.getElementById('animatedDots');
for (let i = 0; i < 24; i++) {
  const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  const angle = (2 * Math.PI / 24) * i;
  const radius = 120;
  const x = 200 + radius * Math.cos(angle);
  const y = 200 + radius * Math.sin(angle);
  
  dot.setAttribute('cx', x);
  dot.setAttribute('cy', y);
  dot.setAttribute('r', 4);
  dot.setAttribute('fill', '#ff8a00');
  dot.setAttribute('opacity', 0.8);
  dotsContainer.appendChild(dot);

  anime({
    targets: dot,
    scale: [0.5, 1.5],
    opacity: [0.4, 1],
    duration: 1500,
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate',
    delay: i * 100
  });
}

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, observerOptions);

document.querySelectorAll('.section-reveal').forEach(section => {
  observer.observe(section);
});

// Enhanced Sponsor Button Animation
const sponsorBtn = document.querySelector('.sponsor-btn');
const heartIcon = sponsorBtn.querySelector('.heart-icon');
const floatingHeartsContainer = sponsorBtn.querySelector('.floating-hearts');

function createFloatingHearts() {
  for (let i = 0; i < 8; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'absolute';
    heart.style.left = '50%';
    heart.style.top = '50%';
    heart.style.transform = 'translate(-50%, -50%)';
    heart.style.pointerEvents = 'none';
    heart.style.fontSize = '1.2rem';
    heart.style.zIndex = '1000';
    floatingHeartsContainer.appendChild(heart);

    anime({
      targets: heart,
      translateY: () => anime.random(-80, -120),
      translateX: () => anime.random(-60, 60),
      scale: [0.3, 1.5],
      opacity: [1, 0],
      rotate: () => anime.random(-180, 180),
      duration: () => anime.random(2000, 3000),
      easing: 'easeOutCubic',
      delay: i * 150,
      complete: () => heart.remove()
    });
  }
}

function createHeartBurst() {
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.left = '50%';
    heart.style.top = '50%';
    heart.style.transform = 'translate(-50%, -50%)';
    heart.style.pointerEvents = 'none';
    heart.style.fontSize = '0.8rem';
    heart.style.zIndex = '1000';
    floatingHeartsContainer.appendChild(heart);

    const angle = (360 / 12) * i;
    const distance = 100;
    const x = Math.cos(angle * Math.PI / 180) * distance;
    const y = Math.sin(angle * Math.PI / 180) * distance;

    anime({
      targets: heart,
      translateX: x,
      translateY: y,
      scale: [0.5, 1.2],
      opacity: [1, 0],
      duration: 1500,
      easing: 'easeOutCubic',
      delay: i * 50,
      complete: () => heart.remove()
    });
  }
}

function animateHeartIcon() {
  anime({
    targets: heartIcon,
    scale: [1, 1.3, 1],
    rotate: [0, 15, -15, 0],
    duration: 600,
    easing: 'easeInOutBack'
  });
}

// Multiple sponsor button interactions
sponsorBtn.addEventListener('mouseenter', () => {
  createFloatingHearts();
  animateHeartIcon();
});

sponsorBtn.addEventListener('click', (e) => {
  e.preventDefault();
  createHeartBurst();
  animateHeartIcon();
  
  // Add ripple effect
  const ripple = document.createElement('div');
  ripple.style.position = 'absolute';
  ripple.style.borderRadius = '50%';
  ripple.style.background = 'rgba(226, 85, 85, 0.6)';
  ripple.style.transform = 'scale(0)';
  ripple.style.animation = 'ripple 0.6s linear';
  ripple.style.left = '50%';
  ripple.style.top = '50%';
  ripple.style.width = '100px';
  ripple.style.height = '100px';
  ripple.style.marginLeft = '-50px';
  ripple.style.marginTop = '-50px';
  ripple.style.pointerEvents = 'none';
  
  sponsorBtn.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Working Contact Form with EmailJS
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');
  
  let isValid = true;
  
  // Clear previous errors
  document.querySelectorAll('.form-error').forEach(error => {
    error.textContent = '';
  });
  
  // Name validation
  if (!name || name.length < 2) {
    document.querySelector('#name').nextElementSibling.textContent = 'Name must be at least 2 characters';
    isValid = false;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    document.querySelector('#email').nextElementSibling.textContent = 'Please enter a valid email address';
    isValid = false;
  }
  
  // Subject validation
  if (!subject || subject.length < 3) {
    document.querySelector('#subject').nextElementSibling.textContent = 'Subject must be at least 3 characters';
    isValid = false;
  }
  
  // Message validation
  if (!message || message.length < 10) {
    document.querySelector('#message').nextElementSibling.textContent = 'Message must be at least 10 characters';
    isValid = false;
  }
  
  if (isValid) {
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalContent = submitBtn.innerHTML;
    
    submitBtn.innerHTML = 'Sending... <div style="width:16px;height:16px;border:2px solid #fff;border-top:2px solid transparent;border-radius:50%;animation:spin 1s linear infinite;"></div>';
    submitBtn.disabled = true;
    
    // Add spin animation
    const spinStyle = document.createElement('style');
    spinStyle.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(spinStyle);
    
    try {
      // Using a simple fetch to a form handler (you can replace this with your preferred service)
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message
        })
      });
      
      if (response.ok) {
        submitBtn.innerHTML = 'Message Sent! ✓';
        submitBtn.style.background = '#28a745';
        contactForm.reset();
        
        // Show success animation
        anime({
          targets: submitBtn,
          scale: [1, 1.05, 1],
          duration: 500,
          easing: 'easeInOutBack'
        });
        
        setTimeout(() => {
          submitBtn.innerHTML = originalContent;
          submitBtn.style.background = '#ff3d3d';
          submitBtn.disabled = false;
        }, 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      submitBtn.innerHTML = 'Error - Try Again';
      submitBtn.style.background = '#dc3545';
      
      setTimeout(() => {
        submitBtn.innerHTML = originalContent;
        submitBtn.style.background = '#ff3d3d';
        submitBtn.disabled = false;
      }, 3000);
    }
  }
});

// Testimonials slider
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle('active', i === index);
  });
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}

// Auto-advance testimonials
setInterval(nextTestimonial, 5000);

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navHeight = document.querySelector('.nav').offsetHeight;
      const targetPosition = targetElement.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Enhanced hover effects
document.querySelectorAll('.hover-lift').forEach(element => {
  element.addEventListener('mouseenter', () => {
    anime({
      targets: element,
      translateY: -10,
      scale: 1.02,
      duration: 300,
      easing: 'easeOutCubic'
    });
  });
  
  element.addEventListener('mouseleave', () => {
    anime({
      targets: element,
      translateY: 0,
      scale: 1,
      duration: 300,
      easing: 'easeOutCubic'
    });
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 100) {
    nav.style.background = 'rgba(10, 10, 10, 0.95)';
    nav.style.backdropFilter = 'blur(20px)';
  } else {
    nav.style.background = 'rgba(10, 10, 10, 0.9)';
    nav.style.backdropFilter = 'blur(10px)';
  }
});

// Search functionality
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  if (query.length > 2) {
    // Simple search highlighting
    const searchableElements = document.querySelectorAll('h1, h2, h3, p');
    searchableElements.forEach(element => {
      const text = element.textContent.toLowerCase();
      if (text.includes(query)) {
        element.style.background = 'rgba(255, 61, 61, 0.2)';
        element.style.transition = 'background 0.3s ease';
      } else {
        element.style.background = 'transparent';
      }
    });
  } else {
    // Clear highlights
    document.querySelectorAll('h1, h2, h3, p').forEach(element => {
      element.style.background = 'transparent';
    });
  }
});

// Add loading animation to action buttons
document.querySelectorAll('.action-dark, .action-light').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    
    const originalContent = button.innerHTML;
    button.innerHTML = 'Loading...';
    button.disabled = true;
    
    anime({
      targets: button,
      scale: [1, 0.95, 1],
      duration: 300,
      easing: 'easeInOutBack'
    });
    
    setTimeout(() => {
      button.innerHTML = originalContent;
      button.disabled = false;
    }, 2000);
  });
});
