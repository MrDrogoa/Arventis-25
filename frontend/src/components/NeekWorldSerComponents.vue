<script setup>
import Neek from "@/assets/img/neekworld.png";
</script>

<template>
  <section class="neekworld-section py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="neekworld-card">
            <div class="neekworld-brain-container">
              <img :src="Neek" alt="NeekWorld Brain" class="neekworld-brain-image" />
            </div>
            <div class="neekworld-content-overlay">
              <h2 class="mb-3 fw-bold">Descubre NeekWorld</h2>
              <p class="mb-lg-0 text-white opacity-90 w-75 m-0">
                Sumérgete en NeekWorld, nuestro innovador espacio virtual diseñado para la educación
                y la colaboración en línea.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
