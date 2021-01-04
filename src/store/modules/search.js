import env from '@/env.js';



const state = {
  searchResult: 'This is a movie',
  searchKeywords: 'Superman',
};

const mutations = {
  setCurrentSearch(state, payload) {
    state.searchKeywords = payload;
  }
};

const actions = {


}

const getters = {

};


export default {
  state,
  actions,
  mutations,
}