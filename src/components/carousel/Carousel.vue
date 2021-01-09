<template>
  <div class="carousel" v-for="slide in slides" :key="slide.id">
    <SingleSlide />
  </div>
</template>

<script>
import { onBeforeMount, computed } from 'vue';
import { useStore } from 'vuex';
import SingleSlide from './SingleSlide.vue';
export default {
  components: {
    SingleSlide
  },
  setup() {
    const store = useStore();
    const currentSlide = computed(() => {
      return store.getters.getCurrentSlide;
    });
    const slides = computed(() => {
      return store.getters.getSlides;
    });

    onBeforeMount(() => {});

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
}
</style>
