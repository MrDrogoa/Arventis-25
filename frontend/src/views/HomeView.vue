<template>
  <main id="content">
    <section class="hero-section bg-primary text-white py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <transition name="fade-in" appear>
              <div>
                <h1 class="display-4 fw-bold">
                  Soluciones tecnológicas innovadoras
                </h1>
                <p class="lead my-4">
                  Potenciamos su negocio con tecnología de vanguardia y servicios personalizados
                  para impulsar su crecimiento en el mundo digital.
                </p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                  <router-link
                    to="/services"
                    class="btn btn-light btn-lg px-4 me-md-2 fw-bold"
                  >Descubrir servicios</router-link>
                  <router-link
                    to="/contact"
                    class="btn btn-outline-light btn-lg px-4"
                  >Contactar</router-link>
                </div>
              </div>
            </transition>
          </div>
          <div class="col-lg-6 mt-5 mt-lg-0">
            <transition name="slide-left" appear>
              <img
                :src="require(`@/assets/img/${placeholders.hero}`)"
                alt="Arventis - Soluciones tecnológicas"
                class="img-fluid rounded shadow hero-image"
              />
            </transition>
          </div>
        </div>
      </div>
    </section>

    <section class="features-section py-5">
      <div class="container">
        <h2 class="text-center mb-5 display-6">¿Por qué elegir Arventis?</h2>
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

    <section class="cta-section py-5 bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="mb-4">¿Listo para transformar su negocio?</h2>
            <p class="lead mb-4">
              Contáctenos hoy y descubra cómo nuestras soluciones tecnológicas pueden
              ayudar a alcanzar sus objetivos.
            </p>
            <router-link to="/contact" class="btn btn-primary btn-lg px-5">
              Solicitar consulta gratuita
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { placeholders } from "../assets/placeholders.js";

export default {
  name: "HomeView",
  data() {
    return {
      placeholders,
      features: [
        {
          icon: "bi-gear-fill",
          title: "Experiencia",
          description: "Más de 10 años desarrollando soluciones tecnológicas de alto impacto para empresas de todos los tamaños."
        },
        {
          icon: "bi-lightning-fill",
          title: "Innovación",
          description: "Utilizamos las últimas tecnologías para ofrecer soluciones modernas, eficientes y adaptadas a sus necesidades."
        },
        {
          icon: "bi-people-fill",
          title: "Soporte",
          description: "Acompañamiento continuo y atención personalizada para cada cliente, garantizando resultados óptimos."
        }
      ]
    };
  }
};
</script>
