import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    configurations: []
  },
  mutations: {
    setConfigurations (state, configurations) {
      state.configurations = configurations
    }
  },
  actions: {
    async getConfigurations ({ commit }, token) {
      const res = await fetch('/.netlify/functions/displayConfig', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(res)
    }
  },
  modules: {
  }
})
