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
      li.review__createds-item
        .review__createds-container
          .review__createds-human.headline
            img.review__createds-avatar(src="../../../images/content/saban.png", alt="Аватарка")
            .review__createds-data
              .review__createds-name Владимир Сабанцев
              .review__createds-position Преподаватель
          .review__createds-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
          .edit
            button.btn-hover.edit__rule
              span.edit__row Править
              .edit__pencil
            button.btn-hover.edit__rule
              span.edit__row Удалить
              .edit__cross
</template>

<script>
export default {
  components: {
    reviewForm: ()=> import ("../review-form")
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
