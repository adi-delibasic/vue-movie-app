<template>
  <router-link to="/movie/tt0306414">
    <img
      src="https://m.media-amazon.com/images/M/MV5BZmY5ZDMxODEtNWIwOS00NjdkLTkyMjktNWRjMDhmYjJjN2RmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
      alt="Featured movie poster"
      class="featured-img"
    />
    <div class="detail">
      <h3>The Wire</h3>
      <p>
        Set in Baltimore, this show centers around the city's inner-city drug scene. It starts as
        mid-level drug dealer, D'Angelo Barksdale beats a murder rap.
      </p>
    </div>
  </router-link>
</template>

<script>
import { onBeforeMount, computed } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const currentSlide = computed(() => {
      return store.getters.getCurrentSlide;
    });
    const slides = computed(() => {
      return store.getters.getCurrentSlide;
    });

    onBeforeMount(() => {
      console.log(slides.value);
    });

    return {
      currentSlide
    };
  }
};
</script>
<style lang="scss">
.featured-img {
  display: block;
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
  position: relative;
  z-index: 0;
}
</style>
