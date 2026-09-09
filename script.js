// =========================================
// MOBILE NAVIGATION
// =========================================

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

menuToggle.addEventListener("click", () => {

  const isOpen = mobileNav.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    isOpen
  );

});


// Close mobile menu when a link is clicked

const mobileLinks = document.querySelectorAll(".mobile-nav a");

mobileLinks.forEach(link => {

  link.addEventListener("click", () => {

    mobileNav.classList.remove("open");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

  });

});


// =========================================
// COPYRIGHT YEAR
// =========================================

document.getElementById("year").textContent =
  new Date().getFullYear();