<!-- Componente reutilizable ServiceCard.vue -->
<!-- Debe mostrar ícono, título y descripción con clases de Bootstrap -->
<!-- Accesible, con rol y aria-label si es necesario -->

<template>
  <div class="card service-card h-100 border-0 shadow-sm">
    <div class="card-body p-4 text-center">
      <div class="service-icon bg-primary mb-3 mx-auto">
        <i :class="`bi ${icon}`"></i>
      </div>
      <h3 class="card-title h5">{{ title }}</h3>
      <p class="card-text">{{ description }}</p>
      <div class="mt-auto">
        <router-link :to="{ path: '/contact', query: { subject: `Consulta sobre ${title}` }}" class="btn btn-sm btn-outline-primary">
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
  name: 'ServiceCard',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    linkTo: {
      type: String,
      default: '#'
    },
    forumLink: {
      type: String,
      default: '/faq'
    }
  }
};
</script>

<style scoped>
.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
}

.service-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
  background-color: #0d6efd;
  margin: 0 auto;
}

.service-icon i {
  font-size: 2rem;
}

.service-card .card-title {
  font-size: 1.25rem;
  font-weight: 600;
}

.service-card .card-text {
  font-size: 1rem;
  color: #6c757d;
}

.service-card .btn {
  margin-top: 10px;
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

.rest-mode .service-card {
  background-color: var(--card-bg);
}

.rest-mode .service-icon {
  background-color: var(--primary-bg);
}

.rest-mode .service-icon i {
  font-size: 1.5rem;
}
</style>
