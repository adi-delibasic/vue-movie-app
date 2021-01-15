<template>
  <div id="app">
    <header>
      <router-link to="/">
        <h1><span>Movies</span>DB</h1>
      </router-link>
    </header>
    <Spiner />
    <main>
      <router-view />
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Spiner from './components/Spiner';

export default {
  components: {
    Spiner
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  &::selection {
    background: transparentize(#fff1e6, $amount: 0.5);
  }
}

body {
  background: #2d2d2d;
}

a {
  text-decoration: none;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: #2a9d8f;
  box-shadow: 0px 0px 5px rgba(#000000, 0.2);
  text-transform: uppercase;

  h1 {
    color: #f4a261;
    font-size: 30px;
    text-transform: capitalize;

    span {
      color: #e9c46a;
    }
  }
}
</style>
