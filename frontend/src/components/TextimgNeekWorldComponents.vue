<script setup>
import Student from "@/assets/img/student.webp";
</script>

<template>
  <section class="my-5 bg-computer bg-neekworld">
    <article class="container text-white">
      <div class="row align-items-center p-4 p-lg-5">
        <!-- Imagen circular a la izquierda -->
        <div class="col-lg-5 text-center mb-4 mb-lg-0">
          <div class="position-relative d-inline-block">
            <img
              :src="Student"
              alt="Estudiante usando NeekWorld - Plataforma educativa virtual"
              class="img-fluid rounded-circle position-relative"
            />
          </div>
        </div>

        <!-- Contenido de texto a la derecha -->
        <div class="col-lg-7 ps-lg-5 pt-lg-3">
          <h2 class="display-6 fw-bold mb-4 text-center text-lg-start">
            NeekWorld - El Futuro de la Educación Virtual
          </h2>
          <p class="fw-medium opacity-75 mb-4 fs-6 text-white">
            NeekWorld revoluciona la experiencia educativa con espacios virtuales inmersivos donde
            estudiantes y profesionales colaboran, aprenden y crecen juntos. Una plataforma que
            trasciende las barreras geográficas y temporales.
          </p>

          <!-- Lista numerada de beneficios -->
          <div class="process-steps mb-4">
            <div class="step-item d-flex align-items-start mb-3 reveal-right-1">
              <span class="step-number me-3">1</span>
              <div>
                <h5 class="fw-bold mb-1">Inmersión Total</h5>
                <p class="text-light opacity-75 mb-0 small">
                  Laboratorios y espacios de colaboración.
                </p>
              </div>
            </div>

            <div class="step-item d-flex align-items-start mb-3 reveal-right-2">
              <span class="step-number me-3">2</span>
              <div>
                <h5 class="fw-bold mb-1">Aprendizaje Interactivo</h5>
                <p class="text-light opacity-75 mb-0 small">
                  Herramientas dinámicas con simulaciones, gamificación y experiencias prácticas.
                </p>
              </div>
            </div>

            <div class="step-item d-flex align-items-start mb-3 reveal-right-3">
              <span class="step-number me-3">3</span>
              <div>
                <h5 class="fw-bold mb-1">Colaboración Global</h5>
                <p class="text-light opacity-75 mb-0 small">
                  Conecta estudiantes y profesores de todo el mundo en tiempo real.
                </p>
              </div>
            </div>

            <div class="step-item d-flex align-items-start mb-3 reveal-right-4">
              <span class="step-number me-3">4</span>
              <div>
                <h5 class="fw-bold mb-1">Accesibilidad Universal</h5>
                <p class="text-light opacity-75 mb-0 small">
                  Disponible desde cualquier dispositivo, democratizando el acceso a la educación.
                </p>
              </div>
            </div>
          </div>

          <!-- Botones de acción -->
          <div
            class="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-lg-start"
          >
            <router-link
              to="/contact"
              class="btn btn-outline-light btn-lg px-4 fw-semibold text-decoration-none"
            >
              Contactar
            </router-link>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped></style>
