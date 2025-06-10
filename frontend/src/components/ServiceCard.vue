<!-- Componente reutilizable ServiceCard.vue -->
<!-- Debe mostrar ícono, título y descripción con clases de Bootstrap -->
<!-- Accesible, con rol y aria-label si es necesario -->

<template>
  <div class="card h-100 service-card" role="article" :aria-label="title + ' service'">
    <div class="card-body text-center">
      <div class="service-icon mb-3">
        <i :class="['bi', icon]"></i>
      </div>
      <h3 class="card-title h5">{{ title }}</h3>
      <p class="card-text">{{ description }}</p>
      <router-link 
        v-if="linkTo" 
        :to="linkTo" 
        class="btn btn-outline-primary" 
        :aria-label="'Más información sobre ' + title"
      >
        {{ linkText || 'Más información' }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    icon: {
      type: String,
      required: true,
      description: 'Bootstrap icon class name (bi-*)'
    },
    title: {
      type: String,
      required: true,
      description: 'Title of the service'
    },
    description: {
      type: String,
      required: true,
      description: 'Description of the service'
    },
    linkTo: {
      type: [String, Object],
      default: '',
      description: 'Router link destination (optional)'
    },
    linkText: {
      type: String,
      default: 'Más información',
      description: 'Text for the link button (optional)'
    }
  }
};
</script>

<style scoped>
.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.service-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #0d6efd;
  color: white;
  margin: 0 auto;
}

.service-icon i {
  font-size: 1.5rem;
}
</style>
