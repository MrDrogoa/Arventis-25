<template>
  <main id="content">
    <section class="page-header bg-light py-5">
      <div class="container">
        <h1 class="display-4 fw-bold">Contacto</h1>
        <p class="lead">Estamos aquí para ayudarle. No dude en ponerse en contacto con nosotros.</p>
      </div>
    </section>

    <section class="contact-section py-5">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-6">
            <h2 class="mb-4">Envíenos un mensaje</h2>
            
            <!-- Mensaje de confirmación accesible -->
            <div 
              v-if="formSubmitted && !formError" 
              class="alert alert-success mb-4" 
              role="status" 
              ref="successMessage"
              tabindex="-1"
            >
              <i class="bi bi-check-circle me-2"></i>
              Mensaje enviado correctamente. Nos pondremos en contacto pronto.
              <div v-if="messageId" class="mt-2 small">ID de mensaje: {{ messageId }}</div>
            </div>
            
            <!-- Mensaje de error -->
            <div
              v-if="formError"
              class="alert alert-danger mb-4"
              role="status"
              ref="errorMessage"
              tabindex="-1"
            >
              <i class="bi bi-exclamation-triangle me-2"></i>
              {{ errorMessage || "Ocurrió un error al enviar el mensaje. Por favor intente nuevamente." }}
            </div>
            
            <form 
              class="contact-form needs-validation" 
              @submit.prevent="submitForm" 
              novalidate
              role="form" 
              aria-label="Formulario de contacto"
            >
              <div class="mb-3">
                <label for="name" class="form-label">Nombre completo *</label>
                <input
                  type="text"
                  class="form-control"
                  :class="{'is-invalid': formSubmitted && !formData.name}"
                  id="name"
                  v-model="formData.name"
                  required
                  aria-required="true"
                  :aria-invalid="!formData.name && formSubmitted"
                />
                <div class="invalid-feedback">Por favor ingrese su nombre.</div>
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Correo electrónico *</label>
                <input
                  type="email"
                  class="form-control"
                  :class="{'is-invalid': formSubmitted && !isValidEmail(formData.email)}"
                  id="email"
                  v-model="formData.email"
                  required
                  aria-required="true"
                  :aria-invalid="!formData.email && formSubmitted"
                />
                <div class="invalid-feedback">Por favor ingrese un correo electrónico válido.</div>
              </div>

              <div class="mb-3">
                <label for="subject" class="form-label">Asunto *</label>
                <input
                  type="text"
                  class="form-control"
                  :class="{'is-invalid': formSubmitted && !formData.subject}"
                  id="subject"
                  v-model="formData.subject"
                  required
                  aria-required="true"
                  :aria-invalid="!formData.subject && formSubmitted"
                />
                <div class="invalid-feedback">Por favor ingrese un asunto.</div>
              </div>

              <div class="mb-3">
                <label for="message" class="form-label">Mensaje *</label>
                <textarea
                  class="form-control"
                  :class="{'is-invalid': formSubmitted && !formData.message}"
                  id="message"
                  rows="5"
                  v-model="formData.message"
                  required
                  aria-required="true"
                  :aria-invalid="!formData.message && formSubmitted"
                ></textarea>
                <div class="invalid-feedback">Por favor ingrese su mensaje.</div>
              </div>

              <div class="form-check mb-4">
                <input
                  class="form-check-input"
                  :class="{'is-invalid': formSubmitted && !formData.privacyAccepted}"
                  type="checkbox"
                  id="privacy"
                  v-model="formData.privacyAccepted"
                  required
                  aria-required="true"
                  :aria-invalid="!formData.privacyAccepted && formSubmitted"
                />
                <label class="form-check-label" for="privacy">
                  Acepto la <a href="#" data-bs-toggle="modal" data-bs-target="#privacyModal" class="text-decoration-none">política de privacidad</a> *
                </label>
                <div class="invalid-feedback">Debe aceptar la política de privacidad.</div>
              </div>

              <button 
                type="submit" 
                class="btn btn-primary btn-lg"
                aria-label="Enviar mensaje de contacto"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                {{ isSubmitting ? 'Enviando...' : 'Enviar mensaje' }}
              </button>
            </form>
            
            <p class="text-muted mt-3">
              <small>* Campos obligatorios</small>
            </p>
          </div>

          <div class="col-lg-6">
            <h2 class="mb-4">Información de contacto</h2>
            <div class="card border-0 shadow-sm mb-4">
              <div class="card-body">
                <ul class="list-unstyled contact-info">
                  <li class="mb-3">
                    <i class="bi bi-geo-alt-fill text-primary me-2"></i>
                    <span>Ruta D55, La Ensenada Sin Número, Ovalle</span>
                  </li>
                  <li class="mb-3">
                    <i class="bi bi-telephone-fill text-primary me-2"></i>
                    <span>+56930905919</span>
                  </li>
                  <li class="mb-3">
                    <i class="bi bi-envelope-fill text-primary me-2"></i>
                    <span>contacto@arventis.cl</span>
                  </li>
                  <li>
                    <i class="bi bi-clock-fill text-primary me-2"></i>
                    <span>Lunes a Viernes: 9:00 - 18:00</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="map-container rounded shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54994.83828287192!2d-71.22784651062085!3d-30.60145983989152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96901a7f14d2e195%3A0xed8c0065326a4494!2sOvalle%2C%20Coquimbo%2C%20Chile!5e0!3m2!1ses!2sus!4v1651041739909!5m2!1ses!2sus"
                width="100%"
                height="300"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                title="Ubicación de nuestras oficinas en Ovalle, Chile"
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal de Política de Privacidad -->
    <div class="modal fade" id="privacyModal" tabindex="-1" aria-labelledby="privacyModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="privacyModalLabel">Política de Privacidad</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
          </div>
          <div class="modal-body">
            <h6>Introducción</h6>
            <p>Esta Política de Privacidad describe cómo Arventis recopila, utiliza y comparte su información personal.</p>
            
            <h6>Información que recopilamos</h6>
            <p>Al utilizar nuestro formulario de contacto, recopilamos información como su nombre, correo electrónico y el contenido de su mensaje.</p>
            
            <h6>Uso de la información</h6>
            <p>Utilizamos esta información exclusivamente para responder a sus consultas y proporcionar los servicios solicitados.</p>
            
            <p>Para más detalles, puede consultar nuestra <router-link to="/privacidad" @click="closeModal">Política de Privacidad completa</router-link>.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// Import Bootstrap for modal handling
import 'bootstrap';
import contactMessagesApi from '@/api/contactMessages';

export default {
  name: "ContactView",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        subject: "",
        message: "",
        privacyAccepted: false,
        sourceUrl: "",
        referrer: "",
        metadata: {}
      },
      formSubmitted: false,
      isSubmitting: false,
      formError: false,
      errorMessage: "",
      messageId: null
    };
  },
  created() {
    // Capture source URL and referrer
    this.formData.sourceUrl = window.location.href;
    this.formData.referrer = document.referrer || "Arventis.cl";
    
    // Collect browser metadata
    this.formData.metadata = {
      browserInfo: navigator.userAgent,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      deviceType: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
      language: navigator.language
    };
  },
  methods: {
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    validateForm() {
      // Validación básica de campos
      if (this.formData.name.trim() === "") {
        this.errorMessage = "Por favor ingrese su nombre.";
        return false;
      }
      
      if (!this.isValidEmail(this.formData.email)) {
        this.errorMessage = "Por favor ingrese un correo electrónico válido.";
        return false;
      }
      
      if (this.formData.subject.trim() === "") {
        this.errorMessage = "Por favor ingrese un asunto.";
        return false;
      }
      
      if (this.formData.message.trim() === "") {
        this.errorMessage = "Por favor ingrese su mensaje.";
        return false;
      }
      
      // Verificación ESTRICTA de que privacyAccepted es true
      if (this.formData.privacyAccepted !== true) {
        this.errorMessage = "Debe aceptar la política de privacidad.";
        return false;
      }
      
      return true;
    },
    async submitForm() {
      // Marcar como enviado para mostrar errores de validación en el UI
      this.formSubmitted = true;
      
      // Validar el formulario antes de procesar
      if (!this.validateForm()) {
        this.formError = true;
        return;
      }
      
      // Comenzar la carga
      this.isSubmitting = true;
      this.formError = false;
      this.errorMessage = "";
      
      try {
        // Logging para depuración
        console.log('Enviando formulario con datos:', JSON.stringify(this.formData, null, 2));
        
        // IMPORTANTE: Asegurar que privacyAccepted sea estrictamente un booleano true
        const messageData = {
          ...this.formData,
          privacyAccepted: true,
          submittedAt: new Date().toISOString()
        };
        
        // Enviar datos al API
        const response = await contactMessagesApi.submitMessage(messageData);
        
        // Guardar el ID del mensaje
        this.messageId = response.messageId;
        
        // Resetear formulario pero mantener el mensaje visible
        this.resetForm();
        
        // Enfocar el mensaje de éxito para lectores de pantalla
        this.$nextTick(() => {
          if (this.$refs.successMessage) {
            this.$refs.successMessage.focus();
          }
          // Hacer scroll suave hacia arriba 
          document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
        });
        
      } catch (error) {
        console.error("Error al enviar formulario:", error);
        this.formError = true;
        this.errorMessage = error.message || "Ocurrió un error al enviar el mensaje. Por favor intente nuevamente.";
        
        // Enfocar el mensaje de error para lectores de pantalla
        this.$nextTick(() => {
          if (this.$refs.errorMessage) {
            this.$refs.errorMessage.focus();
          }
        });
      } finally {
        this.isSubmitting = false;
      }
    },
    resetForm() {
      this.formData = {
        name: "",
        email: "",
        subject: "",
        message: "",
        privacyAccepted: false,
        sourceUrl: this.formData.sourceUrl,
        referrer: this.formData.referrer,
        metadata: this.formData.metadata
      };
    },
    closeModal() {
      const modalElement = document.getElementById('privacyModal');
      if (modalElement) {
        document.body.classList.remove('modal-open');
        modalElement.classList.remove('show');
        modalElement.setAttribute('aria-hidden', 'true');
        modalElement.setAttribute('style', 'display: none');
        
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
          backdrop.remove();
        }
      }
    }
  },
};
</script>

