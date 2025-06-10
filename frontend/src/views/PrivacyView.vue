<!-- Vista de Política de Privacidad -->
<!-- Usar etiquetas semánticas: <main>, <section>, <h1> -->
<!-- Incluir roles, aria-labels para accesibilidad -->

<template>
  <main id="content">
    <section class="page-header bg-light py-5">
      <div class="container">
        <h1 class="display-4 fw-bold">Política de Privacidad</h1>
        <p class="lead">Información sobre cómo tratamos sus datos personales</p>
      </div>
    </section>

    <section class="privacy-section py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="card border-0 shadow privacy-card">
              <div class="card-body p-4 p-lg-5">
                <h2 class="privacy-heading">
                  <i class="bi bi-shield-lock me-2"></i>Política de Privacidad para Formularios – Arventis Digital Solutions SpA
                </h2>
                
                <div class="privacy-section-container">
                  <h3 class="privacy-subheading">1. Responsable del tratamiento de los datos</h3>
                  <p>
                    Arventis Digital Solutions SpA, RUT 78.159.864-K, con domicilio en Ovalle, Región de Coquimbo, Chile, es responsable del tratamiento de los datos personales proporcionados voluntariamente a través de formularios del sitio web www.arventis.cl, redes sociales y plataformas digitales asociadas.
                  </p>
                </div>

                <div class="privacy-section-container">
                  <h3 class="privacy-subheading">2. Finalidad de la recopilación</h3>
                  <p>
                    Los datos personales proporcionados (como nombre, correo electrónico, número de contacto u organización) serán utilizados exclusivamente para:
                  </p>
                  <ul class="privacy-list">
                    <li>Contactar a los usuarios en relación con los servicios ofrecidos.</li>
                    <li>Atender solicitudes, cotizaciones o consultas.</li>
                    <li>Enviar información comercial, promociones o contenidos de interés (previo consentimiento).</li>
                    <li>Gestionar relaciones comerciales o técnicas con empresas, instituciones o personas interesadas en nuestros productos o servicios.</li>
                  </ul>
                </div>

                <div class="privacy-section-container">
                  <h3 class="privacy-subheading">3. Legitimación</h3>
                  <p>
                    El tratamiento de los datos se realiza con base en el consentimiento informado del titular, otorgado al completar y enviar voluntariamente un formulario de contacto.
                  </p>
                </div>

                <div class="privacy-section-container">
                  <h3 class="privacy-subheading">4. Conservación de los datos</h3>
                  <p>
                    Los datos se conservarán durante el tiempo necesario para cumplir con las finalidades descritas o hasta que el titular solicite su eliminación, salvo obligación legal que indique lo contrario.
                  </p>
                </div>

                <div class="privacy-section-container">
                  <h3 class="privacy-subheading">5. Destinatarios</h3>
                  <p>
                    Los datos no serán compartidos con terceros ajenos a Arventis Digital Solutions SpA, salvo por requerimientos legales o cuando sea estrictamente necesario para la prestación de servicios solicitados (por ejemplo, plataformas de email marketing, CRM o herramientas de analítica, bajo acuerdo de confidencialidad y protección de datos).
                  </p>
                </div>

                <div class="privacy-section-container">
                  <h3 class="privacy-subheading">6. Derechos del titular</h3>
                  <p>
                    Los usuarios podrán ejercer sus derechos de acceso, rectificación, cancelación, oposición y eliminación de sus datos personales en cualquier momento, escribiendo a:
                    <span class="d-block mt-2 privacy-email">
                      <i class="bi bi-envelope me-1"></i> contacto@arventis.cl
                    </span>
                  </p>
                </div>

                <div class="privacy-section-container">
                  <h3 class="privacy-subheading">7. Protección y seguridad</h3>
                  <p>
                    Arventis Digital Solutions SpA aplica medidas técnicas y organizativas para proteger la información personal de accesos no autorizados, pérdida o alteración. Trabajamos con plataformas seguras y respetamos las normativas nacionales e internacionales en protección de datos.
                  </p>
                </div>

                <div class="privacy-section-container">
                  <h3 class="privacy-subheading">8. Modificaciones</h3>
                  <p>
                    Esta política puede ser actualizada según cambios legales o mejoras en nuestros servicios. La versión vigente siempre estará disponible en nuestro sitio web y se indicará la fecha de la última actualización.
                  </p>
                </div>

                <div class="privacy-last-update text-end mt-5">
                  <p>
                    <i class="bi bi-calendar-date me-1"></i>
                    <strong>Última actualización:</strong> Julio 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'PrivacyView',
}
</script>

<style scoped>
.privacy-card {
  background-color: #f7f9fc;
  border-left: 4px solid #0d6efd !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1) !important;
}

.privacy-heading {
  color: #0d6efd;
  border-bottom: 1px solid #dee2e6;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}

.privacy-subheading {
  color: #495057;
  font-size: 1.25rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.privacy-section-container {
  margin-bottom: 2rem;
}

.privacy-list {
  padding-left: 1.5rem;
}

.privacy-list li {
  margin-bottom: 0.5rem;
}

.privacy-email {
  color: #0d6efd;
  font-weight: 500;
}

.privacy-last-update {
  color: #6c757d;
  font-size: 0.9rem;
  border-top: 1px solid #dee2e6;
  padding-top: 1rem;
}

/* Para mejorar la legibilidad en modo descanso visual */
.rest-mode .privacy-card {
  background-color: var(--card-bg);
  border-left-color: var(--primary-bg) !important;
}

.rest-mode .privacy-heading,
.rest-mode .privacy-email {
  color: var(--link-color);
}

.rest-mode .privacy-subheading {
  color: var(--heading-color);
}
</style>
