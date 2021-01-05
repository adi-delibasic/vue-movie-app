<template>
  <div class="home">
    <!-- Featured movie card -->
    <div class="featured-card">
      <router-link to="/movie/tt0409591">
        <img
          src="https://images.pexels.com/photos/4553622/pexels-photo-4553622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Featured movie poster"
          class="featured-img"
        />
        <div class="detail">
          <h3>Featured Movie</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellendus fugiat deserunt
            perferendis, dignissimos reiciendis tempore autem fugit modi rem natus harum ipsa qui
            delectus culpa voluptatibus mollitia dolorum molestiae.
          </p>
        </div>
      </router-link>
    </div>
    <form class="search-box" @submit.prevent="SearchMovies()">
      <input type="text" placeholder="Type the movie name..." v-model="search" />
      <input type="submit" value="Search" />
    </form>

    <div class="movies-list">{{}}</div>
  </div>
</template>

<script>
import env from '@/env.js';
import { ref } from 'vue';

export default {
  setup() {
    // Vuex

    // Search query
    const search = ref('');
    const movies = ref([]);

    const SearchMovies = () => {
      if (search.value != '' || search.value != null) {
        fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
          });

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
}
</style>
