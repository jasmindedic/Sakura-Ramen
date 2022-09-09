"use strict";

// Variables for hamburger menu
let toggleButton = document.querySelector(".toggle-button");
let navLinks = document.querySelector(".nav-links");
let navLogo = document.querySelector(".nav-logo");

// Listener to turn on and off hamburger menu 
toggleButton.addEventListener("click", () => {
    navLogo.classList.toggle("active");
    navLinks.classList.toggle("active");
    
});



// Change header background
let header = document.querySelector(".header");

// Store images in array
let backgroundImages = [
                "url(./images/ramen-1.jpg)",
                "url(./images/ramen-2.jpg)",
                "url(./images/ramen-3.jpg)",
                "url(./images/ramen-4.jpg)",
                "url(./images/ramen-5.jpg)"
]


setInterval(function() {
    let bg = backgroundImages[Math.floor(Math.random() * backgroundImages.length)]

    header.style.backgroundImage = bg;
   
}, 2000)

// Added transition to header 
header.style.transition = "background 2s ease-in-out";