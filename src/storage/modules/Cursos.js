import axios from 'axios'
import {store} from '../storage'

const url = 'http://127.0.0.1:8000'

const state = {
  endpoints: {
    curso:  url + '/Curso/'
  },
  cursosarray: []
}

const mutations = {
/** Cursos**/
  async listarCursos (state) {
    await axios.get(state.endpoints.curso).then((response) => {
      state.cursosarray = response.data
    }).catch(error => {
      state.cursosarray = []
    })
  },
}
const actions = {
  /* Curso */
  getCursos ({commit}) {
    commit('listarCursos')
  }
}

const getters = {
  cursosarray: (state) => {
    return state.cursosarray
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
