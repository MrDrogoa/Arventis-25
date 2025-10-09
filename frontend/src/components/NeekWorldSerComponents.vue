<script setup>
import Neek from "@/assets/img/neekworld.png";
</script>

<template>
  <section class="d-flex align-items-center mb-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="neekworld-card p-5 position-relative overflow-hidden rounded-5">
            <div class="d-flex justify-content-center align-items-center mb-1">
              <img :src="Neek" alt="NeekWorld Brain" class="neekworld-brain-image" />
            </div>
            <div class="text-white">
              <h2 class="my-2 fw-bold text-center text-lg-start">Descubre NeekWorld</h2>
              <div
                class="d-flex flex-column text-white flex-lg-row align-items-center gap-3 gap-lg-4 justify-content-between"
              >
                <p class="mb-lg-0 text-white text-center text-lg-start opacity-90 w-75 m-0">
                  Sumérgete en NeekWorld, nuestro innovador espacio virtual diseñado para la
                  educación y la colaboración en línea.
                </p>
                <router-link
                  :to="{ path: '/neekworld' }"
                  class="btn btn-sm link-hero text-decoration-none fw-semibold"
                >
                  ir a NeekWorld
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
