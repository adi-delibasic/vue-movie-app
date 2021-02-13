<template>
  <Spiner v-if="loading" />

  <div v-else class="movie-detail">
    <h2>{{ movie.Title }}</h2>
    <p>{{ movie.Year }}</p>
    <div class="extra-details">
      <img :src="movie.Poster" class="feature-img" :alt="movie.Title" />
      <div class="extra-container">
        <p>
          Imdb: <br />
          {{ movie.imdbRating }}
        </p>
        <p>Metascore: {{ movie.Metascore }}</p>
        <p>Language: {{ movie.Language }}</p>
      </div>
    </div>
    <p>{{ movie.Plot }}</p>
  </div>
</template>

<script>
import { ref, onBeforeMount, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import env from '@/env.js';
import Spiner from '../components/Spiner';

export default {
  components: {
    Spiner
  },
  setup() {
    const movie = ref({});
    const route = useRoute();
    const store = useStore();

    const loading = computed(() => store.getters.loadingSpiner);

    onBeforeMount(() => {
      fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`)
        .then(response => response.json())
        .then(store.commit('loadingSpiner'))
        .then(data => {
          store.commit('loadingSpiner');
          movie.value = data;
          console.log(data.Poster);
        });
    });

    return {
      movie,
      route,
      loading
    };
  }
};
</script>

<style lang="scss">
.movie-detail {
  padding: 15px;
  h2 {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
  }
  .feature-img {
    display: block;
    max-width: 200px;
    margin: 25px 0;
  }
  p {
    color: #fff;
    font-size: 18px;
    line-height: 1.4;
  }
  .extra-details {
    display: flex;
    justify-content: space-between;
    .extra-container {
      padding: 25px;
      p {
        margin: 8px 0px;
      }
    }
  }
}
</style>
