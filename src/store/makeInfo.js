import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: 0,
  },

  mutations: {
    update(state, index) {
      state.test += index
    }
  },
})
