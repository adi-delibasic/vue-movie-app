<template>
  <div id="app">
    <header>
      <router-link class="logo-center" to="/">
        <img src="./assets/logo.png" alt="" />
      </router-link>
    </header>
    <div id="app-inner">
      <main class="homepage-main">
        <router-view />
      </main>
    </div>
    <footer />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import Spiner from './components/Spiner';

export default {
  components: {
    Spiner
  },

  setup() {
    const store = useStore();

    return {
      store
    };
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

#app-inner {
  margin-top: 30px !important;
  padding: 20px;
  margin: 10px;
  box-shadow: 0px 10px 13px -7px #000000, 35px -20px 3px -24px rgba(0, 0, 0, 0);
  border-radius: 10px;
}
body {
  background: #2d2d2d;
}
.logo-center {
  text-align: center;
}
@media only screen and (min-width: 768px) {
  #app-inner {
    max-width: 800px;
    margin: auto;
  }
}
header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: #2a9d8f;
  box-shadow: 0px 0px 5px rgba(#000000, 0.2);
  text-transform: uppercase;

  img {
    width: 20%;
  }
  h1 {
    color: #e9c46a;
    font-size: 30px;
    text-transform: capitalize;

    span {
      color: #e9c46a;
    }
  }
}
</style>
