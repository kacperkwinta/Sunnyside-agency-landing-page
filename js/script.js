"use strict";

// btn el
const btn = document.querySelector(".btn");
// div with mobile menu
const mobileMenu = document.querySelector(".mobile-menu--hidden");
// all links in menu
const menuLinks = document.querySelectorAll(".nav-link");

function hideMenu() {
	mobileMenu.classList.toggle("mobile-menu--hidden");
	mobileMenu.classList.toggle("mobile-menu--active");
}

btn.addEventListener("click", hideMenu);

menuLinks.forEach((menuLinks) => {
	menuLinks.addEventListener("click", hideMenu);
});
