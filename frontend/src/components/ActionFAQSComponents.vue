<script setup>
import { useScrollReveal } from "@/composables/useScrollReveal.js";

// animacion de libreria scrollreveal
const { setupScrollReveal } = useScrollReveal();
setupScrollReveal();
</script>

<template>
  <section class="cta-overlay-section position-relative pb-5">
    <div class="cta-overlay-box">
      <div class="container position-relative">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-8 text-white">
            <h3 class="mb-3 fw-bold">¿No encuentra respuesta a su pregunta?</h3>
            <p class="mb-lg-0 text-white opacity-90">
              Nuestro equipo está listo para ayudarle con cualquier consulta adicional que tenga.
            </p>
          </div>
          <div class="col-lg-4 text-lg-end mt-3 mt-lg-0">
            <router-link
              to="/contact"
              class="btn btn-outline-light btn-lg px-4 fw-semibold text-decoration-none reveal-top-1"
            >
              Contáctenos
            </router-link>
          </div>
        </div>
        <!-- puntos decorativos -->
        <div class="dots-pattern">
          <div class="dot dot-1"></div>
          <div class="dot dot-2"></div>
          <div class="dot dot-3"></div>
          <div class="dot dot-4"></div>
          <div class="dot dot-5"></div>
          <div class="dot dot-6"></div>
          <div class="dot dot-7"></div>
          <div class="dot dot-8"></div>
          <div class="dot dot-9"></div>
          <div class="dot dot-10"></div>
          <div class="dot dot-11"></div>
          <div class="dot dot-12"></div>
          <div class="dot dot-13"></div>
          <div class="dot dot-14"></div>
          <div class="dot dot-15"></div>
          <div class="dot dot-16"></div>
          <div class="dot dot-17"></div>
          <div class="dot dot-18"></div>
          <div class="dot dot-19"></div>
          <div class="dot dot-20"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
