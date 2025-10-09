<script setup>
import { useScrollReveal } from "@/composables/useScrollReveal.js";

// animacion de libreria scrollreveal
const { setupScrollReveal } = useScrollReveal();
setupScrollReveal();
</script>

<template>
  <section class="position-relative pb-5 px-3">
    <!-- Rectángulo superpuesto -->
    <div class="cta-overlay-box rounded-4 m-auto p-5">
      <div class="container position-relative">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-8 text-white text-center text-lg-start">
            <h3 class="mb-3 fw-bold">¿No encuentra respuesta a su pregunta?</h3>
            <p class="mb-lg-0 text-white opacity-90">
              Nuestro equipo está listo para ayudarle con cualquier consulta adicional que tenga.
            </p>
          </div>
          <div class="col-lg-4 text-lg-end text-center mt-3 mt-lg-0">
            <router-link
              to="/contact"
              class="btn btn-outline-light btn-lg px-4 fw-semibold text-decoration-none reveal-top-1"
            >
              Contáctenos
            </router-link>
          </div>
        </div>
        <!-- Puntos decorativos -->
        <div class="dot position-absolute rounded-circle dot-1"></div>
        <div class="dot position-absolute rounded-circle dot-2"></div>
        <div class="dot position-absolute rounded-circle dot-3"></div>
        <div class="dot position-absolute rounded-circle dot-4"></div>
        <div class="dot position-absolute rounded-circle dot-5"></div>
        <div class="dot position-absolute rounded-circle dot-6"></div>
        <div class="dot position-absolute rounded-circle dot-7"></div>
        <div class="dot position-absolute rounded-circle dot-8"></div>
        <div class="dot position-absolute rounded-circle dot-9"></div>
        <div class="dot position-absolute rounded-circle dot-10"></div>
        <div class="dot position-absolute rounded-circle dot-11"></div>
        <div class="dot position-absolute rounded-circle dot-12"></div>
        <div class="dot position-absolute rounded-circle dot-13"></div>
        <div class="dot position-absolute rounded-circle dot-14"></div>
        <div class="dot position-absolute rounded-circle dot-15"></div>
        <div class="dot position-absolute rounded-circle dot-16"></div>
        <div class="dot position-absolute rounded-circle dot-17"></div>
        <div class="dot position-absolute rounded-circle dot-18"></div>
        <div class="dot position-absolute rounded-circle dot-19"></div>
        <div class="dot position-absolute rounded-circle dot-20"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
