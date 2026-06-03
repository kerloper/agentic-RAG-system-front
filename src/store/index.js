import { createStore } from 'vuex'
import { useFetch } from '../composables/useFetch'

const store = createStore({
  state() {
    return {
      messages: [],
      isLoading: false,
      error: null
    }
  },

  mutations: {
    ADD_MESSAGE(state, message) {
      state.messages.push(message)
    },
    SET_LOADING(state, bool) {
      state.isLoading = bool
    },
    SET_ERROR(state, message) {
      state.error = message
    },
    CLEAR_ERROR(state) {
      state.error = null
    }
  },

  actions: {
    async sendQuestion({ commit }, question) {
      // Add user message
      commit('ADD_MESSAGE', {
        id: crypto.randomUUID(),
        role: 'user',
        text: question,
        sources: []
      })

      // Set loading state and clear previous errors
      commit('SET_LOADING', true)
      commit('CLEAR_ERROR')

      try {
        // Call API
        const { post } = useFetch()
        const response = await post('/api/ask', { question })

        // Add assistant message with response and sources
        commit('ADD_MESSAGE', {
          id: crypto.randomUUID(),
          role: 'assistant',
          text: response.answer || response.text || '',
          sources: response.sources || []
        })
      } catch (err) {
        // Set error message
        commit('SET_ERROR', err.message)
      } finally {
        // Always clear loading state
        commit('SET_LOADING', false)
      }
    }
  },

  getters: {
    allMessages: state => state.messages,
    isLoading: state => state.isLoading,
    hasError: state => !!state.error,
    errorMessage: state => state.error
  }
})

export default store
