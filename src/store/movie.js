import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'

export default {
  namespaced: true,

  state: () => ({
    movies: [],
    message: 'Search for the movie title!',
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
    async searchMovies({ commit, state }, payload) {
      // apply 연속 클릭 방지
      if (state.loading) return

      // 검색 내용 초기화
      commit('updateState', {
        message: '',
        loading: true,
      })

      try {
        const res = await _fetchMovie({
          ...payload,
          page: 1,
        })
        const { Search, totalResults } = res.data
        commit('updateState', {
          movies: _uniqBy(Search, 'imdbID'),
        })

        const total = parseInt(totalResults, 10)
        const pageLength = Math.ceil(total / 10)

        // 추가 요쳥!
        if (pageLength > 1) {
          for (let page = 2; page < pageLength; page++) {
            if (page > payload.number / 10) break

            const res = await _fetchMovie({
              ...payload,
              page,
            })
            const { Search } = res.data
            commit('updateState', {
              movies: [...state.movies, ..._uniqBy(Search, 'imdbID')],
            })
          }
        }
      } catch (message) {
        commit('updateState', {
          movies: [],
          message,
        })
      } finally {
        commit('updateState', {
          loading: false,
        })
      }
    },
  },
}

function _fetchMovie(payload) {
  const { title, type, page, year } = payload
  const OMDB_API_KEY = 'cdda0f7a'
  const url = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type${type}&y=${year}&page=${page}`

  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        if (res.data.Error) {
          reject(res.data.Error)
        }
        resolve(res)
      })
      .catch((error) => {
        reject(error.message)
      })
  })
}
