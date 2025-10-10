<template>
  <main id="content">
    <!-- Componente Hero para la sección de FAQs -->
    <HeroFAQSComponents :category="category" />

    <!-- Sección de contenido de FAQs -->
    <section class="faq-content py-5">
      <div class="container">
        <div v-if="!category" class="row mb-5">
          <div class="col-lg-8 mx-auto">
            <h2 class="mb-4 display-6 fw-bold">Categorías</h2>
            <div class="list-group">
              <router-link
                v-for="cat in categoriesWithCount"
                :key="cat.id"
                :to="`/faq/${cat.id}`"
                class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                {{ cat.name }}
                <span class="badge bg-primary rounded-pill">{{ cat.count }}</span>
              </router-link>
            </div>
          </div>
        </div>

        <div v-else class="row">
          <div class="col-lg-8 mx-auto">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <h2 class="display-6 fw-bold">{{ getCategoryName() }}</h2>
              <router-link
                to="/faq"
                class="btn btn-outline-primary btn-sm text-decoration-none link-des"
              >
                <i class="bi bi-arrow-left me-1"></i> Todas las categorías
              </router-link>
            </div>

            <div class="accordion" id="faqAccordion">
              <div v-for="(question, index) in filteredFaqs" :key="index" class="accordion-item">
                <h3 class="accordion-header" :id="`heading${index}`">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#collapse${index}`"
                    aria-expanded="false"
                    :aria-controls="`collapse${index}`"
                  >
                    {{ question.question }}
                  </button>
                </h3>
                <div
                  :id="`collapse${index}`"
                  class="accordion-collapse collapse"
                  :aria-labelledby="`heading${index}`"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body" v-html="question.answer"></div>
                </div>
              </div>
            </div>

            <div v-if="filteredFaqs.length === 0" class="alert alert-info mt-4">
              Estamos trabajando en agregar más preguntas frecuentes para esta categoría. Si tiene
              alguna pregunta específica, por favor
              <router-link to="/contact" class="alert-link">contáctenos</router-link>.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Componente de Acción para la sección de FAQs -->
    <ActionFAQSComponents />
  </main>
</template>

<script>
import HeroFAQSComponents from "@/components/HeroFAQSComponents.vue";
import ActionFAQSComponents from "@/components/ActionFAQSComponents.vue";
export default {
  name: "FAQsView",
  components: { HeroFAQSComponents, ActionFAQSComponents },
  props: {
    category: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      categories: [
        { id: "software-development", name: "Desarrollo de Software" },
        { id: "it-consulting", name: "Consultoría IT" },
        { id: "cybersecurity", name: "Ciberseguridad" },
        { id: "data-analysis", name: "Análisis de Datos" },
        { id: "cloud-computing", name: "Cloud Computing" },
        { id: "technical-support", name: "Soporte Técnico" },
      ],
      faqs: [
        {
          category: "software-development",
          question: "¿Qué tecnologías utilizan para desarrollo web y móvil?",
          answer:
            "Para frontend utilizamos Vue.js, React, Angular, TypeScript y JSP con Servlets. Para aplicaciones móviles empleamos Ionic y Android Studio. En el backend trabajamos con Node.js, Python y Java. En cuanto a bases de datos, usamos PostgreSQL y Firebase según los requisitos del proyecto.",
        },
        {
          category: "software-development",
          question: "¿Cuál es su metodología de trabajo?",
          answer:
            "Seguimos metodologías ágiles como Scrum, Lean Startup y Design Thinking. Estas nos permiten entregar valor de forma incremental, con adaptación continua y colaboración cercana con el cliente durante todo el desarrollo.",
        },
        {
          category: "software-development",
          question: "¿Ofrecen soporte después del lanzamiento?",
          answer:
            "Sí, ofrecemos soporte técnico con respuesta en un plazo de hasta 24 horas. Nuestros planes incluyen actualizaciones de seguridad, mejoras de rendimiento y solución de incidencias.",
        },
        {
          category: "software-development",
          question: "¿Desarrollan soluciones a medida?",
          answer:
            "Sí, desarrollamos aplicaciones web y móviles totalmente personalizadas, adaptadas a las necesidades y objetivos específicos de cada cliente.",
        },
        {
          category: "software-development",
          question: "¿Realizan integraciones con otros sistemas?",
          answer:
            "Sí, realizamos integraciones mediante APIs RESTful, y conectamos nuestras soluciones con plataformas externas como ERPs, CRMs y servicios en la nube.",
        },
        {
          category: "cybersecurity",
          question: "¿Qué servicios de ciberseguridad ofrecen?",
          answer:
            "Ofrecemos evaluaciones de vulnerabilidad, pruebas de penetración, implementación de soluciones de protección, gestión de identidades y accesos, monitoreo de seguridad, respuesta a incidentes, y capacitación en concientización sobre seguridad.",
        },
        {
          category: "cybersecurity",
          question: "¿Con qué frecuencia se deben realizar auditorías de seguridad?",
          answer:
            "Recomendamos realizar auditorías de seguridad al menos una vez al año. Para empresas con alta criticidad o requisitos regulatorios, es preferible realizarlas semestral o trimestralmente. También sugerimos auditorías adicionales tras cambios importantes en la infraestructura.",
        },
        {
          category: "cybersecurity",
          question: "¿Cómo manejan los incidentes de seguridad?",
          answer:
            "Contamos con protocolos para la contención de incidentes, análisis forense para determinar el alcance y origen, y acciones correctivas rápidas para minimizar el impacto y restaurar la operación segura del sistema.",
        },
        {
          category: "cloud-computing",
          question: "¿Qué servicios ofrecen en Cloud Computing?",
          answer:
            "Ofrecemos servicios de migración a la nube, diseño de arquitectura cloud, implementación de backups automáticos, recuperación ante desastres y escalabilidad de aplicaciones en la nube.",
        },
        {
          category: "cloud-computing",
          question: "¿Con qué proveedores de nube trabajan?",
          answer:
            "Trabajamos con los principales proveedores de la industria: Google Cloud Platform, Amazon Web Services (AWS), Microsoft Azure, y también soluciones híbridas que combinan infraestructura local con la nube.",
        },
        {
          category: "cloud-computing",
          question: "¿Cuáles son los beneficios de adoptar la nube?",
          answer:
            "Entre los principales beneficios están la reducción de costos operativos, alta disponibilidad, escalabilidad automática, mayor seguridad de la información y flexibilidad para trabajar desde cualquier lugar.",
        },
        {
          category: "cybersecurity",
          question: "¿Ofrecen capacitación en ciberseguridad?",
          answer:
            "Sí, ofrecemos programas de capacitación para equipos internos enfocados en concientización sobre ciberseguridad, mejores prácticas y simulacros de phishing para fortalecer la cultura de seguridad en la empresa.",
        },
        {
          category: "data-analysis",
          question: "¿Qué servicios ofrecen en análisis de datos?",
          answer:
            "Ofrecemos desarrollo de dashboards interactivos, visualización de datos en tiempo real, informes automatizados y análisis descriptivo, predictivo y prescriptivo para toma de decisiones estratégicas.",
        },
        {
          category: "data-analysis",
          question: "¿Qué herramientas utilizan para análisis de datos?",
          answer:
            "Utilizamos Power BI, Google Data Studio y herramientas de inteligencia de negocios personalizadas, según las necesidades específicas del cliente.",
        },
        {
          category: "data-analysis",
          question: "¿Para qué se aplican los análisis de datos?",
          answer:
            "Nuestros análisis se utilizan para la optimización de campañas de marketing, mejora en la toma de decisiones comerciales, incremento en eficiencia operativa y entendimiento profundo del comportamiento de clientes.",
        },
        {
          category: "it-consulting",
          question: "¿En qué consiste su asesoría tecnológica?",
          answer:
            "Realizamos un diagnóstico de las necesidades tecnológicas de la empresa y proponemos soluciones alineadas con sus objetivos de negocio, priorizando eficiencia, escalabilidad y sostenibilidad.",
        },
        {
          category: "it-consulting",
          question: "¿Cómo ayudan a optimizar procesos internos?",
          answer:
            "Diseñamos estrategias para la automatización y digitalización de procesos, reduciendo costos operativos y aumentando la eficiencia mediante herramientas tecnológicas adaptadas a cada flujo de trabajo.",
        },
        {
          category: "it-consulting",
          question: "¿Ofrecen implementación de sistemas?",
          answer:
            "Sí, analizamos, planificamos y ejecutamos la implementación de sistemas empresariales, asegurando la correcta integración con los procesos actuales y la capacitación del personal.",
        },
        {
          category: "it-consulting",
          question: "¿Asisten en procesos de licitación tecnológica?",
          answer:
            "Brindamos apoyo técnico durante todo el proceso de licitación, incluyendo la preparación de propuestas, especificaciones técnicas, evaluación de requerimientos y acompañamiento en la postulación.",
        },
        {
          category: "technical-support",
          question: "¿Qué incluye el soporte técnico que ofrecen?",
          answer:
            "Nuestro soporte cubre asistencia a usuarios finales, mantenimiento de servidores, redes, equipos, actualizaciones y resolución de incidencias técnicas tanto a nivel de software como hardware.",
        },
        {
          category: "technical-support",
          question: "¿Qué modalidades de soporte ofrecen?",
          answer:
            "Brindamos soporte remoto y presencial, según necesidad. Contamos con planes mensuales escalables que se adaptan al tamaño y requerimientos de cada organización.",
        },
        {
          category: "technical-support",
          question: "¿Qué herramientas utilizan para gestionar el soporte?",
          answer:
            "Utilizamos sistemas de ticketing, monitoreo en tiempo real y plataformas de control remoto para garantizar tiempos de respuesta eficientes, con atención dentro de un plazo máximo de 24 horas.",
        },
        // Más preguntas pueden ser agregadas según sea necesario
      ],
    };
  },
  computed: {
    pageTitle() {
      if (this.category) {
        const categoryObj = this.categories.find(cat => cat.id === this.category);
        return categoryObj ? `FAQs: ${categoryObj.name}` : "Preguntas Frecuentes";
      }
      return "Preguntas Frecuentes";
    },
    filteredFaqs() {
      if (!this.category) return this.faqs;
      return this.faqs.filter(faq => faq.category === this.category);
    },
    categoriesWithCount() {
      // Calculate the actual count of FAQs for each category
      return this.categories.map(category => {
        const count = this.faqs.filter(faq => faq.category === category.id).length;
        return {
          ...category,
          count,
        };
      });
    },
  },
  methods: {
    getCategoryName() {
      const categoryObj = this.categories.find(cat => cat.id === this.category);
      return categoryObj ? categoryObj.name : "";
    },
  },
  metaInfo() {
    return {
      title: this.pageTitle,
      meta: [
        {
          name: "description",
          content: this.category
            ? `Preguntas frecuentes sobre nuestros servicios de ${this.getCategoryName()}`
            : "Respuestas a las preguntas más comunes sobre nuestros servicios y soluciones tecnológicas",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
