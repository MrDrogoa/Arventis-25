<!-- Vista About.vue con información sobre la empresa y el equipo -->

<template>
  <main id="content">
    <section class="about-section py-4">
      <div>
        <!-- Componente de nuestra historia -->
        <OurHistoryComponents />
        <!-- Componente de estadísticas -->
        <CountComponents />
        <!-- Componente de misión, visión y valores -->
        <MiViVaComponentes />

        <!-- Componente del equipo -->
        <GroupComponents />
        <!-- Componente de tarjetas informativas -->
        <CardsAboutComponents />
      </div>
    </section>
  </main>
</template>

<script setup>
import CountComponents from "@/components/CountComponents.vue";
import OurHistoryComponents from "../components/OurHistoryComponents.vue";
import MiViVaComponentes from "@/components/MiViVaComponentes.vue";
import GroupComponents from "@/components/GroupComponents.vue";
import CardsAboutComponents from "@/components/CardsAboutComponents.vue";
</script>
