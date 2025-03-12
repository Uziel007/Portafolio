document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".custom-wrapper");
    const items = document.querySelectorAll(".custom-item");
    const prev = document.querySelector(".custom-arrow-prev");
    const next = document.querySelector(".custom-arrow-next");
    let index = 0;

    function updateCarousel() {
        wrapper.style.transform = `translateX(-${index * 100}%)`;
    }

    next.addEventListener("click", function () {
        index = (index + 1) % items.length;
        updateCarousel();
    });

    prev.addEventListener("click", function () {
        index = (index - 1 + items.length) % items.length;
        updateCarousel();
    });
});

// Función para abrir el modal y mostrar la imagen
function openModal(src) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = src;
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Cerrar el modal si se hace clic fuera de la imagen
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Evento para el botón .btn-carrusel1
document.querySelector(".btn-carrusel1").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("contenido").innerHTML = `
        <ul>
            <li>Desarrollé un sistema integral de punto de venta (POS) diseñado específicamente para empresas medianas y pequeñas, que incluye una amplia gama de funcionalidades como gestión de pagos, ventas y más de 20 reportes generados a partir de los datos.</li>
            <li>Implementé un lector de código de barras y un generador de códigos de barras, facilitando la gestión de inventarios y el procesamiento de ventas.</li>
            <li>Desarrollé un sistema robusto de gestión de usuarios, que permite la validación de roles (Administrador, Vendedor y Almacenista) y un sistema de control de acceso mediante login, asegurando la correcta operación y seguridad del sistema.</li>
            <li>Implementé módulos para la inserción, actualización y eliminación de datos, con validaciones integradas para garantizar la integridad de la información.</li>
            <li>Construí una lista de deudores integrada al sistema, permitiendo un seguimiento detallado de las cuentas pendientes.</li>
            <li>Utilicé MySQL como base de datos, garantizando una estructura eficiente y segura para el manejo de los datos.</li>
            <li>Incorporé una funcionalidad de reportes automáticos que permite a los usuarios generar reportes sobre ventas, pagos, inventarios, entre otros, con opciones de filtrado avanzadas.</li>
            <li>Aseguré un diseño de interfaz de usuario intuitivo y amigable, con un enfoque en la facilidad de uso y accesibilidad.</li>
            <li>El sistema ha sido implementado en tiempo real en un negocio mediano, mejorando la eficiencia operativa y facilitando la gestión administrativa.</li>
            <li>Planeo agregar una actualización de seguridad que permitirá ver y analizar correctamente las cámaras conectadas a la computadora, brindando mayor control y seguridad en el entorno empresarial.</li>
        </ul>
        <h1 class="h1relleno2"></h1>
        <h1 class="h1relleno2"></h1>
        <strong>Galeria de imagenes:</strong> 
        <section id="slideshow">
            <div class="entire-content">
                <div class="content-carrousel">
                    <figure class="shadow" onclick="openModal('Recursos/experiencias/galerias/punto de venta/puntodeventa1.png')">
                        <img src="Recursos/experiencias/galerias/punto de venta/puntodeventa1.png"/>
                    </figure>
                    <figure class="shadow" onclick="openModal('Recursos/experiencias/galerias/punto de venta/puntodeventa2.png')">
                        <img src="Recursos/experiencias/galerias/punto de venta/puntodeventa2.png"/>
                    </figure>
                    <figure class="shadow" onclick="openModal('Recursos/experiencias/galerias/punto de venta/puntodeventa3.png')">
                        <img src="Recursos/experiencias/galerias/punto de venta/puntodeventa3.png"/>
                    </figure>
                    <figure class="shadow" onclick="openModal('Recursos/experiencias/galerias/punto de venta/puntodeventa4.png')">
                        <img src="Recursos/experiencias/galerias/punto de venta/puntodeventa4.png"/>
                    </figure>
                    <figure class="shadow" onclick="openModal('Recursos/experiencias/galerias/punto de venta/puntodeventa5.png')">
                        <img src="Recursos/experiencias/galerias/punto de venta/puntodeventa5.png"/>
                    </figure>
                    <figure class="shadow" onclick="openModal('Recursos/experiencias/galerias/punto de venta/puntodeventa6.png')">
                        <img src="Recursos/experiencias/galerias/punto de venta/puntodeventa6.png"/>
                    </figure>
                    <figure class="shadow" onclick="openModal('Recursos/experiencias/galerias/punto de venta/puntodeventa7.png')">
                        <img src="Recursos/experiencias/galerias/punto de venta/puntodeventa7.png"/>
                    </figure>
                    <figure class="shadow" onclick="openModal('Recursos/experiencias/galerias/punto de venta/puntodeventa8.png')">
                        <img src="Recursos/experiencias/galerias/punto de venta/puntodeventa8.png"/>
                    </figure>
                    <figure class="shadow" onclick="openModal('Recursos/experiencias/galerias/punto de venta/puntodeventa9.png')">
                        <img src="Recursos/experiencias/galerias/punto de venta/puntodeventa9.png"/>
                    </figure>
                    <figure class="shadow" onclick="openModal('Recursos/experiencias/galerias/punto de venta/puntodeventa10.png')">
                        <img src="Recursos/experiencias/galerias/punto de venta/puntodeventa10.png"/>
                    </figure>
                    <figure class="shadow" onclick="openModal('Recursos/experiencias/galerias/punto de venta/puntodeventa11.png')">
                        <img src="Recursos/experiencias/galerias/punto de venta/puntodeventa11.png"/>
                    </figure>
                    <figure class="shadow" onclick="openModal('Recursos/experiencias/galerias/punto de venta/puntodeventa12.png')">
                        <img src="Recursos/experiencias/galerias/punto de venta/puntodeventa12.png"/>
                    </figure>
                    <figure class="shadow" onclick="openModal('Recursos/experiencias/galerias/punto de venta/puntodeventa13.png')">
                        <img src="Recursos/experiencias/galerias/punto de venta/puntodeventa13.png"/>
                    </figure>
                    <figure class="shadow" onclick="openModal('Recursos/experiencias/galerias/punto de venta/puntodeventa14.png')">
                        <img src="Recursos/experiencias/galerias/punto de venta/puntodeventa14.png"/>
                    </figure>
                </div>
            </div>
        </section>
        <h1 class="h1relleno2"></h1>
        <h1 class="h1relleno2"></h1>
        <strong>LINK DEL VIDEO DEMOSTRANDO EL FUNCIONAMIENTO:</strong> 
        <table style="width: 100%; height: 100%;">
            <tr>
                <td style="text-align: center; vertical-align: middle;">
                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%;">
                    <iframe style="position: absolute; top: 0; left: 0; width: 60%; height: 60%;" 
                            src="https://www.youtube.com/embed/xctI6uWRVHw" 
                            frameborder="0" 
                            allowfullscreen>
                    </iframe>
                </div>
                </td>
            </tr>
        </table>

        <h1 class="h1relleno2"></h1>
        <h1 class="h1relleno2"></h1>

        <section class="contact-section">
            <p class="contact-text">Si deseas más información sobre este proyecto, puedes comunicarte con la persona de referencia:</p>
            <div class="phone-container">
                <i class="Phone is-animating"></i>
                <span class="phone-number">+52 56 3335 3852</span>
            </div>
            <p class="reference-name">Nadia Ambrocio</p>
        </section>

    `;
});

document.querySelector(".btn-carrusel2").addEventListener("click", function(event) {
event.preventDefault();
document.getElementById("contenido").innerHTML = `
    <p>
        • Colaboré en el área de laboratorio, apoyando en la gestión de equipos de cómputo y en la organización de los recursos tecnológicos, lo que incluyó el mantenimiento de sistemas y el soporte técnico a estudiantes y personal académico.
        <br>
        • Participé en proyectos de desarrollo de aplicaciones y en el análisis de datos, aplicando mis conocimientos en programación y bases de datos para apoyar en investigaciones académicas.
        <br>
        • Trabajé en la coordinación con profesionales del área para mejorar los recursos informáticos y fortalecer el entorno de aprendizaje, asegurando un funcionamiento óptimo de los sistemas.
    </p>`;
});


document.querySelector(".btn-carrusel3").addEventListener("click", function(event) {
event.preventDefault();
document.getElementById("contenido").innerHTML = `
    <p>
        Durante mi trayectoria en The Pixel Rocker, formé parte del área de desarrollo y tecnología, contribuyendo activamente en proyectos de alto impacto. Mi rol se centró en las siguientes actividades clave:
    </p>
    <ul>
        <li><strong>Actualización de algoritmos:</strong> Implementación y mejora continua de algoritmos para optimizar procesos internos y ofrecer soluciones más eficientes a nuestros clientes.</li>
        <li><strong>Optimización de procesos:</strong> Identificación de áreas de mejora y diseño de estrategias tecnológicas para maximizar la productividad y calidad del servicio.</li>
        <li><strong>Programación y desarrollo de soluciones tecnológicas:</strong> Creación de herramientas personalizadas que respondieron a las necesidades específicas de nuestros clientes, con un enfoque en calidad y escalabilidad.</li>
    </ul>
    <p>
        A lo largo de mi desempeño, fui reconocido por mi esfuerzo laboral, ética profesional y capacidad de trabajo en equipo. Esta experiencia consolidó mis habilidades en desarrollo de software, fortaleciendo mi perfil como un profesional altamente calificado y orientado a resultados.
    </p>
    
    <section class="contact-section">
        <p class="contact-text">Si deseas saber más sobre mí y mi forma de trabajar, puedes comunicarte con la persona de referencia:</p>
        <div class="phone-container">
            <i class="Phone is-animating"></i>
            <span class="phone-number">+52 55 2278 5158</span>
        </div>
        <p class="reference-name">Ing. Mauricio Gomez Gallegos</p>
    </section>
    `;
});


document.querySelector(".btn-carrusel4").addEventListener("click", function(event) {
event.preventDefault();
document.getElementById("contenido").innerHTML = `
    <p>
        Durante mi periodo como Becario de Sistemas Computacionales en Sky Leasing, formé parte de un equipo clave en la transformación digital de la empresa.
        Mi participación se destacó por el desarrollo de soluciones innovadoras y la implementación de estrategias tecnológicas orientadas a la optimización de procesos. Entre mis principales responsabilidades y logros se incluyen:
    </p>
    <ul>
        <li><strong>Implementación de soluciones de redes:</strong> Configuración y mantenimiento de equipos de red, administración de usuarios y resolución eficiente de problemas de conectividad para garantizar la continuidad operativa.</li>
        <li><strong>Migración a plataformas digitales:</strong> Participación activa en la implementación de un nuevo sistema de gestión, optimizando flujos de trabajo mediante la automatización de procesos.</li>
        <li><strong>Soporte técnico a usuarios:</strong> Resolución de incidencias técnicas y atención personalizada a los usuarios, destacando por mi enfoque orientado al cliente y mi habilidad para comunicar soluciones de forma clara y efectiva.</li>
    </ul>
    <p>
        Además, destaqué por mi rápida capacidad de aprendizaje, actitud proactiva y compromiso con el trabajo en equipo. Mi entusiasmo por superar retos tecnológicos y mi habilidad para adaptarme a nuevas herramientas contribuyeron al éxito de los proyectos en los que participé.
        Este rol no solo me permitió desarrollar habilidades técnicas avanzadas, sino también fortalecer competencias clave como la ética profesional, la comunicación efectiva y el liderazgo en entornos dinámicos.
    </p>
    
    <section class="contact-section">
        <p class="contact-text">Si deseas saber más sobre mí y mi forma de trabajar, puedes comunicarte con la persona de referencia:</p>
        <div class="phone-container">
            <i class="Phone is-animating"></i>
            <span class="phone-number">+52 56 4729 0495</span>
        </div>
        <p class="reference-name">Ing. Pedro Carlos Ávila Zállago</p>
    </section>
    `;
});


document.querySelector(".btn-carrusel5").addEventListener("click", function(event) {
event.preventDefault();
document.getElementById("contenido").innerHTML = `
    <p>
        • Desempeñé un papel clave en la gestión y soporte técnico para el departamento, brindando soluciones informáticas y administrativas para mejorar los procesos internos.<br>
        • Implementé y coordiné el uso de herramientas tecnológicas para optimizar las operaciones de la oficina, incluyendo el soporte a usuarios y la resolución de problemas técnicos.<br>
        • Mantuve relaciones efectivas con el equipo de trabajo y colaboré en la mejora del ambiente laboral mediante la comunicación y liderazgo.
    </p>`;
});


document.querySelectorAll(".custom-arrow").forEach(arrow => {
    arrow.addEventListener("click", function() {
        document.getElementById("contenido").innerHTML = "";
    });
});