// nav menu opens
const dropBar = document.querySelector(".nav-header__drop-bar");
const navMenu = document.querySelector("#nav-menu");

dropBar.addEventListener("click", mobileMenu);

function mobileMenu() {
    dropBar.classList.toggle("change");
    navMenu.classList.toggle("active");
}

// nav menu closes
const navLinks = document.querySelector("#nav-menu");

navLinks.addEventListener("click", mobileClose);

function mobileClose() {
    dropBar.classList.toggle("change");
    navMenu.classList.remove("active");
}


