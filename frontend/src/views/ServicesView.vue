<!-- Asegurar estructura accesible -->
<!-- Usar etiquetas semánticas: <main>, <section>, <h1> -->
<!-- Incluir roles, aria-labels y navegación por teclado si aplica -->
<!-- Verificar contraste con Bootstrap y paleta personalizada -->

<!-- Página de servicios usando múltiples <ServiceCard /> -->
<!-- Organizar en una grilla responsiva con Bootstrap -->
<!-- Añadir encabezado y descripción general -->

<template>
  <main id="content">
    <section class="page-header bg-light py-5">
      <div class="container">
        <h1 class="display-4 fw-bold">Nuestros Servicios</h1>
        <p class="lead">
          Ofrecemos soluciones tecnológicas completas y personalizadas para impulsar su 
          negocio hacia el futuro digital. Explore nuestros servicios especializados.
        </p>
      </div>
    </section>

    <section class="services-section py-5">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="mb-3">Soluciones integrales para su empresa</h2>
            <p class="lead text-muted">
              En Arventis combinamos experiencia y tecnología avanzada para ofrecer servicios 
              que resuelven problemas reales y generan valor para su negocio.
            </p>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-4" v-for="(service, index) in services" :key="index">
            <ServiceCard 
              :icon="service.icon"
              :title="service.title"
              :description="service.description"
              :linkTo="service.linkTo"
              :forumLink="service.forumLink"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="call-to-action bg-primary text-white py-5">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-8">
            <h3 class="mb-3">¿Necesita una solución personalizada?</h3>
            <p class="mb-lg-0">
              Contáctenos hoy para discutir su proyecto y recibir una consulta sin compromiso.
            </p>
          </div>
          <div class="col-lg-4 text-lg-end mt-3 mt-lg-0">
            <router-link to="/contact" class="btn btn-light btn-lg">
              Solicitar información
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ServiceCard from "@/components/ServiceCard.vue";

export default {
  name: "ServicesView",
  components: {
    ServiceCard
  },
  data() {
    return {
      services: [
        {
          icon: "bi-code-slash",
          title: "Desarrollo de Software",
          description: "Creamos aplicaciones web y móviles personalizadas utilizando las tecnologías más modernas y eficientes del mercado.",
          linkTo: "/services/development",
          forumLink: "/faq/software-development"
        },
        {
          icon: "bi-graph-up",
          title: "Consultoría IT",
          description: "Asesoramiento estratégico para optimizar sus procesos tecnológicos y mejorar la eficiencia de su infraestructura.",
          linkTo: "/services/consulting",
          forumLink: "/faq/it-consulting"
        },
        {
          icon: "bi-shield-check",
          title: "Ciberseguridad",
          description: "Protegemos sus activos digitales con soluciones avanzadas de seguridad informática y prevención de amenazas.",
          linkTo: "/services/security",
          forumLink: "/faq/cybersecurity"
        },
        {
          icon: "bi-bar-chart",
          title: "Análisis de Datos",
          description: "Transforme sus datos en conocimiento accionable con nuestras soluciones de Business Intelligence y análisis predictivo.",
          linkTo: "/services/data-analysis",
          forumLink: "/faq/data-analysis"
        },
        {
          icon: "bi-cloud",
          title: "Cloud Computing",
          description: "Migración e implementación de soluciones en la nube para optimizar recursos y aumentar la flexibilidad de su negocio.",
          linkTo: "/services/cloud",
          forumLink: "/faq/cloud-computing"
        },
        {
          icon: "bi-headset",
          title: "Soporte Técnico",
          description: "Servicio de asistencia técnica continua para mantener sus sistemas funcionando de manera óptima en todo momento.",
          linkTo: "/services/support",
          forumLink: "/faq/technical-support"
        }
      ]
    };
  }
};
</script>

