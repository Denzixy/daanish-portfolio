const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
const links = document.querySelectorAll(".nav-links a");
links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});