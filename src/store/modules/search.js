import env from '@/env.js';



const state = {
  movies: [],
};

const mutations = {
  createMovieList(state, payload) {
    state.movies.push(payload);
    console.log(state.movies);
  }
};

const actions = {
  createMovieList(context) {
    context.commit('createMovieList');
  }

}

const getters = {
  getMovies: state => state.movies
};


export default {
  state,
  actions,
  mutations,
  getters,
}