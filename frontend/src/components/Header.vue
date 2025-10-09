<!-- Componente Header.vue con navegación accesible y Bootstrap -->
<!-- Usar etiquetas semánticas y aria-label para accesibilidad -->
<!-- Mejorar accesibilidad del menú de navegación -->
<!-- Usar <nav role="navigation"> con aria-label -->
<!-- Verificar enfoque con teclado para enlaces -->

<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" aria-label="Navegación principal">
      <div class="container">
        <!-- logo arventis y enlace al home -->
        <router-link
          class="navbar-brand fw-medium d-flex align-items-center text-decoration-none"
          to="/"
        >
          <img src="/logos/transparente.png" alt="Logo Arventis" class="navbar-logo" />
          arventis
        </router-link>
        <!-- Botón de alternar navegación -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          ref="navbarToggler"
          @click="toggleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav" ref="navbarCollapse">
          <!-- Menú de navegación -->
          <ul class="navbar-nav ms-auto">
            <!-- Enlace a la página de inicio -->
            <li class="nav-item">
              <router-link
                class="nav-link mx-1 fw-medium link-navbar text-decoration-none"
                to="/"
                active-class="active"
                @click="closeNavbar"
                >Inicio</router-link
              >
            </li>
            <!-- Enlace a la página de servicios -->
            <li class="nav-item">
              <router-link
                class="nav-link mx-1 fw-medium link-navbar text-decoration-none"
                to="/services"
                active-class="active"
                @click="closeNavbar"
                >Servicios</router-link
              >
            </li>
            <!-- Enlace a la página de sobre nosotros -->
            <li class="nav-item">
              <router-link
                class="nav-link mx-1 fw-medium link-navbar text-decoration-none"
                to="/about"
                active-class="active"
                @click="closeNavbar"
                >Sobre Nosotros</router-link
              >
            </li>
            <!-- Enlace a la página de preguntas frecuentes -->
            <li class="nav-item">
              <router-link
                class="nav-link mx-1 fw-medium link-navbar text-decoration-none"
                to="/faq"
                active-class="active"
                @click="closeNavbar"
                >FAQs</router-link
              >
            </li>
            <!-- Enlace a la página de contacto -->
            <li class="nav-item">
              <router-link
                class="nav-link mx-1 fw-medium link-navbar text-decoration-none"
                to="/contact"
                active-class="active"
                @click="closeNavbar"
                >Contacto</router-link
              >
            </li>
            <!-- Enlace a la página de política de privacidad -->
            <li class="nav-item">
              <router-link
                class="nav-link mx-1 fw-medium link-navbar text-decoration-none"
                to="/privacidad"
                active-class="active"
                @click="closeNavbar"
                >Privacidad</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      bsNavbar: null,
      documentClickHandler: null,
      navState: {
        isCollapsed: true,
        toggled: 0,
      },
    };
  },
  methods: {
    closeNavbar() {
      // Solo cerrar si está en modo colapsado (pantallas pequeñas)
      if (window.innerWidth < 992) {
        this.forceCloseNavbar();
      }
    },

    toggleNavbar() {
      this.navState.toggled++;
      this.navState.isCollapsed = !this.navState.isCollapsed;

      // Conteo para detectar posibles problemas
      if (this.navState.toggled > 20) {
        // Resetear el contador y forzar el estado conocido
        this.navState.toggled = 0;
        this.resetNavbarState();
      }
    },

    forceCloseNavbar() {
      const navbarCollapse = this.$refs.navbarCollapse;

      // Método 1: Usar la API de Bootstrap si está disponible
      if (this.bsNavbar) {
        try {
          this.bsNavbar.hide();
        } catch (e) {
          console.warn("Error al cerrar navbar con Bootstrap:", e);
        }
      }

      // Método 2: Manipular directamente las clases
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
        navbarCollapse.classList.add("collapse");

        // Cambiar también el atributo aria-expanded del botón toggler
        if (this.$refs.navbarToggler) {
          this.$refs.navbarToggler.setAttribute("aria-expanded", "false");
        }

        // Actualizar el estado interno
        this.navState.isCollapsed = true;
      }
    },

    resetNavbarState() {
      // Forzar un reinicio completo del estado del navbar
      const navbarCollapse = this.$refs.navbarCollapse;
      const navbarToggler = this.$refs.navbarToggler;

      if (navbarCollapse) {
        // Restablecer clases a un estado conocido
        navbarCollapse.className = "collapse navbar-collapse";
      }

      if (navbarToggler) {
        navbarToggler.setAttribute("aria-expanded", "false");
      }

      // Restablecer estado interno
      this.navState.isCollapsed = true;

      console.info("Estado del navbar restablecido");
    },

    setupClickOutsideHandler() {
      // Crear una función de manejador de eventos independiente que podamos quitar más tarde
      this.documentClickHandler = event => {
        const navbarCollapse = this.$refs.navbarCollapse;
        const navbarToggler = this.$refs.navbarToggler;

        if (!navbarCollapse || !navbarToggler) return;

        if (navbarCollapse.classList.contains("show")) {
          // Si el clic no fue dentro del menú ni en el botón toggler
          if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
            this.forceCloseNavbar();
          }
        }
      };

      // Agregamos el event listener
      document.addEventListener("click", this.documentClickHandler);
    },
  },
  mounted() {
    // Intentar obtener la instancia de Bootstrap Collapse
    if (typeof window !== "undefined" && window.bootstrap) {
      try {
        this.bsNavbar = new window.bootstrap.Collapse(this.$refs.navbarCollapse, {
          toggle: false,
        });
      } catch (e) {
        console.warn("No se pudo inicializar Bootstrap Collapse:", e);
      }
    }

    // Configurar el manejador de clics externos
    this.setupClickOutsideHandler();

    // Manejar cambios de tamaño de la ventana - cerrar el menú si se redimensiona
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 992) {
        // En pantallas grandes, asegúrate de que el menú esté visible
        const navbarCollapse = this.$refs.navbarCollapse;
        if (navbarCollapse) {
          navbarCollapse.classList.remove("show");
        }
      } else if (!this.navState.isCollapsed) {
        // En pantallas pequeñas, si está abierto, cerrarlo al redimensionar
        this.forceCloseNavbar();
      }
    });

    // Escuchar cambios de ruta para cerrar el menú
    this.$router.afterEach(() => {
      this.closeNavbar();
    });
  },
  beforeUnmount() {
    // Limpieza del event listener - importante usar la misma función de referencia
    if (this.documentClickHandler) {
      document.removeEventListener("click", this.documentClickHandler);
      this.documentClickHandler = null;
    }

    // Limpieza de otros event listeners
    window.removeEventListener("resize", () => this.closeNavbar());

    // Destruir la instancia de Bootstrap si existe
    if (this.bsNavbar && typeof this.bsNavbar.dispose === "function") {
      try {
        this.bsNavbar.dispose();
      } catch (e) {
        console.warn("Error al destruir instancia Bootstrap:", e);
      }
    }
  },
};
</script>

<style>
@import "@/assets/style/components/header.css";
</style>
