<script setup>
import { useScrollReveal } from "@/composables/useScrollReveal.js";

// animacion de libreria scrollreveal
const { setupScrollReveal } = useScrollReveal();
setupScrollReveal();
</script>
<template>
  <section
    class="hero-services-section d-flex align-items-center position-relative overflow-hidden"
  >
    <!-- Animaciones de fondo -->
    <div class="position-absolute w-100 h-100 top-0 left-0">
      <div class="floating-circle position-absolute rounded-circle circle-1"></div>
      <div class="floating-circle position-absolute rounded-circle circle-2"></div>
      <div class="floating-circle position-absolute rounded-circle circle-3"></div>
      <div class="floating-circle position-absolute rounded-circle circle-4"></div>
      <div class="floating-circle position-absolute rounded-circle circle-5"></div>
      <div class="floating-circle position-absolute rounded-circle circle-6"></div>
    </div>

    <!-- Contenido del hero -->
    <div class="container position-relative py-5">
      <div class="row text-white">
        <div class="col-lg-10 col-xl-8">
          <h2 class="display-lg-5 display-4 fw-bold mb-4 reveal-fade">Nuestros Servicios</h2>
          <p class="fs-5 mb-4 text-light fw-medium">
            Ofrecemos soluciones tecnológicas completas y personalizadas para impulsar su negocio
            hacia el futuro digital. Explore nuestros servicios especializados.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
