<template lang="pug">
  section.works
    h2.title-admin Блок &#171Работы&#187
    .works__add
      .works__wrapper
        .headline
          .headline__title Редактирование работы
        form.works__form
          .works__container
            .works__download
              .works__download-text.name-form Перетащите или загрузите для загрузки изображения
              button.works__download-btn.btn Загрузите
            .works__description
              label(type="name").works__label
                .name-form Название
                input.input.works__input#name(type="text" placeholder="Дизайн сайта для авто салона Porsche")
              label(for="link").works__label 
                .name-form Ссылка
                input.input.works__input#link(type="text" placeholder="https://www.porsche-pulkovo.ru")
              label(for="textarea").works__label
                .name-form Описание
                textarea.works__area.textarea#textarea(placeholder="Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей")
              label(for="tags").works__label
                .name-form Добавление тэга
                input.input.works__input#tags(type="text" placeholder="Jquery, Vue.js, HTML5" )
              ul.works__list
                li.works__item
                  span.works__name-tag HTML
                  button.btn-hover.works__cross
                li.works__item
                  span.works__name-tag CSS
                  button.btn-hover.works__cross
                li.works__item
                  span.works__name-tag Javascript
                  button.btn-hover.works__cross                                                
          .btns
            button.btn-hover.btn__cancellation Отмена
            button.btn__save.btn Сохранить
    ul.works__createds
      li.works__createds-item
        button.btn-hover.big-btn
          .big-btn__circle
            span.big-btn__pluse +
          .big-btn__text Добавить работу
      li.works__createds-item.works__sample
        .works__sample-img
          ul.works__sample-list
            li.works__sample-item
              span.works__sample-tag HTML
            li.works__sample-item
              span.works__sample-tag CSS
            li.works__sample-item
              span.works__sample-tag Javascript                                 
        .works__sample-container
          .works__sample-title Сайт школы образования
          .works__sample-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
          .works__sample-wrapper
            a.works__sample-link.link-hover(href="http://loftschool.ru" target="_blank") http://loftschool.ru
          .edit
            button.btn-hover.edit__rule
              span.edit__row Править
              .edit__pencil
            button.btn-hover.edit__rule
              span.edit__row Удалить
              .edit__cross
</template>

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
    padding: 15px 40px;
    
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

  .works__list {
    display: flex;
  }

  .works__item {
    display: flex;
    align-items: center;
    font-size: 13px;
    margin-right: 10px;
    padding: 10px 18px;
    background-color: #f4f4f4;
    border-radius: 20px;
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
    
    @include tablets {
      justify-content: space-between;
    }

    @include phones {
      display: block;
    }
  }

  .works__createds-item {
    width: 340px;
    min-height: 556px;
    margin-right: 30px;
    
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
    margin: 0 10px 10px 0;
  }

  .works__sample-item {
    background-color: #fff;
    padding: 5px 15px;
    border-radius: 15px;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
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

