<template>
  <div class="home">
    <!-- Featured movie card -->
    <div class="feature-card">
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.home {
  .featured-card {
    position: relative;

    .featured-img {
      display: block;
      width: 100%;
      height: 250px;
      object-fit: cover;
      object-position: center;
      position: relative;
      z-index: 0;
    }
  }
}
</style>
