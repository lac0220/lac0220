// navigation
const dropBar = document.querySelector(".nav__header__dropbar");
const navMenu = document.querySelector("#nav__menu");

dropBar.addEventListener("click", mobileMenu);

function mobileMenu() {
    dropBar.classList.toggle("change");
    navMenu.classList.toggle("active");
}

const navLinks = document.querySelector("#nav__menu");

navLinks.addEventListener("click", mobileClose);

function mobileClose() {
    dropBar.classList.toggle("change");
    navMenu.classList.remove("active");
}


