<!-- Vista 404 Not Found para rutas inexistentes -->
<!-- Incluye mensaje de error y opción para volver al inicio -->

<template>
  <main id="content" class="d-flex align-items-center min-vh-100 py-5">
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
          <div class="error-page">
            <h1 class="display-1 fw-bold text-primary">404</h1>
            <h2 class="mb-4">Página no encontrada</h2>
            <p class="lead mb-5">Lo sentimos, la página que está buscando no existe o ha sido movida.</p>
            
            <router-link to="/" class="btn btn-primary btn-lg px-4">
              <i class="bi bi-house-door me-2"></i>Volver al inicio
            </router-link>
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
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.display-1 {
  font-size: 6rem;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .display-1 {
    font-size: 4rem;
  }
}
</style>
