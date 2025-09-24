/**
 * Utility functions for form validation
 */

/**
 * Validates an email address
 * @param {string} email - The email to validate
 * @returns {boolean} - True if email is valid, false otherwise
 */
export const isValidEmail = (email) => {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates required fields in a form object
 * @param {Object} formData - The form data object
 * @param {Array<string>} requiredFields - Array of required field names
 * @returns {Object} - Object with isValid boolean and errorMessage if invalid
 */
export const validateRequiredFields = (formData, requiredFields) => {
  for (const field of requiredFields) {
    if (!formData[field] || (typeof formData[field] === 'string' && formData[field].trim() === '')) {
      return {
        isValid: false,
        fieldName: field,
        errorMessage: `El campo ${getFieldLabel(field)} es obligatorio.`
      };
    }
  }
  
  return { isValid: true };
};

/**
 * Get user-friendly field label
 * @param {string} fieldName - The technical field name
 * @returns {string} - User-friendly field label
 */
const getFieldLabel = (fieldName) => {
  const labels = {
    name: 'nombre',
    email: 'correo electrónico',
    subject: 'asunto',
    message: 'mensaje',
    privacyAccepted: 'política de privacidad'
  };
  
  return labels[fieldName] || fieldName;
};

/**
 * Validates a complete contact form
 * @param {Object} formData - The form data
 * @returns {Object} - Object with isValid boolean and errorMessage if invalid
 */
export const validateContactForm = (formData) => {
  // Check required fields
  const requiredCheck = validateRequiredFields(
    formData, 
    ['name', 'email', 'subject', 'message']
  );
  
  if (!requiredCheck.isValid) {
    return requiredCheck;
  }
  
  // Check email format
  if (!isValidEmail(formData.email)) {
    return {
      isValid: false,
      fieldName: 'email',
      errorMessage: 'Por favor ingrese un correo electrónico válido.'
    };
  }
  
  // Check privacy policy - CRITICAL
  if (formData.privacyAccepted !== true) {
    return {
      isValid: false,
      fieldName: 'privacyAccepted',
      errorMessage: 'Debe aceptar la política de privacidad.'
    };
  }
  
  return { isValid: true };
};

export default {
  isValidEmail,
  validateRequiredFields,
  validateContactForm
};
