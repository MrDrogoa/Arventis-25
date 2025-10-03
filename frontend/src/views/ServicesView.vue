<!-- Asegurar estructura accesible -->
<!-- Usar etiquetas semánticas: <main>, <section>, <h1> -->
<!-- Incluir roles, aria-labels y navegación por teclado si aplica -->
<!-- Verificar contraste con Bootstrap y paleta personalizada -->

<!-- Página de servicios usando múltiples <ServiceCard /> -->
<!-- Organizar en una grilla responsiva con Bootstrap -->
<!-- Añadir encabezado y descripción general -->

<template>
  <main id="content">
    <!-- Sección de héroe con animaciones de fondo -->
    <HeroServiceComponents />

    <!-- Sección de servicios -->
    <HeroSerComponents />

    <section class="services-section py-5">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="mb-3 fw-bold display-6">
              <span class="text-primary">Soluciones</span> integrales
            </h2>
            <p class="mb-4 fw-medium card-text w-75 mx-auto">
              En Arventis combinamos experiencia y tecnología avanzada para ofrecer servicios que
              resuelven problemas reales y generan valor para su negocio.
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

    <SerAcComponents />
  </main>
</template>

<script>
import ServiceCard from "@/components/ServiceCard.vue";
import HeroServiceComponents from "@/components/HeroServiceComponents.vue";
import HeroSerComponents from "@/components/HeroSerComponents.vue";
import SerAcComponents from "@/components/SerAcComponents.vue";

export default {
  name: "ServicesView",
  components: {
    ServiceCard,
    HeroServiceComponents,
    HeroSerComponents,
    SerAcComponents,
  },
  data() {
    return {
      services: [
        {
          icon: "bi-code-slash",
          title: "Desarrollo de Software",
          description:
            "Creamos aplicaciones web y móviles personalizadas utilizando las tecnologías más modernas y eficientes del mercado.",
          linkTo: "/services/development",
          forumLink: "/faq/software-development",
        },
        {
          icon: "bi-graph-up",
          title: "Consultoría IT",
          description:
            "Asesoramiento estratégico para optimizar sus procesos tecnológicos y mejorar la eficiencia de su infraestructura.",
          linkTo: "/services/consulting",
          forumLink: "/faq/it-consulting",
        },
        {
          icon: "bi-shield-check",
          title: "Ciberseguridad",
          description:
            "Protegemos sus activos digitales con soluciones avanzadas de seguridad informática y prevención de amenazas.",
          linkTo: "/services/security",
          forumLink: "/faq/cybersecurity",
        },
        {
          icon: "bi-bar-chart",
          title: "Análisis de Datos",
          description:
            "Transforme sus datos en conocimiento accionable con nuestras soluciones de Business Intelligence y análisis predictivo.",
          linkTo: "/services/data-analysis",
          forumLink: "/faq/data-analysis",
        },
        {
          icon: "bi-cloud",
          title: "Cloud Computing",
          description:
            "Migración e implementación de soluciones en la nube para optimizar recursos y aumentar la flexibilidad de su negocio.",
          linkTo: "/services/cloud",
          forumLink: "/faq/cloud-computing",
        },
        {
          icon: "bi-headset",
          title: "Soporte Técnico",
          description:
            "Servicio de asistencia técnica continua para mantener sus sistemas funcionando de manera óptima en todo momento.",
          linkTo: "/services/support",
          forumLink: "/faq/technical-support",
        },
        {
          icon: "bi-robot",
          title: "Inteligencia Artificial",
          description:
            "Implementamos soluciones de IA y machine learning para automatizar procesos y mejorar la toma de decisiones en su empresa.",
          linkTo: "/services/artificial-intelligence",
          forumLink: "/faq/artificial-intelligence",
        },
        {
          icon: "bi-megaphone",
          title: "Marketing Digital",
          description:
            "Estrategias digitales personalizadas para aumentar su presencia online, generar leads y convertir visitantes en clientes.",
          linkTo: "/services/digital-marketing",
          forumLink: "/faq/digital-marketing",
        },
        {
          icon: "bi-search",
          title: "SEO y Posicionamiento",
          description:
            "Optimización para motores de búsqueda que mejora la visibilidad de su sitio web y atrae tráfico orgánico de calidad.",
          linkTo: "/services/seo",
          forumLink: "/faq/seo-positioning",
        },
      ],
    };
  },
};
</script>
