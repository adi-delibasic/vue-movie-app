import { createStore } from 'vuex';
import search from './modules/search';
import carousel from './modules/carousel';



export default createStore({

  modules: {
    search,
    carousel
  },
});
