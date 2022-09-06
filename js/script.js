/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/

//loader-animation
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader-animation");

    loader.classList.add("loader-animation-hidden");

    loader.addEventListener("transform", () => {
        document.body.removeChild("loader");
    })
}) 


/******/ })()
;
//# sourceMappingURL=script.js.map