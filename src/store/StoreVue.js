import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    msg: null,
    estado: null
  },
  mutations: {
    EDITARMSJ (statu, cambiotext) {
      this.state.msg = cambiotext
    }
  },
  actions: {
    changemsj (context, cambiotext) {
      context.commit('EDITARMSJ', cambiotext)
    }
  },
  getters: {

  }
})
