<template>
  <div class="accessibility-toolbar" role="region" aria-label="Controles de accesibilidad">
    <div class="btn-group" role="group" aria-label="Opciones de accesibilidad">
      <button
        type="button"
        class="btn btn-sm btn-outline-secondary"
        @click="toggleRestMode"
        :class="{ active: isRestMode }"
        :aria-pressed="isRestMode"
      >
        <i class="bi bi-eye"></i>
      </button>

      <button
        type="button"
        class="btn btn-sm btn-outline-secondary"
        @click="toggleDarkMode"
        :class="{ active: isDarkMode }"
        :aria-pressed="isDarkMode"
        title="Modo oscuro"
      >
        <i class="bi bi-moon"></i>
      </button>

      <div class="btn-group" role="group">
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="bi bi-fonts"></i>
          <span class="ms-1 d-none d-md-inline">Tamaño de texto</span>
        </button>
        <ul class="dropdown-menu">
          <li><button class="dropdown-item" @click="setTextSize('normal')">Normal</button></li>
          <li><button class="dropdown-item" @click="setTextSize('large')">Grande</button></li>
          <li><button class="dropdown-item" @click="setTextSize('xlarge')">Muy grande</button></li>
          <li>
            <button class="dropdown-item" @click="setTextSize('xxlarge')">Extra grande</button>
          </li>
        </ul>
      </div>

      <button
        type="button"
        class="btn btn-sm btn-outline-secondary"
        @click="toggleLegibility"
        :class="{ active: improvedLegibility }"
        aria-pressed="false"
      >
        <i class="bi bi-type"></i>
        <span class="ms-1 d-none d-md-inline">Legibilidad</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccessibilityControls",
  data() {
    return {
      isRestMode: false,
      isDarkMode: false,
      textSize: "normal",
      improvedLegibility: false,
    };
  },
  mounted() {
    // Recuperar preferencias guardadas
    this.loadPreferences();
  },
  methods: {
    toggleRestMode() {
      this.isRestMode = !this.isRestMode;
      document.documentElement.classList.toggle("rest-mode", this.isRestMode);
      this.savePreferences();
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.documentElement.classList.toggle("dark-mode", this.isDarkMode);
      this.savePreferences();
    },
    setTextSize(size) {
      // Primero eliminar todas las clases de tamaño
      document.documentElement.classList.remove("text-large", "text-xlarge", "text-xxlarge");

      if (size !== "normal") {
        document.documentElement.classList.add(`text-${size}`);
      }

      this.textSize = size;
      this.savePreferences();
    },
    toggleLegibility() {
      this.improvedLegibility = !this.improvedLegibility;
      document.documentElement.classList.toggle("improved-legibility", this.improvedLegibility);
      this.savePreferences();
    },
    savePreferences() {
      const preferences = {
        restMode: this.isRestMode,
        darkMode: this.isDarkMode,
        textSize: this.textSize,
        improvedLegibility: this.improvedLegibility,
      };
      localStorage.setItem("accessibilityPreferences", JSON.stringify(preferences));
    },
    loadPreferences() {
      try {
        const savedPrefs = localStorage.getItem("accessibilityPreferences");
        if (savedPrefs) {
          const prefs = JSON.parse(savedPrefs);

          // Aplicar modo descanso si estaba guardado
          if (prefs.restMode) {
            this.isRestMode = true;
            document.documentElement.classList.add("rest-mode");
          }

          // Aplicar modo oscuro si estaba guardado
          if (prefs.darkMode) {
            this.isDarkMode = true;
            document.documentElement.classList.add("dark-mode");
          }

          // Aplicar tamaño de texto
          if (prefs.textSize && prefs.textSize !== "normal") {
            this.textSize = prefs.textSize;
            document.documentElement.classList.add(`text-${prefs.textSize}`);
          }

          // Aplicar legibilidad mejorada
          if (prefs.improvedLegibility) {
            this.improvedLegibility = true;
            document.documentElement.classList.add("improved-legibility");
          }
        }
      } catch (e) {
        console.error("Error al cargar preferencias de accesibilidad:", e);
      }
    },
  },
};
</script>

<style scoped>
.accessibility-toolbar {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.rest-mode .accessibility-toolbar {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
}

.rest-mode .btn-outline-secondary {
  color: var(--text-color);
  border-color: var(--border-color);
}

.rest-mode .btn-outline-secondary.active {
  background-color: var(--primary-bg);
  color: white;
}

/* Asegura que los botones sean lo suficientemente grandes para tocar en móviles */
.btn-sm {
  min-height: 38px;
  min-width: 38px;
}
</style>
