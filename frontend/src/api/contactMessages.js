import axios from 'axios';

// Base API URL - Replace with your actual API URL
const API_URL = process.env.VUE_APP_API_URL || 'https://us-central1-casiangelesydemonios.cloudfunctions.net/api';

/**
 * Contact Messages API service - Client side only
 * Handles submission of contact messages to the backend
 */
const contactMessagesApi = {
  /**
   * Submit a new contact message
   * @param {Object} messageData - Contact message data
   * @returns {Promise} - Promise with the response
   */
  submitMessage: async (messageData) => {
    const url = `${API_URL}/contact/messages`;
    try {
      console.log('Submitting contact message to API:', messageData);
      
      // IMPORTANTE: Asegurar que privacyAccepted sea estrictamente un booleano true
      // Clonamos y modificamos los datos para no alterar el objeto original
      const formattedData = {
        ...messageData,
        // Forzar conversión a booleano y validar que sea true
        privacyAccepted: Boolean(messageData.privacyAccepted)
      };
      
      // Strict privacy policy enforcement - if not boolean true, reject
      if (formattedData.privacyAccepted !== true) {
        console.error('Privacy policy not accepted:', formattedData.privacyAccepted);
        throw new Error('Debe aceptar la política de privacidad');
      }
      
      // Log de la solicitud final para depuración
      console.log('Sending final formatted data to API:', formattedData);
      
      const response = await axios.post(url, formattedData);
      console.log('Response from API:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error submitting contact message:', error);
      throw handleApiError(error);
    }
  },

  /**
   * Submit a contact message with file attachment
   * @param {FormData} formData - Form data with message and attachment
   * @returns {Promise} - Promise with the response
   */
  submitMessageWithAttachment: async (formData) => {
    const url = `${API_URL}/contact/messages/with-attachment`;
    try {
      // Validate privacy policy acceptance for FormData
      const privacyAccepted = formData.get('privacyAccepted');
      if (privacyAccepted !== 'true') {
        throw new Error('Debe aceptar la política de privacidad');
      }
      
      const response = await axios.post(
        url, 
        formData, 
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error submitting contact message with attachment:', error);
      throw handleApiError(error);
    }
  }
};

/**
 * Handle API errors and format them consistently
 * @param {Error} error - The error object from axios
 * @returns {Error} - A formatted error
 */
function handleApiError(error) {
  console.error('API Error details:', error);
  
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const errorMessage = error.response.data.message || 'Error en la solicitud';
    const errorDetails = error.response.data.details || '';
    console.error('Server response error:', error.response.status, error.response.data);
    return new Error(`${errorMessage}${errorDetails ? ': ' + errorDetails : ''}`);
  } else if (error.request) {
    // The request was made but no response was received
    console.error('No response received:', error.request);
    return new Error('No se recibió respuesta del servidor. Verifique su conexión.');
  } else {
    // Something happened in setting up the request that triggered an Error
    return new Error('Error al procesar la solicitud: ' + error.message);
  }
}

export default contactMessagesApi;
