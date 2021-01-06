<template>
  <div class="home">
    <!-- Featured movie card -->
    <div class="featured-card">
      <router-link to="/movie/tt0306414">
        <img
          src="https://m.media-amazon.com/images/M/MV5BZmY5ZDMxODEtNWIwOS00NjdkLTkyMjktNWRjMDhmYjJjN2RmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
          alt="Featured movie poster"
          class="featured-img"
        />
        <div class="detail">
          <h3>The Wire</h3>
          <p>
            Set in Baltimore, this show centers around the city's inner-city drug scene. It starts
            as mid-level drug dealer, D'Angelo Barksdale beats a murder rap.
          </p>
        </div>
      </router-link>
    </div>
    <form class="search-box" @submit.prevent="SearchMovies()">
      <input type="text" placeholder="Type the movie name..." v-model="search" />
      <input type="submit" value="Search" />
    </form>

    <div class="movie-list">
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
        <router-link class="movie-link" :to="'/movie/' + movie.imdbID">
          <div class="movie-image">
            <img :src="movie.Poster" alt="Movie Poster" />
            <div class="movie-type">
              {{ movie.Type }}
            </div>
          </div>
          <div class="movie-details">
            <p class="movie-year">{{ movie.Year }}</p>
            <h3 class="movie-title">{{ movie.Title }}</h3>
          </div>
        </router-link>
      </div>
    </div>
    =======
    <div class="movies-list">{{}}</div>
    >>>>>>> 3189efd1371d4eaad0bcc0fb2ba878398408306d
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';

import env from '@/env.js';
import { ref } from 'vue';

export default {
  setup() {
    // Vuex

    const store = useStore();

    // Search query
    const search = ref('');
    const movies = ref([]);

    const SearchMovies = () => {
      if (search.value != '' || search.value != null) {
        fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
          .then(response => response.json())
          .then(data => {
            //Store the ewsponse array
            movies.value = data.Search;
            // Reset input field
            search.value = '';
          });

        console.log(search.value);
        // Reset input field
        search.value = '';
      }
    };

    return {
      search,
      movies,
      SearchMovies
    };
  }
};
</script>

<style lang="scss">
.home {
  .featured-card {
    position: relative;

    .featured-img {
      display: block;
      width: 100%;
      height: 400px;
      object-fit: cover;
      object-position: center;
      position: relative;
      z-index: 0;
    }
  }

  .detail {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($color: #000000, $alpha: 0.6);
    z-index: 1;
    padding: 15px;

    h3 {
      color: #fff;
      margin-bottom: 15px;
    }

    p {
      color: #fff;
    }
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
