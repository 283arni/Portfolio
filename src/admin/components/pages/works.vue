<template lang="pug">
  section.works
    h2.title-admin Блок &#171Работы&#187
    .works__add
      .works__wrapper
        .headline
          .headline__title Редактирование работы
        worksForm
    ul.works__createds
      li.works__createds-item
        button.btn-hover.big-btn
          .big-btn__circle
            span.big-btn__pluse +
          .big-btn__text Добавить работу
      li.works__createds-item.works__sample(
        v-for="work in works"
        :key='work.id'
        )
        worksBlocks(:work="work")
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  components: {
    worksForm: ()=> import ("../works-form"),
    worksBlocks: ()=> import ("../works-blocks")
  },
  computed: {
    ...mapState('works', {
      works: state => state.works
    })
  },
  methods: {
    ...mapActions('works',['fetchWorks'])
  },
  async created() {
    try{
      await this.fetchWorks();
    } catch (error) {
      alert(error.message)
    }
  }
}
</script>

<style lang="postcss">

  @import "../../../styles/mixins.pcss";

  .works__add {
    background-color: #fff;
    font-weight: 600;
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
    margin-bottom: 30px;

    @include phones {
      margin-bottom: 20px;
    }
  }

  .works {
    margin-bottom: 50px;
  }

  .works__wrapper {
    padding: 30px;
  }

  .works__container {
    display: flex;
    margin-bottom: 40px;
    padding-top: 45px;

    @include tablets {
      display: block;
      padding: 0 15%;
    }

    @include phones {
      padding: 0;
    }
  }

  .works__download {
    display: flex;
    max-height: 276px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    border: 1px dashed #a1a1a1;
    background-color: #dee4ed;
    margin-right: 30px;

    @include tablets {
      padding: 50px 0;
      margin-right: 0;
      margin-bottom: 50px;
    }
  }

  .works__download-text {
    width: 50%;
    text-align: center;
    line-height: 2.12;
    margin-bottom: 27px;
  }

  .works__download-btn {
    color: #ea7400;
  }

  .works__description {
    flex: 1;
  }

  .works__label {
    display: block;
    margin-bottom: 30px;
  }

  .works__input,
  .works__area {
    width: 100%;
    font-weight: 600;
    color: #414c63;
    
    &::placeholder {
      font-weight: 600;
    }
  }

  .works__area {
    min-height: 146px;
  }

  .works__name-tag {
    margin-right: 10px;
  }

  .works__cross {
    width: 10px;
    height: 10px;
    background: svg-load("cross.svg", fill="#414c63", width="100%", height="100%");
    background-repeat: no-repeat;
  }

  .works__createds {
    display: flex;
    font-weight: 600;
    flex-wrap: wrap;
    justify-content: space-between;
    
    @include tablets {
      justify-content: space-between;
    }

    @include phones {
      display: block;
    }
  }

  .works__createds-item {
    width: 340px;
    margin-bottom: 30px;
    
    @include tablets {
      width: 48%;
      margin-right: 0;
    }

    @include phones {
      width: 100%;
      min-height: auto;
      margin-bottom: 20px;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  .works__sample {
    background-color: #fff;
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  }

  .works__sample-img {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    min-height: 190px;
    background: url("../../../images/content/mini_slaid_1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
  }

  .works__sample-list {
    display: flex;
    flex-wrap: wrap;
  }

  .works__sample-item {
    background-color: #fff;
    padding: 5px 15px;
    border-radius: 15px;
    margin: 5px;
  }

  .works__sample-container {
    padding: 40px 30px;
  }

  .works__sample-title {
    margin-bottom: 24px;
    font-size: 18px;
    font-weight: bold;
  }

  .works__sample-text {
    opacity: 0.7;
    margin-bottom: 30px;
  }

  .works__sample-tag {
    font-size: 13px;
    opacity: 0.5;
  }

  .works__sample-wrapper {
    margin-bottom: 45px;
  }

  .works__sample-link {
    color: #ea7400;
  }
</style>

