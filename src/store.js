import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedPage: null
  },
  getters: {
    selectedPage(state) {
      return state.selectedPage
    }
  },
  mutations: {
    setSelectedPage(state, pageName) {
      state.selectedPage = pageName;
    }
  },
  actions: {
    setSelectedPage({
      commit
    }, pageName) {
      commit('setSelectedPage', pageName);
    }
  }
})