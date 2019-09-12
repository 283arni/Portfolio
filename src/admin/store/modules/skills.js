import { thisExpression } from "babel-types";

export default {
  namespaced: true,
  state: {
    skills:[],
    categories: []
  },
  actions: {
    async addNewSkill({commit}, newSkills) {
      try {
        const response = await this.$axios.post('/skills', newSkills);
        commit('ADD_SKILL', response.data)
      } catch (error) {
        throw new Error(
          error.response.data.message || error.response.data.error
        )   
      }
    },
    async fetchSkill({commit}) {
      try{
        const {data: skills} = await this.$axios.get('/skills/144');
        commit('SET_SKILLS', skills)
      } catch (error) {
        throw new Error(
          error.response.data.message || error.response.data.error
        )  
      }
    },
    async addBlocks({commit}) {
      try {
        const response = await this.$axios.get('/categories');
        commit('SET_CATEGORIES', response.data);
      } catch (error) {
        throw new Error(
          error.response.data.message || error.response.data.error
        )   
      }
    },
    async removeSkill({commit}, skillId) {
      try {
        const response = await this.$axios.delete(`/skills/${skillId}`)
        commit('REMOVE_SKILL', skillId)
      } catch (error) {
        throw new Error(
          error.response.data.message || error.response.data.error
        )   
      } 
    },
    async editSkill({commit}, skill) {
      try {
        const response = await this.$axios.post(`/skills/${skill.id}`, skill)
        commit('EDIT_SKILL', skill)
      } catch (error) {
        throw new Error(
          error.response.data.message || error.response.data.error
        )   
      } 
    },
    async editCategory({commit}, changeNameCatigory) {
      try {
        const response = await this.$axios.post(`/categories/${changeNameCatigory.id}`, changeNameCatigory.title)
        commit('EDIT_CATEGORY', category)
      } catch (error) {
        throw new Error(
          error.response.data.message || error.response.data.error
        )   
      } 
    }
  },
  mutations:  {
    SET_SKILLS(state, skills) {
      state.skills = skills;
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    ADD_SKILL(state, skill) {
      state.skills.push(skill)
    },
    REMOVE_SKILL(state, removedSkillId) {
      state.skills = state.skills.filter(skill => skill.id !== removedSkillId)
    },
    EDIT_SKILL(state, editedSkill) {
      state.skills = state.skills.map(skill => {
        return skill.id === editedSkill.id ? editedSkill : skill
      })
    },
    EDIT_CATEGORY(state, editedCategory) {
      state.categories = state.categories.map(category => {
        return category.id === editedCategory.id ? editedCategory.category : category
      })
    }
  }
}; 