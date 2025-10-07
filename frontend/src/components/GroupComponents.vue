<script setup>
// Datos del equipo para el componente
const team = [
  {
    name: "Valentina Argandoña Ugarte",
    position: "Ingeniera Civil Industrial",
    bio: "Lidera la gestión estratégica, administrativa y comercial de la empresa, aportando visión organizacional y enfoque en procesos eficientes y sostenibles.",
    image: "img/valentina.png",
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
    image: "img/marcos.png",
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
    image: "img/jesus.png",
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
    name: "Carolina Rojas",
    position: "Especialista en Marketing Digital",
    bio: "Experta en estrategias de marketing digital, experiencia de usuario y análisis de datos. Lidera la optimización de la presencia online y las campañas de comunicación digital para nuestros clientes.",
    image: "img/carolina.png",
    social: [{ name: "Email", icon: "bi-envelope", url: "mailto:contacto@arventis.cl" }],
  },
];
</script>

<template>
  <section class="container py-5">
    <h2 class="text-center display-6 fw-bold mb-4">Conozca a Nuestro Equipo</h2>
    <p class="text-center fs-5 pe-lg-4 mb-5">
      Profesionales apasionados por la tecnología y comprometidos con la excelencia
    </p>

    <div class="row g-4">
      <div class="col-md-6 col-lg-3" v-for="(member, index) in team" :key="index">
        <div class="card team-card h-100 border-0 shadow-sm">
          <img
            :src="member.image"
            :alt="`Fotografía de ${member.name}, ${member.position}`"
            class="card-img-top team-image"
          />
          <div class="card-body text-center">
            <div class="my-2">
              <h3 class="card-title h5 mb-1 fw-semibold">{{ member.name }}</h3>
              <p class="card-subtitle text-primary fw-medium my-2">{{ member.position }}</p>
              <div class="border border-info mb-3 w-75 m-auto"></div>
              <p class="card-text">{{ member.bio }}</p>
            </div>
            <div class="social-links mt-3">
              <a
                v-for="(social, idx) in member.social"
                :key="idx"
                :href="social.url"
                class="me-2 text-secondary"
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

<style lang="scss" scoped></style>
