<!-- Vista About.vue con información sobre la empresa y el equipo -->

<template>
  <main id="content">
    <section class="about-section py-4">
      <div>
        <!-- Componente de nuestra historia -->
        <OurHistoryComponents />
        <!-- Componente de estadísticas -->
        <CountComponents />
        <!-- Componente de misión, visión y valores -->
        <MiViVaComponentes />

        <!-- Componente del equipo -->
        <GroupComponents />

        <div class="text-center mt-5">
          <h3 class="h4 mb-4">Nuestros valores</h3>
          <div class="row g-4 justify-content-center">
            <div class="col-md-4 col-lg-3" v-for="(value, index) in values" :key="index">
              <div class="card value-card h-100 border-0 shadow-sm">
                <div class="card-body text-center">
                  <div class="value-icon bg-primary text-white rounded-circle mb-3">
                    <i :class="`bi ${value.icon}`"></i>
                  </div>
                  <h4 class="card-title h5">{{ value.title }}</h4>
                  <p class="card-text">{{ value.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import CountComponents from "@/components/CountComponents.vue";
import { placeholders } from "../assets/placeholders.js";
import OurHistoryComponents from "../components/OurHistoryComponents.vue";
import MiViVaComponentes from "@/components/MiViVaComponentes.vue";
import GroupComponents from "@/components/GroupComponents.vue";

export default {
  components: { OurHistoryComponents, CountComponents, MiViVaComponentes, GroupComponents },
  name: "AboutView",
  data() {
    return {
      placeholders,
      values: [
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
      ],
    };
  },
};
</script>
