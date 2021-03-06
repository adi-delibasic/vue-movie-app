<template>
  <div class="home">
    <!-- Featured movie card -->
    <div class="featured-card">
      <Carousel />
    </div>
    <form class="search-box" @submit.prevent="SearchMovies()">
      <input v-model="search" type="text" placeholder="Type the movie name..." />
      <input type="submit" value="Search" />
    </form>
    <!-- loading spinner -->
    <Spiner v-if="loading" />
    <div v-else>
      <div class="movie-list">
        <div v-for="movie in movieList" :key="movie.imdbID" class="movie">
          <router-link class="movie-link" :to="'/movie/' + movie.imdbID">
            <div class="movie-image">
              <img :src="movie.Poster" alt="Movie Poster" />
              <div class="movie-type">
                {{ movie.Type }}
              </div>
            </div>
            <div class="movie-details">
              <p class="movie-year">
                {{ movie.Year }}
              </p>
              <h3 class="movie-title">
                {{ movie.Title }}
              </h3>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref, computed } from 'vue';
import env from '@/env.js';
import Carousel from '../components/carousel/Carousel.vue';
import Spiner from '../components/Spiner';

export default {
  components: {
    Carousel,
    Spiner
  },

  setup(props) {
    const store = useStore();
    // Vuex
    const movieList = computed(() => store.getters.getMovies);

    // spiner icon
    const loading = computed(() => store.getters.loadingSpiner);
    // Check for movie img

    // Search query
    const search = ref('');
    const movies = [];

    const SearchMovies = () => {
      if (search.value != '' || search.value != null) {
        fetch(`https://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
          .then(response => response.json())
          .then(store.commit('loadingSpiner'))
          .then(data => {
            // Store the response array

            movies.value = data.Search;
            store.commit('loadingSpiner');
            store.commit('createMovieList', movies);
            // console.log(movieList.value);
          });

        // Reset input field
        search.value = '';
      }
    };

    return {
      store,
      search,
      movies,
      SearchMovies,
      movieList,
      loading
    };
  }
};
</script>

<style lang="scss">
.home {
  .featured-card {
    position: relative;
  }
  .search-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;

    input {
      display: block;
      appearance: none;
      border: none;
      background-color: none;

      &[type='text'] {
        width: 100%;
        color: #fff;
        font-size: 20px;
        padding: 10px 15px;
        border-radius: 5px;
        margin-bottom: 15px;
        transition: 400ms;
        color: #3d3d3d;

        &::placeholder {
          columns: #3d3d3d;
        }

        &:focus {
          box-shadow: 0px 3px 6px rgba($color: #000000, $alpha: 0.5);
        }
      }

      &[type='submit'] {
        width: 100%;
        max-width: 250px;
        background-color: #f4a261;
        padding: 5px 10px;
        border-radius: 5px;
        color: #fff;
        font-size: 20px;
        text-transform: uppercase;
        transition: 400ms;

        &:active {
          background-color: #e9c46a;
        }
      }
    }
  }

  // Movie list

  .movie-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0px 6px;

    .movie {
      max-width: 50%;
      flex: 1 1 50%;
      padding: 14px 10px;

      &-link {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      &-image {
        position: relative;
        display: block;
        img {
          display: block;
          width: 100%;
          height: 275px;
          object-fit: cover;
        }
      }
      &-type {
        position: absolute;
        padding: 6px 10px;
        background-color: #e9c46a;
        color: #fff;
        bottom: 15px;
        left: 0px;
        text-transform: capitalize;
      }
      &-year {
        color: #f3f3f3;
      }
      &-title {
        color: #fff;
      }

      &-details {
        background: rgba($color: #000000, $alpha: 0.1);
        padding: 10px;
        border-radius: 0px 0 10px 10px;
      }
    }
  }
}
</style>
