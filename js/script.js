/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
// navigation
const dropBar = document.querySelector(".drop__bar");
const navMenu = document.querySelector(".nav__menu");

dropBar.addEventListener("click", mobileMenu);

function mobileMenu() {
    dropBar.classList.toggle("change");
    navMenu.classList.toggle("active");
}

const navLinks = document.querySelector(".nav__menu");

navLinks.addEventListener("click", mobileClose);

function mobileClose() {
    dropBar.classList.toggle("change");
    navMenu.classList.remove("active");
}

// project logo click
let modal = document.getElementById('myModal');
let images = document.getElementsByClassName('myImages');
var modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

for (let i = 0; i < images.length; i++) {
  let img = images[i];
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
/******/ })()
;
//# sourceMappingURL=script.js.map