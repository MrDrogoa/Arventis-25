<!-- Componente Header.vue con navegación accesible y Bootstrap -->
<!-- Usar etiquetas semánticas y aria-label para accesibilidad -->
<!-- Mejorar accesibilidad del menú de navegación -->
<!-- Usar <nav role="navigation"> con aria-label -->
<!-- Verificar enfoque con teclado para enlaces -->

<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" aria-label="Navegación principal">
      <div class="container">
        <router-link class="navbar-brand d-flex align-items-center" to="/">
          <img
            src="../assets/img/logos/transparente.png"
            alt="Logo Arventis"
            class="navbar-logo me-2"
          />
          Arventis
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/" active-class="active">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/services" active-class="active"
                >Servicios</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about" active-class="active"
                >Sobre Nosotros</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact" active-class="active"
                >Contacto</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/privacidad" active-class="active"
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
};
</script>
