<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Formulario de Contacto</h2>
    <p class="text-center mb-4">
      Si tienes alguna pregunta o necesitas más información, completa el siguiente formulario y nos
      pondremos en contacto contigo a la brevedad.
    </p>
  </div>
  <div class="contact-form-container">
    <form @submit.prevent="validateAndSubmit" class="needs-validation" novalidate ref="form">
      <div class="mb-3">
        <label for="name" class="form-label">Nombre completo</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="formData.name"
          required
          aria-describedby="nameHelp"
        />
        <div class="invalid-feedback">Por favor, ingrese su nombre completo.</div>
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Correo electrónico</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="formData.email"
          required
          aria-describedby="emailHelp"
        />
        <div class="invalid-feedback">Por favor, ingrese un correo electrónico válido.</div>
      </div>

      <div class="mb-3">
        <label for="subject" class="form-label">Asunto</label>
        <input type="text" class="form-control" id="subject" v-model="formData.subject" required />
        <div class="invalid-feedback">Por favor, ingrese un asunto.</div>
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">Mensaje</label>
        <textarea
          class="form-control"
          id="message"
          rows="5"
          v-model="formData.message"
          required
        ></textarea>
        <div class="invalid-feedback">Por favor, ingrese su mensaje.</div>
      </div>

      <!-- File attachment option -->
      <div class="mb-3">
        <label for="attachment" class="form-label">Archivo adjunto (opcional)</label>
        <input
          type="file"
          class="form-control"
          id="attachment"
          ref="fileInput"
          @change="handleFileChange"
        />
        <div class="form-text">Formatos permitidos: imágenes, PDF, documentos Word (máx. 5MB)</div>
      </div>

      <div class="form-check mb-3">
        <input
          class="form-check-input"
          type="checkbox"
          id="privacyPolicy"
          v-model="formData.privacyAccepted"
          required
        />
        <label class="form-check-label" for="privacyPolicy">
          Acepto la
          <router-link to="/privacidad" class="text-decoration-none">
            política de privacidad
          </router-link>
        </label>
        <div class="invalid-feedback">
          Debe aceptar nuestra política de privacidad para enviar el mensaje.
        </div>
      </div>

      <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
        <span
          v-if="isSubmitting"
          class="spinner-border spinner-border-sm me-2"
          role="status"
          aria-hidden="true"
        ></span>
        {{ isSubmitting ? "Enviando..." : "Enviar mensaje" }}
      </button>

      <div v-if="formSubmitted" class="alert alert-success mt-3" role="alert">
        ¡Gracias por contactarnos! Responderemos a la brevedad.
        <div class="mt-2 small">ID de mensaje: {{ messageId }}</div>
      </div>

      <div v-if="formError" class="alert alert-danger mt-3" role="alert">
        {{ errorMessage }}
      </div>
    </form>

    <!-- Technical error details (development only) -->
    <div v-if="process.env.NODE_ENV !== 'production' && debugInfo" class="mt-4 small">
      <div class="alert alert-warning">
        <h5>Debug Information</h5>
        <pre>{{ debugInfo }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import contactMessagesApi from "@/api/contactMessages";

export default {
  name: "ContactForm",
  props: {
    formIdentifier: {
      type: String,
      default: "default-form",
    },
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        subject: "",
        message: "",
        privacyAccepted: false,
        submittedAt: null,
        sourceUrl: "",
        referrer: "",
      },
      selectedFile: null,
      isSubmitting: false,
      formSubmitted: false,
      formError: false,
      errorMessage: "",
      debugInfo: null,
      // Add validation state
      validationErrors: {},
      metadata: {
        browserInfo: "",
        screenResolution: "",
        deviceType: "",
        language: "",
      },
    };
  },
  created() {
    // Check if subject was provided in the URL query parameters
    if (this.$route.query.subject) {
      this.formData.subject = this.$route.query.subject;
    }

    // Capture source URL and referrer
    this.formData.sourceUrl = window.location.href;
    this.formData.referrer = document.referrer || "direct";

    // Collect browser metadata
    this.collectBrowserMetadata();
  },
  methods: {
    collectBrowserMetadata() {
      // Get browser and device information
      this.metadata.browserInfo = navigator.userAgent;
      this.metadata.screenResolution = `${window.screen.width}x${window.screen.height}`;
      this.metadata.language = navigator.language;

      // Detect device type
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      this.metadata.deviceType = isMobile ? "mobile" : "desktop";
    },

    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        // Check file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          alert("El archivo es demasiado grande. El tamaño máximo permitido es 5MB.");
          this.$refs.fileInput.value = "";
          this.selectedFile = null;
          return;
        }

        // Check file type
        const allowedTypes = [
          "image/jpeg",
          "image/png",
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];

        if (!allowedTypes.includes(file.type)) {
          alert("Tipo de archivo no permitido. Solo se permiten imágenes, PDF y documentos Word.");
          this.$refs.fileInput.value = "";
          this.selectedFile = null;
          return;
        }

        this.selectedFile = file;
      } else {
        this.selectedFile = null;
      }
    },

    validateAndSubmit() {
      // Reset validation
      this.validationErrors = {};
      this.formError = false;
      this.errorMessage = "";
      this.debugInfo = null;

      // Validate required fields
      const requiredFields = {
        name: "Nombre completo",
        email: "Correo electrónico",
        subject: "Asunto",
        message: "Mensaje",
      };

      Object.keys(requiredFields).forEach(field => {
        if (!this.formData[field]) {
          this.validationErrors[field] = `El campo "${requiredFields[field]}" es obligatorio`;
        }
      });

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (this.formData.email && !emailRegex.test(this.formData.email)) {
        this.validationErrors.email = "Por favor ingrese un correo electrónico válido";
      }

      // Privacy policy validation - critical
      if (!this.formData.privacyAccepted) {
        this.validationErrors.privacyAccepted = "Debe aceptar la política de privacidad";
      }

      // Form validation using Bootstrap
      const form = this.$refs.form;
      form.classList.add("was-validated");

      // Check for validation errors
      if (Object.keys(this.validationErrors).length > 0) {
        this.formError = true;
        this.errorMessage = "Por favor complete todos los campos obligatorios correctamente.";
        console.error("Validation errors:", this.validationErrors);
        return;
      }

      // If validation passes, submit the form
      this.submitForm();
    },

    async submitForm() {
      this.isSubmitting = true;

      try {
        // Make sure privacyAccepted is boolean true, not string or other value
        this.formData.privacyAccepted = Boolean(this.formData.privacyAccepted);

        // Prepare form data
        this.formData.submittedAt = new Date().toISOString();

        let response;
        let messageData;

        // Check if we have a file attachment
        if (this.selectedFile) {
          const formData = new FormData();

          // Add all form fields to FormData
          Object.keys(this.formData).forEach(key => {
            // Convert booleans to strings for FormData
            const value =
              typeof this.formData[key] === "boolean"
                ? this.formData[key].toString()
                : this.formData[key];

            formData.append(key, value === null ? "" : value);
          });

          // Add metadata
          Object.keys(this.metadata).forEach(key => {
            formData.append(`metadata[${key}]`, this.metadata[key] || "");
          });

          // Add the file
          formData.append("attachment", this.selectedFile);

          // For debugging
          if (process.env.NODE_ENV !== "production") {
            console.log("Submitting form with attachment:", {
              formFields: Object.fromEntries(formData.entries()),
            });
          }

          // Submit with attachment
          response = await contactMessagesApi.submitMessageWithAttachment(formData);
        } else {
          // Submit without attachment
          messageData = {
            ...this.formData,
            metadata: this.metadata,
          };

          // For debugging
          if (process.env.NODE_ENV !== "production") {
            console.log("Submitting form data:", messageData);
          }

          // Submit without attachment
          response = await contactMessagesApi.submitMessage(messageData);
        }

        // Handle successful submission
        this.messageId = response.messageId;
        this.formSubmitted = true;

        // Reset form
        this.resetForm();

        // Hide success message after 8 seconds
        setTimeout(() => {
          this.formSubmitted = false;
        }, 8000);
      } catch (error) {
        // Handle submission error
        this.formError = true;
        this.errorMessage =
          error.message ||
          "Ha ocurrido un error al enviar el formulario. Por favor, inténtelo nuevamente.";

        // Save debug info
        if (process.env.NODE_ENV !== "production") {
          this.debugInfo = {
            errorMessage: error.message,
            errorStack: error.stack,
            formData: { ...this.formData, privacyAccepted: Boolean(this.formData.privacyAccepted) },
            endpoint: process.env.VUE_APP_API_URL || "Default API URL",
          };
          console.error("Form submission error:", error);
        }
      } finally {
        this.isSubmitting = false;
        // Remove validation styling
        this.$refs.form.classList.remove("was-validated");
      }
    },

    resetForm() {
      this.formData = {
        name: "",
        email: "",
        subject: "",
        message: "",
        privacyAccepted: false,
        submittedAt: null,
        sourceUrl: this.formData.sourceUrl,
        referrer: this.formData.referrer,
      };

      // Reset file input
      if (this.$refs.fileInput) {
        this.$refs.fileInput.value = "";
      }
      this.selectedFile = null;

      // Reset form validation
      this.$refs.form.classList.remove("was-validated");

      // Clear validation errors
      this.validationErrors = {};
      this.debugInfo = null;
    },
  },
};
</script>

<style scoped>
.contact-form-container {
  max-width: 100%;
  margin: 0 auto;
}

/* Add custom styles as needed */
</style>
