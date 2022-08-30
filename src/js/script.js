"use strict";
// nav menu opens
const dropBar = document.querySelector(".drop-bar");
const navMenu = document.querySelector("#nav-menu");

const mobileMenu = () => {
    dropBar.classList.toggle("change");
    navMenu.classList.toggle("active");
}
dropBar.addEventListener("click", mobileMenu);

// nav menu closes
const navLinks = document.querySelector("#nav-menu");

const mobileClose = () => {
    dropBar.classList.toggle("change");
    navMenu.classList.remove("active");
}
navLinks.addEventListener("click", mobileClose);
