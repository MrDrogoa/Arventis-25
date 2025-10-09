<!-- Componente reutilizable ServiceCard.vue -->
<!-- Debe mostrar ícono, título y descripción con clases de Bootstrap -->
<!-- Accesible, con rol y aria-label si es necesario -->

<template>
  <div class="card h-100 border-0 shadow-sm feature-card">
    <div class="card-body p-4">
      <div
        class="fs-3 d-inline-flex align-items-center justify-content-center step-icon bg-gradient text-white rounded-4 mb-3"
      >
        <i :class="`bi ${icon}`"></i>
      </div>
      <h3 class="card-title h5 fw-medium">{{ title }}</h3>
      <p class="card-text">{{ description }}</p>
      <div class="mt-auto">
        <router-link
          :to="{ path: '/contact', query: { subject: `Consulta sobre ${title}` } }"
          class="btn btn-sm btn-outline-primary text-decoration-none link-des"
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

<style scoped></style>
