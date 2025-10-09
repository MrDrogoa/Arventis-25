<script setup>
import HeroNeekworldComponents from "@/components/HeroNeekworldComponents.vue";
import SerNeekworldComponents from "@/components/SerNeekworldComponents.vue";
import TextimgNeekWorldComponents from "@/components/TextimgNeekWorldComponents.vue";
import SerAcNeekworldComponents from "@/components/SerAcNeekworldComponents.vue";
</script>

<template>
  <main id="content">
    <!-- Sección de NeekWorld -->
    <!-- hero -->
    <HeroNeekworldComponents />
    <!-- cards -->
    <SerNeekworldComponents />
    <!-- texto e imagen -->
    <TextimgNeekWorldComponents />
    <!-- acción -->
    <SerAcNeekworldComponents />
  </main>
</template>

<style scoped></style>
