"use strict";

let toggleButton = document.querySelector(".toggle-button");
let navLinks = document.querySelector(".nav-links");
let navLogo = document.querySelector(".nav-logo");


toggleButton.addEventListener("click", () => {
    navLogo.classList.toggle("active");
    navLinks.classList.toggle("active");
    
});