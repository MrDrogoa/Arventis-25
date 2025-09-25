<script>
import { placeholders } from "@/assets/placeholders.js";
import LogoTr from "@/assets/img/logos/transparente.webp";

export default {
  name: "HeroComponents",
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
            <transition name="fade-in" appear>
              <div class="d-flex align-items-center justify-content-center flex-column text-center">
                <!-- imagen del hero transparente -->
                <img :src="LogoTr" alt="logo transparente" class="img-logo pt-3 pt-lg-4" />
                <!-- título del hero -->
                <h1 class="display-lg-4 display-3 fw-bold w-75 text-center">
                  Soluciones tecnológicas innovadoras
                </h1>
                <!-- párrafo del hero -->
                <p class="w-50 lead py-2 text-center">
                  Potenciamos su negocio con tecnología de vanguardia y servicios personalizados
                  para impulsar su crecimiento en el mundo digital.
                </p>
                <!-- botones del link del hero -->
                <div class="d-grid gap-2 pb-5 d-md-flex justify-content-md-start">
                  <router-link
                    to="/services"
                    class="btn link-hero text-white btn-lg px-4 me-md-2 fw-bold text-decoration-none"
                    >Descubrir servicios</router-link
                  >
                  <router-link
                    to="/contact"
                    class="btn btn-outline-light btn-lg px-4 fw-medium text-decoration-none"
                    >Contactar</router-link
                  >
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped></style>
