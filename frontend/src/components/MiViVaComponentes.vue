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
    <div class="container pt-5">
      <!-- Título de la sección -->
      <div class="text-center mb-5">
        <h2 class="display-6 fw-bold">
          Conoce <span class="text-primary">Nuestra Filosofía</span> Empresarial
        </h2>
      </div>

      <!-- Misión, Visión y Valores dinámico -->
      <div class="row justify-content-center">
        <div
          v-for="(item, index) in missionVisionValues"
          :key="item.id"
          class="col-md-3 text-center mb-4 mb-md-0 miviva-card-container"
        >
          <div class="mission-step position-relative">
            <div class="mission-icon mx-auto mb-3 rounded-circle reveal-bottom">
              <i :class="`bi ${item.icon} fs-3 text-white`"></i>
            </div>
            <div
              v-if="index < missionVisionValues.length - 1"
              class="mission-connector d-none d-lg-block"
            ></div>
            <h5 class="fw-bold mb-2 mission-title reveal-bottom">{{ item.title }}</h5>
            <p class="text-muted small px-2 reveal-bottom">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
