let isDarkTheme = false;
const habilidadesCertificates = document.querySelectorAll(".certificate-card");

function createParticles() {
  const particlesContainer = document.getElementById("habilidades-particles");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 6 + "s";
    particle.style.animationDuration = Math.random() * 3 + 3 + "s";
    particlesContainer.appendChild(particle);
  }
}

function toggleTheme() {
  isDarkTheme = !isDarkTheme;
  document.getElementById("habilidades-body").classList.toggle("dark-theme");
  document.getElementById("habilidades-themeIcon").textContent = isDarkTheme
    ? "☀️"
    : "🌙";
  localStorage.setItem("habilidades-darkTheme", isDarkTheme);

  document.getElementById("habilidades-body").style.transition =
    "all 0.5s ease";
  setTimeout(() => {
    document.getElementById("habilidades-body").style.transition = "";
  }, 500);
}

function openCVModal() {
  document.getElementById("habilidades-cvModal").classList.add("show");
}

function closeCVModal() {
  document.getElementById("habilidades-cvModal").classList.remove("show");
}

function downloadCV(format) {
  const cvFiles = {
    pdf: "Recursos/CV/CV Uziel Sanchez Marin en PDF.pdf",
    word: "Recursos/CV/CV Uziel Sanchez Marin WORD.docx",
    simple: "Recursos/CV/CV texto.txt",
  };

  const messages = {
    pdf: "📄 Descargando CV en formato PDF profesional...",
    word: "📝 Descargando CV en formato Word editable...",
    simple: "📋 Descargando versión simple del CV...",
  };

  alert(messages[format]);

  const link = document.createElement("a");
  link.href = cvFiles[format];
  link.download = `Uziel_Sanchez_Marin_CV_${format.toUpperCase()}.${
    format === "word" ? "docx" : format === "simple" ? "txt" : "pdf"
  }`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  closeCVModal();
}

function shareProfile() {
  if (navigator.share) {
    navigator.share({
      title: "Portafolio de Uziel Sánchez Marín - Habilidades",
      text: "Conoce mis habilidades y certificaciones como Ingeniero en Sistemas",
      url: window.location.href,
    });
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert("🔗 URL copiada al portapapeles");
    });
  }
}

function setupFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const certificates = document.querySelectorAll(".certificate-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      certificates.forEach((cert) => {
        if (filter === "all" || cert.getAttribute("data-category") === filter) {
          cert.style.display = "block";
          cert.style.animation = "fadeInUp 0.5s ease forwards";
        } else {
          cert.style.display = "none";
        }
      });

      updateHabilidadesStats(filter);
    });
  });
}

function setupSearch() {
  const searchInput = document.getElementById("habilidades-searchInput");
  const certificates = document.querySelectorAll(".certificate-card");

  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();

    certificates.forEach((cert) => {
      const title = cert
        .querySelector(".certificate-title")
        .textContent.toLowerCase();
      const description = cert
        .querySelector(".certificate-description")
        .textContent.toLowerCase();

      if (title.includes(searchTerm) || description.includes(searchTerm)) {
        cert.style.display = "block";
        cert.style.animation = "fadeInUp 0.5s ease forwards";
      } else {
        cert.style.display = "none";
      }
    });
  });
}

function updateHabilidadesStats(filter) {
  const allCerts = document.querySelectorAll(".certificate-card");
  const totalElement = document.getElementById("habilidades-totalCertificates");

  if (filter === "all") {
    totalElement.textContent = allCerts.length;
  } else {
    let count = 0;
    allCerts.forEach((cert) => {
      if (cert.getAttribute("data-category") === filter) {
        count++;
      }
    });
    totalElement.textContent = count;
  }
}

function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const targetText = counter.textContent;
        const target = parseInt(targetText.replace(/\D/g, ""));
        let count = 0;
        const increment = target / 100;

        const updateCounter = () => {
          if (count < target) {
            count += increment;
            counter.textContent =
              Math.ceil(count) +
              (targetText.includes("%")
                ? "%"
                : targetText.includes("+")
                ? "+"
                : "");
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = targetText;
          }
        };

        updateCounter();
        observer.unobserve(counter);
      }
    });
  });

  counters.forEach((counter) => observer.observe(counter));
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function setupScrollButton() {
  const scrollBtn = document.getElementById("habilidades-scroll-top");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });
}

function animateOnScroll() {
  const elements = document.querySelectorAll(".fade-in-up");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  elements.forEach((element) => {
    element.style.animationPlayState = "paused";
    observer.observe(element);
  });
}

function animateProgressBars() {
  const progressBars = document.querySelectorAll(".progress-fill");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const width = progressBar.style.width;
          progressBar.style.width = "0%";
          setTimeout(() => {
            progressBar.style.transition =
              "width 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
            progressBar.style.width = width;
          }, 200);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  progressBars.forEach((bar) => observer.observe(bar));
}

function setupTimeline() {
  const timelineItems = document.querySelectorAll(".timeline-item");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  timelineItems.forEach((item) => observer.observe(item));
}

function setupMouseEffects() {
  const cards = document.querySelectorAll(
    ".certificate-card, .tech-card, .skills-column"
  );

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
    });
  });
}

document.addEventListener("click", (e) => {
  const modal = document.getElementById("habilidades-cvModal");
  if (e.target === modal) {
    closeCVModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCVModal();
  }
  if (e.ctrlKey && e.key === "d") {
    e.preventDefault();
    openCVModal();
  }
  if (e.ctrlKey && e.key === "t") {
    e.preventDefault();
    toggleTheme();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("habilidades-darkTheme");
  if (savedTheme === "true") {
    toggleTheme();
  }

  createParticles();
  animateOnScroll();
  animateProgressBars();
  setupMouseEffects();
  setupFilters();
  setupSearch();
  animateCounters();
  setupScrollButton();
  setupTimeline();

  // Inicializar el contador de certificaciones con el total real
  updateHabilidadesStats("all");
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

function openCourseAndDownload(event, courseUrl, pdfPath) {
  event.preventDefault();

  // Abrir la página primero
  window.open(courseUrl, "_blank");

  // Descargar el PDF inmediatamente después
  setTimeout(() => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Santander-Agile-Certificado.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, 300);
}
