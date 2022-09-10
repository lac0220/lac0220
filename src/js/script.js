"use strict";
//loader-animation
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader-animation");

    loader.classList.add("loader-animation-hidden");

    loader.addEventListener("transform", () => {
        document.body.removeChild("loader");
    })
}) 

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
