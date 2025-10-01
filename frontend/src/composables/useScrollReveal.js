import { onMounted } from "vue";
import ScrollReveal from "scrollreveal";

export function useScrollReveal() {
  const initScrollReveal = () => {
    // Animaciones desde arriba
    ScrollReveal().reveal(".reveal-top", {
      origin: "top",
      distance: "60px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
      reset: false,
    });

    // Animaciones desde abajo
    ScrollReveal().reveal(".reveal-bottom", {
      origin: "bottom",
      distance: "60px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
      reset: false,
    });

    // Animaciones desde -1 abajo con menor duración y delay
    ScrollReveal().reveal(".reveal-bottom-1", {
      origin: "bottom",
      distance: "60px",
      duration: 600,
      delay: 100,
      easing: "ease-in-out",
      reset: false,
    });

    // Animaciones desde la izquierda
    ScrollReveal().reveal(".reveal-left", {
      origin: "left",
      distance: "60px",
      duration: 600,
      delay: 100,
      easing: "ease-in-out",
      reset: false,
    });

    // Animaciones desde la derecha
    ScrollReveal().reveal(".reveal-right", {
      origin: "right",
      distance: "60px",
      duration: 600,
      delay: 100,
      easing: "ease-in-out",
      reset: false,
    });

    // Animaciones desde la derecha
    ScrollReveal().reveal(".reveal-right-1", {
      origin: "right",
      distance: "60px",
      duration: 600,
      delay: 110,
      easing: "ease-in-out",
      reset: false,
    });

    // Animaciones desde la derecha
    ScrollReveal().reveal(".reveal-right-2", {
      origin: "right",
      distance: "60px",
      duration: 620,
      delay: 120,
      easing: "ease-in-out",
      reset: false,
    });

    // Animaciones desde la derecha
    ScrollReveal().reveal(".reveal-right-3", {
      origin: "right",
      distance: "60px",
      duration: 640,
      delay: 130,
      easing: "ease-in-out",
      reset: false,
    });

    // Animaciones desde la derecha
    ScrollReveal().reveal(".reveal-right-4", {
      origin: "right",
      distance: "60px",
      duration: 660,
      delay: 140,
      easing: "ease-in-out",
      reset: false,
    });

    // Animaciones con fade
    ScrollReveal().reveal(".reveal-fade", {
      distance: "0px",
      duration: 1000,
      delay: 200,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
    });

    // Animaciones en secuencia
    ScrollReveal().reveal(".reveal-sequence", {
      origin: "bottom",
      distance: "30px",
      duration: 800,
      delay: 300,
      interval: 200,
      easing: "ease-in-out",
      reset: false,
    });

    // Animaciones personalizadas para iconos
    ScrollReveal().reveal(".reveal-icon", {
      origin: "bottom",
      distance: "40px",
      duration: 800,
      delay: 400,
      scale: 0.8,
      easing: "ease-in-out",
      reset: false,
    });
  };

  // Función para ejecutar en mounted
  const setupScrollReveal = () => {
    onMounted(() => {
      // Pequeño delay para asegurar que el DOM esté completamente renderizado
      setTimeout(() => {
        initScrollReveal();
      }, 100);
    });
  };

  return {
    initScrollReveal,
    setupScrollReveal,
  };
}
