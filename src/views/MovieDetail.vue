<template>
  <div class="movie-detail">
    <h2>{{ movie.Title }}</h2>
    <p>{{ movie.Year }}</p>
    <img :src="movie.Poster" class="feature-img" alt="{{movie.Title}} poster" />
    <p>{{ movie.Plot }}</p>
  </div>
</template>

<script>
import { ref, onBeforeMount, computed } from 'vue';
import { onBeforeRouteLeave, useRoute } from 'vue-router';
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

    onBeforeMount(() => {
      fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`)
        .then(response => response.json())
        .then(data => {
          movie.value = data;
          console.log(data);
        });
    });

    return {
      movie,
      route
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
}
</style>
