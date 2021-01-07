<template>
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
</template>

<script>
export default {
  props: ['img']
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
