import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import skills from "./modules/skills";
import reviews from "./modules/reviews";
import works from "./modules/works";

export const store = new Vuex.Store({
  modules: {
    skills,
    reviews,
    works
  }
})