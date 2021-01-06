import { createStore } from 'vuex';
// import search from './modules/search';



export default createStore({

  state: {
    movies: ['Film'],
  },

  mutations: {
    createMovieList(state, payload) {
      // state.movies.push(payload);
      state.movies = payload;
    }
  },

  actions: {
    createMovieList(state, payload) {
      state.commit('createMovieList', { payload });
    }
  },

  getters: {
    getMovies(state) {
      return state.movies
    }
  },

  modules: {

  },
});
