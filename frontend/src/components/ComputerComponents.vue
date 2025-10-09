<script setup>
import Computer from "@/assets/img/home-2.webp";
import { useScrollReveal } from "@/composables/useScrollReveal.js";

// animacion de libreria scrollreveal
const { setupScrollReveal } = useScrollReveal();
setupScrollReveal();
</script>
<template>
  <section class="my-5 bg-computer position-relative overflow-hidden">
    <article class="container text-white">
      <div class="row align-items-center p-4 p-lg-5">
        <!-- Imagen circular a la izquierda -->
        <div class="col-lg-5 text-center mb-4 mb-lg-0">
          <div class="position-relative d-inline-block">
            <div class="circle-bg position-absolute z-1 rounded-circle"></div>
            <img
              :src="Computer"
              alt="Soluciones tecnológicas Arventis"
              class="img-fluid compu rounded-circle position-relative"
            />
          </div>
        </div>

        <!-- Contenido de texto a la derecha -->
        <div class="col-lg-7 ps-lg-5 pt-lg-3">
          <h2 class="display-6 fw-bold mb-4 text-center text-lg-start">Soluciones Innovadoras!</h2>
          <p class="fw-medium opacity-75 mb-4 fs-6 text-white">
            Transformamos su negocio con tecnología de vanguardia. Desde consultoría especializada
            hasta implementación completa, ofrecemos servicios personalizados que impulsan su
            crecimiento digital.
          </p>

          <!-- Lista numerada de pasos -->
          <div class="mb-4">
            <div class="d-flex align-items-start mb-3 reveal-right-1">
              <span
                class="step-number d-inline-flex justify-content-center align-items-center rounded-circle fw-bold fs-5 me-3"
                >1</span
              >
              <div>
                <h5 class="fw-bold mb-1">Consulta inicial</h5>
                <p class="text-light opacity-75 mb-0 small">
                  Analizamos sus necesidades y objetivos tecnológicos.
                </p>
              </div>
            </div>

            <div class="d-flex align-items-start mb-3 reveal-right-2">
              <span
                class="step-number d-inline-flex justify-content-center align-items-center rounded-circle fw-bold fs-5 me-3"
                >2</span
              >
              <div>
                <h5 class="fw-bold mb-1">Planificación</h5>
                <p class="text-light opacity-75 mb-0 small">
                  Diseñamos la estrategia tecnológica ideal para su empresa.
                </p>
              </div>
            </div>

            <div class="d-flex align-items-start mb-3 reveal-right-3">
              <span
                class="step-number d-inline-flex justify-content-center align-items-center rounded-circle fw-bold fs-5 me-3"
                >3</span
              >
              <div>
                <h5 class="fw-bold mb-1">Implementación</h5>
                <p class="text-light opacity-75 mb-0 small">
                  Desarrollamos y desplegamos las soluciones personalizadas.
                </p>
              </div>
            </div>

            <div class="d-flex align-items-start mb-3 reveal-right-4">
              <span
                class="step-number d-inline-flex justify-content-center align-items-center rounded-circle fw-bold fs-5 me-3"
                >4</span
              >
              <div>
                <h5 class="fw-bold mb-1">Soporte continuo</h5>
                <p class="text-light opacity-75 mb-0 small">
                  Mantenimiento y evolución constante de sus sistemas.
                </p>
              </div>
            </div>
          </div>

          <!-- Botones de acción -->
          <div
            class="d-flex flex-column-reverse flex-sm-row align-items-center gap-3 gap-sm-4 justify-content-center justify-content-lg-start"
          >
            <router-link
              to="/contact"
              class="btn link-hero text-white btn-lg px-4 fw-semibold text-decoration-none"
            >
              Comenzar
            </router-link>
            <router-link
              to="/services"
              class="btn btn-outline-light btn-lg px-4 fw-semibold text-decoration-none"
            >
              Ver servicios
            </router-link>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped></style>
