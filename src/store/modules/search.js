export default {

  state: {
    keywords: '',
    movies: [],
    loading: false,
  },

  mutations: {
    createMovieList(state, payload) {
      state.movies = payload.value;
      for (let movie of state.movies) {
        if (movie.Poster == 'N/A')
          movie.Poster = 'https://image.freepik.com/free-vector/photo-coming-soon_77760-116.jpg'
      }

    },
    loadingSpiner(state) {
      state.loading = !state.loading;
    },
    endLoadingSpiner(state) {
      state.loading = false;
    },

  },

  getters: {
    getMovies(state) {
      return state.movies;
    },

    loadingSpiner(state) {
      return state.loading;
    },
  },

};
