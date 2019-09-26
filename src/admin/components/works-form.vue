<template lang="pug">
  form.works__form(ref="formWorks")
    .works__container
      .works__download
        .works__download-text.name-form  Загрузите изображения
        input.works__download-btn(
          type="file"
          @change='changePhoto'
          ref="file"
          )
      .works__description
        label(type="name").works__label
          .name-form Название
          input.input.works__input#name(
            type="text" 
            placeholder="Название сайта"
            v-model='title'
            )
        label(for="link").works__label 
          .name-form Ссылка
          input.input.works__input#link(
            type="text" 
            placeholder="https://www.your-mail.ru"
            v-model='link'
            )
        label(for="textarea").works__label
          .name-form Описание
          textarea.works__area.textarea#textarea(
            placeholder="Введите описание"
            v-model='description'
            )
        label(for="tags").works__label
          .name-form Добавление тэга(-ов)
          input.input.works__input#tags(
            type="text" 
            placeholder="Jquery, Vue.js, HTML5" 
            v-model="techs"
            )                                         
    .btns
      input.btn-hover.btn_cancellation.btn_form(type="reset" value="Отмена") 
      input.btn.btn_save.btn_form(@click="addWork" type="submit" value="Сохранить")
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      title: '',
      techs: '',
      photo:  '',
      link: '',
      description: ''
    }
  },
  methods: {
    ...mapActions('works', ['addNewWork']),
    async addWork() {
      try {
        const data = new FormData()

        data.append('photo', this.photo)
        data.append('title', this.title)
        data.append('techs', this.techs)
        data.append('link', this.link)
        data.append('description', this.description)

        await this.addNewWork(data)
        this.$refs.formWorks.reset();
      } catch (error) {
        alert(error.message)
      }
    },
    changePhoto() {
      this.photo = this.$refs.file.files[0]
    }
  }
}
</script>