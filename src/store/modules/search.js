export default {

  state: {
    keywords: '',
    movies: [],
    loading: false,
  },

  mutations: {
    createMovieList(state, payload) {
      state.movies = payload.value;
    },

    loadingSpiner(state) {
      state.loading = !state.loading;
    },
    endLoadingSpiner(state) {
      state.loading = false
    },

  },

  actions: {

  },

  getters: {
    getMovies(state) {
      return state.movies
    },

    loadingSpiner(state) {
      return state.loading
    }
  },

}