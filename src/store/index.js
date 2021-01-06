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
      console.log(state.movies);
    }
  },

  actions: {
    createMovieList() {
      commit('createMovieList');
    }
  },

  getters: {
    getMovies: state => state.movies
  },

  modules: {

  },
});
