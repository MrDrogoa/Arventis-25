<!-- Layout principal con Header, router-view y Footer -->
<!-- Usar transición en router-view y layout responsivo con Bootstrap -->

<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <Header />

    <transition name="fade" mode="out-in">
      <router-view class="flex-grow-1" />
    </transition>

    <AccessibilityControls />

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import AccessibilityControls from "@/components/AccessibilityControls.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    AccessibilityControls,
  },
  mounted() {
    // Cargar Bootstrap de CDN si no está ya incluido en el index.html
    if (!document.getElementById("bootstrap-css")) {
      const bootstrapCSS = document.createElement("link");
      bootstrapCSS.id = "bootstrap-css";
      bootstrapCSS.rel = "stylesheet";
      bootstrapCSS.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
      document.head.appendChild(bootstrapCSS);
    }

    if (!document.getElementById("bootstrap-icons")) {
      const bootstrapIcons = document.createElement("link");
      bootstrapIcons.id = "bootstrap-icons";
      bootstrapIcons.rel = "stylesheet";
      bootstrapIcons.href =
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css";
      document.head.appendChild(bootstrapIcons);
    }

    // Cargar Bootstrap JS si es necesario
    if (!document.getElementById("bootstrap-js")) {
      const bootstrapJS = document.createElement("script");
      bootstrapJS.id = "bootstrap-js";
      bootstrapJS.src =
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
      document.body.appendChild(bootstrapJS);
    }
  },
};
</script>

<style>
/* Estilos globales */
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

/* Transiciones entre vistas */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Espaciado para el contenido principal */
#app {
  overflow-x: hidden;
}

/* Asegura que el footer quede abajo */
.min-vh-100 {
  min-height: 100vh;
}

/* Estilos para enlaces */
a {
  color: #0d6efd;
  text-decoration: none;
}

a:hover {
  color: #0a58ca;
  text-decoration: underline;
}

/* Accesibilidad: enfoque visible */
:focus {
  outline: 3px solid rgba(13, 110, 253, 0.25);
  outline-offset: 2px;
}
</style>
