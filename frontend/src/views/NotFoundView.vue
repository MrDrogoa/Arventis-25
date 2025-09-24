<!-- Vista 404 Not Found para rutas inexistentes -->
<!-- Usar <main>, clases de Bootstrap y texto accesible -->
<!-- Incluir mensaje de error y opción para volver al inicio -->

<template>
  <main id="content" class="d-flex align-items-center py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
          <div class="text-center error-page">
            <div class="error-icon mb-4">
              <i class="bi bi-exclamation-triangle"></i>
            </div>
            <h1 class="display-1 fw-bold text-primary error-code">404</h1>
            <h2 class="h3 mb-4">Página no encontrada</h2>
            <p class="lead mb-5">
              Lo sentimos, la página que está buscando no existe o ha sido movida.
              Por favor, verifique la URL o regrese a la página de inicio.
            </p>
            
            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
              <router-link to="/" class="btn btn-primary btn-lg px-4 gap-3">
                <i class="bi bi-house-door me-2"></i>Volver al inicio
              </router-link>
              <router-link to="/contact" class="btn btn-outline-secondary btn-lg px-4">
                <i class="bi bi-chat-dots me-2"></i>Contactar soporte
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "NotFoundView"
};
</script>

<style scoped>
.error-page {
  padding: 3rem 1.5rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.error-icon {
  font-size: 4rem;
  color: #dc3545;
  margin-bottom: 1rem;
}

.error-code {
  font-size: 8rem;
  line-height: 1;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, #0d6efd, #6610f2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Animación sutil */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.error-icon {
  animation: float 3s ease-in-out infinite;
}

/* Modo descanso visual */
.rest-mode .error-page {
  background-color: var(--card-bg);
  box-shadow: 0 5px 15px var(--shadow-color);
}

.rest-mode .error-code {
  background: var(--primary-bg);
  -webkit-background-clip: text;
}

.rest-mode .error-icon {
  color: #9c4a5a;
}

@media (max-width: 768px) {
  .error-code {
    font-size: 5rem;
  }
  
  .error-icon {
    font-size: 3rem;
  }
}
</style>
