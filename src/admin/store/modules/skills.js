import { thisExpression } from "babel-types";
import $axios from "../../request";

export default {
  namespaced: true,
  state: {
    skills: 'dfdfsd',
    categories: []
  },
  mutations: {      
    async addBlocks(state) {
      try {
        const response = await $axios.get('/categories');
        state.categories = response.data;
      } catch (error) {
        throw new Error(
          alert(error.response.data.message)
        )   
      }
    }
  }
}; 