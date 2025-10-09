<script setup>
import { useScrollReveal } from "@/composables/useScrollReveal.js";

// animacion de libreria scrollreveal
const { setupScrollReveal } = useScrollReveal();
setupScrollReveal();

// Datos dinámicos para Misión, Visión y Valores
const missionVisionValues = [
  {
    id: 1,
    icon: "bi-bullseye",
    title: "Misión",
    description:
      "Proporcionar soluciones tecnológicas innovadoras que impulsen el crecimiento y la eficiencia de nuestros clientes.",
  },
  {
    id: 2,
    icon: "bi-eye",
    title: "Visión",
    description:
      "Ser reconocidos como líderes en transformación digital, estableciendo nuevos estándares de excelencia e innovación.",
  },
  {
    id: 3,
    icon: "bi-star",
    title: "Valores",
    description:
      "Integridad, excelencia, innovación, colaboración y compromiso con la satisfacción del cliente.",
  },
];
</script>

<template>
  <section>
    <div class="container py-5">
      <!-- Título de la sección -->
      <div class="text-center mb-5">
        <h2 class="display-6 fw-bold">
          Conoce <span class="text-primary">Nuestra Filosofía</span> Empresarial
        </h2>
      </div>

      <!-- Misión, Visión y Valores dinámico -->
      <div class="row justify-content-center py-2">
        <div
          v-for="(item, index) in missionVisionValues"
          :key="item.id"
          class="col-6 col-md-3 miviva-content text-center mb-0 mb-md-2"
        >
          <div class="d-flex flex-column align-items-center position-relative">
            <div
              class="step-icon d-flex align-items-center justify-content-center mx-auto mb-3 rounded-circle reveal-bottom-1"
            >
              <i :class="`bi ${item.icon} fs-3 text-white`"></i>
            </div>
            <div
              v-if="index < missionVisionValues.length - 1"
              class="mission-connector step-connector position-absolute z-index-1 d-none d-lg-block"
            ></div>
            <h5 class="fw-bold mb-2 title-icon reveal-bottom-1">{{ item.title }}</h5>
            <p class="text-muted small px-2 flex-grow-1 reveal-bottom-1">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
