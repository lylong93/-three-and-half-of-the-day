import state from './state.js'
import mutations from './mutations.js'

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations
})
export default store
