export default {
  namespaced: true,
  state: {
    reviews: []
  },
  actions: {
    async addNewReview({commit}, newComit) {
      try {
        const response = await this.$axios.post('/reviews', newComit);
        commit('ADD_REVIEW', response.data);
      } catch (error) {
        throw new Error(
          error.response.data.message || error.response.data.error
        );
      }
    },
    async fetchReviews({commit}) {
      try{
        const {data: reviews} = await this.$axios.get('/reviews/144');
        await commit('SET_REVIEWS', reviews)
      } catch (error) {
        throw new Error(
          error.response.data.message || error.response.data.error
        )  
      }
    },
    async removeReview({commit}, reviewId) {
      try{
        const response = await this.$axios.delete(`/reviews/${reviewId}`);
        commit('DELETE_REVIEW', reviewId)
      } catch (error) {
        throw new Error(
          error.response.data.message || error.response.data.error
        )  
      }
    }
  },
  mutations: {
    ADD_REVIEW(state, newComit) {
      state.reviews.push(newComit);
    },
    SET_REVIEWS(state, reviews) {
      state.reviews = reviews
    },
    DELETE_REVIEW(state, reviewId) {
      state.reviews = state.reviews.filter(review => review.id !== reviewId)
    }
  }
};