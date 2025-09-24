import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
    meta: {
      title: "Inicio | Arventis Digital Solutions",
      description: "Soluciones tecnológicas innovadoras: Plataformas educativas (Moodle), Automatización de procesos, Desarrollo web, Ciberseguridad, Marketing digital, Capacitaciones certificadas y Soporte continuo.",
    },
  },
  {
    path: "/services",
    name: "Services",
    component: () => import("../views/ServicesView.vue"),
    meta: {
      title: "Servicios | Arventis Digital Solutions",
      description: "Nuestros servicios especializados: Plataformas educativas con Moodle, Automatización de procesos administrativos, Desarrollo web y sistemas a medida, Ciberseguridad, Marketing digital con analítica, Capacitaciones certificadas y Soporte postventa.",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutView.vue"),
    meta: {
      title: "Sobre Nosotros | Arventis Digital Solutions",
      description: "Conozca nuestro equipo profesional, historia y valores. Comprometidos con la excelencia e innovación tecnológica desde Ovalle, Chile.",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/ContactView.vue"),
    meta: {
      title: "Contacto | Arventis Digital Solutions",
      description: "Póngase en contacto con nuestro equipo. Estamos aquí para ayudarle con sus proyectos y consultas sobre plataformas Moodle, desarrollo web, ciberseguridad y más.",
    },
  },
  {
    path: "/privacidad",
    name: "Privacy",
    component: () => import("../views/PrivacyView.vue"),
    meta: {
      title: "Política de Privacidad | Arventis Digital Solutions",
      description: "Información sobre cómo Arventis Digital Solutions recopila, utiliza y protege sus datos personales.",
    },
  },
  {
    path: "/faq",
    name: "FAQs",
    component: () => import("../views/FAQsView.vue"),
    meta: {
      title: "Preguntas Frecuentes | Arventis Digital Solutions",
      description: "Consulte nuestras preguntas frecuentes sobre plataformas educativas, automatización, desarrollo web, ciberseguridad, marketing digital, capacitaciones certificadas y soporte.",
    },
  },
  {
    path: "/faq/:category",
    name: "CategoryFAQs",
    component: () => import("../views/FAQsView.vue"),
    props: true,
    meta: {
      title: "Foro de Servicio | Arventis Digital Solutions",
      description: "Información detallada y preguntas frecuentes sobre nuestros servicios especializados en tecnología educativa, desarrollo web y seguridad informática.",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFoundView.vue"),
    meta: {
      title: "Página no encontrada | Arventis Digital Solutions",
      description: "Lo sentimos, la página que busca no existe.",
    },
  },
];

const router = createRouter({
  // Cambiar de history a hash mode
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  // Scroll to top on navigation
  scrollBehavior() {
    return { top: 0 };
  },
});

// afterEach hook for updating document title and meta description
router.afterEach((to) => {
  // Update document title
  document.title = to.meta.title || "Arventis Digital Solutions";

  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }

  // Set the content attribute
  metaDescription.setAttribute("content", to.meta.description || "");

  // You could also update other meta tags like keywords, og:tags, etc.
});

export default router;
