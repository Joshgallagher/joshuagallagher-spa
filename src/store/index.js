import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

import blog from '@/app/blog/store'
import portfolio from '@/app/portfolio/store'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    blog,
    portfolio
  }
})

export default store
