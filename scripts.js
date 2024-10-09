/* JavaScript for Parallax Effect */
window.addEventListener('scroll', function() {
  const heroImage = document.querySelector('.hero');
  const scrollPosition = window.scrollY;
  heroImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});

document.addEventListener("DOMContentLoaded", function () {
  let lastScrollY = window.scrollY;
  const navbar = document.querySelector(".navbar");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

});

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.classList.add('hidden');
    } else {
        // Scrolling up
        navbar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
});

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});