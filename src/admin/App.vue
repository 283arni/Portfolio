
<template lang="pug">
  .one-element
    header.header
      .container.container_admin
        .header__wrapper
          .header__avatar
            img(src="../images/content/user.jpg", class="header__img", alt="Фото администратора")
          .header__name Арнаутов Александр
          .header__title Панель администрирования
          .header__exit
            a.header__exit-link(href="#") Выйти
    nav.nav
      .container.container_admin
        .nav__wrapper
          ul.nav__list
            li.nav__item.active
              a.nav__link Обо мне
            li.nav__item
              a.nav__link Работы
            li.nav__item
              a.nav__link Отзывы
    .bg-page
      .container.container_admin
        section.about
          h2.about__header Блок &#171Обо мне&#187
          ul.about__list.about__wrapper
            li.about__block
              .about__add
                .about__team-name
                  input(type="text" placeholder="Название новой группы").input.about__name
                  .about__icons
                    .svg.about__check
                    .svg.about__cross
                .about__new
                  input.input.about__new-skill(type="text" placeholder="Новый навык")
                  input.input.about__pricents(type="text" placeholder="100 %")
                  button.about__btn-add +
            li.about__block
              .about__add
                .about__team-name 
                  .about__front Frotend
                  .svg.about__pencil
                .about__skills
                  tr.about__row
                    td.about__tag HTML5
                    td 
                      span.about__number 100
                      span.about__static-ricent %
                    td.about__td-svg
                      .svg.about__pencil
                      .svg.about__trash
                  tr.about__row
                    td.about__tag CSS3
                    td.about__midline
                      span.about__number 100
                      span.about__static-ricent %
                    td.about__td-svg
                      .svg.about__pencil
                      .svg.about__trash
                  tr.about__row
                    td.about__tag JavaScript
                    td.about__midline
                      span.about__number 100
                      span.about__static-ricent %
                    td.about__td-svg
                      .svg.about__pencil
                      .svg.about__trash
                  tr.about__row
                    td.about__tag Jquery и Vue.js
                    td.about__midline
                      span.about__number 100
                      span.about__static-ricent %
                    td.about__td-svg
                      .svg.about__pencil
                      .svg.about__trash
                .about__new
                  input.input.about__new-skill(type="text" placeholder="Новый навык")
                  input.input.about__pricents(type="text" placeholder="100 %")
                  button.about__btn-add +
        section.works
          h2.works__header Блок &#171Работы&#187
          .works__add
            .works__wrapper
              .works__title
                .works__edit Редактирование работы
              form.works__form
                .works__container
                  .works__download
                    .works__download-text.text__opac Перетащите или загрузите для загрузки изображения
                    a.works__download-link.btn Загрузите
                  .works__description
                    label(type="name").works__label
                      .works__name.text__opac Название
                      input.input.works__input#name(type="text" placeholder="Дизайн сайта для авто салона Porsche")
                    label(for="link").works__label 
                      .works__name.text__opac Ссылка
                      input.input.works__input#link(type="text" placeholder="https://www.porsche-pulkovo.ru")
                    label(for="textarea").works__label
                      .works__name.text__opac Описание
                      textarea.works__area.textarea#textarea(placeholder="Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей")
                    label(for="tags").works__label
                      .works__name.text__opac Добавление тэга
                      input.input.works__input#tags(type="text" placeholder="Jquery, Vue.js, HTML5" )
                    ul.works__list
                      li.works__item
                        span.works__name-tag HTML
                        .works__cross
                      li.works__item
                        span.works__name-tag CSS
                        .works__cross
                      li.works__item
                        span.works__name-tag Javascript
                        .works__cross                                                
                .btns
                  button.btn__cancellation Отмена
                  button.btn__save.btn Сохранить
          ul.works__createds
            li.works__createds-item
              button.big-btn
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
                a.works__sample-link(hraf="http://loftschool.ru") http://loftschool.ru
                .edit
                  .edit__rule
                    span.edit__row Править
                    .edit__pencil
                  .edit__rule
                    span.edit__row Удалить
                    .edit__cross
        section.review
          h2.review__title Блок &#171Отзыв&#187
          .review__add
            .review__wrapper
              .review__header 
                .review__new-review Новый отзыв
              form.review__form
                .review__container
                  .review__avatar
                    .review__circle
                      .review__svg
                    a.review__add-photo(href="#") Добавить фото
                  .review__inputs
                    .review__person
                      label(for="person").review__label
                        .review__name.text__opac Имя автора
                        input.input.review__input#person(type="text" placeholder="Ковальчук Дмитрий")
                      label(for="position").review__label
                        .review__name.text__opac Титул автора
                        input.input.review__input#position(type="text" placeholder="Основатель LoftSchool")
                    label(for="review-textarea").review__label
                      .review__name.text__opac Отзыв
                      textarea.review__textarea.textarea#review-textarea(type="textarea" placeholder="Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!")
                .btns
                  button.btn__cancellation Отмена
                  button.btn__save.btn Сохранить
          ul.review__createds
            li.review__createds-item
              button.big-btn
                .big-btn__circle
                  span.big-btn__pluse +
                .big-btn__text Добавить отзыв
            li.review__createds-item
              .review__createds-container
                .review__createds-human
                  img.review__createds-avatar(src="../images/content/saban.png", alt="Аватарка")
                  .review__createds-data
                    .review__createds-name Владимир Сабанцев
                    .review__createds-position Преподаватель
                .review__createds-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                .edit
                  .edit__rule
                    span.edit__row Править
                    .edit__pencil
                  .edit__rule
                    span.edit__row Удалить
                    .edit__cross







              
                      
                          






</template>
<style lang="postcss">
  @import "../styles/mixins.pcss";

  @import "../styles/layout/base.pcss";

  @import "normalize.css";

  .btns {
    display: flex;
    justify-content: flex-end;
  }

  .btn {
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;
    background: linear-gradient(to right, #006aed, #3f35cb);
    border-radius: 30px;
  }

  .btn__cancellation {
    color: #383bcf;
    background-color: transparent;
    font-weight: 600;
    margin-right: 30px;
  }

  .btn__save {
    padding: 22px 40px;
  }

  .big-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #fff;
    background: linear-gradient(to right, #006aed, #3f35cb);
  }

  .big-btn__circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    font-size: 72px;
    border: 2px solid #fff;
    margin-bottom: 30px;
  }

  .big-btn__text {
    font-size: 18px;
    font-weight: bold;
  }

    .edit {
    display: flex;
    justify-content: space-between;
  }

  .edit__rule {
    display: flex;
    align-items: center;
  }

  .edit__row {
    opacity: 0.5;
    padding-right: 10px;
  }

  .edit__cross {
    width: 17px;
    height: 17px;
    background: svg-load("cross.svg", fill="#c92e2e", width="100%", height="100%");
  }

  .edit__pencil {
    width: 17px;
    height: 17px;
    background: svg-load("pencil.svg", fill="#383bcf", width="100%", height="100%");
  }

  .svg {
    width: 15px;
    height: 15px;
  }

  .text__opac {
    opacity: 0.4;
  }

  .textarea {
    border: 1px solid rgba(#000, 0.15);
    padding: 10px 20px;
    resize: none;

    &::placeholder {
      line-height: 1.88;
    }
  }


  .header {
    background-image: linear-gradient(to right, #3e3e59, #454573);
    padding: 15px 0;
  }

  .header__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__avatar {
    margin-right: 19px;
  }

  .header__img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }

  .header__name {
    font-size: 18px;
    font-weight: 600;
    margin-right: 28px;
  }

  .header__title {
    font-size: 14px;
    opacity: 0.5;
  }

  .header__exit {
    text-align: right;
    flex: 1;
    opacity: 0.7;
  }


  .nav__list {
    display: flex;
  }

  .nav__item {
    padding: 28px 0;
    color: #414c63;
    width: 125px;
    height: 100%;
    text-align: center;

    &.active {
      color: #383bcf;
      font-weight: 600;
      border-bottom: 3px solid #383bcf;
    }
  }

  .bg-page {
    background:  linear-gradient(rgba(#fff, 0.9)), url("../images/content/bg_parallax.png");
    background-size: cover;
    background-repeat: no-repeat;
    padding: 50px 0;
    color: #414c63;
  }

  .about {
    margin-bottom: 50px;
  }

  .about__wrapper {
    display: flex;
  }

  .about__header {
    font-size: 21px;
    font-weight: bold;
    margin-bottom: 60px;
  }

  .about__block {
    display: flex;
    min-width: 525px;
    min-height: 387px;
    padding: 30px;
    background-color: #fff;
    margin-right: 30px;
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);

    &:last-child {
      margin-right: 0;
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
    border-bottom: 1px solid rgba(#1f232d, 0.15);
    padding-bottom: 20px;
  }

  .about__new {
    display: flex;
    justify-content: flex-end;
  }

  .about__icons {
    display: flex;
  }

  .about__new-skill {
    width: 218px;
    margin-right: 10px;
  }

  .about__pricents {
    width: 74px;
    margin-right: 30px;
  }

  .about__btn-add {
    width: 40px;
    height: 40px;
    color:#fff;
    font-size: 30px;
    border-radius: 50%;
    background: linear-gradient(to right, #006aed, #3f35cb);
  }

  .input {
    border: transparent;
    border-bottom: 1px solid #000;
    padding: 10px 0;
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



  .works__header {
    font-size: 21px;
    font-weight: bold;
    margin-bottom: 60px;
  }

  .works__add {
    background-color: #fff;
    font-weight: 600;
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
    margin-bottom: 30px;
  }

  .works {
    margin-bottom: 50px;
  }

  .works__wrapper {
    padding: 30px;
  }

  .works__title {
    padding-bottom: 25px;
    margin-bottom: 45px;
    border-bottom: 1px solid rgba(#000, 0.15);
  }

  .works__edit {
    font-size: 18px;
    font-weight: bold;
  }


  .works__container {
    display: flex;
    margin-bottom: 40px;
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
  }

  .works__download-text {
    width: 50%;
    text-align: center;
    line-height: 2.12;
    margin-bottom: 27px;
  }



  .works__download-link {
    padding: 15px 40px;
    
  }

  .works__description {
    flex: 1;
  }

  .works__label {
    display: block;
    margin-bottom: 30px;

  }

  .works__name {
    margin-bottom: 20px;
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
  }


  .works__createds {
    display: flex;
    font-weight: 600;
  }

  .works__createds-item {
    width: 340px;
    min-height: 556px;
    margin-right: 30px;

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
    background: url("../images/content/mini_slaid_1.jpg");
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

  .works__sample-link {
    display: block;
    color: #383bcf;
    margin-bottom: 45px;
  }

  .review__title {
    font-size: 21px;
    font-weight: bold;
    margin-bottom: 60px;
  }

  .review__add {
    margin-bottom: 30px;
  }

  .review__wrapper {
    padding: 30px;
    background-color: #fff;
    font-weight: 600;
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  }

  .review__header {
    border-bottom: 1px solid rgba(#000, 0.15);
    padding-bottom: 30px;
    margin-bottom: 45px;
  }



  .review__new-review {
    font-size: 18px;
  }

  .review__container {
    width: 80%;
    display: flex;
    margin-bottom: 30px;
  }

  .review__avatar {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
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
  }

  .review__svg {
    width: 84px;
    height: 110px;
    background: svg-load("avatar.svg", fill="#ffffff", width="100%", height="100%");
    background-repeat: no-repeat;
  }

  .review__add-photo {
    color: #383bcf;
  }

  .review__inputs {
    flex: 3;

  }

  .review__label {
    flex: 1;
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
  }

  .review__name {
    margin-bottom: 20px;
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
  }

  .review__createds {
    display: flex;
    font-weight: 600;
  }
  
  .review__createds-item {
    width: 340px;
    min-height: 380px;
    margin-right: 30px;
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);

    &:last-child {
      margin: 0;
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
    padding-bottom: 30px;
    display: flex;
    border-bottom: 1px solid rgba(#000, 0.15);
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
  }


</style>



