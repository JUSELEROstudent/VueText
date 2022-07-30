import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    msg: null,
    estado: []
  },
  mutations: {
    EDITARMSJ (state, cambiotext) {
      this.state.msg = cambiotext
    },
    AGREGARLISTA (state, nuevoval) {
      this.state.estado.push(nuevoval)
    }
  },
  actions: {
    changemsj (context, cambiotext) {
      context.commit('EDITARMSJ', cambiotext)
    },
    agregarnuevo (context, nuevoval) {
      context.commit('AGREGARLISTA', nuevoval)
    }
  },
  getters: {

  }
})
