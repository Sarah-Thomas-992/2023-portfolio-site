// Color Swatch Variables
const color1 = document.querySelector("#color-swatch1");
const color2 = document.querySelector("#color-swatch2");
const color3 = document.querySelector("#color-swatch3");
const color4 = document.querySelector("#color-swatch4");
const color5 = document.querySelector("#color-swatch5");

// Button Variables
const aboutButton = document.querySelector("#about-me-button");

// Div Variables
const aboutSection = document.querySelector("#about-me-section");


// Functions
aboutButton.addEventListener("click", function(){
    if (aboutSection.classList.contains("hide")){
        aboutSection.classList.remove("hide");
        color2.style.backgroundColor= '#ff3c7a';
    } else {
        aboutSection.classList.add("hide");
        color2.style.backgroundColor= '#36bbb9';
    }
});