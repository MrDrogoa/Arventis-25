<script setup>
import { useScrollReveal } from "@/composables/useScrollReveal.js";

// animacion de libreria scrollreveal
const { setupScrollReveal } = useScrollReveal();
setupScrollReveal();

// Datos dinámicos para los pasos del proceso
const processSteps = [
  {
    id: 1,
    icon: "bi-play-circle",
    title: "Inicio del proyecto",
    description:
      "Definimos el alcance, objetivos y requerimientos iniciales para establecer las bases del proyecto.",
  },
  {
    id: 2,
    icon: "bi-exclamation-triangle",
    title: "Problemáticas",
    description:
      "Identificamos y analizamos los desafíos técnicos y operativos para diseñar soluciones efectivas.",
  },
  {
    id: 3,
    icon: "bi-code-slash",
    title: "Desarrollo",
    description:
      "Construimos las soluciones utilizando las mejores prácticas de programación y arquitectura de software.",
  },
  {
    id: 4,
    icon: "bi-gear",
    title: "Testing y Optimización",
    description:
      "Realizamos pruebas exhaustivas y optimizamos el rendimiento para garantizar la calidad del producto final.",
  },
  {
    id: 5,
    icon: "bi-check-circle",
    title: "Resultado Final",
    description:
      "Entregamos soluciones funcionales completamente probadas y optimizadas proporcionando soporte continuo.",
  },
];
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

      <!-- Proceso dinámico -->
      <div class="row justify-content-center">
        <div
          v-for="(step, index) in processSteps"
          :key="step.id"
          class="col-6 col-lg-2-4 col-md-3 text-center mb-0 mb-md-2"
        >
          <div class="process-step position-relative">
            <div class="step-icon mx-auto mb-3 rounded-circle reveal-bottom">
              <i :class="`bi ${step.icon} fs-3 text-white`"></i>
            </div>
            <div
              v-if="index < processSteps.length - 1"
              class="step-connector d-none d-lg-block"
            ></div>
            <h5 class="fw-bold mb-2 title-icon reveal-bottom">{{ step.title }}</h5>
            <p class="text-muted small px-2 reveal-bottom">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
