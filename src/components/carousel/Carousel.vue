<template>
  <div class="carousel">
    <SingleSlide
      v-for="(slide, index) in slides"
      :key="slide.id"
      :title="slide.title"
      :plot="slide.plot"
      :id="slide.id"
      :poster="slide.poster"
      :visibleSlide="visibleSlide"
      :index="index"
      :visible="index"
    />
  </div>
</template>

<script>
import { onBeforeMount, computed, ref, onBeforeUnmount } from 'vue';

import SingleSlide from './SingleSlide.vue';
export default {
  components: {
    SingleSlide
  },
  setup() {
    const slides = [
      {
        id: 'tt0306414',
        poster:
          'https://m.media-amazon.com/images/M/MV5BZmY5ZDMxODEtNWIwOS00NjdkLTkyMjktNWRjMDhmYjJjN2RmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
        title: 'The Wire',
        plot: 'Set in Baltimore, this show centers around the citys inner-city drug scene'
      },
      {
        id: 'tt1020558',
        poster:
          'https://m.media-amazon.com/images/M/MV5BMTQ4NTI1MTEzM15BMl5BanBnXkFtZTcwNDc3NDc1Mw@@._V1_SX300.jpg',
        title: 'Centurion',
        plot:
          'Britain, A.D. 117. Quintus Dias, the sole survivor of a Pictish raid on a Roman frontier fort...'
      },
      {
        id: 'tt0112681',
        poster:
          'https://m.media-amazon.com/images/M/MV5BNGIwNjAzZmQtMzZmZC00NDM5LTg0ZjctMzZmOTQxM2Y1OGRlXkEyXkFqcGdeQXVyNTM0NTU5Mg@@._V1_SX300.jpg',
        title: 'Citizen X',
        plot:
          'Based on the true story of a Russian serial killer who, over many years, claimed over 50 victims...'
      }
    ];
    const visibleSlide = ref(0);
    const interval = ref('');

    const SliderActive = slide => {
      interval.value = setInterval(() => {
        slide.value === 2 ? (slide.value = 0) : slide.value++;
      }, 2000);
    };
    onBeforeMount(() => {
      SliderActive(visibleSlide);
    });

    // Clear slider interval on other pages
    onBeforeUnmount(() => {
      clearInterval(interval.value);
    });

    return {
      slides,
      visibleSlide,
      SliderActive,
      interval
    };
  }
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
  position: absolute;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(500px);
}
</style>
