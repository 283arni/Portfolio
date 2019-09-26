<template lang="pug">
  form.review__form#form-rewiew(ref="formReview")
    .review__container
      .review__avatar
        .review__circle#picture
          .review__svg
        input.review__add-photo#file(
          type="file" 
          ref="file" 
          @change='changePhoto'
          )
      .review__inputs
        .review__person
          label(for="person").review__label.review__label_indent
            .name-form Имя автора
            input.input.review__input#person(
              type="text" 
              placeholder="Ковальчук Дмитрий"
              v-model="person"
              )
          label(for="position").review__label
            .name-form Титул автора
            input.input.review__input#position(
              type="text" 
              placeholder="Основатель LoftSchool"
              v-model="position"
              )
        label(for="review-textarea").review__label
          .name-form Отзыв
          textarea.review__textarea.textarea#review-textarea(
            type="textarea" 
            placeholder="Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!"
            v-model="textarea"
            )
    .btns
      input.btn-hover.btn_cancellation.btn_form(type="reset" value="Отмена") 
      input.btn.btn_save.btn_form(@click="addReview" type="submit" value="Сохранить")
</template>

<script>
import {mapActions, mapState} from 'vuex';
import $axios from "../request";

export default {
  data() {
    return {
      photo: '',
      position: '',
      person: '',
      textarea: ''
    }
  },
  methods: {
    ...mapActions('reviews', ['addNewReview']),
    async addReview() {
      try {
        const data = new FormData()

        data.append('photo', this.photo)
        data.append('author', this.person)
        data.append('occ', this.position)
        data.append('text', this.textarea)

        await this.addNewReview(data)
        this.$refs.formReview.reset();
      } catch (error) {
        alert(error.message)
      }
    },
    changePhoto() {
      this.photo = this.$refs.file.files[0]
      let reader = new FileReader()
      let elem = document.getElementById('picture')
      reader.readAsDataURL(this.photo)

      reader.onloadend = function() {
        elem.firstChild.remove()
        let img = document.createElement('img')
        img.src = reader.result
        elem.append(img)
      }
    }
  }
}
</script>

<style lang="postcss">

@import "../../styles/mixins.pcss";


.review__form {
  width: 85%;

  @include tablets {
    width: 100%;
  }
}

.review__container {
  display: flex;
  margin-bottom: 30px;
  padding-top: 45px;

  @include phones {
    display: block;
  }
}

.review__avatar {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 30px;

  @include phones {
    margin-right: 0;
    margin-bottom: 40px;
  }
}

.review__circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #dee4ed;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
  }
}

.review__svg {
  width: 84px;
  height: 110px;
  background: svg-load("avatar.svg", fill="#ffffff", width="100%", height="100%");
  background-repeat: no-repeat;
}
.review__add-photo {
  color: #ea7400;
}
.review__inputs {
  flex: 3;
}

.review__label {
  display: block;
  flex: 1;
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }

  @include tablets {
    margin-right: 0;
  }
}

.review__label_indent {
  @include tablets {
    margin-bottom: 20px;
  }
}

.review__textarea {
  width: 100%;
  min-height: 116px;
      
  &::placeholder {
    font-weight: 600;
  }
}

.review__input {
  width: 100%;
      
  &::placeholder {
    font-weight: 600;
  }
}

.review__person {
  display: flex;
  margin-bottom: 40px;

  @include tablets {
    display: block;
    width: 70%;
  }

  @include phones {
    width: 100%;
  }
}

.review__createds {
  display: flex;
  flex-wrap: wrap;
  font-weight: 600;
  justify-content: space-between;

  @include phones {
    display: block;
  }
}

.review__createds-item {
  width: 31%;
  min-height: 338px;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  margin-bottom: 30px;

  @include tablets {
    width: 48%;
  }

  @include phones {
    width: 100%;
    min-height: auto;
    margin-right: 0;
    margin-bottom: 20px;
  }
}

.review__createds-container {
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: #fff;
}

.review__createds-human {
  display: flex;
}

.review__createds-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  margin-right: 20px;
}

.review__createds-name {
  font-size: 18px;
  margin-bottom: 10px;
}

.review__createds-position {
  opacity: 0.5;
}

.review__createds-text {
  opacity: 0.7;
  line-height: 1.88;

  @include phones {
    margin-bottom: 20px;
  }
}
</style>