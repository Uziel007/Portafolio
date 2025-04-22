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

let currentDescription = "";
// Función para abrir el modal y mostrar la imagen
function openModalWithDescription(src, description) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var modalDesc = document.querySelector(".modal-description");

    // Si no existe el elemento de descripción, lo creamos
    if (!modalDesc) {
        modal.innerHTML = `
            <span class="close" onclick="closeModal()">&times;</span>
            <img class="modal-content" id="img01">
            <div class="modal-description"></div>
        `;
        modalDesc = document.querySelector(".modal-description");

        // Reasignamos el evento de cerrar
        document.querySelector('.close').onclick = closeModal;
    }

    // Configurar la nueva imagen y descripción
    modal.style.display = "block";
    document.getElementById("img01").src = src;
    modalDesc.textContent = description;

    // Guardar la descripción actual
    currentDescription = description;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    currentDescription = "";
}

// Cerrar el modal si se hace clic fuera de la imagen
window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Evento para el botón .btn-carrusel1
document.querySelector(".btn-carrusel1").addEventListener("click", function (event) {
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
                    ${[
            {
                num: 1,
                desc: "Como desarrollador, diseñé esta interfaz principal de ventas para optimizar el flujo de trabajo. Implementé un sistema de escaneo en tiempo real que se integra directamente con el inventario, cálculos automáticos de totales con impuestos configurables, y una lista editable de productos que permite correcciones inmediatas. La interfaz responde a eventos táctiles y de teclado para máxima eficiencia."
            },
            {
                num: 2,
                desc: "Desarrollé este sistema de autenticación con capas de seguridad implementando hash bcrypt para contraseñas. El módulo valida credenciales contra la base de datos MySQL y asigna permisos según roles (Administrador/Vendedor/Almacenista). Incluí mecanismos para prevenir ataques por fuerza bruta y un sistema de recuperación de cuentas con verificación por email."
            },
            {
                num: 3,
                desc: "Para el registro de productos, construí un formulario dinámico que valida datos en tiempo real. Implementé cálculos automáticos de margen de ganancia y conexión con la API de códigos de barras GS1. El sistema genera alertas cuando el stock cae bajo el mínimo configurado y registra el historial completo de cambios para auditoría."
            },
            {
                num: 4,
                desc: "Este historial de ventas fue desarrollado con paginación inteligente para manejar grandes volúmenes de datos. Implementé filtros por fecha/rango horario usando MySQL DATE_FORMAT y optimicé las consultas con índices compuestos. Los datos se pueden exportar a CSV/PDF mediante librerías personalizadas que desarrollé basadas en FPDF."
            },
            {
                num: 5,
                desc: "Como solución para gestión masiva, programé esta interfaz con actualización en tiempo real usando AJAX para evitar recargas. Desarrollé algoritmos para aplicar descuentos porcentuales o fijos a grupos de productos seleccionados, con previsualización de cambios antes de confirmar. Incluí validación de rangos numéricos y registro de cambios en bitácora."
            },
            {
                num: 6,
                desc: "Para este módulo de inventario, implementé una tabla renderizada del lado del cliente con Virtual DOM para manejar miles de productos sin lag. Desarrollé un sistema de búsqueda combinada que consulta múltiples campos simultáneamente, con sugerencias predictivas. Las opciones de importación/exportación usan Web Workers para procesamiento en segundo plano."
            },
            {
                num: 7,
                desc: "Desarrollé este formulario especial para productos sin código de barras estándar, generando identificadores únicos basados en hash SHA-1 truncados. Implementé cálculos de rentabilidad en tiempo real usando eventos onChange y validación cruzada con productos similares para evitar duplicados. La interfaz guarda borradores automáticamente cada 30 segundos."
            },
            {
                num: 8,
                desc: "Construí este buscador avanzado con un algoritmo que pondera resultados por relevancia usando TF-IDF adaptado a productos. Implementé filtros anidados que se ejecutan como consultas preparadas en MySQL para seguridad. La interfaz usa memoization para cachear resultados frecuentes y reducción de queries innecesarias."
            },
            {
                num: 9,
                desc: "Para estos reportes financieros, desarrollé consultas SQL complejas con subconsultas correlacionadas y funciones de ventana. Implementé gráficos interactivos usando Chart.js con renderizado canvas optimizado. El sistema genera proyecciones usando promedio móvil ponderado y permite la programación de reportes recurrentes automáticos."
            },
            {
                num: 10,
                desc: "Este sistema de gestión de deudores fue uno de mis desarrollos más complejos. Implementé un motor de fechas con Moment.js que calcula estados (verde/rojo/blanco) evaluando plazos personalizables. Desarrollé un algoritmo de cálculo de intereses moratorios configurable por política de negocio. La interfaz incluye recordatorios automáticos vía email/SMS usando colas Redis para manejo asíncrono."
            },
            {
                num: 11,
                desc: "Para el generador de códigos de barras, implementé la librería JsBarcode extendida con patrones personalizados. Desarrollé un sistema de prefijos categóricos que se almacenan como metadatos en la base de datos. La vista previa usa Canvas con opciones de zoom y la impresión se controla mediante una cola de trabajos para evitar bloqueos de interfaz."
            },
            {
                num: 12,
                desc: "Este módulo de usuarios fue desarrollado con arquitectura RBAC (Role-Based Access Control). Implementé un sistema de permisos granulares usando máscaras de bits almacenadas como BIGINT en MySQL. Para seguridad, incluí auditoría de cambios, hash PBKDF2 para contraseñas, y timeout de sesión con renovación automática de tokens JWT."
            },
            {
                num: 13,
                desc: "Desarrollé este sistema de tickets con plantillas Mustache.js que permiten personalización sin modificar código. Implementé impresión térmica directa via ESC/POS commands y generación de PDF con dompdf optimizado. Los tickets incluyen QR codes con hash de validación para autenticidad y se almacenan comprimidos en la base de datos para ahorro de espacio."
            },
            {
                num: 14,
                desc: "Para el sistema de ayuda, construí un motor de búsqueda semántica usando NLP básico con stopwords en español. Implementé captura de pantalla automática con html2canvas para reportes de error. Los tutoriales interactivos usan el localStorage para guardar progreso y se actualizan dinámicamente según actualizaciones del sistema."
            }
        ].map(img => `
            <figure class="shadow"
                data-img="puntodeventa${img.num}.png"
                data-desc="${img.desc.replace(/"/g, '&quot;')}">
                <img src="Recursos/experiencias/galerias/punto de venta/puntodeventa${img.num}.png"/>
                <figcaption class="image-caption">Ver detalles</figcaption>
            </figure>
        `).join('')}
                </div>
            </div>
        </section>
        <h1 class="h1relleno2"></h1>
        <h1 class="h1relleno2"></h1>
        <strong>LINK DEL VIDEO DEMOSTRANDO EL FUNCIONAMIENTO:</strong> 
        <table style="width: 100%; height: 100%;">
                <tr>
                    <td style="text-align: center; vertical-align: middle;">
                        <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                            <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; width: 80%;">
                                <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                        src="https://www.youtube.com/embed/xctI6uWRVHw" 
                                        frameborder="0" 
                                        allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </td>
                </tr>
        </table>

        <h1 class="h1relleno2"></h1>
        <h1 class="h1relleno2"></h1>

        <section class="contact-section">
            <p class="contact-text">Si deseas más información sobre este proyecto, puedes comunicarte con la persona de referencia:</p>
            
            <div class="contact-options">
                <a href="https://wa.me/525633353852" class="whatsapp-btn" target="_blank">
                    <span class="btn-icon">📱</span>
                    <span class="btn-text">Enviar WhatsApp</span>
                </a>
                
                <a href="tel:+525633353852" class="call-btn">
                    <span class="btn-icon">📞</span>
                    <span class="btn-text">Llamar ahora</span>
                </a>
            </div>
            
            <div class="contact-details">
                <p class="phone-number">+52 56 3335 3852</p>
                <p class="reference-name">Nadia Ambrocio</p>
            </div>
        </section>
    `;
    document.querySelectorAll(".shadow").forEach(fig => {
        fig.addEventListener("click", () => {
            const img = fig.dataset.img;
            const desc = fig.dataset.desc;
            openModalWithDescription(
                `Recursos/experiencias/galerias/punto de venta/${img}`,
                desc
            );
        });
    });
});

document.querySelector(".btn-carrusel2").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("contenido").innerHTML = `
    <p>
        Durante mi periodo como Practicante en el Laboratorio de Química, desarrollé un rol multifuncional combinando mis conocimientos técnicos con las necesidades del laboratorio. Mis principales responsabilidades y logros incluyeron:
    </p>
    <ul>
        <li><strong>Desarrollo de software especializado:</strong> Creé programas personalizados para el control de inventario de reactivos, registro de experimentos y análisis estadístico de resultados, mejorando la eficiencia en los procesos del laboratorio.</li>
        <li><strong>Mantenimiento de equipos computarizados:</strong> Realicé el mantenimiento preventivo y correctivo de los sistemas informáticos conectados a los equipos de análisis (espectrómetros, cromatógrafos, etc.), asegurando su óptimo funcionamiento.</li>
        <li><strong>Automatización de procesos:</strong> Implementé soluciones tecnológicas para automatizar la recolección de datos de los instrumentos, reduciendo errores humanos y ahorrando tiempo en el procesamiento de información.</li>
        <li><strong>Soporte técnico:</strong> Brindé asistencia al personal del laboratorio en el uso de software especializado y herramientas digitales para análisis químicos.</li>
        <li><strong>Capacitación:</strong> Diseñé manuales y guías rápidas para el uso de los sistemas desarrollados, facilitando la adopción tecnológica por parte del equipo.</li>
    </ul>
    <p>
        Esta experiencia me permitió desarrollar habilidades únicas en la intersección entre la tecnología y las ciencias químicas, demostrando mi capacidad para adaptar soluciones informáticas a entornos altamente especializados.
    </p>
    
    <section class="contact-section">
        <p class="contact-text">Para referencias sobre mi desempeño en el laboratorio, puedes contactar a:</p>
        
        <div class="contact-options">
            <a href="https://wa.me/525524154455" class="whatsapp-btn" target="_blank">
                <span class="btn-icon">📱</span>
                <span class="btn-text">Enviar WhatsApp</span>
            </a>
            
            <a href="tel:+525524154455" class="call-btn">
                <span class="btn-icon">📞</span>
                <span class="btn-text">Llamar ahora</span>
            </a>
        </div>
        
        <div class="contact-details">
            <p class="phone-number">+52 55 2415 4455</p>
            <p class="reference-name">Ing. Héctor Mendoza</p>
            <p class="reference-position">Jefe de Laboratorio</p>
        </div>
    </section>
    `;
});

document.querySelector(".btn-carrusel3").addEventListener("click", function (event) {
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
            
            <div class="contact-options">
                <a href="https://wa.me/525522785158" class="whatsapp-btn" target="_blank">
                    <span class="btn-icon">📱</span>
                    <span class="btn-text">Enviar WhatsApp</span>
                </a>
                
                <a href="tel:+525522785158" class="call-btn">
                    <span class="btn-icon">📞</span>
                    <span class="btn-text">Llamar ahora</span>
                </a>
            </div>
            
            <div class="contact-details">
                <p class="phone-number">+52 55 2278 5158</p>
                <p class="reference-name">Ing. Mauricio Gomez Gallegos</p>
            </div>
        </section>
    `;
});


document.querySelector(".btn-carrusel4").addEventListener("click", function (event) {
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
            
            <div class="contact-options">
                <a href="https://wa.me/525647290495" class="whatsapp-btn" target="_blank">
                    <span class="btn-icon">📱</span>
                    <span class="btn-text">Enviar WhatsApp</span>
                </a>
                
                <a href="tel:+525647290495" class="call-btn">
                    <span class="btn-icon">📞</span>
                    <span class="btn-text">Llamar ahora</span>
                </a>
            </div>
            
            <div class="contact-details">
                <p class="phone-number">+52 56 4729 0495</p>
                <p class="reference-name">Ing. Pedro Carlos Ávila Zállago</p>
            </div>
        </section>
    `;
});


document.querySelector(".btn-carrusel5").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("contenido").innerHTML = `
    <p>
        • Desempeñé un papel clave en la gestión y soporte técnico para el departamento, brindando soluciones informáticas y administrativas para mejorar los procesos internos.<br>
        • Implementé y coordiné el uso de herramientas tecnológicas para optimizar las operaciones de la oficina, incluyendo el soporte a usuarios y la resolución de problemas técnicos.<br>
        • Mantuve relaciones efectivas con el equipo de trabajo y colaboré en la mejora del ambiente laboral mediante la comunicación y liderazgo.
    </p>`;
});

document.querySelector(".btn-carrusel6").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("contenido").innerHTML = `
        <ul>
            <li>Desarrollé una tienda online de ropa completamente funcional con diseño responsivo y estéticamente atractivo.</li>
            <li>Incluye un catálogo dinámico con filtros por color, estilo, temporada y colaboraciones, adaptándose automáticamente según la fecha.</li>
            <li>Integré un sistema de favoritos local sin base de datos, permitiendo a los usuarios guardar prendas sin necesidad de iniciar sesión.</li>
            <li>Se utilizaron tecnologías como HTML, CSS, JavaScript y Supabase para permitir que el contenido sea modificable sin tocar el código.</li>
            <li>Incorporé sliders interactivos para mostrar colaboraciones y un Lookbook visualmente atractivo.</li>
            <li>La galería de looks cuenta con filtros combinables para facilitar la navegación.</li>
            <li>Diseño minimalista con efectos sutiles (hover, transiciones suaves, modo claro/oscuro y parallax).</li>
            <li>Sección de contacto con mapa interactivo y formulario funcional.</li>
            <li>Desarrollé un blog integrado con artículos categorizados y editables desde un panel.</li>
            <li>Cuenta con una sección "Behind the Scenes" que muestra bocetos, inspiración y videos del proceso creativo.</li>
        </ul>
        <h1 class="h1relleno2"></h1>
        <h1 class="h1relleno2"></h1>
        <strong>Galería de imágenes:</strong> 
        <section id="slideshow">
            <div class="entire-content">
                <div class="content-carrousel">
                    ${[
            {
                num: 1,
                desc: "Como desarrollador frontend, diseñé esta página de inicio para crear una primera impresión impactante. Implementé un hero section con imagen de fondo optimizada que se carga progresivamente, animaciones CSS para el texto principal que se activan al hacer scroll, y una barra de navegación sticky que se minimiza al desplazarse. Usé Intersection Observer API para cargar imágenes de manera diferida y mejoré el CLS (Cumulative Layout Shift) manteniendo reservado el espacio para cada elemento."
            },
            {
                num: 2,
                desc: "Para la sección de productos destacados, desarrollé un grid system personalizado usando CSS Grid con fallback a Flexbox para navegadores antiguos. Cada tarjeta de producto tiene un sistema de hover que muestra opciones rápidas (favoritos, vista rápida) con transiciones suaves implementadas con requestAnimationFrame para máximo rendimiento. Integré un sistema de lazy loading para las imágenes y pre-caching de los productos más visitados usando Service Workers."
            },
            {
                num: 3,
                desc: "La página de colección primavera fue desarrollada con un enfoque en el rendimiento. Implementé virtual scrolling para manejar grandes cantidades de productos, renderizando solo los elementos visibles en el viewport. Los filtros laterales usan Web Workers para procesar las opciones sin bloquear el hilo principal. Diseñé un sistema de prefetching que carga anticipadamente las imágenes cuando el usuario se acerca a ellas al hacer scroll."
            },
            {
                num: 4,
                desc: "Para la colección de invierno, creé un sistema de filtros combinables que actualiza la vista sin recargar la página. Implementé debouncing en las búsquedas para evitar múltiples peticiones innecesarias y usé IndexedDB para cachear los resultados localmente. El diseño utiliza CSS variables para los temas estacionales que pueden cambiarse dinámicamente. Desarrollé un algoritmo que prioriza la carga de productos con mayor probabilidad de conversión basado en historial de usuario."
            },
            {
                num: 5,
                desc: "Los productos en tendencia fueron implementados con un carrusel personalizado que funciona sin dependencias externas. Usé el Pointer Events API para soporte multiplataforma (touch y mouse) y desarrollé un sistema de inercia para los deslizamientos. Los datos de popularidad se actualizan en tiempo real mediante WebSockets, mostrando un indicador sutil cuando hay cambios. Implementé prefetching de imágenes para los productos adyacentes al visible."
            },
            {
                num: 6,
                desc: "La sección de colaboraciones fue desarrollada como un SPA (Single Page Application) dentro del sitio principal. Usé la History API para manejar la navegación sin recargas y desarrollé componentes reutilizables para los elementos de diseño exclusivos. Implementé un sistema de etiquetas dinámicas que se actualizan según las fechas de las colaboraciones y su disponibilidad. La integración con APIs de diseñadores externos se hace mediante GraphQL para obtener solo los datos necesarios."
            },
            {
                num: 7,
                desc: "Para la sección de elegancia atemporal, desarrollé un sistema de recomendaciones basado en machine learning (usando TensorFlow.js) que sugiere complementos para cada prenda. Implementé un visualizador 360° para productos seleccionados usando WebGL. El sistema de precios muestra automáticamente conversiones a otras monedas basado en la ubicación del usuario, con actualización diaria de tasas de cambio mediante una API externa."
            },
            {
                num: 8,
                desc: "El lookbook con reseñas combina técnicas avanzadas de frontend. Desarrollé un sistema de galería que prioriza las imágenes según el ancho de banda del usuario (usando la Network Information API). Las reseñas implementan markdown básico para formato de texto y usan Web Components para los elementos interactivos. Implementé moderación automática de comentarios usando un servicio externo para filtrar contenido inapropiado."
            },
            {
                num: 9,
                desc: "La página de contacto fue desarrollada con accesibilidad como prioridad. Implementé formularios con validación en tiempo real usando Constraint Validation API. El mapa interactivo usa Mapbox GL JS con renderizado vectorial para máxima calidad. Desarrollé un sistema de autocompletado para direcciones usando la Places API de Google. Todos los campos tienen etiquetas ARIA para soporte a lectores de pantalla."
            },
            {
                num: 10,
                desc: "El formulario de contacto implementa medidas de seguridad avanzadas. Desarrollé un sistema de honeypot para prevenir spam, validación del lado del cliente y servidor, y protección contra CSRF. Los archivos adjuntos son previsualizados antes de subirse usando el File API. Implementé un estado de progreso para envíos largos y reintentos automáticos en caso de fallos temporales de conexión."
            },
            {
                num: 11,
                desc: "La página de detalle de producto es una de las más complejas técnicamente. Implementé zoom de imágenes con superresolución usando técnicas de upscaling basadas en IA. El selector de tallas muestra disponibilidad en tiempo real mediante WebSockets. Desarrollé un visualizador AR (usando model-viewer) para productos seleccionados. La galería de fotos alternativas usa el formato WebP con fallback a JPEG para compatibilidad."
            },
            {
                num: 12,
                desc: "La sección de favoritos fue desarrollada para funcionar completamente del lado del cliente cuando sea posible. Usé IndexedDB para almacenamiento local con sincronización periódica al backend. Implementé un sistema de categorización automática basada en análisis de productos similares. Los items pueden reordenarse mediante drag and touch, con posiciones guardadas en el perfil del usuario cuando está autenticado."
            },
            {
                num: 13,
                desc: "El carrito de compras implementa un flujo optimizado para conversión. Desarrollé cálculos de impuestos en tiempo real basados en ubicación geográfica. Los descuentos se aplican con validación inmediata contra el servidor. Implementé un sistema de recuperación de carritos abandonados mediante localStorage y notificaciones push. La interfaz se adapta dinámicamente para mostrar métodos de pago relevantes según el monto total."
            },
            {
                num: 14,
                desc: "La vista responsive fue desarrollada con mobile-first approach. Implementé responsive images con srcset y sizes para entregar el tamaño óptimo a cada dispositivo. Los breakpoints usan container queries donde es posible para mayor flexibilidad. Desarrollé un sistema de carga condicional de componentes basado en capacidades del dispositivo (como omitir ciertas animaciones en móviles antiguos). El rendimiento se optimizó mediante code splitting y carga progresiva de assets no críticos."
            }
        ].map(img => `
            <figure class="shadow"
                data-img="ropa${img.num}.png"
                data-desc="${img.desc.replace(/"/g, '&quot;')}">
                <img src="Recursos/experiencias/galerias/TiendaRopa/ropa${img.num}.png"/>
                <figcaption class="image-caption">Ver detalles</figcaption>
            </figure>
        `).join('')}
                </div>
            </div>
        </section>
        <h1 class="h1relleno2"></h1>
        <h1 class="h1relleno2"></h1>
        <strong>VIDEO DEL PROYECTO:</strong> 
        <table style="width: 100%; height: 100%;">
            <tr>
                <td style="text-align: center; vertical-align: middle;">
                    <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                        <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; width: 80%;">
                            <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                    src="https://www.youtube.com/embed/as7fO08yJec"
                                    frameborder="0" 
                                    allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
        <h1 class="h1relleno2"></h1>
        <h1 class="h1relleno2"></h1>
            <section class="contact-section">
                <p class="contact-text">Si deseas más información sobre este proyecto, puedes comunicarte con la persona de referencia:</p>
                
                <div class="contact-options">
                    <a href="https://wa.me/525524218886" class="whatsapp-btn" target="_blank">
                        <span class="btn-icon">📱</span>
                        <span class="btn-text">Enviar WhatsApp</span>
                    </a>
                    
                    <a href="tel:+525524218886" class="call-btn">
                        <span class="btn-icon">📞</span>
                        <span class="btn-text">Llamar ahora</span>
                    </a>
                </div>
                
                <div class="contact-details">
                    <p class="phone-number">+52 55 2421 8886</p>
                    <p class="reference-name">Adela Ávila Franco</p>
                </div>
            </section>
    `;
    document.querySelectorAll(".shadow").forEach(fig => {
        fig.addEventListener("click", () => {
            const img = fig.dataset.img;
            const desc = fig.dataset.desc;
            openModalWithDescription(
                `Recursos/experiencias/galerias/TiendaRopa/${img}`,
                desc
            );
        });
    });
});

document.querySelector(".btn-carrusel7").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("contenido").innerHTML = `
        <ul>
            <li>Consultoría integral especializada para desarrolladores de sistemas en áreas como desarrollo web, infraestructura de redes, automatización y soluciones backend.</li>
            <li>Sistema de administración con opciones para activar o desactivar publicaciones, servicios, testimonios y contenido general sin necesidad de modificar código.</li>
            <li>Panel de gestión donde se pueden registrar nuevos servicios, asignarles íconos, imágenes, descripciones y categorías.</li>
            <li>Sección de clientes potenciales con opción para visualizar comentarios y testimonios, subir retroalimentación directamente al panel.</li>
            <li>Gestión de nombre, logo, imagen institucional y presentación editable desde el sistema.</li>
            <li>Incluye herramientas para administrar contenidos dinámicos, control de usuarios y asignación de roles.</li>
            <li>Frontend moderno, responsivo, con enfoque profesional y animaciones sutiles.</li>
            <li>Desarrollado con tecnologías como JavaScript, HTML, CSS y Supabase para el backend sin servidor.</li>
            <li>Incluye documentación técnica y manual de usuario para facilitar futuras modificaciones.</li>
        </ul>
        <h1 class="h1relleno2"></h1>
        <h1 class="h1relleno2"></h1>
        <strong>Galería de imágenes:</strong> 
        <section id="slideshow">
            <div class="entire-content">
                <div class="content-carrousel">
                    ${[
            {
                num: 1,
                desc: "Implementé un sistema de gestión de consultas donde cada mensaje muestra: servicio solicitado, datos completos del cliente (nombre, empresa, teléfono), mensaje detallado y timestamp exacto. Desarrollé un código de colores para estados (verde=resuelto, amarillo=pendiente) y agregué filtros por tipo de servicio y fecha. La interfaz permite responder directamente desde el panel o derivar a otros departamentos."
            },
            {
                num: 2,
                desc: "Diseñé esta sección institucional con animaciones SVG personalizadas para cada valor corporativo. Implementé un sistema de 'hover cards' que al pasar el cursor muestra ejemplos prácticos de cada principio en acción. La tipografía escalable garantiza legibilidad en todos los dispositivos, y el diseño cumple con estándares WCAG 2.1 para accesibilidad."
            },
            {
                num: 3,
                desc: "Desarrollé una línea de tiempo interactiva con hitos claves que se expanden al hacer clic, mostrando fotos y logros relevantes. Para los objetivos corporativos, creé indicadores de progreso visuales (barras de avance) que se actualizan automáticamente desde los KPIs del negocio. Incluí enlaces a casos de éxito relacionados."
            },
            {
                num: 4,
                desc: "Construí un CMS completo con: editor WYSIWYG con formato avanzado, programación de publicaciones, análisis de engagement (vistas, tiempo de lectura) y sistema de etiquetas inteligentes. Cada post tiene versión móvil optimizada con lazy loading para imágenes y lectura ininterrumpida."
            },
            {
                num: 5,
                desc: "Implementé un catálogo dinámico con: filtros combinados (por tipo, precio, duración), comparador de servicios, calculadora de ROI para clientes y vista de 'servicios frecuentemente contratados juntos'. Cada ficha técnica incluye documentos descargables, testimonios relevantes y formulario de cotización directa."
            },
            {
                num: 6,
                desc: "Desarrollé un sistema de reputación con: verificación de clientes reales (mediante confirmación por email), respuestas públicas a testimonios, filtros por industria y tamaño de empresa, y análisis de sentimiento automático. Los testimonios verificados muestran insignias especiales."
            },
            {
                num: 7,
                desc: "Creé un formulario inteligente que: sugiere mejoras en tiempo real (para testimonios muy cortos), detecta lenguaje inapropiado, permite adjuntar evidencias (capturas, documentos) y muestra una vista previa antes de enviar. Implementé un sistema de recompensas por testimonios completos."
            },
            {
                num: 8,
                desc: "Diseñé un formulario multicanal que se adapta al servicio seleccionado (mostrando campos relevantes). Integré: autocompletado con empresas existentes, validación de número de teléfono por país, previsualización de disponibilidad de agenda, y opción para programar llamada inmediata."
            },
            {
                num: 9,
                desc: "Desarrollé un CRUD completo para gestionar servicios con: editor enriquecido, historial de cambios, programación de disponibilidad, gestión de precios especiales por segmento, y sistema de aprobaciones en flujo de trabajo. Cada modificación genera notificaciones a los equipos relevantes."
            },
            {
                num: 10,
                desc: "Implementé una tabla avanzada con: búsqueda inteligente (incluye descripciones), filtros combinados, ordenamiento multidimensional, exportación a CSV/Excel, y acciones masivas. El estado de cada servicio se sincroniza en tiempo real con la página pública."
            },
            {
                num: 11,
                desc: "Construí un calendario editorial interactivo con: programación visual de contenido, alertas de duplicación, análisis de rendimiento histórico, y sugerencias de temas basadas en tendencias. El sistema incluye workflow de aprobación con roles y comentarios internos."
            },
            {
                num: 12,
                desc: "Desarrollé un CRM básico con: puntuación automática de leads, historial de interacciones, integración con herramientas de comunicación, y sistema de seguimiento por etapas. Implementé recordatorios programables y generación de informes de conversión."
            },
            {
                num: 13,
                desc: "Optimicé el rendimiento con: carga diferencial de componentes, imágenes en formato WebP, fuentes locales, y estrategia de caching avanzada. Implementé menús contextuales que se adaptan al dispositivo, y controles táctiles optimizados para móviles."
            },
            {
                num: 14,
                desc: "Creé un centro de notificaciones unificado con: priorización inteligente, agrupación por contexto, acciones rápidas desde la alerta, y sincronización entre dispositivos. Las notificaciones incluyen metadatos enriquecidos y opciones de silenciamiento temporal."
            }
        ].map(img => `
            <figure class="shadow"
                data-img="consultoria${img.num}.png"
                data-desc="${img.desc.replace(/"/g, '&quot;')}">
                <img src="Recursos/experiencias/galerias/consultoria/consultoria${img.num}.png"/>
                <figcaption class="image-caption">Ver detalles</figcaption>
            </figure>
        `).join('')}
                </div>
            </div>
        </section>
        <h1 class="h1relleno2"></h1>
        <h1 class="h1relleno2"></h1>
        <strong>VIDEO DEL PROYECTO:</strong> 
        <table style="width: 100%; height: 100%;">
            <tr>
                <td style="text-align: center; vertical-align: middle;">
                    <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                        <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; width: 80%;">
                            <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                    src="https://www.youtube.com/embed/ji0QgzrRtVw"
                                    frameborder="0" 
                                    allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
        <h1 class="h1relleno2"></h1>
        <h1 class="h1relleno2"></h1>
        <section class="contact-section">
            <p class="contact-text">¿Te interesa conocer más sobre este sistema de consultoría para desarrolladores? Contáctanos directamente:</p>
            
            <div class="contact-options">
                <a href="https://wa.me/525585067049" class="whatsapp-btn" target="_blank">
                    <span class="btn-icon">📱</span>
                    <span class="btn-text">Enviar WhatsApp</span>
                </a>
                
                <a href="tel:+525585067049" class="call-btn">
                    <span class="btn-icon">📞</span>
                    <span class="btn-text">Llamar ahora</span>
                </a>
            </div>
            
            <div class="contact-details">
                <p class="phone-number">+52 55 8506 7049</p>
                <p class="reference-name">Uziel Sanchez Marin</p>
            </div>
        </section>
    `;
    document.querySelectorAll(".shadow").forEach(fig => {
        fig.addEventListener("click", () => {
            const img = fig.dataset.img;
            const desc = fig.dataset.desc;
            openModalWithDescription(
                `Recursos/experiencias/galerias/consultoria/${img}`,
                desc
            );
        });
    });
});



document.querySelectorAll(".custom-arrow").forEach(arrow => {
    arrow.addEventListener("click", function () {
        document.getElementById("contenido").innerHTML = "";
    });
});