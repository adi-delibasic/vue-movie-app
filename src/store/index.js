import { createStore } from 'vuex';
// import search from './modules/search';



export default createStore({

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

  modules: {

  },
});
