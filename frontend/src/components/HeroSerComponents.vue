<script setup>
import Ser from "@/assets/img/service.webp";
</script>

<template>
  <section class="py-0 py-lg-5 position-relative overflow-hidden">
    <div class="container position-relative">
      <div class="row align-items-center py-0 py-lg-5">
        <!-- Imagen del servicio -->
        <div class="col-lg-6">
          <div class="image-container position-relative">
            <div class="image-wrapper">
              <img
                :src="Ser"
                alt="Soluciones tecnológicas Arventis"
                class="img-fluid service-image"
              />
            </div>
            <!-- Elementos decorativos sobre la imagen -->
            <div class="image-overlay-elements">
              <div class="floating-element element-1">
                <i class="bi bi-laptop fs-2 text-primary"></i>
              </div>
              <div class="floating-element element-2">
                <i class="bi bi-code-slash fs-3 text-success"></i>
              </div>
              <div class="floating-element element-3">
                <i class="bi bi-shield-check fs-3 text-info"></i>
              </div>
            </div>
          </div>
        </div>
        <!-- Contenido de texto -->
        <div class="col-lg-6 mb-5 mb-lg-0">
          <div>
            <h2 class="mb-3 fw-bold display-6">Nuestra Agencia</h2>
            <p class="fs-5 mb-4 pe-lg-4">
              En Arventis desarrollamos soluciones tecnológicas innovadoras que transforman la
              manera en que las empresas operan y crecen en el mundo digital.
            </p>
            <p class="mb-4 pe-lg-4">
              Nuestro equipo combina experiencia técnica con visión estratégica para crear software
              personalizado que impulse su negocio hacia el futuro. Desde consultoría hasta
              implementación completa.
            </p>
            <router-link
              to="/about"
              class="btn link-hero text-white btn-lg px-4 me-md-2 fw-semibold text-decoration-none"
            >
              Conocer más
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
