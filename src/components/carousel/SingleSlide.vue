<template>
  <div v-show="visibleSlide === index" class="carousel-movie">
    <router-link :to="'/movie/' + id">
      <img :src="poster" alt="Featured movie poster" class="featured-img" />
      <div class="detail">
        <h3>{{ title }}</h3>
        <p>{{ plot }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['id', 'title', 'plot', 'poster', 'visibleSlide', 'index'],
  setup() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.carousel-movie {
  width: 100%;
}
.featured-img {
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  margin-top: 15px;
}

.detail {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba($color: #000000, $alpha: 0.6);
  z-index: 1;
  padding: 15px;
  border-radius: 0 0 10px 10px;

  h3 {
    color: #fff;
    margin-bottom: 15px;
  }

  p {
    color: #fff;
  }
}

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
