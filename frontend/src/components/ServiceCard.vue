<!-- Componente reutilizable ServiceCard.vue -->
<!-- Debe mostrar ícono, título y descripción con clases de Bootstrap -->
<!-- Accesible, con rol y aria-label si es necesario -->

<template>
  <div class="card service-card h-100 border-0 shadow-sm">
    <div class="card-body p-4">
      <div class="step-icon mb-3 rounded-4">
        <i :class="`bi ${icon}`"></i>
      </div>
      <h3 class="card-title h5 fw-medium">{{ title }}</h3>
      <p class="card-text">{{ description }}</p>
      <div class="mt-auto">
        <router-link
          :to="{ path: '/contact', query: { subject: `Consulta sobre ${title}` } }"
          class="btn btn-sm btn-outline-primary text-decoration-none"
        >
          Solicitar Información
        </router-link>
        <router-link :to="forumLink" class="btn btn-sm btn-link text-decoration-none">
          FAQ's <i class="bi bi-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceCard",
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    linkTo: {
      type: String,
      default: "#",
    },
    forumLink: {
      type: String,
      default: "/faq",
    },
  },
};
</script>

<style scoped>
.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

@media (max-width: 576px) {
  .service-icon {
    width: 50px;
    height: 50px;
  }

  .service-icon i {
    font-size: 1.5rem;
  }

  .service-card .card-title {
    font-size: 1.125rem;
  }
}
</style>
