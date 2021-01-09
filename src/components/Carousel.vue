<template>
  <div class="carousel" v-for="slide in slides" :key="slide.id">
    <router-link to="/movie/slide.id">
      <img :src="slide.poster" alt="Featured movie poster" class="featured-img" />
      <div class="detail">
        <h3>{{ slide.title }}</h3>
        <p>
          {{ slide.excerpt }}
        </p>
      </div>
    </router-link>
  </div>
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
      return store.getters.getSlides;
    });

    onBeforeMount(() => {
      console.log(slides.value);
    });

    return {
      currentSlide,
      slides,
      store
    };
  }
};
</script>
<style lang="scss">
.carousel {
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
}
</style>
