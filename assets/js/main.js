// assets/js/main.js
console.log("✅ E-News Frontend loaded successfully");

// Fixed sub-nav on scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('.site-header');
  const subNav = document.querySelector('.sub-nav');
  const headerHeight = header.offsetHeight;

  if (window.scrollY > headerHeight) {
    subNav.classList.add('fixed');
  } else {
    subNav.classList.remove('fixed');
  }
});
