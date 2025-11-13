const openMenu = document.querySelector(".open-icon");
const closeMenu = document.querySelector(".close-menu-btn"); // Badhanka XIR
const navLink = document.querySelector(".nav-link");
const navLinks = document.querySelectorAll(".nav-link ul li a"); // Dhammaan link-iyada menu-ga

// Fur menu-ga
openMenu.addEventListener("click", () => {
    navLink.classList.add("show");
});

// Xir menu-ga (adiga oo riixaya badhanka XIR)
closeMenu.addEventListener("click", () => {
    navLink.classList.remove("show");
});

// Xir menu-ga marka la riixo xiriiriye (link) kasta
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLink.classList.remove("show");
    });
});