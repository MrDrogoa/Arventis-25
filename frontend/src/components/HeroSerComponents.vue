<script setup>
// import aqui la imagen
import Ser from "@/assets/img/service.jpg";
</script>

<template>
  <section class="py-0 py-lg-5 position-relative overflow-hidden">
    <div class="container position-relative">
      <div class="row align-items-center">
        <!-- Imagen del servicio -->
        <div class="col-lg-6">
          <div class="p-4 position-relative">
            <div class="image-wrapper overflow-hidden rounded-5 p-3">
              <img :src="Ser" alt="Soluciones tecnológicas Arventis" class="img-fluid rounded-4" />
            </div>
            <!-- Elementos decorativos sobre la imagen -->
            <div class="image-overlay-elements position-absolute top-0 start-0 w-100 h-100">
              <!-- Elementos flotantes -->
              <!-- Elemento-1 -->
              <div
                class="floating-element d-flex justify-content-center align-items-center position-absolute rounded-circle element-1"
              >
                <i class="bi bi-laptop fs-2 text-primary fw-medium"></i>
              </div>
              <!-- Elemento-2 -->
              <div
                class="floating-element d-flex justify-content-center align-items-center position-absolute rounded-circle element-2"
              >
                <i class="bi bi-code-slash fs-3 text-success fw-medium"></i>
              </div>
              <!-- Elemento-3 -->
              <div
                class="floating-element d-flex justify-content-center align-items-center position-absolute rounded-circle element-3"
              >
                <i class="bi bi-shield-check fs-3 text-info fw-medium"></i>
              </div>
            </div>
          </div>
        </div>
        <!-- Contenido de texto -->
        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="px-0 px-lg-3 text-center text-lg-start">
            <!-- Titulo  -->
            <h2 class="mb-3 fw-bold display-6">Nuestra Agencia</h2>
            <!-- Descripción -->
            <p class="fs-5 mb-4 pe-lg-4">
              En Arventis desarrollamos soluciones tecnológicas innovadoras que transforman la
              manera en que las empresas operan y crecen en el mundo digital.
            </p>
            <p class="mb-4 pe-lg-4">
              Nuestro equipo combina experiencia técnica con visión estratégica para crear software
              personalizado que impulse su negocio hacia el futuro. Desde consultoría hasta
              implementación completa.
            </p>
            <!-- Botón de acción -->
            <router-link
              to="/about"
              class="btn link-hero text-white btn-lg px-4 me-md-2 fw-semibold text-decoration-none reveal-right-2"
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
