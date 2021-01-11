<template>
  <div class="carousel-movie">
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
  props: ['id', 'title', 'plot', 'poster'],
  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.carousel-movie {
  position: absolute;
  width: 100%;
}
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
</style>
