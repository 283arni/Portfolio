<template lang="pug">
tr.about__row(v-if="editMode === false")
  td.about__tag {{skill.title}}
  td 
    span.about__number {{skill.percent}}
    span.about__static-ricent %
  td.about__td-svg
    button.btn-hover.svg.about__pencil(@click='editMode = true' )
    button.btn-hover.svg.about__trash(@click='deleteSkill')

tr.about__row(v-else)
  td.about__tag
    input.input(
      type="text" 
      placeholder="Навык"
      v-model='editedSkill.title'
      )
  td    
    input.input(
      type="text" 
      placeholder="Проценты"
      v-model='editedSkill.percent'
      )
  td.about__td-svg
    button.btn-hover.svg.about__check(@click='changeSkill')
    button.btn-hover.svg.about__cross(@click='editMode = false')  
</template>

<script>
import {mapActions} from 'vuex';
export default {
  data() {
    return {
    editMode: false,
    editedSkill: {...this.skill}
    }
  },
  props: {
    skill: Object
  },
  methods: {
    ...mapActions('skills',['removeSkill', 'editSkill']),
    async deleteSkill() {
      try {
        await this.removeSkill(this.skill.id);
      } catch (error) {
        alert(error.message)
      }
    },
    async changeSkill(){
      try {
        await this.editSkill(this.editedSkill);
        this.editMode = false;
      } catch (error) {
        alert(error.message)       
      }
    }
  }
}
</script>