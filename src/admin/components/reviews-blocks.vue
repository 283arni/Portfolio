<template lang="pug">
  .review__createds-container
    .review__createds-human.headline
      img.review__createds-avatar(:src="url + review.photo")
      .review__createds-data
        .review__createds-name {{review.author}}
        .review__createds-position {{review.occ}}
    .review__createds-text {{review.text}}
    .edit
      button.btn-hover.edit__rule(@click="deleteReview")
        span.edit__row Удалить
        .edit__cross
</template>

<script>
import {mapActions} from 'vuex';
export default {

  data() {
    return {
      url: 'https://webdev-api.loftschool.com/'
    }
  },
  props: {
   review: Object
  },
  methods: {
    ...mapActions('reviews', ['removeReview']),
    async deleteReview() {
      try {
        await this.removeReview(this.review.id)
      } catch (error) {
        alert(error.message)
      }
    }
  }
}
</script>