<script setup>
import { ref } from "vue";

// Datos del equipo para el componente
const team = ref([
  {
    name: "Valentina Argandoña Ugarte",
    position: "Ingeniera Civil Industrial",
    bio: "Lidera la gestión estratégica, administrativa y comercial de la empresa, aportando visión organizacional y enfoque en procesos eficientes y sostenibles.",
    image: "/img/valentina.png",
    social: [
      {
        name: "LinkedIn",
        icon: "bi-linkedin",
        url: "https://www.linkedin.com/in/valentina-argandona-ugarte/",
      },
      { name: "Email", icon: "bi-envelope", url: "mailto:contacto@arventis.cl" },
    ],
  },
  {
    name: "Marcos Argandoña",
    position: "Profesor e Ingeniero Informático Multimedia",
    bio: "Integra su experiencia en educación y tecnología para diseñar interfaces centradas en el usuario, desarrollar soluciones web accesibles y liderar proyectos de innovación educativa.",
    image: "/img/marcos.png",
    social: [
      {
        name: "LinkedIn",
        icon: "bi-linkedin",
        url: "https://www.linkedin.com/in/marcos-argando%C3%B1a-ugarte-09731a37/",
      },
      { name: "GitHub", icon: "bi-github", url: "https://github.com/margandona" },
      { name: "Email", icon: "bi-envelope", url: "mailto:ti@arventis.cl" },
      { name: "Website", icon: "bi-globe", url: "https://www.makuaz.cl" },
    ],
  },
  {
    name: "Jesús Cornejo",
    position: "Técnico e Ingeniero en Informática Multimedia",
    bio: "Se especializa en desarrollo backend, automatización de sistemas, integraciones con plataformas como Moodle y soluciones TI adaptadas a empresas e instituciones públicas.",
    image: "/img/jesus.png",
    social: [
      {
        name: "LinkedIn",
        icon: "bi-linkedin",
        url: "https://www.linkedin.com/in/jesus-ignacio-cornejo-gonzalez-78807b139/",
      },

      { name: "Email", icon: "bi-envelope", url: "mailto:soporte@arventis.cl" },
    ],
  },
  {
    name: "Daniel Rosales",
    position: "Desarrollador y diseñador Web",
    bio: "Especialista en desarrollo frontend con enfoque en UX/UI. Crea interfaces intuitivas y experiencias de usuario excepcionales utilizando tecnologías modernas para desarrollar soluciones web innovadoras.",
    image: "/img/daniel.png",
    social: [
      {
        name: "LinkedIn",
        icon: "bi-linkedin",
        url: "https://www.linkedin.com/in/daniel-rosales-1b737a1a9/",
      },
      { name: "GitHub", icon: "bi-github", url: "https://github.com/MrDrogoa" },
      { name: "WhatsApp", icon: "bi-whatsapp", url: "https://wa.me/56962857073" },
    ],
  },
]);
</script>

<template>
  <section class="container py-5">
    <h2 class="text-center display-6 fw-bold mb-4">Conozca a Nuestro Equipo</h2>
    <p class="text-center fs-5 pe-lg-4 mb-5">
      Profesionales apasionados por la tecnología y comprometidos con la excelencia
    </p>

    <div class="row g-4">
      <div class="col-md-6 col-lg-3" v-for="(member, index) in team" :key="index">
        <div class="card overflow-hidden rounded-4 team-card h-100 border-0 shadow-sm">
          <div class="team-image-container position-relative overflow-hidden">
            <img
              :src="member.image"
              :alt="`Fotografía de ${member.name}, ${member.position}`"
              class="card-img-top team-image img-fluid"
            />
          </div>
          <div class="card-body text-center d-flex flex-column">
            <div class="flex-grow-1">
              <h3 class="card-title h5 mb-2 fw-semibold">{{ member.name }}</h3>
              <p class="card-subtitle text-primary fw-medium mt-1">{{ member.position }}</p>
              <div class="border border-info w-75 my-3 mx-auto"></div>
              <p class="card-text small text-muted">{{ member.bio }}</p>
            </div>
            <div
              class="social-links d-flex justify-content-center align-items-center gap-2 mt-auto pt-3"
            >
              <a
                v-for="(social, idx) in member.social"
                :key="idx"
                :href="social.url"
                class="social-link d-inline-flex justify-content-center align-items-center rounded-circle text-decoration-none me-2 text-secondary"
                :aria-label="`${member.name} en ${social.name}`"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i :class="`bi ${social.icon}`"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
