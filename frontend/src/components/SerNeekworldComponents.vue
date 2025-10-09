<script setup>
import { useScrollReveal } from "@/composables/useScrollReveal.js";

// animacion de libreria scrollreveal
const { setupScrollReveal } = useScrollReveal();
setupScrollReveal();

// Datos de los servicios de NeekWorld
const neekworldServices = [
  {
    id: 1,
    icon: "bi-people-fill",
    title: "Capacitación de Fuerza Laboral",
    description:
      "Programas especializados para desarrollar habilidades técnicas y blandas en equipos de trabajo, aumentando la productividad empresarial.",
  },
  {
    id: 2,
    icon: "bi-building",
    title: "Colegios Públicos",
    description:
      "Soluciones educativas inmersivas para instituciones públicas, complementando la educación tradicional con tecnología de vanguardia.",
  },
  {
    id: 3,
    icon: "bi-award",
    title: "OTEC",
    description:
      "Plataforma certificada para organismos técnicos de capacitación, ofreciendo cursos validados y reconocidos oficialmente.",
  },
  {
    id: 4,
    icon: "bi-mortarboard",
    title: "Capacitación Profesional",
    description:
      "Programas avanzados de desarrollo profesional con metodologías innovadoras para especialistas y ejecutivos.",
  },
  {
    id: 5,
    icon: "bi-book",
    title: "Cursos Independientes",
    description:
      "Módulos autónomos de aprendizaje flexible, permitiendo a usuarios estudiar a su propio ritmo en diversas áreas de conocimiento.",
  },
  {
    id: 6,
    icon: "bi-bank2",
    title: "Institutos y Universidades",
    description:
      "Ecosistema completo para instituciones de educación superior, integrando aulas virtuales con laboratorios inmersivos.",
  },
];
</script>

<template>
  <section class="serneekworld-section py-5">
    <div class="container">
      <div class="row">
        <!-- Primera fila: 3 tarjetas -->
        <div
          class="col-lg-4 col-md-6 mb-4"
          v-for="service in neekworldServices.slice(0, 6)"
          :key="service.id"
        >
          <div class="neekworld-service-card card h-100">
            <div class="service-icon-container">
              <i :class="service.icon" class="service-icon text-white"></i>
            </div>
            <div class="service-content">
              <h4 class="service-title card-title h5 fw-medium mb-2">{{ service.title }}</h4>
              <p class="card-text">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
