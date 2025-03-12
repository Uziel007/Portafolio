document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector(".overlay");

    // Inicia el efecto de difuminado después de 3 segundos
    setTimeout(() => {
        overlay.style.filter = "blur(10px)";
        overlay.style.opacity = "0";
    }, 3000);
});

