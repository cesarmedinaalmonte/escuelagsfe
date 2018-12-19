import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
import Cursos from './modules/Cursos'
import Estudiante from './modules/Estudiante'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    Cursos,
    Estudiante
  },
  state: {
    nombre: '',
  },
  mutations: {},
  actions: {},
  getters: {}
})
