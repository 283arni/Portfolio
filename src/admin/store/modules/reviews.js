export default {
  namespaced: true,
  state: {
    reviews: []
  },
  actions: {
    async addNewReview({commit}, newComit) {
      try {
        const response = await this.$axios.post('/reviews', newComit);
        console.log(response.data)
        commit('ADD_REVIEW', response.data)
      } catch (error) {
        throw new Error(
          error.response.data.message || error.response.data.error
        )   
      }
    }
  },
  mutations: {
    ADD_REVIEW(newComit) {
      state.reviews.push(newComit);
      console.log(reviews)
    }
  }

};