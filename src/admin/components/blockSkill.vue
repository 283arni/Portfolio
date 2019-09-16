<template lang="pug">
.about__add
  .about__team-name.headline(v-if="editCategoryMode === false")
    .about__front {{category.category}}
    button.btn-hover.svg.about__pencil(@click="editCategoryMode = true")
  .about__team-name.headline(v-else)
    input.input.about__name(
      type="text" 
      placeholder="Категория"
      v-model="changeNameCatigory.title.title = editedCategory.category"
      )
    .about__icons
      button.btn-hover.svg.about__check(@click="changeCategory")
      button.btn-hover.svg.about__cross(@click="editCategoryMode = false")
  table.about__skills
    blockItem(
      v-for='skill in skills'
      :key='skill.id'
      :skill='skill'
    )
  .about__new(:class='{blocked: blockedBlock}')
    input.input.about__new-skill(
      type="text" 
      placeholder="Новый навык"
      v-model='skill.title'
      )
    input.input.about__pricents(
      type="text" 
      placeholder="100 %"
      v-model='skill.percent'
      )
    button.btn-hover.about__btn-add(@click="addSkill") +
</template>

<script>
import $axios from "../request";
import {mapActions} from 'vuex';

export default {
  components: {
    blockItem: ()=>  import("./block-item")
  },
  props: {
    skills: Array,
    category: Object
  },
  data() {
    return {
      skill: {
        title: "",
        percent: "",
        category: this.category.id
      },
      blockedBlock: false,
      editCategoryMode: false,
      editedCategory: {...this.category},
      changeNameCatigory: {
        title: {
          title: ''
        },
        id: this.category.id
      }
    }
  },
  methods: {
    ...mapActions('skills', ['addNewSkill','editCategory']),
    async addSkill() {
      this.blockedBlock = true;
      try {
        await this.addNewSkill(this.skill);
        this.skill.title = "";
        this.skill.percent = ""; 

      } catch (error) {
        alert(error.message);
      } finally {
        this.blockedBlock = false;
      }
    },
    async changeCategory() {
      try {
        await this.editCategory(this.changeNameCatigory);
      } catch (error) {
        alert(error.message);
      } finally {
        this.editCategoryMode = false;
      }
    }
  }
}
</script>>