<template>
  <section>
    <article class="stats-section py-5 bg-light">
      <div class="container">
        <div class="row text-center">
          <div class="col-6 col-md-3 mb-4 mb-md-0" v-for="(stat, index) in stats" :key="index">
            <div class="stat-item">
              <h2 class="display-4 fw-bold text-primary">
                {{ animatedValues[index] }}{{ stat.suffix }}
              </h2>
              <p class="mb-0 fw-medium">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Datos de estadísticas para el componente
const stats = [
  { value: 10, suffix: "+", label: "Años de experiencia" },
  { value: 200, suffix: "+", label: "Proyectos completados" },
  { value: 50, suffix: "+", label: "Clientes satisfechos" },
  { value: 25, suffix: "", label: "Profesionales" },
];

// Valores animados reactivos
const animatedValues = ref(stats.map(() => 0));

// Función para animar un contador individual
const animateCounter = (index, targetValue, duration = 2000) => {
  const startValue = 0;
  const startTime = Date.now();

  const updateCounter = () => {
    const currentTime = Date.now();
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Función de easing para suavizar la animación
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);

    const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart);
    animatedValues.value[index] = currentValue;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      animatedValues.value[index] = targetValue;
    }
  };

  requestAnimationFrame(updateCounter);
};

// Función para iniciar todas las animaciones
const startCountingAnimation = () => {
  stats.forEach((stat, index) => {
    // Añadir un pequeño delay para cada contador para efecto escalonado
    setTimeout(() => {
      animateCounter(index, stat.value, 1000 + index * 100);
    }, index * 300);
  });
};

// Iniciar animación cuando el componente se monta
onMounted(() => {
  // Pequeño delay para que sea visible cuando inicie la animación
  setTimeout(() => {
    startCountingAnimation();
  }, 500);
});
</script>

<style lang="scss" scoped></style>
