import { createStore } from "vuex";
import contactMessagesApi from "@/api/contactMessages";

export default createStore({
  state: {
    contactMessages: {
      loading: false,
      error: null,
      lastSubmittedMessage: null
    }
  },
  getters: {
    isContactFormSubmitting: state => state.contactMessages.loading,
    contactFormError: state => state.contactMessages.error,
    lastSubmittedMessage: state => state.contactMessages.lastSubmittedMessage
  },
  mutations: {
    // Contact message mutations
    SET_CONTACT_LOADING(state, isLoading) {
      state.contactMessages.loading = isLoading;
    },
    SET_CONTACT_ERROR(state, error) {
      state.contactMessages.error = error;
    },
    SET_LAST_SUBMITTED_MESSAGE(state, message) {
      state.contactMessages.lastSubmittedMessage = message;
    },
    SET_CONTACT_MESSAGES(state, messages) {
      state.contactMessages.list = messages;
    }
  },
  actions: {
    // Submit a contact message
    async submitContactMessage({ commit }, messageData) {
      commit('SET_CONTACT_LOADING', true);
      commit('SET_CONTACT_ERROR', null);
      
      // Ensure privacyAccepted is a boolean
      const formattedData = {
        ...messageData,
        privacyAccepted: Boolean(messageData.privacyAccepted)
      };
      
      try {
        // Validate privacy policy acceptance
        if (!formattedData.privacyAccepted) {
          throw new Error('Debe aceptar la política de privacidad');
        }
        
        console.log('Submitting message data through Vuex:', formattedData);
        
        const response = await contactMessagesApi.submitMessage(formattedData);
        commit('SET_LAST_SUBMITTED_MESSAGE', {
          ...formattedData,
          messageId: response.messageId
        });
        return response;
      } catch (error) {
        console.error('Error submitting contact message through Vuex:', error);
        commit('SET_CONTACT_ERROR', error.message || 'Error al enviar el mensaje');
        throw error;
      } finally {
        commit('SET_CONTACT_LOADING', false);
      }
    },
    
    // Submit a contact message with attachment
    async submitContactMessageWithAttachment({ commit }, formData) {
      commit('SET_CONTACT_LOADING', true);
      commit('SET_CONTACT_ERROR', null);
      
      try {
        const response = await contactMessagesApi.submitMessageWithAttachment(formData);
        commit('SET_LAST_SUBMITTED_MESSAGE', {
          messageId: response.messageId
        });
        return response;
      } catch (error) {
        commit('SET_CONTACT_ERROR', error.message || 'Error al enviar el mensaje con adjunto');
        throw error;
      } finally {
        commit('SET_CONTACT_LOADING', false);
      }
    },

    // Admin actions - these would normally be protected by authentication
    async fetchContactMessages({ commit }, { filters, token } = {}) {
      commit('SET_CONTACT_LOADING', true);
      commit('SET_CONTACT_ERROR', null);

      try {
        const messages = await contactMessagesApi.getAllMessages(filters, token);
        commit('SET_CONTACT_MESSAGES', messages);
        return messages;
      } catch (error) {
        commit('SET_CONTACT_ERROR', error.message || 'Error al obtener mensajes');
        throw error;
      } finally {
        commit('SET_CONTACT_LOADING', false);
      }
    }
  },
  modules: {},
});