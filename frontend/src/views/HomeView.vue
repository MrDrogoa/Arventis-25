<template>
  <main id="content">
    <!-- hero section -->
    <HeroComponents />

    <section class="features-section py-5">
      <div class="container">
        <h2 class="text-center mb-5 fw-semibold display-6">¿Por qué elegir Arventis?</h2>
        <div class="row g-4">
          <div class="col-md-4" v-for="(feature, index) in features" :key="index">
            <transition name="fade-up" :delay="index * 100" appear>
              <div class="card h-100 border-0 shadow-sm feature-card">
                <div class="card-body text-center p-4">
                  <div class="feature-icon bg-primary bg-gradient text-white rounded-circle mb-3">
                    <i :class="`bi ${feature.icon}`"></i>
                  </div>
                  <h3 class="card-title h5">{{ feature.title }}</h3>
                  <p class="card-text">{{ feature.description }}</p>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action section -->
    <CallActionComponents />
  </main>
</template>

<script>
import { placeholders } from "../assets/placeholders.js";
import HeroComponents from "../components/HeroComponents.vue";
import CallActionComponents from "../components/CallActionComponents.vue";

export default {
  name: "HomeView",
  components: {
    HeroComponents,
    CallActionComponents,
  },
  data() {
    return {
      placeholders,
      features: [
        {
          icon: "bi-gear-fill",
          title: "Experiencia",
          description:
            "Más de 10 años desarrollando soluciones tecnológicas de alto impacto para empresas de todos los tamaños.",
        },
        {
          icon: "bi-lightning-fill",
          title: "Innovación",
          description:
            "Utilizamos las últimas tecnologías para ofrecer soluciones modernas, eficientes y adaptadas a sus necesidades.",
        },
        {
          icon: "bi-people-fill",
          title: "Soporte",
          description:
            "Acompañamiento continuo y atención personalizada para cada cliente, garantizando resultados óptimos.",
        },
      ],
    };
  },
};
</script>
