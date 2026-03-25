// MOBILE MENU TOGGLE
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// SMOOTH SCROLL
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth'
  });
}

// CONTACT FORM
const form = document.getElementById('contactForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  message.textContent = "Sending...";
  
  setTimeout(() => {
    message.textContent = "Message sent successfully! ✔️";
    form.reset();
  }, 1500);
});