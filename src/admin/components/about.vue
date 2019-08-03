<template lang="pug">
  section.about
    h2.title-admin Блок &#171Обо мне&#187
    ul.about__list
      li.about__block
        .about__add
          .about__team-name.headline
            input(type="text" placeholder="Название новой группы").input.about__name
            .about__icons
              button.btn-hover.svg.about__check
              button.btn-hover.svg.about__cross   
          .about__new
            input.input.about__new-skill(
              type="text" 
              v-model="skill.title"  
              placeholder="Новый навык"
              )
            input.input.about__pricents(
              type="text" 
              v-model="skill.percent"
              placeholder="100 %"
              )
            button.btn-hover.about__btn-add +
      li.about__block(
        v-for="category in categories" 
        :key="category.id"
        )
        .about__add
          .about__team-name.headline 
            .about__front {{category.category}}
            button.btn-hover.svg.about__pencil
          table.about__skills
            tr.about__row
              td.about__tag HTML5
              td 
                span.about__number 100
                span.about__static-ricent %
              td.about__td-svg
                button.btn-hover.svg.about__pencil
                button.btn-hover.svg.about__trash
          .about__new
            input.input.about__new-skill(type="text" placeholder="Новый навык")
            input.input.about__pricents(type="text" 
            placeholder="100 %")
            button.btn-hover.about__btn-add +
</template>

<script>
import $axios from "../request"
import {mapActions, mapState, mapMutations} from 'vuex';

export default {

  data(){
    return {
      skill: {
        title: "",
        percent: "",
        category: ''
      }
    }
  },
  computed: {
    ...mapState('skills', {
   categories: state => state.categories
    })
  },
  methods: {
    ...mapMutations('skills',['addBlocks']),  

  },
  mounted() {
    this.addBlocks()
  }
}

</script>

<style lang="postcss">

  @import "../../styles/mixins.pcss";

  .about {
    margin-bottom: 50px;
  }

  .about__list {
    display: flex;

    @include phones {
      display: block;
    }
  }

  .about__block {
    display: flex;
    width: 48%;
    min-height: 387px;
    padding: 30px;
    background-color: #fff;
    margin-right: 30px;
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);

    &:last-child {
      margin-right: 0;
    }

    @include phones {
      width: 100%;
      margin-bottom: 20px;
    }
  }

  .about__add {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .about__team-name {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 18px;
  }

  .about__new {
    display: flex;
    justify-content: flex-end;
  }

  .about__icons {
    display: flex;
  }

  .about__new-skill {
    width: 50%;
    margin-right: 10px;
  }

  .about__pricents {
    width: 20%;
    margin-right: 30px;
  }

  .about__btn-add {
    min-width: 40px;
    height: 40px;
    color: #fff;
    font-size: 30px;
    border-radius: 50%;
    background: linear-gradient(to right, #f29400, #ea7400);
  }

  .about__row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    & td {
      flex: 1;
    }

    & .about__tag {
      flex: 4;
    }
  }

  .about__td-svg {
    display: flex;
    justify-content: flex-end;

    & .about__pencil {
      margin-right: 10px;
    }
  }

  .about__check {
    margin-right: 20px;
    background: svg-load("tick.svg", fill="#00d70a");
  }

  .about__cross {
    background: svg-load("cross.svg", fill="#bf2929");
  }

  .about__pencil {
    background: svg-load("pencil.svg", fill="#414c63", width="100%", height="100%");
  }

  .about__trash {
    background: svg-load("trash.svg", fill="#414c63", width="100%", height="100%");
  }

</style>