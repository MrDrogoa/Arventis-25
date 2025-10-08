<script setup>
import { useScrollReveal } from "@/composables/useScrollReveal.js";

// animacion de libreria scrollreveal
const { setupScrollReveal } = useScrollReveal();
setupScrollReveal();
</script>

<template>
  <section>
    <article class="page-header bg-contact py-5">
      <div class="container text-white">
        <h2 class="display-lg-5 display-4 fw-bold mb-2 reveal-fade">Contacto</h2>
        <p class="fs-5 mb-4 text-light fw-medium">
          Estamos aquí para ayudarle. No dude en ponerse en contacto con nosotros.
        </p>
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped></style>
