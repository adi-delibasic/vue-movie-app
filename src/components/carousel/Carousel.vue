<template>
  <div class="carousel">
    <SingleSlide />
  </div>
</template>

<script>
import { onBeforeMount, computed } from 'vue';

import SingleSlide from './SingleSlide.vue';
export default {
  components: {
    SingleSlide
  },
  setup() {
    onBeforeMount(() => {});

    return {};
  }
};
</script>
<style lang="scss">
.carousel {
  position: relative;
}
</style>
