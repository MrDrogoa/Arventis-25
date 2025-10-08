<script setup>
import { ref } from "vue";

const values = ref([
  {
    title: "Innovación",
    icon: "bi-lightbulb",
    description:
      "Buscamos constantemente nuevas maneras de resolver problemas y mejorar nuestros servicios.",
  },
  {
    title: "Compromiso",
    icon: "bi-hand-thumbs-up",
    description: "Nos dedicamos a cumplir y superar las expectativas de nuestros clientes.",
  },
  {
    title: "Excelencia",
    icon: "bi-trophy",
    description: "Mantenemos los más altos estándares de calidad en todo lo que hacemos.",
  },
  {
    title: "Colaboración",
    icon: "bi-people",
    description: "Trabajamos juntos como un equipo para lograr los mejores resultados.",
  },
]);
</script>

<template>
  <section class="container py-5">
    <div class="mt-5">
      <!-- title tarjeta -->
      <h2 class="text-center display-6 fw-bold mb-4 reveal-left">Nuestros valores</h2>
      <div class="row g-4 justify-content-center">
        <div class="col-lg-4 col-md-6" v-for="(value, index) in values" :key="index">
          <div class="card h-100 border-0 shadow-sm feature-card">
            <div class="card-body p-4">
              <div class="feature-icon step-icon bg-gradient text-white rounded-4 mb-3">
                <i :class="`bi ${value.icon}`"></i>
              </div>
              <h4 class="card-title h5">{{ value.title }}</h4>
              <p class="card-text">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
