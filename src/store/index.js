import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthUser: false,
    userInfo: {},
  },

  mutations: {
    updateUserInfo(state, { userInfo }) {
      state.isAuthUser = true
      state.userInfo = userInfo
    }
  },
})
