<script setup>
import { useScrollReveal } from "@/composables/useScrollReveal.js";

// animacion de libreria scrollreveal
const { setupScrollReveal } = useScrollReveal();
setupScrollReveal();
</script>
<template>
  <section class="py-5">
    <div class="container">
      <!-- Título de la sección -->
      <div class="text-center mb-5">
        <p class="text-muted text-uppercase fw-medium mb-2">// Nuestro Proceso de Trabajo</p>
        <h2 class="display-6 fw-bold">
          Nuestro <span class="text-primary">Proceso de Trabajo</span> Probado
        </h2>
      </div>

      <!-- Proceso en 4 pasos -->
      <div class="row justify-content-center">
        <!-- Paso 1: Inicio del proyecto -->
        <div class="col-6 col-md-3 text-center mb-2 mb-md-0">
          <div class="process-step position-relative">
            <div class="step-icon mx-auto mb-3 rounded-circle reveal-bottom">
              <i class="bi bi-play-circle fs-3 text-white"></i>
            </div>
            <div class="step-connector d-none d-lg-block"></div>
            <h5 class="fw-bold mb-2 title-icon reveal-bottom">Inicio del proyecto</h5>
            <p class="text-muted small px-2 reveal-bottom">
              Definimos el alcance, objetivos y requerimientos iniciales para establecer las bases
              del proyecto.
            </p>
          </div>
        </div>

        <!-- Paso 2: Problemáticas -->
        <div class="col-6 col-md-3 text-center mb-2 mb-md-0">
          <div class="process-step position-relative">
            <div class="step-icon mx-auto mb-3 rounded-circle reveal-bottom">
              <i class="bi bi-exclamation-triangle fs-3 text-white"></i>
            </div>
            <div class="step-connector d-none d-lg-block"></div>
            <h5 class="fw-bold mb-2 title-icon reveal-bottom">Problemáticas</h5>
            <p class="text-muted small px-2 reveal-bottom">
              Identificamos y analizamos los desafíos técnicos y operativos para diseñar soluciones
              efectivas.
            </p>
          </div>
        </div>

        <!-- Paso 3: Desarrollo -->
        <div class="col-6 col-md-3 text-center mb-2 mb-md-0">
          <div class="process-step position-relative">
            <div class="step-icon mx-auto mb-3 rounded-circle reveal-bottom">
              <i class="bi bi-code-slash fs-3 text-white"></i>
            </div>
            <div class="step-connector d-none d-lg-block"></div>
            <h5 class="fw-bold mb-2 title-icon reveal-bottom">Desarrollo</h5>
            <p class="text-muted small px-2 reveal-bottom">
              Construimos las soluciones utilizando las mejores prácticas de programación y
              arquitectura de software.
            </p>
          </div>
        </div>

        <!-- Paso 4: Resultado Final -->
        <div class="col-6 col-md-3 text-center mb-2 mb-md-0">
          <div class="process-step">
            <div class="step-icon mx-auto mb-3 rounded-circle reveal-bottom">
              <i class="bi bi-check-circle fs-3 text-white"></i>
            </div>
            <h5 class="fw-bold mb-2 title-icon reveal-bottom">Resultado Final</h5>
            <p class="text-muted small px-2 reveal-bottom">
              Entregamos soluciones funcionales completamente probadas y optimizadas proporcionando
              soporte continuo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
