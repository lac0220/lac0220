"use strict";
//loader-animation
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader-animation");

    loader.classList.add("loader-animation-hidden");

    loader.addEventListener("transform", () => {
        document.body.removeChild("loader");
    })
}) 

