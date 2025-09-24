<!-- Componente Footer.vue simple con información de contacto o derechos -->
<!-- Usar <footer> con rol="contentinfo" y clases Bootstrap -->

<template>
  <footer class="footer bg-dark text-light py-4 mt-5" role="contentinfo">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-3 mb-md-0">
          <h5 class="text-uppercase mb-3">Arventis</h5>
          <p>Soluciones tecnológicas innovadoras para empresas modernas.</p>
        </div>
        <div class="col-md-4 mb-3 mb-md-0">
          <h5 class="text-uppercase mb-3">Contacto</h5>
          <ul class="list-unstyled">
            <li><i class="bi bi-geo-alt"></i> Ruta D55, La Ensenada Sin Número, Ovalle</li>
            <li><i class="bi bi-envelope"></i> contacto@arventis.cl</li>
            <li><i class="bi bi-telephone"></i> +56930905919</li>
          </ul>
        </div>
        <div class="col-md-4">
          <h5 class="text-uppercase mb-3">Redes Sociales</h5>
          <div class="social-icons">
            <a href="#" class="text-light me-3" aria-label="TikTok" title="En construcción">
              <i class="bi bi-tiktok"></i>
            </a>
            <a href="https://www.linkedin.com/company/arventis-digital-solutions/" target="_blank" class="text-light me-3" aria-label="LinkedIn">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="https://www.youtube.com/@NeekWorldAcademy" target="_blank" class="text-light me-3" aria-label="YouTube">
              <i class="bi bi-youtube"></i>
            </a>
            <a href="#" class="text-light me-3" aria-label="Instagram" title="En construcción">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="mailto:contacto@arventis.cl" class="text-light" aria-label="Email">
              <i class="bi bi-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      <hr class="my-3 bg-light" />
      <div class="row">
        <div class="col text-center">
          <p class="mb-0">&copy; {{ currentYear }} Arventis. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.bi {
  margin-right: 8px;
}

.social-icons .bi {
  font-size: 1.5rem;
}
</style>
