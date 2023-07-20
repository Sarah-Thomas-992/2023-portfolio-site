// Color Swatch Variables
const color1 = document.querySelector("#color-swatch1");
const color2 = document.querySelector("#color-swatch2");
const color3 = document.querySelector("#color-swatch3");
const color4 = document.querySelector("#color-swatch4");
const color5 = document.querySelector("#color-swatch5");

// Button Variables
const aboutButton = document.querySelector("#about-me-button");
const skillsButton = document.querySelector("#skills-button");
const projectButton = document.querySelector("#project-button");

// Div Variables
const aboutSection = document.querySelector("#about-me-section");
const skillsSection = document.querySelector("#skills-section");
const projectSection = document.querySelector("#project-section");


// Functions
aboutButton.addEventListener("click", function(){
    if (aboutSection.classList.contains("hide")){
        aboutSection.classList.remove("hide");
    } else {
        aboutSection.classList.add("hide");
    }
});

skillsButton.addEventListener("click", function(){
    if (skillsSection.classList.contains("hide")){
        skillsSection.classList.remove("hide");
    } else {
        skillsSection.classList.add("hide");
    }
});

projectButton.addEventListener("click", function(){
    if (projectSection.classList.contains("hide")){
        projectSection.classList.remove("hide");
    } else {
        projectSection.classList.add("hide");
    }
});