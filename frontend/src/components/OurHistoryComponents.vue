<script setup>
import Oficina from "@/assets/img/oficina.webp";
</script>

<template>
  <section class="container">
    <div class="row align-items-center mb-5">
      <div class="col-lg-6 mb-0 mb-lg-4">
        <div class="image-container-1 position-relative overflow-hidden">
          <!-- imagen de la oficina -->
          <img :src="Oficina" alt="Oficina Arventis" class="img-fluid rounded-4" />
          <div class="image-overlay-1"></div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="px-0 px-lg-3 text-lg-start text-center py-3 py-lg-0">
          <!-- Título de la historia -->
          <h2 class="mb-3 fw-bold display-6 reveal-right-2">Nuestra Historia</h2>
          <!-- Descripción de la historia -->
          <p>
            Fundada en 2010 en Ovalle, Chile, Arventis comenzó como un pequeño equipo de
            desarrolladores apasionados por la tecnología y la innovación. A lo largo de los años,
            hemos crecido hasta convertirnos en una empresa líder en el sector de servicios
            tecnológicos en la región de Coquimbo.
          </p>
          <p>
            Con más de una década de experiencia, hemos ayudado a cientos de empresas locales y
            nacionales a transformar sus procesos digitales y mejorar su competitividad en el
            mercado global.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
