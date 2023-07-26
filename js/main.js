// Color Swatch Variables
// const color1 = document.querySelector("#color-swatch1");
// const color2 = document.querySelector("#color-swatch2");
// const color3 = document.querySelector("#color-swatch3");
// const color4 = document.querySelector("#color-swatch4");
// const color5 = document.querySelector("#color-swatch5");

// Button Variables
const aboutButton = document.querySelector("#about-me-button");
const skillsButton = document.querySelector("#skills-button");
const projectButton = document.querySelector("#project-button");
// const homeButton = document.querySelector("#home");
// const marigoldButton = document.querySelector("#marigold");
// const unpluggedButton = document.querySelector("#unplugged");
// const beanButton = document.querySelector("#bean");
const contactButton = document.querySelector("#contact");


// Div Variables
const aboutSection = document.querySelector("#about-me-section");
const skillsSection = document.querySelector("#skills-section");
const projectSection = document.querySelector("#project-section");
const homeSection = document.querySelector("#home-description");
const marigoldSection = document.querySelector("#marigold-description");
const unpluggedSection = document.querySelector("#unplugged-description");
const beanSection = document.querySelector("#bean-description");
const contactSection = document.querySelector("#contact-section");


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

// homeButton.addEventListener("click", function(){
//     if (homeSection.classList.contains("hide")){
//         homeSection.classList.remove("hide");
//     } else {
//         homeSection.classList.add("hide");
//     }
// });

// marigoldButton.addEventListener("click", function(){
//     if (marigoldSection.classList.contains("hide")){
//         marigoldSection.classList.remove("hide");
//     } else {
//         marigoldSection.classList.add("hide");
//     }
// });

// unpluggedButton.addEventListener("click", function(){
//     if (unpluggedSection.classList.contains("hide")){
//         unpluggedSection.classList.remove("hide");
//     } else {
//         unpluggedSection.classList.add("hide");
//     }
// });

// beanButton.addEventListener("click", function(){
//     if (beanSection.classList.contains("hide")){
//         beanSection.classList.remove("hide");
//     } else {
//         beanSection.classList.add("hide");
//     }
// });

contactButton.addEventListener("click", function(){
    if (contactSection.classList.contains("hide")){
        contactSection.classList.remove("hide");
    } else {
        contactSection.classList.add("hide");
    }
});