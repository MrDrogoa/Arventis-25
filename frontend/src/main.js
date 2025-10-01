import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style/main.js";
import ScrollReveal from "scrollreveal";

// Configuración global de ScrollReveal
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2000,
  delay: 200,
});

// Importar Bootstrap desde el CDN
const loadBootstrap = () => {
  // Cargar CSS de Bootstrap si no está ya incluido
  if (!document.getElementById("bootstrap-css")) {
    const bootstrapCSS = document.createElement("link");
    bootstrapCSS.id = "bootstrap-css";
    bootstrapCSS.rel = "stylesheet";
    bootstrapCSS.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
    document.head.appendChild(bootstrapCSS);
  }

  // Cargar íconos de Bootstrap
  if (!document.getElementById("bootstrap-icons")) {
    const bootstrapIcons = document.createElement("link");
    bootstrapIcons.id = "bootstrap-icons";
    bootstrapIcons.rel = "stylesheet";
    bootstrapIcons.href =
      "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css";
    document.head.appendChild(bootstrapIcons);
  }

  // Cargar JavaScript de Bootstrap
  if (!document.getElementById("bootstrap-js")) {
    const bootstrapJS = document.createElement("script");
    bootstrapJS.id = "bootstrap-js";
    bootstrapJS.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
    document.body.appendChild(bootstrapJS);
  }
};

// Cargar Bootstrap inmediatamente para evitar problemas con componentes que lo usan
loadBootstrap();

createApp(App).use(router).mount("#app");
