<!-- Componente Footer.vue simple con información de contacto o derechos -->
<!-- Usar <footer> con rol="contentinfo" y clases Bootstrap -->

<template>
  <footer class="footer bg-dark text-light py-5" role="contentinfo">
    <div class="container">
      <div class="row reveal-bottom-1">
        <div class="col-md-4 mb-3 mb-md-0">
          <!-- Logo-footer -->
          <router-link to="/" class="d-block mb-3">
            <img :src="imgFooter" alt="Logo de Arventis" class="img-fluid w-50" />
          </router-link>
          <p class="text-white">Soluciones tecnológicas innovadoras para empresas modernas.</p>
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
            <a
              href="#"
              class="text-light me-3 icon-footer"
              aria-label="TikTok"
              title="En construcción"
            >
              <i class="bi bi-tiktok"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/arventis-digital-solutions/"
              target="_blank"
              class="text-light me-3 icon-footer"
              aria-label="LinkedIn"
            >
              <i class="bi bi-linkedin"></i>
            </a>
            <a
              href="https://www.youtube.com/@NeekWorldAcademy"
              target="_blank"
              class="text-light me-3 icon-footer"
              aria-label="YouTube"
            >
              <i class="bi bi-youtube"></i>
            </a>
            <a
              href="#"
              class="text-light me-3 icon-footer"
              aria-label="Instagram"
              title="En construcción"
            >
              <i class="bi bi-instagram"></i>
            </a>
            <!-- <a href="mailto:contacto@arventis.cl" class="text-light icon-footer" aria-label="Email">
              <i class="bi bi-envelope"></i>
            </a> -->
          </div>
        </div>
      </div>
      <hr class="my-3 line-footer" />
      <div class="row">
        <div class="col text-center">
          <p class="mb-0 text-white">
            &copy; {{ currentYear }} Arventis. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { useScrollReveal } from "@/composables/useScrollReveal.js";
// logo footer
import imgFooter from "@/assets/img/logos/vertical.webp";

// animacion de libreria scrollreveal
const { setupScrollReveal } = useScrollReveal();
setupScrollReveal();
export default {
  name: "FooterComponent",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
  data() {
    return {
      imgFooter,
    };
  },
};
</script>

<style scoped></style>
