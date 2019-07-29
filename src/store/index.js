import Vuex from 'vuex'
import Vue from 'vue'
import albums from './modules/albums'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    albums
  }
});