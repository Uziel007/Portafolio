
// Después de 5 segundos, ocultar la sección de carga y mostrar la de hobbies
setTimeout(function () {
    document.getElementById('loading').style.display = 'none';  // Oculta la sección de carga
    document.getElementById('hobbies').style.display = 'block';  // Muestra la sección de hobbies
}, 2000); // 5000ms = 5 segundos

// Después de 10 segundos, mostrar el footer
setTimeout(function () {
    document.querySelector('.footer').style.display = 'block';  // Muestra el footer
}, 3000); // 10000ms = 10 segundos

let currentImageIndex = 0;
const imagesContainer = document.querySelector(".carousel-images");
const images = imagesContainer.children;
let autoChangeInterval;

// 🔹 Función para identificar imágenes horizontales y verticales
function classifyImages() {
    Array.from(images).forEach((img) => {
        if (img.tagName === "IMG") {
            if (img.naturalWidth > img.naturalHeight) {
                img.classList.add("horizontal");
            } else {
                img.classList.add("vertical");
            }
        }
    });
}

// 🔹 Ajustar dinámicamente el tamaño del carrusel
function updateCarouselSize() {
    const currentElement = images[currentImageIndex];

    if (currentElement.classList.contains("horizontal")) {
        imagesContainer.style.height = `${currentElement.clientHeight}px`;
    }
}

// 🔹 Función para cambiar de imagen
function changeImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    const offset = -currentImageIndex * imagesContainer.clientWidth;
    imagesContainer.style.transform = `translateX(${offset}px)`;

    updateCarouselSize(); // Ajustar tamaño del carrusel

    // Detener videos
    document.querySelectorAll(".carousel-images video").forEach((video) => video.pause());

    // Si es un video, reproducirlo
    const currentElement = images[currentImageIndex];
    if (currentElement.tagName === "VIDEO") {
        currentElement.play();
    }

    // Actualizar el texto en el footer
    const footerText = document.querySelector(".footer-acuario");
    footerText.textContent = ` ${
        currentElement.alt || "Video en reproducción"
    }`;
}

// 🔹 Botones de navegación
document.querySelector(".prev").addEventListener("click", () => changeImage(-1));
document.querySelector(".next").addEventListener("click", () => changeImage(1));

// 🔹 Detener carrusel al pasar el mouse
const carousel = document.querySelector(".carousel");
carousel.addEventListener("mouseenter", () => clearInterval(autoChangeInterval));
carousel.addEventListener("mouseleave", () => {
    autoChangeInterval = setInterval(() => changeImage(1), 5000);
});

// 🔹 Iniciar carrusel automático
autoChangeInterval = setInterval(() => changeImage(1), 5000);

// 🔹 Ajustar tamaño inicial y clasificar imágenes
window.addEventListener("load", () => {
    classifyImages();
    updateCarouselSize();
});
window.addEventListener("resize", updateCarouselSize);
