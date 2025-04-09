document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname.split("/").pop().split('#')[0]; // Ignora el #
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop().split('#')[0]; // Ignora el #
        
        if (currentPage === linkPage || 
            (currentPage === "" && linkPage === "index.html")) {
            link.classList.add("active");
        }
    });
});