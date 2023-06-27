"use strict";
//loader-animation
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader-animation");

    loader.classList.add("loader-animation-hidden");

    loader.addEventListener("transform", () => {
        document.body.removeChild("loader");
    })
}) 

// counting number of visitors
// const visitorsNumber = document.getElementById('visitors-number');

// function counting() {
// 	fetch('https://api.countapi.xyz/update/lac0220/ce2d2945-acf3-4d7a-b45c-8f78b0e5ae92/?amount=1')
// 	.then(result => result.json())
// 	.then(result => {
// 		visitorsNumber.innerHTML = result.value;
// 	})
//     .catch(error => {
//         alert("The server of CountAPI is temporarily unavailable")
//     });
// }
// counting();

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