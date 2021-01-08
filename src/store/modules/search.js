export default {

  state: {
    keywords: '',
    movies: [],
  },

  mutations: {
    createMovieList(state, payload) {
      state.movies = payload.value;
    }
  },

  actions: {

  },

  getters: {
    getMovies(state) {
      return state.movies
    }
  },

}