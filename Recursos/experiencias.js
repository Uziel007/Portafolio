document.addEventListener("DOMContentLoaded", function () {
  // Estilos iniciales para el contenido
  const contenido = document.getElementById("contenido");
  if (contenido) {
    contenido.style.transition =
      "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    contenido.style.transformOrigin = "top center";
  }
});

// Función para calcular el radio óptimo
function calculateOptimalRadius(numImages, imageWidth = 180) {
  const angle = (2 * Math.PI) / numImages;
  const minRadius = (imageWidth * 0.6) / Math.sin(angle / 2);
  const safeRadius = Math.ceil(minRadius * 1.2);
  return Math.max(200, Math.min(1200, safeRadius));
}

// Función para adaptar todos los carruseles automáticamente
function adaptAllCarousels() {
  const carousels = document.querySelectorAll(".content-carrousel");

  carousels.forEach((carousel) => {
    const figures = carousel.querySelectorAll("figure");
    const totalImages = figures.length;

    if (totalImages > 0) {
      const angleStep = 360 / totalImages;
      const radius = calculateOptimalRadius(totalImages);

      figures.forEach((figure, index) => {
        const rotation = angleStep * index;
        figure.style.transform = `rotateY(${rotation}deg) translateZ(${radius}px)`;
      });

      console.log(
        `Carrusel adaptado: ${totalImages} imágenes, radio: ${radius}px`
      );
    }
  });
}

// Ejecutar cuando cargue la página y el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
  // Esperar un momento para que se genere todo el HTML dinámico
  setTimeout(adaptAllCarousels, 100);
});

// También ejecutar cuando se redimensione la ventana (opcional)
window.addEventListener("resize", adaptAllCarousels);

document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".custom-wrapper");
  const items = document.querySelectorAll(".custom-item");
  const prev = document.querySelector(".custom-arrow-prev");
  const next = document.querySelector(".custom-arrow-next");
  let index = 0;

  // Configuración inicial de la animación
  const contenido = document.getElementById("contenido");
  contenido.style.transition = "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
  contenido.style.transformOrigin = "top center";

  function animateContent() {
    // Reset para la animación
    contenido.style.opacity = "0";
    contenido.style.transform = "translateY(30px) scale(0.98)";

    // Pequeño delay para permitir el renderizado del nuevo contenido
    setTimeout(() => {
      contenido.style.opacity = "1";
      contenido.style.transform = "translateY(0) scale(1)";
    }, 50);
  }

  function updateCarousel() {
    // Primero vaciamos el contenido con animación
    contenido.style.opacity = "0";
    contenido.style.transform = "translateY(30px) scale(0.98)";

    // Cambiamos el slide
    wrapper.style.transform = `translateX(-${index * 100}%)`;

    // Disparamos el evento hover en el slide actual
    const currentItem = items[index];
    const mouseEnterEvent = new Event("mouseenter");
    currentItem.dispatchEvent(mouseEnterEvent);

    // Esperamos un breve momento antes de animar el nuevo contenido
    setTimeout(() => {
      animateContent();
    }, 100);
  }

  next.addEventListener("click", function () {
    index = (index + 1) % items.length;
    updateCarousel();
  });

  prev.addEventListener("click", function () {
    index = (index - 1 + items.length) % items.length;
    updateCarousel();
  });

  // Funciones de contenido para cada ítem (en orden del HTML: Servet, consultoría, tienda de ropa, punto de venta, laboratorio, agencia, prácticas, soporte técnico)
  const contentFunctions = [
    // Función para Servet
    function () {
      animateContent();
      document.getElementById("contenido").innerHTML = `
    <div class="smaller-text">
        <p>
            Servet representa una solución integral desarrollada con Spring Boot para la gestión completa de negocios. 
            Esta plataforma combina tecnologías modernas como Hibernate, Thymeleaf, HSQLDB y herramientas de empaquetado 
            avanzadas para crear un sistema robusto y escalable.
        </p>
        
        <!-- Sección 0: Visión General del Proyecto -->
        <section>
            <h4>Visión General del Proyecto Servet</h4>
            <p>Esta sección ofrece un panorama completo del proyecto Servet, destacando sus componentes clave, arquitectura general y beneficios para la gestión de negocios. Incluye una visión integrada de todas las funcionalidades, desde el setup inicial hasta el cierre y resguardo de datos, enfatizando la escalabilidad, seguridad y usabilidad del sistema.</p>
            <ul>
                <li><strong>Arquitectura Integral:</strong> Basada en Spring Boot con capas MVC, persistencia en HSQLDB y vistas dinámicas con Thymeleaf. Utiliza RESTful APIs para comunicación entre módulos y WebSockets para actualizaciones en tiempo real. Prueba: Arranque completo del sistema, navegación por módulos principales y verificación de respuestas de APIs en Postman.</li>
                <li><strong>Funcionalidades Clave:</strong> Gestión de usuarios con autenticación JWT, CRM con segmentación de clientes, inventario multi-almacén, ventas POS con escaneo de códigos QR, promociones dinámicas, dashboards interactivos, alertas configurables y soporte multi-sucursal con sincronización en tiempo real. Prueba: Flujo end-to-end de una venta, desde escaneo de producto hasta generación de ticket digital, con alertas de stock bajo y reporte consolidado.</li>
                <li><strong>Beneficios:</strong> Escalabilidad para múltiples sucursales mediante microservicios, seguridad robusta con roles, auditoría de acciones y cifrado AES-256, optimización para dispositivos móviles con interfaces responsivas y soporte offline vía PWA. Prueba: Simulación de operaciones concurrentes con JMeter, backups automáticos con verificación de integridad y navegación fluida en emuladores de tablet.</li>
                <li><strong>Integración y Automatización:</strong> Incorpora herramientas CI/CD con Maven y Jenkins para despliegues automatizados, integración con servicios externos como Gmail SMTP para notificaciones y APIs de terceros para pagos. Prueba: Ejecución de pipeline de build, envío de correo automatizado y procesamiento de pago simulado.</li>
                <li><strong>Personalización y Flexibilidad:</strong> Permite configuraciones dinámicas para adaptarse a diferentes tipos de negocio, como ajustes de IVA por región, plantillas de reportes personalizables y módulos habilitados/deshabilitados según necesidades. Prueba: Creación de un reporte personalizado y cambio de configuración fiscal en tiempo real.</li>
                <li><strong>Rendimiento y Optimización:</strong> Uso de Redis para caché de consultas frecuentes, índices optimizados en HSQLDB y lazy loading para recursos estáticos. Prueba: Medición de tiempos de respuesta en consultas de inventario y carga de vistas en navegadores con herramientas de desarrollo.</li>
            </ul>
            <strong>Galería de imágenes - Visión General del Proyecto:</strong>
            <section id="slideshow">
                <div class="entire-content">
                    <div class="content-carrousel">
                        ${[
                          {
                            num: 1,
                            desc: "Vista panorámica de la arquitectura general de Servet, mostrando la integración de capas MVC con Spring Boot y HSQLDB. La captura ilustra el flujo de datos desde el frontend hasta la persistencia.",
                          },
                          {
                            num: 2,
                            desc: "Dashboard principal del sistema, con KPIs integrados de ventas, inventario y alertas. La captura destaca la visualización en tiempo real de métricas clave para la toma de decisiones.",
                          },
                          {
                            num: 3,
                            desc: "Flujo completo de una venta POS, desde el escaneo de productos hasta la generación de ticket. La captura muestra la interfaz responsiva optimizada para tablets y móviles.",
                          },
                          {
                            num: 4,
                            desc: "Sistema de seguridad y roles, con matriz de permisos y autenticación JWT. La captura ilustra un intento de acceso denegado y el log de auditoría correspondiente.",
                          },
                          {
                            num: 5,
                            desc: "Gestión de inventario multi-sucursal, con sincronización en tiempo real. La captura muestra el stock consolidado y movimientos entre almacenes.",
                          },
                          {
                            num: 6,
                            desc: "Módulo de promociones y descuentos aplicados en un carrito de compras. La captura destaca la resolución automática de reglas y el recálculo de totales.",
                          },
                          {
                            num: 7,
                            desc: "Calendario y tareas integradas con recordatorios automáticos. La captura muestra eventos programados y notificaciones enviadas por email.",
                          },
                          {
                            num: 8,
                            desc: "Reportes programados y exportaciones a CSV/PDF. La captura ilustra un reporte consolidado de ventas multi-sucursal con gráficos embebidos.",
                          },
                          {
                            num: 9,
                            desc: "Sistema de alertas y notificaciones internas/externas. La captura muestra una alerta de stock bajo y su resolución en la UI.",
                          },
                          {
                            num: 10,
                            desc: "Proceso de empaquetado y despliegue, incluyendo .jar y instalador .exe. La captura destaca el pipeline de build automatizado con Maven.",
                          },
                          {
                            num: 11,
                            desc: "Gestión de clientes CRM con búsqueda inteligente y tickets digitales. La captura ilustra el historial de interacciones y segmentación de clientes.",
                          },
                          {
                            num: 12,
                            desc: "Cierre contable y backups automáticos. La captura muestra el reporte final de cierre y la verificación de integridad de datos restaurados.",
                          },
                          {
                            num: 13,
                            desc: "Pruebas de rendimiento y concurrencia con JMeter. La captura ilustra resultados de simulaciones con múltiples usuarios concurrentes.",
                          },
                          {
                            num: 14,
                            desc: "Documentación general del proyecto en Trello y Google Docs. La captura destaca el tablero Kanban con sprints y diagramas UML integrados.",
                          },
                          {
                            num: 15,
                            desc: "Gestión completa de la sección de pedidos. La captura muestra el panel donde se registran, revisan y actualizan los pedidos, incluyendo estados de procesamiento, fechas de entrega y detalles de clientes.",
                          },
                          {
                            num: 16,
                            desc: "Sistema de generación y envío de e-tickets por correo electrónico. La captura muestra el flujo de creación del ticket, notificación automática al cliente y confirmación de recepción en su bandeja de entrada.",
                          },
                          {
                            num: 17,
                            desc: "Generación y envío de una gran variedad de reportes por correo electrónico. La captura muestra diferentes tipos de reportes automatizados, entregados a los destinatarios con formato claro y organizado.",
                          },
                          {
                            num: 18,
                            desc: "Implementación de un sistema de roles con notificaciones personalizadas según el perfil del usuario. La captura muestra cómo cada rol recibe alertas y accesos diferenciados dentro del sistema.",
                          },
                          {
                            num: 19,
                            desc: "Desarrollo de una API única para tablets con manejo de ventanas responsivas. La captura muestra la interfaz adaptativa y la comunicación centralizada entre la app y el servidor.",
                          },
                          {
                            num: 20,
                            desc: "Panel de gestión de stock y anaqueles. La captura muestra la visualización de los anaqueles con diferentes filas y columnas, productos organizados por ubicación y lote, y la posibilidad de agregar anaqueles, mover productos y cargar inventario de manera rápida y clara.",
                          },
                        ]
                          .map(
                            (img) => `
                            <figure class="shadow"
                                data-img="servet${img.num}.png"
                                data-desc="${img.desc.replace(/"/g, "&quot;")}">
                                <img src="Recursos/experiencias/galerias/servet/general/servet${
                                  img.num
                                }.png"/>
                                <figcaption class="image-caption">Ver detalles</figcaption>
                            </figure>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            </section>
            
            <strong>Video General del Proyecto:</strong>
            <table style="width: 100%; height: 100%;">
                <tr>     
                <td style="text-align: center; vertical-align: middle;">      
                    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%; font-family: Arial, sans-serif; padding: 10px; box-sizing: border-box;">
                        <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; width: 100%; max-width: 900px; border-radius: 10px; box-shadow: 0 10px 25px rgba(0,0,0,0.8); border: 2px solid rgba(40,40,40,0.6);">
                            <iframe id="youtubeVideo" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 10px;" 
                                    src="https://www.youtube.com/embed/5B_Jc2Z1IC4?enablejsapi=1"
                                    frameborder="0" 
                                    allowfullscreen>
                            </iframe>
                        </div>
                        
                        <div style="margin-top: 20px; padding: 20px; background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%); border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.7); width: 100%; max-width: 900px; border: 1px solid rgba(60,60,60,0.4); box-sizing: border-box;">
                            <h3 style="color: #cccccc; text-align: center; margin-bottom: 20px; font-size: clamp(16px, 4vw, 20px); text-shadow: 0 2px 4px rgba(0,0,0,0.8);">⚡ Capítulos del Video</h3>
                            
                            <!-- Selector desplegable para pantallas pequeñas -->
                            <div style="display: block;">
                                <select id="chapterSelector" onchange="goToChapter(this.value)" style="width: 100%; padding: 15px; background: rgba(40,40,40,0.8); border: 1px solid rgba(60,60,60,0.6); border-radius: 8px; color: #cccccc; font-size: 14px; margin-bottom: 20px; cursor: pointer;">
                                    <option value="">📋 Selecciona un capítulo</option>
                                    <option value="0">🏠 00:00 - Introducción</option>
                                    <option value="165">📝 02:45 - Gestión de tareas</option>
                                    <option value="249">🗂 04:09 - Estructura del proyecto</option>
                                    <option value="546">💻 09:06 - Creación del instalable</option>
                                    <option value="1250">⚙️ 20:50 - Instalación de la aplicación</option>
                                    <option value="1427">👀 23:47 - Primer inicio y vista de usuario</option>
                                    <option value="1780">🔑 29:40 - Funcionalidades principales</option>
                                    <option value="1991">💰 33:11 - Módulo de ventas</option>
                                    <option value="3084">📊 51:24 - Estadísticas</option>
                                    <option value="3463">👥 57:43 - Clientes y pedidos</option>
                                    <option value="3499">👤 58:19 - Usuarios</option>
                                    <option value="3792">📋 63:12 - Contabilidad</option>
                                    <option value="3925">⚙️ 65:25 - Ajustes generales</option>
                                    <option value="4268">🔔 71:08 - Alertas y notificaciones</option>
                                    <option value="4654">📅 77:34 - Calendario y tareas</option>
                                    <option value="5133">🎁 85:33 - Ofertas y promociones</option>
                                    <option value="5539">📦 92:19 - Productos y almacenamiento</option>
                                    <option value="5982">📱 99:42 - Uso en tablet</option>
                                </select>
                            </div>
                            
                            <!-- Grid de botones para pantallas medianas y grandes -->
                            <div id="buttonGrid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 8px;">
                                <button onclick="seekTo(0)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" 
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    🏠 00:00 - Introducción
                                </button>
                                
                                <button onclick="seekTo(165)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    📝 02:45 - Gestión de tareas
                                </button>
                                
                                <button onclick="seekTo(249)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    🗂 04:09 - Estructura del proyecto
                                </button>
                                
                                <button onclick="seekTo(546)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    💻 09:06 - Creación del instalable
                                </button>
                                
                                <button onclick="seekTo(1250)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    ⚙️ 20:50 - Instalación de la aplicación
                                </button>
                                
                                <button onclick="seekTo(1427)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    👀 23:47 - Primer inicio y vista de usuario
                                </button>
                                
                                <button onclick="seekTo(1780)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    🔑 29:40 - Funcionalidades principales
                                </button>
                                
                                <button onclick="seekTo(1991)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    💰 33:11 - Módulo de ventas
                                </button>
                                
                                <button onclick="seekTo(3084)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    📊 51:24 - Estadísticas
                                </button>
                                
                                <button onclick="seekTo(3463)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    👥 57:43 - Clientes y pedidos
                                </button>
                                
                                <button onclick="seekTo(3499)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    👤 58:19 - Usuarios
                                </button>
                                
                                <button onclick="seekTo(3792)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    📋 63:12 - Contabilidad
                                </button>
                                
                                <button onclick="seekTo(3925)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    ⚙️ 65:25 - Ajustes generales
                                </button>
                                
                                <button onclick="seekTo(4268)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    🔔 71:08 - Alertas y notificaciones
                                </button>
                                
                                <button onclick="seekTo(4654)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    📅 77:34 - Calendario y tareas
                                </button>
                                
                                <button onclick="seekTo(5133)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    🎁 85:33 - Ofertas y promociones
                                </button>
                                
                                <button onclick="seekTo(5539)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    📦 92:19 - Productos y almacenamiento
                                </button>
                                
                                <button onclick="seekTo(5982)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    📱 99:42 - Uso en tablet
                                </button>
                            </div>
                        </div>
                    </div>
                </td>
                </tr>
            </table>
            
        <button id="saber-mas" style="margin: 20px auto; display: block; padding: 12px 24px; background: linear-gradient(135deg, #ff0000, #cc0000); color: #000000; border: 2px solid #000000; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(255, 0, 0, 0.3);" onmouseover="this.style.background='linear-gradient(135deg, #cc0000, #990000)'; this.style.borderColor='#333333'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(255, 0, 0, 0.4)'" onmouseout="this.style.background='linear-gradient(135deg, #ff0000, #cc0000)'; this.style.borderColor='#000000'; this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(255, 0, 0, 0.3)'" onmousedown="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 10px rgba(255, 0, 0, 0.3)'" onmouseup="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(255, 0, 0, 0.4)'">Saber más</button>
        </section>

        <!-- Contenido detallado (oculto inicialmente) -->
        <div id="detalles" style="display: none;">
            <!-- Sección 1: Setup, estructura y empaquetado -->
            <section>
                <h4>1. Setup, estructura y empaquetado</h4>
                <p>Esta sección cubre la configuración inicial, la estructura del repositorio y los procesos de empaquetado del sistema Servet, asegurando una base sólida para el desarrollo y despliegue.</p>
                <ul>
                    <li><strong>V01 – Estructura del repo + capas (Controller/Service/Repository/View):</strong> El repositorio está organizado en paquetes para controllers, services, repositories y views. Incluye DTOs para transferencia de datos, entities para modelado de base de datos, templates Thymeleaf para vistas y scripts JS para interactividad frontend. Prueba: Acceso al endpoint /health que devuelve un JSON de estado.</li>
                    <li><strong>V02 – application.properties limpio y seguro:</strong> Configuración de propiedades para HSQLDB, correo electrónico, Thymeleaf, logs, scheduler y recursos estáticos. Las credenciales sensibles se redactan en demostraciones. Prueba: Arranque del servidor en puerto 8080 y verificación de zona horaria configurada.</li>
                    <li><strong>V03 – Carpeta de datos y persistencia:</strong> Datos almacenados en $/{user.dir}/data/storage para HSQLDB, con perfiles dev/prod. Prueba: Creación de la base de datos, ubicación de archivos y realización de backup/restore copiando la carpeta.</li>
                    <li><strong>V04 – Build y empaquetado (.jar, jlink, jpackage):</strong> Uso de mvn package para generar .jar, script .bat para automatización, jlink para runtime personalizado y jpackage para instalador. Prueba: Generación de .exe, instalación y ejecución de la aplicación.</li>
                    <li><strong>V05 – Service Worker y Manifest (si aplica):</strong> Inclusión de manifest.json y sw.js para soporte PWA. Prueba: Carga de íconos y caché básico de assets.</li>
                    <li><strong>V06 – Organización y gestión (Trello + Google Docs/Drive):</strong> Gestión de tareas mediante tableros Trello con sprints y tarjetas, y documentación en Google Docs/Drive. Prueba: Capturas de tablero mostrando el flujo de trabajo organizado.</li>
                </ul>
                <strong>Galería de imágenes - Setup, estructura y empaquetado:</strong>
                <section id="slideshow">
                    <div class="entire-content">
                        <div class="content-carrousel">
                            ${[
                              {
                                num: 1,
                                desc: "Diseñé la estructura inicial del repositorio con una clara separación en capas MVC (Controller, Service, Repository, View). Implementé un endpoint /health usando Spring Boot Actuator que devuelve el estado del sistema en JSON, optimizado para monitoreo en tiempo real. La captura muestra la respuesta del endpoint con métricas básicas.",
                              },
                              {
                                num: 2,
                                desc: "Configuré un application.properties modularizado con perfiles dev/prod. Implementé variables seguras para HSQLDB y SMTP usando Spring Externalized Configuration. La captura muestra la interfaz de configuración del puerto 8080 y la verificación de zona horaria con un script de prueba.",
                              },
                              {
                                num: 3,
                                desc: "Desarrollé un sistema de persistencia basado en HSQLDB con almacenamiento en $/{user.dir}/data/storage. La captura muestra la estructura de carpetas generada automáticamente y un script de backup/restore probado con éxito, garantizando la portabilidad de los datos.",
                              },
                              {
                                num: 4,
                                desc: "Implementé un pipeline de build con Maven que genera un .jar ejecutable. Usé jlink para un runtime personalizado y jpackage para un instalador .exe. La captura muestra el proceso de generación del instalador y su ejecución exitosa en Windows.",
                              },
                              {
                                num: 5,
                                desc: "Desarrollé un manifest.json y un Service Worker (sw.js) para habilitar capacidades PWA. La captura muestra el panel de desarrolladores de Chrome confirmando la carga de íconos y el almacenamiento en caché de assets estáticos para acceso offline.",
                              },
                              {
                                num: 6,
                                desc: "Organicé la gestión del proyecto en Trello con tableros Kanban para sprints. La captura muestra un tablero con tareas categorizadas por estado (To Do, In Progress, Done) y enlaces a documentos en Google Drive con especificaciones técnicas.",
                              },
                              {
                                num: 7,
                                desc: "Implementé un sistema de logging estructurado con Logback, configurado desde application.properties. La captura muestra logs detallados de un arranque exitoso del servidor, con correlación de eventos por request ID para facilitar el debugging.",
                              },
                              {
                                num: 8,
                                desc: "Desarrollé scripts .bat para automatizar el proceso de build y empaquetado. La captura muestra la ejecución del script que genera el .jar y realiza pruebas automáticas de integración, verificando la correcta configuración del entorno.",
                              },
                              {
                                num: 9,
                                desc: "Configuré Thymeleaf para vistas dinámicas con plantillas modulares. La captura muestra una vista de prueba renderizada con datos dummy, incluyendo fragmentos reutilizables para el header y footer, optimizados para SEO.",
                              },
                              {
                                num: 10,
                                desc: "Implementé un sistema de recursos estáticos con cache busting usando hashes en los nombres de archivos. La captura muestra el directorio de assets en el servidor y el tiempo de carga optimizado en el navegador gracias al caching.",
                              },
                              {
                                num: 11,
                                desc: "Desarrollé DTOs para transferencia de datos entre capas, con validaciones usando Bean Validation. La captura muestra un ejemplo de un DTO serializado a JSON en una respuesta de API, con validaciones de campos requeridos aplicadas.",
                              },
                              {
                                num: 12,
                                desc: "Configuré un entorno de desarrollo con HSQLDB in-memory para pruebas rápidas. La captura muestra el esquema de la base de datos generado automáticamente y una consulta de prueba ejecutada desde una herramienta de gestión como DBeaver.",
                              },
                              {
                                num: 13,
                                desc: "Implementé un script de inicialización para seeds de datos en HSQLDB. La captura muestra los datos iniciales cargados en la tabla de configuración, con índices optimizados para consultas frecuentes.",
                              },
                              {
                                num: 14,
                                desc: "Desarrollé documentación técnica en Google Docs, con diagramas UML generados automáticamente. La captura muestra un diagrama de clases para la capa de persistencia, incluyendo relaciones entre entidades y anotaciones Hibernate.",
                              },
                            ]
                              .map(
                                (img) => `
                                <figure class="shadow"
                                    data-img="servet${img.num}.png"
                                    data-desc="${img.desc.replace(
                                      /"/g,
                                      "&quot;"
                                    )}">
                                    <img src="Recursos/experiencias/galerias/servet/setup/servet${
                                      img.num
                                    }.png"/>
                                    <figcaption class="image-caption">Ver detalles</figcaption>
                                </figure>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </section>
                
                <strong>Video de configuración, estructura y empaquetado:</strong>
                <table style="width: 100%; height: 100%;">
                    <tr>
                        <td style="text-align: center; vertical-align: middle;">
                            <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; width: 80%;">
                                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                            src="https://www.youtube.com/embed/OLV3EyUBAlk"
                                            frameborder="0" 
                                            allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </section>

            <!-- Sección 2: Usuarios, login, roles y seguridad -->
            <section>
                <h4>2. Usuarios, login, roles y seguridad</h4>
                <p>Esta sección detalla la gestión de usuarios, autenticación y control de accesos basado en roles para garantizar la seguridad del sistema.</p>
                <ul>
                    <li><strong>V07 – Modelo User + Privilege:</strong> Entidades para usuarios y privilegios con relaciones, incluyendo seed inicial de datos. Prueba: Visualización de usuarios en la base de datos.</li>
                    <li><strong>V08 – Login + sesión:</strong> Controlador para login, almacenamiento de usuario autenticado en sesión o contexto. Prueba: Inicio y cierre de sesión, acceso a endpoint /me.</li>
                    <li><strong>V09 – Autorización por rol (vendedor/almacenista/admin/supervisor):</strong> Implementación de interceptores o anotaciones para matriz de permisos. Prueba: Bloqueo de vistas según el rol del usuario.</li>
                    <li><strong>V10 – QR para login cliente/usuario:</strong> Generación y lectura de códigos QR para autenticación. Prueba: Login vía QR desde dispositivo móvil o tablet.</li>
                </ul>
                <strong>Galería de imágenes - Usuarios, login, roles y seguridad:</strong>
                <section id="slideshow">
                    <div class="entire-content">
                        <div class="content-carrousel">
                            ${[
                              {
                                num: 1,
                                desc: "Implementé el modelo User con Hibernate, definiendo relaciones muchos-a-muchos con Privilege. La captura muestra el esquema de la base de datos con las tablas generadas y un seed inicial de usuarios con roles predefinidos.",
                              },
                              {
                                num: 2,
                                desc: "Desarrollé un controlador de login con Spring Security, usando JWT para autenticación stateless. La captura muestra la respuesta del endpoint /login con un token generado y su validación en Postman.",
                              },
                              {
                                num: 3,
                                desc: "Configuré una matriz de permisos basada en roles usando anotaciones @PreAuthorize. La captura muestra un intento de acceso denegado para un usuario vendedor a una vista administrativa, con mensaje de error personalizado.",
                              },
                              {
                                num: 4,
                                desc: "Implementé un generador de QR para login usando ZXing. La captura muestra un código QR generado dinámicamente, que al escanearse desde un móvil redirige a la pantalla de autenticación.",
                              },
                              {
                                num: 5,
                                desc: "Desarrollé un endpoint /me que devuelve los detalles del usuario autenticado, incluyendo roles y permisos. La captura muestra la respuesta JSON con datos del usuario logueado y su sesión activa.",
                              },
                              {
                                num: 6,
                                desc: "Configuré Spring Security para manejar sesiones con timeout configurable. La captura muestra la pantalla de login con un mensaje de sesión expirada tras inactividad prolongada.",
                              },
                              {
                                num: 7,
                                desc: "Implementé un sistema de auditoría de login con logs de intentos fallidos. La captura muestra el registro de un intento de login fallido, incluyendo IP y timestamp para análisis de seguridad.",
                              },
                              {
                                num: 8,
                                desc: "Desarrollé un formulario de login responsivo con Thymeleaf y validaciones en tiempo real. La captura muestra la interfaz con mensajes de error dinámicos para credenciales incorrectas.",
                              },
                              {
                                num: 9,
                                desc: "Configuré un interceptor para restringir acceso a endpoints según roles. La captura muestra un log del interceptor bloqueando una solicitud no autorizada, con detalles del usuario y la acción denegada.",
                              },
                              {
                                num: 10,
                                desc: "Implementé un sistema de recuperación de contraseña con envío de enlace temporal por email. La captura muestra el correo generado con un enlace cifrado y su correspondiente endpoint de validación.",
                              },
                              {
                                num: 11,
                                desc: "Desarrollé un panel de administración de usuarios con CRUD completo. La captura muestra la interfaz para crear un nuevo usuario, con selección de roles y validaciones de unicidad de email.",
                              },
                              {
                                num: 12,
                                desc: "Implementé un sistema de roles dinámicos, permitiendo la creación de nuevos roles desde la UI. La captura muestra la interfaz de gestión de roles con permisos editables.",
                              },
                              {
                                num: 13,
                                desc: "Configuré un mecanismo de bloqueo de cuentas tras múltiples intentos fallidos. La captura muestra una alerta en la UI informando al usuario del bloqueo temporal y las instrucciones para desbloqueo.",
                              },
                              {
                                num: 14,
                                desc: "Desarrollé estadísticas de usuario con base a las ventas y actividad reciente.",
                              },
                            ]
                              .map(
                                (img) => `
                                <figure class="shadow"
                                    data-img="servet${img.num}.png"
                                    data-desc="${img.desc.replace(
                                      /"/g,
                                      "&quot;"
                                    )}">
                                    <img src="Recursos/experiencias/galerias/servet/usuarios/servet${
                                      img.num
                                    }.png"/>
                                    <figcaption class="image-caption">Ver detalles</figcaption>
                                </figure>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </section>
                
                <strong>VIDEO DEL PROYECTO:</strong>
                <table style="width: 100%; height: 100%;">
                    <tr>
                        <td style="text-align: center; vertical-align: middle;">
                            <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; width: 80%;">
                                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                            src="https://www.youtube.com/embed/dnUihKXeZMo"
                                            frameborder="0" 
                                            allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </section>

            <!-- Sección 3: Clientes (CRM) -->
            <section>
                <h4>3. Clientes (CRM)</h4>
                <p>Gestión de clientes con funcionalidades CRM básicas para registro, búsqueda y comunicaciones automatizadas.</p>
                <ul>
                    <li><strong>V11 – CRUD de clientes:</strong> Repository, Service y Controller para operaciones CRUD, con formulario HTML y JS. Prueba: Alta, edición, búsqueda y validaciones de clientes.</li>
                    <li><strong>V12 – Búsqueda inteligente:</strong> Endpoints con parámetros de consulta e índices simples. Prueba: Autocompletado por nombre, teléfono o email.</li>
                    <li><strong>V13 – Ticket digital al correo del cliente:</strong> Servicio de correo con plantilla HTML para tickets. Prueba: Envío real mediante Gmail SMTP.</li>
                </ul>
                <strong>Galería de imágenes - Clientes (CRM):</strong>
                <section id="slideshow">
                    <div class="entire-content">
                        <div class="content-carrousel">
                            ${[
                              {
                                num: 1,
                                desc: "Desarrollé un formulario de alta de clientes con validaciones en tiempo real usando Bean Validation. La captura muestra la interfaz con campos obligatorios resaltados y mensajes de error dinámicos para entradas inválidas.",
                              },
                              {
                                num: 2,
                                desc: "Implementé un endpoint de búsqueda inteligente con índices en HSQLDB para consultas rápidas. La captura muestra el autocompletado en acción, sugiriendo clientes por nombre y email en tiempo real.",
                              },
                              {
                                num: 3,
                                desc: "Configuré un servicio de envío de tickets digitales usando JavaMail con plantillas HTML en Thymeleaf. La captura muestra un correo recibido con el diseño del ticket, incluyendo un QR para seguimiento.",
                              },
                              {
                                num: 4,
                                desc: "Desarrollé una tabla de clientes con paginación del lado del servidor. La captura muestra la interfaz con filtros aplicados, ordenamiento por columnas y exportación a CSV.",
                              },
                              {
                                num: 5,
                                desc: "Implementé un historial de interacciones por cliente, almacenado en una tabla secundaria. La captura muestra una vista detallada de un cliente con su historial de compras y comunicaciones.",
                              },
                              {
                                num: 6,
                                desc: "Configuré un sistema de importación masiva de clientes desde CSV. La captura muestra el formulario de carga con validaciones previas y un resumen de los registros importados.",
                              },
                              {
                                num: 7,
                                desc: "Desarrollé un dashboard de clientes con KPIs como número de clientes activos y frecuencia de compras. La captura muestra gráficos generados con Chart.js basados en consultas agregadas.",
                              },
                              {
                                num: 8,
                                desc: "Implementé un sistema de segmentación de clientes basado en reglas dinámicas. La captura muestra la interfaz para crear segmentos, con filtros por ubicación y volumen de compras.",
                              },
                              {
                                num: 9,
                                desc: "Configuré notificaciones automáticas para clientes inactivos usando un scheduler. La captura muestra un correo programado con una oferta personalizada para reactivar al cliente.",
                              },
                              {
                                num: 10,
                                desc: "Desarrollé un endpoint para actualización masiva de datos de clientes. La captura muestra la interfaz con selección múltiple y confirmación previa para evitar errores.",
                              },
                              {
                                num: 11,
                                desc: "Implementé un sistema de auditoría para cambios en datos de clientes. La captura muestra un log detallado de modificaciones, incluyendo usuario responsable y timestamp.",
                              },
                              {
                                num: 12,
                                desc: "Configuré un formulario responsivo para edición de clientes, con soporte para dispositivos móviles. La captura muestra la interfaz en una tablet, con campos optimizados para entrada táctil.",
                              },
                              {
                                num: 13,
                                desc: "Desarrollé un sistema de exportación de clientes a PDF con formato personalizado. La captura muestra un reporte generado con detalles de clientes filtrados por región.",
                              },
                              {
                                num: 14,
                                desc: "Se agregó un código QR para registrar un cliente o que ellos mismos se registren accediendo a este.",
                              },
                            ]
                              .map(
                                (img) => `
                                <figure class="shadow"
                                    data-img="servet${img.num}.png"
                                    data-desc="${img.desc.replace(
                                      /"/g,
                                      "&quot;"
                                    )}">
                                    <img src="Recursos/experiencias/galerias/servet/clientes/servet${
                                      img.num
                                    }.png"/>
                                    <figcaption class="image-caption">Ver detalles</figcaption>
                                </figure>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </section>
                
                <strong>VIDEO DEL PROYECTO:</strong>
                <table style="width: 100%; height: 100%;">
                    <tr>
                        <td style="text-align: center; vertical-align: middle;">
                            <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; width: 80%;">
                                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                            src="https://www.youtube.com/embed/pVKj7_eEQ5w"
                                            frameborder="0" 
                                            allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </section>

            <!-- Sección 4: Catálogos y ajustes -->
            <section>
                <h4>4. Catálogos y ajustes</h4>
                <p>Administración de catálogos base y configuraciones fiscales para adaptar el sistema a necesidades específicas.</p>
                <ul>
                    <li><strong>V14 – Catálogos base (Brand, Department, Supplier, TypeSocialReason, Store):</strong> CRUD rápidos con vistas asociadas. Prueba: Creación, edición y visualización en combos desplegables.</li>
                    <li><strong>V15 – IVA y configuración fiscal (VAT):</strong> Almacenamiento de tasas por tienda. Prueba: Cálculo automático en ventas.</li>
                    <li><strong>V16 – Ajustes/Settings:</strong> Vista única para toggles y parámetros como alertas y límites. Prueba: Cambio de ajuste y verificación de efecto inmediato.</li>
                </ul>
                <strong>Galería de imágenes - Catálogos y ajustes:</strong>
                <section id="slideshow">
                    <div class="entire-content">
                        <div class="content-carrousel">
                            ${[
                              {
                                num: 1,
                                desc: "Desarrollé un CRUD para catálogos base usando Thymeleaf y Spring Data JPA. La captura muestra la interfaz para crear una nueva marca, con validaciones de unicidad y combos dinámicos.",
                              },
                              {
                                num: 2,
                                desc: "Implementé una vista de edición para departamentos con soporte para jerarquías. La captura muestra la interfaz con un árbol interactivo para organizar departamentos y subdepartamentos.",
                              },
                              {
                                num: 3,
                                desc: "Configuré un sistema de configuración fiscal con tasas de IVA por tienda. La captura muestra la interfaz de ajustes con un formulario para definir tasas y su aplicación inmediata en una venta de prueba.",
                              },
                              {
                                num: 4,
                                desc: "Desarrollé combos desplegables dinámicos para catálogos, con precarga de datos vía AJAX. La captura muestra un formulario de producto con selección de proveedor y tipo de razón social.",
                              },
                              {
                                num: 5,
                                desc: "Implementé un sistema de auditoría para cambios en catálogos. La captura muestra un log de modificaciones en la tabla de proveedores, con detalles del usuario y la acción realizada.",
                              },
                              {
                                num: 6,
                                desc: "Configuré un endpoint para exportar catálogos a CSV. La captura muestra un archivo generado con datos de marcas, incluyendo metadatos como fecha de creación.",
                              },
                              {
                                num: 7,
                                desc: "Desarrollé una vista de ajustes generales con toggles para activar/desactivar alertas. La captura muestra la interfaz con configuraciones aplicadas y un mensaje de confirmación tras guardar.",
                              },
                              {
                                num: 8,
                                desc: "Implementé un sistema de importación masiva para catálogos desde CSV. La captura muestra el formulario con validaciones previas y un resumen de los registros procesados.",
                              },
                              {
                                num: 9,
                                desc: "Configuré un dashboard para monitorear el estado de los catálogos. La captura muestra estadísticas sobre la cantidad de marcas y proveedores activos, generadas con Chart.js.",
                              },
                              {
                                num: 10,
                                desc: "Desarrollé un sistema de edicion para evitar duplicados en catálogos. La captura muestra el formulario de edicion de marca.",
                              },
                              {
                                num: 11,
                                desc: "Implementé un mecanismo de caché para combos desplegables. La captura muestra el tiempo de respuesta optimizado para una consulta de proveedores en un formulario.",
                              },
                              {
                                num: 12,
                                desc: "Configuré vistas responsivas para la gestión de catálogos en dispositivos móviles. La captura muestra la interfaz en una tablet, con controles táctiles optimizados.",
                              },
                              {
                                num: 13,
                                desc: "Desarrolle el Overlay con una interfaz de cambio de opciones detallado. La captura muestra del lado derecho las opciones de navegacion entre estos catalogos.",
                              },
                              {
                                num: 14,
                                desc: "Implementé un endpoint REST para consultar catálogos en tiempo real. La captura muestra una respuesta JSON con datos de departamentos, consumida por un cliente externo.",
                              },
                            ]
                              .map(
                                (img) => `
                                <figure class="shadow"
                                    data-img="servet${img.num}.png"
                                    data-desc="${img.desc.replace(
                                      /"/g,
                                      "&quot;"
                                    )}">
                                    <img src="Recursos/experiencias/galerias/servet/catalogos/servet${
                                      img.num
                                    }.png"/>
                                    <figcaption class="image-caption">Ver detalles</figcaption>
                                </figure>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </section>
                
                <strong>VIDEO DEL PROYECTO:</strong>
                <table style="width: 100%; height: 100%;">
                    <tr>
                        <td style="text-align: center; vertical-align: middle;">
                            <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; width: 80%;">
                                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                            src="https://www.youtube.com/embed/chASH0agI0s"
                                            frameborder="0" 
                                            allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </section>

            <!-- Sección 5: Inventario, almacén y anaqueles -->
            <section>
                <h4>5. Inventario, almacén y anaqueles</h4>
                <p>Gestión completa del inventario, incluyendo productos, precios, almacenes y alertas relacionadas.</p>
                <ul>
                    <li><strong>V17 – Modelo de producto (Product, Price, imágenes):</strong> Alta de productos con imágenes y validaciones. Prueba: Subida de imagen y visualización en listas.</li>
                    <li><strong>V18 – Mayoreo y escalas de precio:</strong> Precios por tramos basados en cantidades. Prueba: Aplicación en carrito según cantidad.</li>
                    <li><strong>V19 – Almacenes y anaqueles (Warehouse, Shelf):</strong> CRUD y relaciones entre entidades. Prueba: Creación de anaquel y asignación de productos.</li>
                    <li><strong>V20 – Stock e inventarios (WarehouseInventory, InventoryFloor):</strong> Manejo de entradas, salidas y movimientos. Prueba: Movimiento de stock de almacén a piso.</li>
                    <li><strong>V21 – Conteo y ajuste de inventario:</strong> Endpoint para ajustes con auditoría básica. Prueba: Registro de conteo y ajuste correspondiente.</li>
                    <li><strong>V22 – Vencimientos (AlertExpiry):</strong> Fechas de caducidad por producto o lote. Prueba: Listado de productos próximos a vencer.</li>
                    <li><strong>V23 – Stock bajo (AlertLowStock):</strong> Umbrales configurables por producto o anaquel. Prueba: Generación de alerta al realizar una venta.</li>
                </ul>
                <strong>Galería de imágenes - Inventario, almacén y anaqueles:</strong>
                <section id="slideshow">
                    <div class="entire-content">
                        <div class="content-carrousel">
                            ${[
                              {
                                num: 1,
                                desc: "Desarrollé un formulario para alta de productos con soporte para imágenes múltiples usando Spring MultipartFile. La captura muestra la interfaz con previsualización de imágenes y validaciones de formato.",
                              },
                              {
                                num: 2,
                                desc: "Implementé un sistema de precios por tramos para ventas al mayoreo. La captura muestra una vista de edición de producto con configuración de escalas de precio basadas en cantidades.",
                              },
                              {
                                num: 3,
                                desc: "Configuré un CRUD para almacenes con relaciones muchos-a-muchos con anaqueles. La captura muestra la interfaz para asignar productos a un anaquel específico en un almacén.",
                              },
                              {
                                num: 4,
                                desc: "Desarrollé un sistema de movimientos de inventario con transacciones @Transactional. La captura muestra un log de un movimiento de stock de almacén a piso, con auditoría incluida.",
                              },
                              {
                                num: 5,
                                desc: "Implementé un endpoint para ajustes de inventario con validaciones de usuario. La captura muestra el formulario de conteo con diferencias detectadas y confirmación previa.",
                              },
                              {
                                num: 6,
                                desc: "Configuré alertas de vencimiento usando un scheduler @Scheduled. La captura muestra una lista de productos próximos a vencer, con filtros por fecha y almacén.",
                              },
                              {
                                num: 7,
                                desc: "Desarrollé un sistema de alertas de stock bajo con umbrales configurables. La captura muestra una notificación en la UI tras una venta que reduce el stock por debajo del límite.",
                              },
                              {
                                num: 8,
                                desc: "Implementé una tabla de inventario con paginación y búsqueda en tiempo real. La captura muestra la interfaz con filtros aplicados y ordenamiento por stock disponible.",
                              },
                              {
                                num: 9,
                                desc: "Configuré un dashboard de inventario con KPIs como rotación de stock. La captura muestra gráficos generados con Chart.js basados en movimientos históricos.",
                              },
                              {
                                num: 10,
                                desc: "Desarrollé un sistema de importación masiva de productos desde CSV. La captura muestra el formulario con validaciones previas y un resumen de los productos importados.",
                              },
                              {
                                num: 11,
                                desc: "Implementé un mecanismo de caché para consultas frecuentes de inventario usando Redis. La captura muestra el tiempo de respuesta optimizado para una consulta de stock.",
                              },
                              {
                                num: 12,
                                desc: "Configuré vistas responsivas para la gestión de inventario en dispositivos móviles. La captura muestra la interfaz en una tablet, con controles táctiles optimizados.",
                              },
                              {
                                num: 13,
                                desc: "Se desarrollaron imágenes representativas de los anaqueles dentro de la aplicación, mostrando la organización y ubicación de los productos en los almacenes.",
                              },
                              {
                                num: 14,
                                desc: "Implementé un endpoint REST para consultar el stock en tiempo real. La captura muestra una respuesta JSON con datos de inventario, consumida por un cliente externo.",
                              },
                            ]
                              .map(
                                (img) => `
                                <figure class="shadow"
                                    data-img="servet${img.num}.png"
                                    data-desc="${img.desc.replace(
                                      /"/g,
                                      "&quot;"
                                    )}">
                                    <img src="Recursos/experiencias/galerias/servet/inventario/servet${
                                      img.num
                                    }.png"/>
                                    <figcaption class="image-caption">Ver detalles</figcaption>
                                </figure>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </section>
                
                <strong>VIDEO DEL PROYECTO:</strong>
                <table style="width: 100%; height: 100%;">
                    <tr>
                        <td style="text-align: center; vertical-align: middle;">
                            <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; width: 80%;">
                                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                            src="https://www.youtube.com/embed/d7D3H7PTlxA"
                                            frameborder="0" 
                                            allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </section>

            <!-- Sección 6: Ventas y caja (flujo completo POS) -->
            <section>
                <h4>6. Ventas y caja (flujo completo POS)</h4>
                <p>Flujo integral de punto de venta, desde apertura hasta cierre, incluyendo pagos y tickets.</p>
                <ul>
                    <li><strong>V24 – Escáner y búsqueda por código de barras:</strong> Lectura desde input o teclado, integración con ZXing si aplica. Prueba: Escaneo y adición al carrito.</li>
                    <li><strong>V25 – Carrito de venta y totales:</strong> JS para carrito con descuentos por línea e IVA. Prueba: Recálculo en tiempo real.</li>
                    <li><strong>V26 – Métodos de pago (MethodPayment):</strong> Soporte para efectivo, tarjeta o mixto. Prueba: Pagos parciales o mixtos.</li>
                    <li><strong>V27 – Apertura de turno:</strong> Control de inicio de turno por usuario y terminal. Prueba: Apertura y bloqueo de ventas sin turno activo.</li>
                    <li><strong>V28 – Apertura de caja:</strong> Registro de fondo inicial con validaciones. Prueba: Apertura y visualización de saldo.</li>
                    <li><strong>V29 – Venta completa + generación de Sales/Ticket:</strong> Persistencia transaccional. Prueba: Creación de venta, disminución de stock y generación de ticket.</li>
                    <li><strong>V30 – Retiros de efectivo (CashWithdrawal):</strong> Autorizaciones con motivo y seguridad. Prueba: Retiro y afectación en caja.</li>
                    <li><strong>V31 – Cierre de caja:</strong> Conteo de efectivo, diferencias y reporte. Prueba: Cierre con resumen y alertas.</li>
                    <li><strong>V32 – Cierre de turno:</strong> Consolidado y bloqueo de operaciones. Prueba: Cierre y generación de reporte.</li>
                    <li><strong>V33 – Reimpresión y envío de ticket:</strong> Reimpresión desde entidad Ticket. Prueba: Reimpresión y envío por email.</li>
                </ul>
                <strong>Galería de imágenes - Ventas y caja:</strong>
                <section id="slideshow">
                    <div class="entire-content">
                        <div class="content-carrousel">
                            ${[
                              {
                                num: 1,
                                desc: "Desarrollé un sistema de escaneo de códigos de barras usando ZXing. La captura muestra la interfaz de venta con un producto añadido al carrito tras escanear un código desde un lector USB.",
                              },
                              {
                                num: 2,
                                desc: "Implementé un carrito de venta con recalculación en tiempo real usando JavaScript. La captura muestra la interfaz con descuentos aplicados por línea y el total con IVA actualizado.",
                              },
                              {
                                num: 3,
                                desc: "Configuré un sistema de pagos mixtos (efectivo/tarjeta). La captura muestra el formulario de pago con división de montos y confirmación de transacción exitosa.",
                              },
                              {
                                num: 4,
                                desc: "Desarrollé un formulario para apertura de turno con validaciones de usuario. La captura muestra la interfaz con el estado del turno activo y el bloqueo de ventas si no está iniciado.",
                              },
                              {
                                num: 5,
                                desc: "Implementé un sistema de apertura de caja con registro de fondo inicial. La captura muestra la interfaz con el saldo inicial registrado y un mensaje de confirmación.",
                              },
                              {
                                num: 6,
                                desc: "Configuré la generación de tickets con persistencia transaccional. La captura muestra un ticket generado con detalles de la venta y un QR para reimpresión.",
                              },
                              {
                                num: 7,
                                desc: "Desarrollé un sistema de retiros de efectivo con autorización por supervisor. La captura muestra el formulario de retiro con motivo registrado y log de auditoría.",
                              },
                              {
                                num: 8,
                                desc: "Implementé un sistema de cierre de caja con cálculo de diferencias. La captura muestra el reporte de cierre con alertas por discrepancias en el conteo de efectivo.",
                              },
                              {
                                num: 9,
                                desc: "Configuré un sistema de cierre de turno con consolidación de datos. La captura muestra el reporte generado con estadísticas de ventas y movimientos realizados.",
                              },
                              {
                                num: 10,
                                desc: "Desarrollé un sistema de reimpresión de tickets desde el historial. La captura muestra la interfaz con búsqueda por número de ticket y opción de envío por email.",
                              },
                              {
                                num: 11,
                                desc: "Implementé un dashboard de ventas con KPIs en tiempo real. La captura muestra gráficos generados con Chart.js basados en datos de ventas del turno actual.",
                              },
                              {
                                num: 12,
                                desc: "Configuré vistas responsivas para el flujo de ventas en dispositivos móviles. La captura muestra la interfaz de venta en una tablet, con controles táctiles optimizados.",
                              },
                              {
                                num: 13,
                                desc: "Se desarrolló en la aplicación un módulo de conteo de dinero, permitiendo registrar y calcular los montos en función del tipo de billete o moneda.",
                              },
                              {
                                num: 14,
                                desc: "Implementé un endpoint REST para consultar el estado de la caja en tiempo real. La captura muestra una respuesta en la vista con el saldo actual y los movimientos recientes.",
                              },
                            ]
                              .map(
                                (img) => `
                                <figure class="shadow"
                                    data-img="servet${img.num}.png"
                                    data-desc="${img.desc.replace(
                                      /"/g,
                                      "&quot;"
                                    )}">
                                    <img src="Recursos/experiencias/galerias/servet/ventas/servet${
                                      img.num
                                    }.png"/>
                                    <figcaption class="image-caption">Ver detalles</figcaption>
                                </figure>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </section>
                
                <strong>VIDEO DEL PROYECTO:</strong>
                <table style="width: 100%; height: 100%;">
                    <tr>
                        <td style="text-align: center; vertical-align: middle;">
                            <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; width: 80%;">
                                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                            src="https://www.youtube.com/embed/_HF05JL_Gug"
                                            frameborder="0" 
                                            allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </section>

            <!-- Sección 7: Ofertas, descuentos y promociones -->
            <section>
                <h4>7. Ofertas, descuentos y promociones</h4>
                <p>Módulos para manejar descuentos, ofertas y promociones con reglas avanzadas.</p>
                <ul>
                    <li><strong>V34 – Descuentos por producto/departamento:</strong> Entidades para descuentos y aplicación. Prueba: Aplicación en carrito y reflexión en totales.</li>
                    <li><strong>V35 – Ofertas (Offers, OffersProducts, OffersDepartment):</strong> Reglas por fechas o cantidades. Prueba: Activación y validación de ofertas.</li>
                    <li><strong>V36 – Promociones avanzadas (Promotion, SalesDiscounts, SalesOffers):</strong> Combinación de reglas con prioridades. Prueba: Resolución de conflictos entre promociones.</li>
                </ul>
                <strong>Galería de imágenes - Ofertas, descuentos y promociones:</strong>
                <section id="slideshow">
                    <div class="entire-content">
                        <div class="content-carrousel">
                            ${[
                              {
                                num: 1,
                                desc: "Desarrollé un formulario para crear descuentos por producto con reglas dinámicas. La captura muestra la interfaz con selección de productos y aplicación automática en el carrito.",
                              },
                              {
                                num: 2,
                                desc: "Implementé un sistema de descuentos por departamento con fechas de validez. La captura muestra una vista de configuración con descuentos aplicados a categorías específicas.",
                              },
                              {
                                num: 3,
                                desc: "Configuré un sistema de ofertas basadas en cantidades con reglas combinadas. La captura muestra una oferta activa en el carrito, con descuentos reflejados en tiempo real.",
                              },
                              {
                                num: 4,
                                desc: "Desarrollé un motor de promociones con resolución de conflictos por prioridad. La captura muestra la prioridad unicamente a la oferta que mejor se adapte a la compra.",
                              },
                              {
                                num: 5,
                                desc: "Se implementó un dashboard de promociones que ofrece una visión general de todos los descuentos y ofertas, mostrando sus detalles y características dentro de la aplicación.",
                              },
                              {
                                num: 6,
                                desc: "Se agregó en la aplicación un formulario de edición para gestionar promociones, permitiendo actualizar sus detalles de manera sencilla y rápida.",
                              },
                              {
                                num: 7,
                                desc: "Desarrollé un formulario responsivo para gestionar ofertas en dispositivos móviles. La captura muestra la interfaz en una tablet, con controles táctiles optimizados.",
                              },
                              {
                                num: 8,
                                desc: "Implementé un endpoint para validar promociones en tiempo real. La captura muestra una respuesta JSON con las promociones aplicables para un carrito específico.",
                              },
                              {
                                num: 9,
                                desc: "Configuré un sistema de auditoría para cambios en promociones. La captura muestra un log de modificaciones en una oferta, con detalles del usuario y la acción.",
                              },
                              {
                                num: 10,
                                desc: "Desarrollé un sistema de importación masiva de descuentos desde CSV. La captura muestra el formulario con validaciones previas y un resumen de los descuentos importados.",
                              },
                              {
                                num: 11,
                                desc: "Implementé un mecanismo de caché para consultas de promociones usando Redis. La captura muestra el tiempo de respuesta optimizado para una validación de oferta.",
                              },
                              {
                                num: 12,
                                desc: "Configuré vistas para la gestión de promociones con filtros avanzados. La captura muestra la interfaz con búsqueda por tipo de promoción y estado (activa/inactiva).",
                              },
                              {
                                num: 13,
                                desc: "Desarrollé documentación de promociones con diagramas de flujo en Google Docs. La captura muestra el flujo de aplicación de una promoción, desde validación hasta actualización del carrito.",
                              },
                              {
                                num: 14,
                                desc: "Implementé un endpoint REST para consultar promociones activas. La captura muestra una respuesta JSON con detalles de las ofertas disponibles para un cliente.",
                              },
                            ]
                              .map(
                                (img) => `
                                <figure class="shadow"
                                    data-img="servet${img.num}.png"
                                    data-desc="${img.desc.replace(
                                      /"/g,
                                      "&quot;"
                                    )}">
                                    <img src="Recursos/experiencias/galerias/servet/ofertas/servet${
                                      img.num
                                    }.png"/>
                                    <figcaption class="image-caption">Ver detalles</figcaption>
                                </figure>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </section>
                
                <strong>VIDEO DEL PROYECTO:</strong>
                <table style="width: 100%; height: 100%;">
                    <tr>
                        <td style="text-align: center; vertical-align: middle;">
                            <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; width: 80%;">
                                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                            src="https://www.youtube.com/embed/oGAdfzsUiVY"
                                            frameborder="0" 
                                            allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </section>

            <!-- Sección 8: Dashboard, estadísticas, clientes y pedidos -->
            <section>
                <h4>8. Dashboard, estadísticas, clientes y pedidos</h4>
                <p>Sistema completo de visualización de KPIs, gestión de clientes y control de pedidos para monitoreo integral del negocio.</p>
                <ul>
                    <li><strong>V37 – Dashboard principal:</strong> Endpoints para KPIs como ventas del día y top productos. Prueba: Renderizado en HTML/JS.</li>
                    <li><strong>V38 – Estadísticas de ventas:</strong> Consultas agregadas por fecha, usuario o tienda. Prueba: Filtros y exportación a CSV.</li>
                    <li><strong>V39 – Estadísticas por almacén:</strong> Endpoints específicos por almacén. Prueba: Comparación entre almacenes.</li>
                    <li><strong>V40 – Gestión de clientes:</strong> Registro y administración de clientes con historial de compras. Prueba: CRUD completo y búsqueda avanzada.</li>
                    <li><strong>V41 – Sistema de e-tickets:</strong> Envío automático de tickets por correo electrónico para reducir uso de papel. Prueba: Plantillas personalizadas y envío masivo.</li>
                    <li><strong>V42 – Ofertas para clientes frecuentes:</strong> Sistema de descuentos automáticos basado en frecuencia de compra. Prueba: Algoritmos de fidelización y aplicación de descuentos.</li>
                    <li><strong>V43 – Control de estado de pedidos:</strong> Gestión de estados: cancelado, pendiente y completado. Prueba: Transiciones de estado y notificaciones automáticas.</li>
                    <li><strong>V44 – Información detallada de pedidos:</strong> Vista completa del pedido con productos, cantidades y precios. Prueba: Exportación de detalles y seguimiento en tiempo real.</li>
                    <li><strong>V45 – Gestión multi-tienda:</strong> Administración de pedidos y clientes desde diferentes sucursales. Prueba: Sincronización entre tiendas y reportes consolidados.</li>
                </ul>
                <strong>Galería de imágenes - Dashboard, estadísticas, clientes y pedidos:</strong>
                <section id="slideshow">
                    <div class="entire-content">
                        <div class="content-carrousel">
                            ${[
                              {
                                num: 1,
                                desc: "Desarrollé un dashboard principal con KPIs actualizados en tiempo real usando WebSockets. La captura muestra estadisticas de ventas diarias y top productos generados.",
                              },
                              {
                                num: 2,
                                desc: "Implementé un sistema completo de registro de clientes con validación de datos y historial de compras. La captura muestra el formulario de registro con campos personalizados y validación en tiempo real.",
                              },
                              {
                                num: 3,
                                desc: "Configuré un sistema de e-tickets que se envían automáticamente por correo tras cada venta. La captura muestra la plantilla del ticket con diseño personalizado y datos de la transacción.",
                              },
                              {
                                num: 4,
                                desc: "Desarrollé un sistema de ofertas automáticas para clientes frecuentes basado en su historial de compras. La captura muestra la interfaz de configuración de descuentos y reglas de fidelización.",
                              },
                              {
                                num: 5,
                                desc: "Implementé un sistema de gestión de estado de pedidos con transiciones controladas entre cancelado, pendiente y completado. La captura muestra la interfaz de seguimiento con códigos de color.",
                              },
                              {
                                num: 6,
                                desc: "Configuré una vista detallada de pedidos que muestra productos, cantidades, precios y totales. La captura muestra la información completa de un pedido con opciones de exportación a PDF.",
                              },
                              {
                                num: 7,
                                desc: "Desarrollé un sistema de búsqueda avanzada de clientes con filtros por nombre, teléfono, email y fecha de registro. La captura muestra los resultados paginados con opciones de edición.",
                              },
                              {
                                num: 8,
                                desc: "Implementé un sistema de notificaciones automáticas para cambios de estado en pedidos. La captura muestra el panel de configuración de alertas por email y SMS.",
                              },
                              {
                                num: 9,
                                desc: "Configuré un dashboard responsivo para gestión de clientes en dispositivos móviles. La captura muestra la interfaz optimizada para tablet con acceso rápido a información del cliente.",
                              },
                              {
                                num: 10,
                                desc: "Desarrollé un sistema de estadísticas de clientes con métricas de frecuencia de compra y valor promedio. La captura muestra gráficos de segmentación de clientes y análisis de comportamiento.",
                              },
                              {
                                num: 11,
                                desc: "Implementé un sistema de gestión multi-tienda que permite administrar clientes y pedidos desde diferentes sucursales. La captura muestra los filtros aplicados a estos.",
                              },
                              {
                                num: 12,
                                desc: "Configuré un sistema de reportes de costeo de iniventario con filtros avanzados por fecha, estado, cliente y productos. La captura muestra la interfaz de generación de reportes con múltiples opciones de exportación.",
                              },
                              {
                                num: 13,
                                desc: "Desarrollé un sistema de historial de interacciones con clientes que registra todas las ventas, devoluciones y comunicaciones. La captura muestra el timeline de actividades del cliente.",
                              },
                              {
                                num: 14,
                                desc: "Implementé un panel de control centralizado que integra estadísticas de ventas, gestión de clientes y seguimiento de pedidos. La captura muestra el dashboard completo con widgets personalizables y métricas en tiempo real.",
                              },
                            ]
                              .map(
                                (img) => `
                                <figure class="shadow"
                                    data-img="servet${img.num}.png"
                                    data-desc="${img.desc.replace(
                                      /"/g,
                                      "&quot;"
                                    )}">
                                    <img src="Recursos/experiencias/galerias/servet/dashboard/servet${
                                      img.num
                                    }.png"/>
                                    <figcaption class="image-caption">Ver detalles</figcaption>
                                </figure>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </section>
                
                <strong>VIDEO DEL PROYECTO:</strong>
                <table style="width: 100%; height: 100%;">
                    <tr>
                        <td style="text-align: center; vertical-align: middle;">
                            <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; width: 80%;">
                                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                            src="https://www.youtube.com/embed/dYufg0L2fkk"
                                            frameborder="0" 
                                            allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </section>

           <!-- Sección 9: Calendario, tareas, alertas y notificaciones -->
            <section>
                <h4>9. Calendario, tareas, alertas y notificaciones</h4>
                <p>Sistema integral de gestión de agenda, recordatorios automatizados y alertas críticas para el negocio.</p>
                <ul>
                    <li><strong>V40 – Agenda/Calendar (Agenda):</strong> CRUD para tareas y eventos. Prueba: Creación de tarea con vencimiento.</li>
                    <li><strong>V41 – Recordatorios por correo (5 min antes):</strong> Uso de @Scheduled para consultas pendientes. Prueba: Disparo real de correo recordatorio.</li>
                    <li><strong>V42 – Alertas de caja (AlertCash):</strong> Configuración por montos y colores. Prueba: Disparo al bajar de umbral.</li>
                    <li><strong>V43 – Notificaciones internas (Notification):</strong> Almacenamiento y lectura de bandeja. Prueba: Visualización en UI.</li>
                    <li><strong>V44 – Emails automáticos de estadísticas:</strong> Batch diario o semanal a perfiles específicos. Prueba: Envío a admin o supervisor.</li>
                    <li><strong>V45 – Sincronización con Google Calendar:</strong> Integración con calendarios externos para tareas. Prueba: Importación y exportación de eventos.</li>
                    <li><strong>V46 – Sistema de priorización de notificaciones:</strong> Clasificación por severidad y urgencia. Prueba: Ordenamiento automático por importancia.</li>
                    <li><strong>V47 – Notificaciones push en tiempo real:</strong> Alertas instantáneas para eventos críticos. Prueba: Notificaciones WebSocket en vivo.</li>
                </ul>
                <strong>Galería de imágenes - Calendario, tareas, alertas y notificaciones:</strong>
                <section id="slideshow">
                    <div class="entire-content">
                        <div class="content-carrousel">
                            ${[
                              {
                                num: 1,
                                desc: "Desarrollé un calendario interactivo con FullCalendar.js integrado con Spring Boot. La captura muestra la interfaz con eventos y tareas creadas, con soporte para drag-and-drop.",
                              },
                              {
                                num: 2,
                                desc: "Implementé un sistema de alertas de caja con umbrales configurables. La captura muestra una notificación en la UI al detectar un saldo bajo, con color rojo para urgencia.",
                              },
                              {
                                num: 3,
                                desc: "Configuré un sistema de recordatorios por correo usando @Scheduled. La captura muestra un correo recibido con detalles de una tarea próxima a vencer.",
                              },
                              {
                                num: 4,
                                desc: "Desarrollé una bandeja de notificaciones internas con paginación. La captura muestra la interfaz con notificaciones marcadas como leídas y no leídas.",
                              },
                              {
                                num: 5,
                                desc: "Implementé un formulario para crear tareas con vencimientos. La captura muestra la interfaz con validaciones de fechas y selección de prioridad.",
                              },
                              {
                                num: 6,
                                desc: "Configuré un sistema de emails automáticos para estadísticas usando @Scheduled. La captura muestra un correo recibido con un reporte semanal de ventas.",
                              },
                              {
                                num: 7,
                                desc: "Desarrollé un sistema de sincronización de tareas con Google Calendar. La captura muestra la interfaz de configuración para conectar cuentas externas.",
                              },
                              {
                                num: 8,
                                desc: "Implementé notificaciones push para eventos críticos. La captura muestra una alerta en la UI con detalles de un evento de inventario disparado en tiempo real.",
                              },
                              {
                                num: 9,
                                desc: "Configuré un dashboard de tareas con tareas acorde al dia de hoy. La captura muestra tareas pendientes o pasadas y no terminadas en dashboard por usuario.",
                              },
                              {
                                num: 10,
                                desc: "Desarrollé un sistema de priorización de notificaciones basado en severidad. La captura muestra la interfaz con alertas ordenadas por urgencia.",
                              },
                              {
                                num: 11,
                                desc: "Implementé vistas responsivas para el calendario en dispositivos móviles. La captura muestra la interfaz en una tablet, con controles táctiles optimizados.",
                              },
                              {
                                num: 12,
                                desc: "Asigné tareas específicas a distintos miembros del equipo. La captura muestra cómo se distribuyen las responsabilidades y el progreso de cada persona en tiempo real.",
                              },
                              {
                                num: 13,
                                desc: "Desarrollé un sistema de categorías para tareas con colores personalizables. La captura muestra la interfaz de configuración de categorías y su aplicación en el calendario.",
                              },
                              {
                                num: 14,
                                desc: "Implementé un sistema de personalización de notificaciones por usuario. La captura muestra la interfaz para configurar preferencias de envío de alertas.",
                              },
                            ]
                              .map(
                                (img) => `
                                <figure class="shadow"
                                    data-img="servet${img.num}.png"
                                    data-desc="${img.desc.replace(
                                      /"/g,
                                      "&quot;"
                                    )}">
                                    <img src="Recursos/experiencias/galerias/servet/calendario/servet${
                                      img.num
                                    }.png"/>
                                    <figcaption class="image-caption">Ver detalles</figcaption>
                                </figure>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </section>
                
                <strong>VIDEO DEL PROYECTO:</strong>
                <table style="width: 100%; height: 100%;">
                    <tr>
                        <td style="text-align: center; vertical-align: middle;">
                            <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; width: 80%;">
                                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                            src="https://www.youtube.com/embed/P7_RQ2NZD9U"
                                            frameborder="0" 
                                            allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </section>

          <!-- Sección 10: UX, tablet, QR, reportes y programación -->
            <section>
                <h4>10. UX, tablet, QR, reportes y programación</h4>
                <p>Optimización de interfaz para dispositivos móviles, uso de QR para operaciones rápidas, generación y programación de reportes con exportaciones automáticas por email.</p>
                <ul>
                    <li><strong>V45 – UI en tablet y responsivo:</strong> Layouts con media queries para vistas clave. Prueba: Demo en emulador de móvil o tablet.</li>
                    <li><strong>V46 – QR para alta de clientes y acceso a app:</strong> Generación de QR con deep links. Prueba: Escaneo desde teléfono y apertura de vista.</li>
                    <li><strong>V47 – Reportes programados (SalesReportSchedule):</strong> Selección de días y destinos. Prueba: Simulación de ejecución programada.</li>
                    <li><strong>V48 – Exportaciones (CSV/PDF básicos):</strong> Endpoints para exportar datos. Prueba: Descarga y apertura de archivos.</li>
                    <li><strong>V49 – Reporte de ventas semanal por email:</strong> Estadísticas automáticas enviadas semanalmente. Prueba: Recepción de email con datos consolidados.</li>
                    <li><strong>V50 – Reporte de retiros por email:</strong> Notificación de movimientos de efectivo. Prueba: Email con detalles de retiros realizados.</li>
                    <li><strong>V51 – Reporte de corte de caja por email:</strong> Cierre diario de caja enviado automáticamente. Prueba: Email con balance de caja al final del día.</li>
                    <li><strong>V52 – Reporte de corte de cajero por email:</strong> Resumen individual por cajero. Prueba: Email con ventas y movimientos por empleado.</li>
                    <li><strong>V53 – Estadísticas de costeo de inventario por email:</strong> Análisis de costos y márgenes. Prueba: Email con métricas de rentabilidad.</li>
                    <li><strong>V54 – Historial de reportes enviados:</strong> Log de emails de reportes con fechas y destinatarios. Prueba: Vista de historial completo.</li>
                </ul>
                <strong>Galería de imágenes - UX, tablet, QR, reportes y programación:</strong>
                <section id="slideshow">
                    <div class="entire-content">
                        <div class="content-carrousel">
                            ${[
                              {
                                num: 1,
                                desc: "Desarrollé una interfaz responsiva para tablets usando media queries y CSS Grid. La captura muestra la vista de ventas optimizada para pantallas táctiles de 10 pulgadas.",
                              },
                              {
                                num: 2,
                                desc: "Implementé un historial completo de reportes enviados por email con fechas y destinatarios. La captura muestra la interfaz con el log de todos los reportes automáticos enviados.",
                              },
                              {
                                num: 3,
                                desc: "Configuré un generador de QR para alta de clientes con deep links. La captura muestra un código QR que redirige a un formulario de registro prellenado.",
                              },
                              {
                                num: 4,
                                desc: "Desarrollé un reporte de ventas semanal automatizado enviado por email. La captura muestra el email recibido con estadísticas consolidadas y gráficos de la semana.",
                              },
                              {
                                num: 5,
                                desc: "Implementé un sistema de navegación optimizado para móviles con menús colapsables. La captura muestra la interfaz en un smartphone, con accesos rápidos a funciones clave.",
                              },
                              {
                                num: 6,
                                desc: "Configuré un reporte de retiros automático por email. La captura muestra el email con detalles de todos los movimientos de efectivo realizados en el día.",
                              },
                              {
                                num: 7,
                                desc: "Desarrollé un dashboard responsivo con widgets redimensionables. La captura muestra la interfaz en una tablet, con gráficos adaptados al tamaño de pantalla.",
                              },
                              {
                                num: 8,
                                desc: "Implementé un reporte de corte de caja diario enviado por email. La captura muestra el email con el balance completo de caja al final del turno.",
                              },
                              {
                                num: 9,
                                desc: "Diseñé una ruta optimizada específicamente para tablet. La captura muestra cómo se adapta la interfaz y navegación a este tipo de dispositivos.",
                              },
                              {
                                num: 10,
                                desc: "Desarrollé un reporte de corte de cajero individual enviado por email. La captura muestra el email con estadísticas específicas de ventas y movimientos por empleado.",
                              },
                              {
                                num: 11,
                                desc: "Implementé un sistema de QR para acceso rápido a la ruta de tablet. La captura muestra un código QR que redirige directamente a la interfaz diseñada para este dispositivo.",
                              },
                              {
                                num: 12,
                                desc: "Configuré estadísticas de costeo de inventario enviadas por email. La captura muestra el email con análisis de márgenes, costos y rentabilidad de productos.",
                              },
                              {
                                num: 13,
                                desc: "Implementé un sistema de QR para acceso rápido desde una tablet al almacén. La captura muestra cómo ingresar directamente para realizar movimientos y gestiones en el inventario.",
                              },
                              {
                                num: 14,
                                desc: "Implementé un sistema de exportación de reportes a PDF con formato personalizado. La captura muestra un reporte generado con gráficos y tablas embebidas listo para envío por email.",
                              },
                            ]
                              .map(
                                (img) => `
                                <figure class="shadow"
                                    data-img="servet${img.num}.png"
                                    data-desc="${img.desc.replace(
                                      /"/g,
                                      "&quot;"
                                    )}">
                                    <img src="Recursos/experiencias/galerias/servet/ux/servet${
                                      img.num
                                    }.png"/>
                                    <figcaption class="image-caption">Ver detalles</figcaption>
                                </figure>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </section>
                
                <strong>VIDEO DEL PROYECTO:</strong>
                <table style="width: 100%; height: 100%;">
                    <tr>
                        <td style="text-align: center; vertical-align: middle;">
                            <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; width: 80%;">
                                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                            src="https://www.youtube.com/embed/NwIyzG-n4eg"
                                            frameborder="0" 
                                            allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </section>
    </div>
  `;

      // Event listeners para las figuras de todas las galerías (incluyendo la general)
      function setupGalleryListeners() {
        document.querySelectorAll(".shadow").forEach((fig) => {
          fig.addEventListener("click", () => {
            const img = fig.dataset.img;
            const desc = fig.dataset.desc;
            const imgElement = fig.querySelector("img");

            // Obtener la ruta base de la imagen actual
            const currentSrc = imgElement.getAttribute("src");
            const basePath = currentSrc.substring(
              0,
              currentSrc.lastIndexOf("/") + 1
            );

            openModalWithDescription(basePath + img, desc);
          });
        });
      }

      // Llamar después de generar el contenido
      setupGalleryListeners();

      setTimeout(adaptAllCarousels, 50);

      // Event listener para el botón "Saber más"
      document.getElementById("saber-mas").addEventListener("click", () => {
        document.getElementById("detalles").style.display = "block";
        document.getElementById("saber-mas").style.display = "none"; // Oculta el botón después de clickear
        setTimeout(adaptAllCarousels, 50);
      });
    },

    // Función para consultoría
    function () {
      animateContent();
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
                                desc: "Implementé un sistema de gestión de consultas donde cada mensaje muestra: servicio solicitado, datos completos del cliente (nombre, empresa, teléfono), mensaje detallado y timestamp exacto. Desarrollé un código de colores para estados (verde=resuelto, amarillo=pendiente) y agregué filtros por tipo de servicio y fecha. La interfaz permite responder directamente desde el panel o derivar a otros departamentos.",
                              },
                              {
                                num: 2,
                                desc: "Diseñé esta sección institucional con animaciones SVG personalizadas para cada valor corporativo. Implementé un sistema de 'hover cards' que al pasar el cursor muestra ejemplos prácticos de cada principio en acción. La tipografía escalable garantiza legibilidad en todos los dispositivos, y el diseño cumple con estándares WCAG 2.1 para accesibilidad.",
                              },
                              {
                                num: 3,
                                desc: "Desarrollé una línea de tiempo interactiva con hitos claves que se expanden al hacer clic, mostrando fotos y logros relevantes. Para los objetivos corporativos, creé indicadores de progreso visuales (barras de avance) que se actualizan automáticamente desde los KPIs del negocio. Incluí enlaces a casos de éxito relacionados.",
                              },
                              {
                                num: 4,
                                desc: "Construí un CMS completo con: editor WYSIWYG con formato avanzado, programación de publicaciones, análisis de engagement (vistas, tiempo de lectura) y sistema de etiquetas inteligentes. Cada post tiene versión móvil optimizada con lazy loading para imágenes y lectura ininterrumpida.",
                              },
                              {
                                num: 5,
                                desc: "Implementé un catálogo dinámico con: filtros combinados (por tipo, precio, duración), comparador de servicios, calculadora de ROI para clientes y vista de 'servicios frecuentemente contratados juntos'. Cada ficha técnica incluye documentos descargables, testimonios relevantes y formulario de cotización directa.",
                              },
                              {
                                num: 6,
                                desc: "Desarrollé un sistema de reputación con: verificación de clientes reales (mediante confirmación por email), respuestas públicas a testimonios, filtros por industria y tamaño de empresa, y análisis de sentimiento automático. Los testimonios verificados muestran insignias especiales.",
                              },
                              {
                                num: 7,
                                desc: "Creé un formulario inteligente que: sugiere mejoras en tiempo real (para testimonios muy cortos), detecta lenguaje inapropiado, permite adjuntar evidencias (capturas, documentos) y muestra una vista previa antes de enviar. Implementé un sistema de recompensas por testimonios completos.",
                              },
                              {
                                num: 8,
                                desc: "Diseñé un formulario multicanal que se adapta al servicio seleccionado (mostrando campos relevantes). Integré: autocompletado con empresas existentes, validación de número de teléfono por país, previsualización de disponibilidad de agenda, y opción para programar llamada inmediata.",
                              },
                              {
                                num: 9,
                                desc: "Desarrollé un CRUD completo para gestionar servicios con: editor enriquecido, historial de cambios, programación de disponibilidad, gestión de precios especiales por segmento, y sistema de aprobaciones en flujo de trabajo. Cada modificación genera notificaciones a los equipos relevantes.",
                              },
                              {
                                num: 10,
                                desc: "Implementé una tabla avanzada con: búsqueda inteligente (incluye descripciones), filtros combinados, ordenamiento multidimensional, exportación a CSV/Excel, y acciones masivas. El estado de cada servicio se sincroniza en tiempo real con la página pública.",
                              },
                              {
                                num: 11,
                                desc: "Construí un calendario editorial interactivo con: programación visual de contenido, alertas de duplicación, análisis de rendimiento histórico, y sugerencias de temas basadas en tendencias. El sistema incluye workflow de aprobación con roles y comentarios internos.",
                              },
                              {
                                num: 12,
                                desc: "Desarrollé un CRM básico con: puntuación automática de leads, historial de interacciones, integración con herramientas de comunicación, y sistema de seguimiento por etapas. Implementé recordatorios programables y generación de informes de conversión.",
                              },
                              {
                                num: 13,
                                desc: "Optimicé el rendimiento con: carga diferencial de componentes, imágenes en formato WebP, fuentes locales, y estrategia de caching avanzada. Implementé menús contextuales que se adaptan al dispositivo, y controles táctiles optimizados para móviles.",
                              },
                              {
                                num: 14,
                                desc: "Creé un centro de notificaciones unificado con: priorización inteligente, agrupación por contexto, acciones rápidas desde la alerta, y sincronización entre dispositivos. Las notificaciones incluyen metadatos enriquecidos y opciones de silenciamiento temporal.",
                              },
                            ]
                              .map(
                                (img) => `
                    <figure class="shadow"
                        data-img="consultoria${img.num}.png"
                        data-desc="${img.desc.replace(/"/g, "&quot;")}">
                        <img src="Recursos/experiencias/galerias/consultoria/consultoria${
                          img.num
                        }.png"/>
                        <figcaption class="image-caption">Ver detalles</figcaption>
                    </figure>
                `
                              )
                              .join("")}
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
      document.querySelectorAll(".shadow").forEach((fig) => {
        fig.addEventListener("click", () => {
          const img = fig.dataset.img;
          const desc = fig.dataset.desc;
          openModalWithDescription(
            `Recursos/experiencias/galerias/consultoria/${img}`,
            desc
          );
        });
      });
      setTimeout(adaptAllCarousels, 100);
    },
    // Función para tienda de ropa
    function () {
      animateContent();
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
                                desc: "Como desarrollador frontend, diseñé esta página de inicio para crear una primera impresión impactante. Implementé un hero section con imagen de fondo optimizada que se carga progresivamente, animaciones CSS para el texto principal que se activan al hacer scroll, y una barra de navegación sticky que se minimiza al desplazarse. Usé Intersection Observer API para cargar imágenes de manera diferida y mejoré el CLS (Cumulative Layout Shift) manteniendo reservado el espacio para cada elemento.",
                              },
                              {
                                num: 2,
                                desc: "Para la sección de productos destacados, desarrollé un grid system personalizado usando CSS Grid con fallback a Flexbox para navegadores antiguos. Cada tarjeta de producto tiene un sistema de hover que muestra opciones rápidas (favoritos, vista rápida) con transiciones suaves implementadas con requestAnimationFrame para máximo rendimiento. Integré un sistema de lazy loading para las imágenes y pre-caching de los productos más visitados usando Service Workers.",
                              },
                              {
                                num: 3,
                                desc: "La página de colección primavera fue desarrollada con un enfoque en el rendimiento. Implementé virtual scrolling para manejar grandes cantidades de productos, renderizando solo los elementos visibles en el viewport. Los filtros laterales usan Web Workers para procesar las opciones sin bloquear el hilo principal. Diseñé un sistema de prefetching que carga anticipadamente las imágenes cuando el usuario se acerca a ellas al hacer scroll.",
                              },
                              {
                                num: 4,
                                desc: "Para la colección de invierno, creé un sistema de filtros combinables que actualiza la vista sin recargar la página. Implementé debouncing en las búsquedas para evitar múltiples peticiones innecesarias y usé IndexedDB para cachear los resultados localmente. El diseño utiliza CSS variables para los temas estacionales que pueden cambiarse dinámicamente. Desarrollé un algoritmo que prioriza la carga de productos con mayor probabilidad de conversión basado en historial de usuario.",
                              },
                              {
                                num: 5,
                                desc: "Los productos en tendencia fueron implementados con un carrusel personalizado que funciona sin dependencias externas. Usé el Pointer Events API para soporte multiplataforma (touch y mouse) y desarrollé un sistema de inercia para los deslizamientos. Los datos de popularidad se actualizan en tiempo real mediante WebSockets, mostrando un indicador sutil cuando hay cambios. Implementé prefetching de imágenes para los productos adyacentes al visible.",
                              },
                              {
                                num: 6,
                                desc: "La sección de colaboraciones fue desarrollada como un SPA (Single Page Application) dentro del sitio principal. Usé la History API para manejar la navegación sin recargas y desarrollé componentes reutilizables para los elementos de diseño exclusivos. Implementé un sistema de etiquetas dinámicas que se actualizan según las fechas de las colaboraciones y su disponibilidad. La integración con APIs de diseñadores externos se hace mediante GraphQL para obtener solo los datos necesarios.",
                              },
                              {
                                num: 7,
                                desc: "Para la sección de elegancia atemporal, desarrollé un sistema de recomendaciones basado en machine learning (usando TensorFlow.js) que sugiere complementos para cada prenda. Implementé un visualizador 360° para productos seleccionados usando WebGL. El sistema de precios muestra automáticamente conversiones a otras monedas basado en la ubicación del usuario, con actualización diaria de tasas de cambio mediante una API externa.",
                              },
                              {
                                num: 8,
                                desc: "El lookbook con reseñas combina técnicas avanzadas de frontend. Desarrollé un sistema de galería que prioriza las imágenes según el ancho de banda del usuario (usando la Network Information API). Las reseñas implementan markdown básico para formato de texto y usan Web Components para los elementos interactivos. Implementé moderación automática de comentarios usando un servicio externo para filtrar contenido inapropiado.",
                              },
                              {
                                num: 9,
                                desc: "La página de contacto fue desarrollada con accesibilidad como prioridad. Implementé formularios con validación en tiempo real usando Constraint Validation API. El mapa interactivo usa Mapbox GL JS con renderizado vectorial para máxima calidad. Desarrollé un sistema de autocompletado para direcciones usando la Places API de Google. Todos los campos tienen etiquetas ARIA para soporte a lectores de pantalla.",
                              },
                              {
                                num: 10,
                                desc: "El formulario de contacto implementa medidas de seguridad avanzadas. Desarrollé un sistema de honeypot para prevenir spam, validación del lado del cliente y servidor, y protección contra CSRF. Los archivos adjuntos son previsualizados antes de subirse usando el File API. Implementé un estado de progreso para envíos largos y reintentos automáticos en caso de fallos temporales de conexión.",
                              },
                              {
                                num: 11,
                                desc: "La página de detalle de producto es una de las más complejas técnicamente. Implementé zoom de imágenes con superresolución usando técnicas de upscaling basadas en IA. El selector de tallas muestra disponibilidad en tiempo real mediante WebSockets. Desarrollé un visualizador AR (usando model-viewer) para productos seleccionados. La galería de fotos alternativas usa el formato WebP con fallback a JPEG para compatibilidad.",
                              },
                              {
                                num: 12,
                                desc: "La sección de favoritos fue desarrollada para funcionar completamente del lado del cliente cuando sea posible. Usé IndexedDB para almacenamiento local con sincronización periódica al backend. Implementé un sistema de categorización automática basada en análisis de productos similares. Los items pueden reordenarse mediante drag and touch, con posiciones guardadas en el perfil del usuario cuando está autenticado.",
                              },
                              {
                                num: 13,
                                desc: "El carrito de compras implementa un flujo optimizado para conversión. Desarrollé cálculos de impuestos en tiempo real basados en ubicación geográfica. Los descuentos se aplican con validación inmediata contra el servidor. Implementé un sistema de recuperación de carritos abandonados mediante localStorage y notificaciones push. La interfaz se adapta dinámicamente para mostrar métodos de pago relevantes según el monto total.",
                              },
                              {
                                num: 14,
                                desc: "La vista responsive fue desarrollada con mobile-first approach. Implementé responsive images con srcset y sizes para entregar el tamaño óptimo a cada dispositivo. Los breakpoints usan container queries donde es posible para mayor flexibilidad. Desarrollé un sistema de carga condicional de componentes basado en capacidades del dispositivo (como omitir ciertas animaciones en móviles antiguos). El rendimiento se optimizó mediante code splitting y carga progresiva de assets no críticos.",
                              },
                            ]
                              .map(
                                (img) => `
                    <figure class="shadow"
                        data-img="ropa${img.num}.png"
                        data-desc="${img.desc.replace(/"/g, "&quot;")}">
                        <img src="Recursos/experiencias/galerias/TiendaRopa/ropa${
                          img.num
                        }.png"/>
                        <figcaption class="image-caption">Ver detalles</figcaption>
                    </figure>
                `
                              )
                              .join("")}
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
      document.querySelectorAll(".shadow").forEach((fig) => {
        fig.addEventListener("click", () => {
          const img = fig.dataset.img;
          const desc = fig.dataset.desc;
          openModalWithDescription(
            `Recursos/experiencias/galerias/TiendaRopa/${img}`,
            desc
          );
        });
      });
      setTimeout(adaptAllCarousels, 100);
    },
    // Función para punto de venta
    function () {
      animateContent();
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
                                desc: "Como desarrollador, diseñé esta interfaz principal de ventas para optimizar el flujo de trabajo. Implementé un sistema de escaneo en tiempo real que se integra directamente con el inventario, cálculos automáticos de totales con impuestos configurables, y una lista editable de productos que permite correcciones inmediatas. La interfaz responde a eventos táctiles y de teclado para máxima eficiencia.",
                              },
                              {
                                num: 2,
                                desc: "Desarrollé este sistema de autenticación con capas de seguridad implementando hash bcrypt para contraseñas. El módulo valida credenciales contra la base de datos MySQL y asigna permisos según roles (Administrador/Vendedor/Almacenista). Incluí mecanismos para prevenir ataques por fuerza bruta y un sistema de recuperación de cuentas con verificación por email.",
                              },
                              {
                                num: 3,
                                desc: "Para el registro de productos, construí un formulario dinámico que valida datos en tiempo real. Implementé cálculos automáticos de margen de ganancia y conexión con la API de códigos de barras GS1. El sistema genera alertas cuando el stock cae bajo el mínimo configurado y registra el historial completo de cambios para auditoría.",
                              },
                              {
                                num: 4,
                                desc: "Este historial de ventas fue desarrollado con paginación inteligente para manejar grandes volúmenes de datos. Implementé filtros por fecha/rango horario usando MySQL DATE_FORMAT y optimicé las consultas con índices compuestos. Los datos se pueden exportar a CSV/PDF mediante librerías personalizadas que desarrollé basadas en FPDF.",
                              },
                              {
                                num: 5,
                                desc: "Como solución para gestión masiva, programé esta interfaz con actualización en tiempo real usando AJAX para evitar recargas. Desarrollé algoritmos para aplicar descuentos porcentuales o fijos a grupos de productos seleccionados, con previsualización de cambios antes de confirmar. Incluí validación de rangos numéricos y registro de cambios en bitácora.",
                              },
                              {
                                num: 6,
                                desc: "Para este módulo de inventario, implementé una tabla renderizada del lado del cliente con Virtual DOM para manejar miles de productos sin lag. Desarrollé un sistema de búsqueda combinada que consulta múltiples campos simultáneamente, con sugerencias predictivas. Las opciones de importación/exportación usan Web Workers para procesamiento en segundo plano.",
                              },
                              {
                                num: 7,
                                desc: "Desarrollé este formulario especial para productos sin código de barras estándar, generando identificadores únicos basados en hash SHA-1 truncados. Implementé cálculos de rentabilidad en tiempo real usando eventos onChange y validación cruzada con productos similares para evitar duplicados. La interfaz guarda borradores automáticamente cada 30 segundos.",
                              },
                              {
                                num: 8,
                                desc: "Construí este buscador avanzado con un algoritmo que pondera resultados por relevancia usando TF-IDF adaptado a productos. Implementé filtros anidados que se ejecutan como consultas preparadas en MySQL para seguridad. La interfaz usa memoization para cachear resultados frecuentes y reducción de queries innecesarias.",
                              },
                              {
                                num: 9,
                                desc: "Para estos reportes financieros, desarrollé consultas SQL complejas con subconsultas correlacionadas y funciones de ventana. Implementé gráficos interactivos usando Chart.js con renderizado canvas optimizado. El sistema genera proyecciones usando promedio móvil ponderado y permite la programación de reportes recurrentes automáticos.",
                              },
                              {
                                num: 10,
                                desc: "Este sistema de gestión de deudores fue uno de mis desarrollos más complejos. Implementé un motor de fechas con Moment.js que calcula estados (verde/rojo/blanco) evaluando plazos personalizables. Desarrollé un algoritmo de cálculo de intereses moratorios configurable por política de negocio. La interfaz incluye recordatorios automáticos vía email/SMS usando colas Redis para manejo asíncrono.",
                              },
                              {
                                num: 11,
                                desc: "Para el generador de códigos de barras, implementé la librería JsBarcode extendida con patrones personalizados. Desarrollé un sistema de prefijos categóricos que se almacenan como metadatos en la base de datos. La vista previa usa Canvas con opciones de zoom y la impresión se controla mediante una cola de trabajos para evitar bloqueos de interfaz.",
                              },
                              {
                                num: 12,
                                desc: "Este módulo de usuarios fue desarrollado con arquitectura RBAC (Role-Based Access Control). Implementé un sistema de permisos granulares usando máscaras de bits almacenadas como BIGINT en MySQL. Para seguridad, incluí auditoría de cambios, hash PBKDF2 para contraseñas, y timeout de sesión con renovación automática de tokens JWT.",
                              },
                              {
                                num: 13,
                                desc: "Desarrollé este sistema de tickets con plantillas Mustache.js que permiten personalización sin modificar código. Implementé impresión térmica directa via ESC/POS commands y generación de PDF con dompdf optimizado. Los tickets incluyen QR codes con hash de validación para autenticidad y se almacenan comprimidos en la base de datos para ahorro de espacio.",
                              },
                              {
                                num: 14,
                                desc: "Para el sistema de ayuda, construí un motor de búsqueda semántica usando NLP básico con stopwords en español. Implementé captura de pantalla automática con html2canvas para reportes de error. Los tutoriales interactivos usan el localStorage para guardar progreso y se actualizan dinámicamente según actualizaciones del sistema.",
                              },
                            ]
                              .map(
                                (img) => `
                    <figure class="shadow"
                        data-img="puntodeventa${img.num}.png"
                        data-desc="${img.desc.replace(/"/g, "&quot;")}">
                        <img src="Recursos/experiencias/galerias/punto de venta/puntodeventa${
                          img.num
                        }.png"/>
                        <figcaption class="image-caption">Ver detalles</figcaption>
                    </figure>
                `
                              )
                              .join("")}
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
      document.querySelectorAll(".shadow").forEach((fig) => {
        fig.addEventListener("click", () => {
          const img = fig.dataset.img;
          const desc = fig.dataset.desc;
          openModalWithDescription(
            `Recursos/experiencias/galerias/punto de venta/${img}`,
            desc
          );
        });
      });
      setTimeout(adaptAllCarousels, 100);
    },
    // Función para laboratorio
    function () {
      animateContent();
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
    },
    // Función para agencia
    function () {
      animateContent();
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
    },
    // Función para prácticas
    function () {
      animateContent();
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
    },
    // Función para soporte técnico
    function () {
      animateContent();
      document.getElementById("contenido").innerHTML = `
                <p>
                    • Desempeñé un papel clave en la gestión y soporte técnico para el departamento, brindando soluciones informáticas y administrativas para mejorar los procesos internos.<br>
                    • Implementé y coordiné el uso de herramientas tecnológicas para optimizar las operaciones de la oficina, incluyendo el soporte a usuarios y la resolución de problemas técnicos.<br>
                    • Mantuve relaciones efectivas con el equipo de trabajo y colaboré en la mejora del ambiente laboral mediante la comunicación y liderazgo.
                </p>`;
    },
  ];

  // Configuramos los eventos hover/touch para los items del carrusel
  items.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const idx = Array.from(items).indexOf(this);
      setTimeout(() => {
        contentFunctions[idx]();
      }, 100);
    });

    item.addEventListener(
      "touchstart",
      function () {
        const idx = Array.from(items).indexOf(this);
        setTimeout(() => {
          contentFunctions[idx]();
        }, 100);
      },
      { passive: true }
    );
  });
});

// Funciones para el modal de imágenes
let currentDescription = "";

function openModalWithDescription(src, description) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  var modalDesc = document.querySelector(".modal-description");

  if (!modalDesc) {
    modal.innerHTML = `
            <span class="close" onclick="closeModal()">&times;</span>
            <img class="modal-content" id="img01">
            <div class="modal-description"></div>
        `;
    modalDesc = document.querySelector(".modal-description");
    document.querySelector(".close").onclick = closeModal;
  }

  // PAUSAR TODOS LOS CARRUSELES
  document.querySelectorAll(".content-carrousel").forEach((carousel) => {
    carousel.style.animationPlayState = "paused";
  });

  modal.style.display = "block";
  document.getElementById("img01").src = src;
  modalDesc.textContent = description;
  currentDescription = description;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
  currentDescription = "";

  // REANUDAR TODOS LOS CARRUSELES
  document.querySelectorAll(".content-carrousel").forEach((carousel) => {
    carousel.style.animationPlayState = "running";
  });
}

// También modifica el evento click de la ventana para reanudar la animación
window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";

    // REANUDAR TODOS LOS CARRUSELES cuando se cierra haciendo click fuera
    document.querySelectorAll(".content-carrousel").forEach((carousel) => {
      carousel.style.animationPlayState = "running";
    });
  }
};

function seekTo(seconds) {
    const iframe = document.getElementById("youtubeVideo");
    const url = iframe.src;
    const videoId = url.match(/embed\/([^?]+)/)[1];
    iframe.src = `https://www.youtube.com/embed/${videoId}?start=${seconds}&autoplay=1`;
}

function goToChapter(seconds) {
    if (seconds) {
        seekTo(parseInt(seconds));
        // Reset selector
        document.getElementById('chapterSelector').value = '';
    }
}

// Responsive behavior
function updateDisplay() {
    const selector = document.getElementById('chapterSelector');
    const buttonGrid = document.getElementById('buttonGrid');
    const screenWidth = window.innerWidth;
    
    if (screenWidth < 768) {
        // Mobile: show selector, hide buttons
        selector.style.display = 'block';
        buttonGrid.style.display = 'none';
    } else {
        // Desktop/Tablet: hide selector, show buttons
        selector.style.display = 'none';
        buttonGrid.style.display = 'grid';
    }
}

// Update on load and resize
window.addEventListener('load', updateDisplay);
window.addEventListener('resize', updateDisplay);

