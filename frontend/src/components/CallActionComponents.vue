<script setup>
import { useScrollReveal } from "@/composables/useScrollReveal.js";

// animacion de libreria scrollreveal
const { setupScrollReveal } = useScrollReveal();
setupScrollReveal();
</script>
<template>
  <section class="cta-section py-5 bg-gradient-action">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center text-white">
          <h2 class="mb-4 fw-bold display-6 font-family reveal-right">
            ¿Listo para transformar su negocio?
          </h2>
          <p class="w-75 mb-4 fw-medium text-white mx-auto">
            Contáctenos hoy y descubra cómo nuestras soluciones tecnológicas pueden ayudar a
            alcanzar sus objetivos.
          </p>
          <router-link
            to="/contact"
            class="btn link-hero btn-lg px-5 text-decoration-none text-white fw-semibold"
          >
            Solicitar consulta gratuita
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
