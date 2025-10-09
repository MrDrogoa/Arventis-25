<script>
import { placeholders } from "@/assets/placeholders.js";
import LogoTr from "@/assets/img/logos/transparente.webp";
import { useScrollReveal } from "@/composables/useScrollReveal.js";

export default {
  name: "HomeHeroComponents",
  setup() {
    // animacion de libreria scrollreveal
    const { setupScrollReveal } = useScrollReveal();
    setupScrollReveal();

    return {};
  },
  data() {
    return {
      placeholders,
      LogoTr, // Agregar la imagen importada aquí
    };
  },
};
</script>

<template>
  <section class="hero-section text-white">
    <article class="banner-1">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="d-flex align-items-center justify-content-center flex-column text-center">
              <!-- imagen del hero transparente -->
              <img
                :src="LogoTr"
                alt="logo transparente"
                class="img-logo pt-3 pt-lg-4 reveal-fade"
              />
              <!-- título del hero -->
              <h1 class="display-lg-5 display-4 fw-bold w-75 text-center reveal-top">
                Soluciones tecnológicas innovadoras
              </h1>
              <!-- párrafo del hero -->
              <p class="w-50 fw-medium fs-5 py-2 text-center text-white reveal-bottom">
                Potenciamos su negocio con tecnología de vanguardia y servicios personalizados para
                impulsar su crecimiento en el mundo digital.
              </p>
              <!-- botones del link del hero -->
              <div class="d-grid gap-2 pb-5 d-md-flex justify-content-md-start reveal-fade">
                <router-link
                  to="/services"
                  class="btn link-hero text-white btn-lg px-4 me-md-2 fw-semibold text-decoration-none"
                  >Descubrir servicios</router-link
                >
                <router-link
                  to="/contact"
                  class="btn btn-outline-light btn-lg px-4 fw-semibold text-decoration-none"
                  >Contactar</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped></style>
