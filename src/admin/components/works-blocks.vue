<template lang="pug">
  .works__createds-container
    .works__sample-img(:style="{backgroundImage:`url(https://webdev-api.loftschool.com/${work.photo})`}")
      ul.works__sample-list
        li.works__sample-item(v-for='tag in tags')
          span.works__sample-tag {{tag}}                           
    .works__sample-container
      .works__sample-title {{work.title}}
      .works__sample-text {{work.description}}
      .works__sample-wrapper
        a.works__sample-link.link-hover(:href="work.link" target="_blank") {{work.link}}
      .edit
        button.btn-hover.edit__rule(@click='deleteWorkBlock')
          span.edit__row Удалить
          .edit__cross
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: {
    work: Object
  },
  data() {
    return {
      tags:[]
    }
  },
  methods: {
    ...mapActions('works', ['removeWork']),
    async deleteWorkBlock() {
      try {
        await this.removeWork(this.work.id)
      } catch (error) {
        alert(error.message)
      }
    }
  },
  created() {
    this.tags = this.work.techs.split(',');
  }
}
</script>