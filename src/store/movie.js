import axios from 'axios'

export default {
  namespaced: true,

  state: () => ({
    movies: [],
    message: '',
    loading: false,
  }),

  getters: {},

  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key]
      })
    },
    resetMovies(state) {
      state.movies = []
    },
  },

  actions: {
    async searchMovies({ commit }, payload) {
      const { title, type, number, year } = payload
      const OMDB_API_KEY = 'cdda0f7a'
      const res = await axios.get(
        `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type${type}&y=${year}&page=1`
      )
      const { Search, totalResults } = res.data
      commit('updateState', {
        movies: Search,
      })
    },
  },
}
