import { createStore } from 'vuex';
import search from './modules/search';

export default createStore({

  // state: {
  //   test: 'Test state'
  // },


  modules: {
    search,
  },
});
