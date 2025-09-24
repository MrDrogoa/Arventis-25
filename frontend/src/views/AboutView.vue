<!-- Vista About.vue con información sobre la empresa y el equipo -->


<template>
  <main id="content">
    <section class="page-header bg-light py-5">
      <div class="container">
        <h1 class="display-4 fw-bold">Sobre Nosotros</h1>
        <p class="lead">Conozca nuestra historia, misión y el equipo detrás de Arventis</p>
      </div>
    </section>

    <section class="about-section py-5">
      <div class="container">
        <div class="row align-items-center mb-5">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <img src="/img/oficina.png" alt="Logo Arventis" class="img-fluid rounded shadow" />
          </div>
          <div class="col-lg-6">
            <h2>Nuestra Historia</h2>
            <p>
              Fundada en 2010 en Ovalle, Chile, Arventis comenzó como un pequeño equipo de
              desarrolladores apasionados por la tecnología y la innovación. A lo largo de los años,
              hemos crecido hasta convertirnos en una empresa líder en el sector de servicios
              tecnológicos en la región de Coquimbo.
            </p>
            <p>
              Con más de una década de experiencia, hemos ayudado a cientos de empresas locales y
              nacionales a transformar sus procesos digitales y mejorar su competitividad en el mercado global.
            </p>
          </div>
        </div>

        <div class="row mb-5">
          <div class="col-md-4 mb-4 mb-md-0">
            <div class="card h-100 border-0 bg-light">
              <div class="card-body text-center">
                <i class="bi bi-bullseye text-primary mb-3" style="font-size: 2.5rem"></i>
                <h3 class="card-title h4">Misión</h3>
                <p class="card-text">
                  Proporcionar soluciones tecnológicas innovadoras que impulsen el crecimiento y la
                  eficiencia de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4 mb-md-0">
            <div class="card h-100 border-0 bg-light">
              <div class="card-body text-center">
                <i class="bi bi-eye text-primary mb-3" style="font-size: 2.5rem"></i>
                <h3 class="card-title h4">Visión</h3>
                <p class="card-text">
                  Ser reconocidos como líderes en transformación digital, estableciendo nuevos
                  estándares de excelencia e innovación.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 bg-light">
              <div class="card-body text-center">
                <i class="bi bi-star text-primary mb-3" style="font-size: 2.5rem"></i>
                <h3 class="card-title h4">Valores</h3>
                <p class="card-text">
                  Integridad, excelencia, innovación, colaboración y compromiso con la satisfacción
                  del cliente.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-center mb-4">Conozca a Nuestro Equipo</h2>
        <p class="text-center lead mb-5">
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
                <h3 class="card-title h5 mb-1">{{ member.name }}</h3>
                <p class="card-subtitle text-muted mb-3">{{ member.position }}</p>
                <p class="card-text">{{ member.bio }}</p>
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

        <div class="text-center mt-5">
          <h3 class="h4 mb-4">Nuestros valores</h3>
          <div class="row g-4 justify-content-center">
            <div class="col-md-4 col-lg-3" v-for="(value, index) in values" :key="index">
              <div class="card value-card h-100 border-0 shadow-sm">
                <div class="card-body text-center">
                  <div class="value-icon bg-primary text-white rounded-circle mb-3">
                    <i :class="`bi ${value.icon}`"></i>
                  </div>
                  <h4 class="card-title h5">{{ value.title }}</h4>
                  <p class="card-text">{{ value.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="stats-section py-5 bg-light">
      <div class="container">
        <div class="row text-center">
          <div class="col-6 col-md-3 mb-4 mb-md-0" v-for="(stat, index) in stats" :key="index">
            <div class="stat-item">
              <h2 class="display-4 fw-bold text-primary">{{ stat.value }}</h2>
              <p class="mb-0">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { placeholders } from "../assets/placeholders.js";

export default {
  name: "AboutView",
  data() {
    return {
      placeholders,
      team: [
        {
          name: "Valentina Argandoña Ugarte",
          position: "Ingeniera Civil Industrial",
          bio: "Lidera la gestión estratégica, administrativa y comercial de la empresa, aportando visión organizacional y enfoque en procesos eficientes y sostenibles.",
          image: "img/valentina.png",
          social: [
            { name: "LinkedIn", icon: "bi-linkedin", url: "https://www.linkedin.com/in/valentina-argandona-ugarte/" },
            { name: "Email", icon: "bi-envelope", url: "mailto:contacto@arventis.cl" }
          ]
        },
        {
          name: "Marcos Argandoña",
          position: "Profesor e Ingeniero Informático Multimedia",
          bio: "Integra su experiencia en educación y tecnología para diseñar interfaces centradas en el usuario, desarrollar soluciones web accesibles y liderar proyectos de innovación educativa.",
          image: "img/marcos.png",
          social: [
            { name: "LinkedIn", icon: "bi-linkedin", url: "https://www.linkedin.com/in/marcos-argando%C3%B1a-ugarte-09731a37/" },
            { name: "GitHub", icon: "bi-github", url: "https://github.com/margandona" },
            { name: "Email", icon: "bi-envelope", url: "mailto:ti@arventis.cl" },
            { name: "Website", icon: "bi-globe", url: "https://www.makuaz.cl" }
          ]
        },
        {
          name: "Jesús Cornejo",
          position: "Técnico e Ingeniero en Informática Multimedia",
          bio: "Se especializa en desarrollo backend, automatización de sistemas, integraciones con plataformas como Moodle y soluciones TI adaptadas a empresas e instituciones públicas.",
          image: "img/jesus.png",
          social: [
            { name: "LinkedIn", icon: "bi-linkedin", url: "https://www.linkedin.com/in/jesus-ignacio-cornejo-gonzalez-78807b139/" },
            { name: "Email", icon: "bi-envelope", url: "mailto:soporte@arventis.cl" }
          ]
        },
        {
          name: "Carolina Rojas",
          position: "Especialista en Marketing Digital",
          bio: "Experta en estrategias de marketing digital, experiencia de usuario y análisis de datos. Lidera la optimización de la presencia online y las campañas de comunicación digital para nuestros clientes.",
          image: "img/carolina.png",
          social: [
            { name: "Email", icon: "bi-envelope", url: "mailto:contacto@arventis.cl" }
          ]
        }
      ],
      values: [
        {
          title: "Innovación",
          icon: "bi-lightbulb",
          description: "Buscamos constantemente nuevas maneras de resolver problemas y mejorar nuestros servicios."
        },
        {
          title: "Compromiso",
          icon: "bi-hand-thumbs-up",
          description: "Nos dedicamos a cumplir y superar las expectativas de nuestros clientes."
        },
        {
          title: "Excelencia",
          icon: "bi-trophy",
          description: "Mantenemos los más altos estándares de calidad en todo lo que hacemos."
        },
        {
          title: "Colaboración",
          icon: "bi-people",
          description: "Trabajamos juntos como un equipo para lograr los mejores resultados."
        }
      ],
      stats: [
        { value: "10+", label: "Años de experiencia" },
        { value: "200+", label: "Proyectos completados" },
        { value: "50+", label: "Clientes satisfechos" },
        { value: "25", label: "Profesionales" }
      ]
    };
  }
};
</script>
