<template lang="pug">
  section.review
    h2.title-admin Блок &#171Отзыв&#187
    .review__add
      .review__wrapper
        .headline 
          .headline__title Новый отзыв
        reviewForm
    ul.review__createds
      li.review__createds-item
        button.btn-hover.big-btn
          .big-btn__circle
            span.big-btn__pluse +
          .big-btn__text Добавить отзыв
      li.review__createds-item(
        v-for="review in reviews"
        :key="review.id"
      )
        reviewsBlocks(
          :review="review"
        )

</template>

<script>

import {mapState, mapActions} from 'vuex';

export default {
  components: {
    reviewForm: ()=> import ("../review-form"),
    reviewsBlocks: ()=> import ("../reviews-blocks")
  },
  computed: {
    ...mapState('reviews', {
      reviews: state => state.reviews
    })
  },
  methods: {
    ...mapActions('reviews',['fetchReviews'])
  },
  async created() {
    try{
      await this.fetchReviews();
    } catch (error) {
      alert(error.message)
    }
  }
}
</script>

<style lang="postcss">

  @import "../../../styles/mixins.pcss";

  .review {
    margin-bottom: 40px;
  }

  .review__add {
    margin-bottom: 30px;

    @include phones {
      margin-bottom: 20px;
    }
  }

  .review__wrapper {
    padding: 30px;
    background-color: #fff;
    font-weight: 600;
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  }
</style>
