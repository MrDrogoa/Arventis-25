import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
    meta: {
      title: "Inicio | Arventis",
      description: "Soluciones tecnológicas innovadoras y servicios personalizados para impulsar el crecimiento de su negocio.",
    },
  },
  {
    path: "/services",
    name: "Services",
    component: () => import("../views/ServicesView.vue"),
    meta: {
      title: "Servicios | Arventis",
      description: "Nuestros servicios de desarrollo, consultoría y soporte técnico para empresas. Soluciones a medida para cada necesidad.",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutView.vue"),
    meta: {
      title: "Sobre Nosotros | Arventis",
      description: "Conozca nuestro equipo profesional, historia y valores. Comprometidos con la excelencia e innovación tecnológica desde Ovalle, Chile.",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/ContactView.vue"),
    meta: {
      title: "Contacto | Arventis",
      description: "Póngase en contacto con nuestro equipo. Estamos aquí para ayudarle con sus proyectos y consultas.",
    },
  },
  {
    path: "/privacidad",
    name: "Privacy",
    component: () => import("../views/PrivacyView.vue"),
    meta: {
      title: "Política de Privacidad | Arventis",
      description: "Información sobre cómo Arventis recopila, utiliza y protege sus datos personales.",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFoundView.vue"),
    meta: {
      title: "Página no encontrada | Arventis",
      description: "Lo sentimos, la página que busca no existe.",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // Scroll to top on navigation
  scrollBehavior() {
    return { top: 0 };
  },
});

// afterEach hook for updating document title and meta description
router.afterEach((to) => {
  // Update document title
  document.title = to.meta.title || "Arventis";

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
