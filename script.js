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
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach(card => {
    card.addEventListener("click", () => {
        if (card.classList.contains("is-active")) {
            card.classList.remove("is-active");
        } else {
            card.classList.add("is-active");
        }
    });
});
document.addEventListener("click", event => {
    if (!event.target.closest(".project-card")) {
        projectCards.forEach(card => {
            card.classList.remove("is-active");
        });
    }
});