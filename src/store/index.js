import Vue from 'vue'
import Vuex from 'vuex'

import FimleModule from './mudules/film'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    film: FimleModule
  }
})

export default store