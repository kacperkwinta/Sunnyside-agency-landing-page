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

// animations

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		// console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		} else {
			entry.target.classList.remove("show");
		}
	});
});

const hiddenElements = document.querySelectorAll(".animation-hidden");
hiddenElements.forEach((el) => observer.observe(el));
