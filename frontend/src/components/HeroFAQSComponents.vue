<script setup>
/* eslint-disable no-undef */
import { computed } from "vue";
import { useScrollReveal } from "@/composables/useScrollReveal.js";

// animacion de libreria scrollreveal
const { setupScrollReveal } = useScrollReveal();
setupScrollReveal();

const props = defineProps({
  category: {
    type: String,
    required: false,
  },
});

const categories = [
  { id: "software-development", name: "Desarrollo de Software" },
  { id: "it-consulting", name: "Consultoría IT" },
  { id: "cybersecurity", name: "Ciberseguridad" },
  { id: "data-analysis", name: "Análisis de Datos" },
  { id: "cloud-computing", name: "Cloud Computing" },
  { id: "technical-support", name: "Soporte Técnico" },
];

const pageTitle = computed(() => {
  if (props.category) {
    const categoryObj = categories.find(cat => cat.id === props.category);
    return categoryObj ? `FAQs: ${categoryObj.name}` : "Preguntas Frecuentes";
  }
  return "Preguntas Frecuentes";
});
</script>

<template>
  <section>
    <article class="page-header bg-faqs py-5">
      <div class="container text-white">
        <h2 class="display-lg-5 display-4 fw-bold mb-2 reveal-fade">{{ pageTitle }}</h2>
        <p class="fs-5 mb-4 text-light fw-medium">
          Encuentra respuestas a las preguntas más comunes sobre nuestros servicios y soluciones.
        </p>
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped></style>
