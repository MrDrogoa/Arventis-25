<script setup>
import { useScrollReveal } from "@/composables/useScrollReveal.js";

// animacion de libreria scrollreveal
const { setupScrollReveal } = useScrollReveal();
setupScrollReveal();
</script>

<template>
  <section class="hero-neekworld-section py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="hero-title-container d-flex align-items-center justify-content-center">
            <!-- Línea decorativa izquierda -->
            <div class="hero-line-left"></div>
            <!-- Título NeekWorld -->
            <h2
              class="hero-neekworld-title mx-4 display-lg-5 display-4 fw-bold text-center reveal-bottom-1"
            >
              NeekWorld
            </h2>
            <!-- Línea decorativa derecha -->
            <div class="hero-line-right"></div>
          </div>
          <!-- Descripción -->
          <p class="hero-neekworld-description text-center w-75 mx-auto mt-2 reveal-up">
            Explora nuestro espacio virtual para educación y colaboración en línea. Una plataforma
            innovadora que integra tecnología de vanguardia con herramientas interactivas, diseñada
            para conectar estudiantes y profesionales.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
