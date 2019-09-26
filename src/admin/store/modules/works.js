export default {
  namespaced: true,
  state: {
    works: []
  },
  actions: {
    async addNewWork({commit}, newWork) {
      try {
        console.log(newWork)
        const response = await this.$axios.post('/works', newWork);
        commit('ADD_WORK', response.data);
      } catch (error) {
        throw new Error(
          error.response.data.message || error.response.data.error
        );
      }
    },
    async fetchWorks({commit}) {
      try{
        const response = await this.$axios.get('/works/144');
        await commit('SET_WORK', response.data)
      } catch (error) {
        throw new Error(
          error.response.data.message || error.response.data.error
        )  
      }
    },
    async removeWork({commit}, workId) {
      try{
        const response = await this.$axios.delete(`/works/${workId}`);
        commit('DELETE_REVIEW', workId)
      } catch (error) {
        throw new Error(
          error.response.data.message || error.response.data.error
        )  
      }
    }
  },
  mutations: {
    ADD_WORK(state, newWork) {
      state.works.push(newWork)
    },
    SET_WORK(state, works) {
      state.works = works
    },
    DELETE_REVIEW(state, workId) {
      state.works = state.works.filter(work => work.id !== workId)
    }
  }
}