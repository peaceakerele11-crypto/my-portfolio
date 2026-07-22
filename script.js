// script.js – smooth scroll, mobile nav toggle, contact alert (beginner friendly)

// 1. Mobile hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// 2. Close mobile menu on any nav link click (better UX)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// 3. Smooth scrolling for all anchor links (already handled by CSS, but we add a tiny extra for older browsers)
//    All internal links have hash, CSS scroll-behavior: smooth covers it.

// 4. Contact form – simple alert (beginner friendly)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('✨ Thank you, Akerele Peace will get back to you soon!');
    this.reset();
  });
}

// 5. Optional: subtle highlight on nav link when scrolling (bonus)
//    Just a small beginner-friendly effect – not required, but adds polish.
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navAnchors.forEach(anchor => {
    anchor.style.color = '#f0f4fa'; // reset
    if (anchor.getAttribute('href') === '#' + current) {
      anchor.style.color = '#f5b7b7'; // soft pink
    }
  });
});

// 6. Back to top footer link – smooth scroll (already native, but ensure it works)
console.log('✨ Akerele Peace portfolio ready!');
