
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
            a.header__exit-link.link-hover(href="#") Выйти
    .bg-page        
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
      .container.container_admin
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
                  input.input.about__new-skill(type="text" placeholder="Новый навык")
                  input.input.about__pricents(type="text" placeholder="100 %")
                  button.btn-hover.about__btn-add +
            li.about__block
              .about__add
                .about__team-name.headline 
                  .about__front Frotend
                  button.btn-hover.svg.about__pencil
                .about__skills
                  tr.about__row
                    td.about__tag HTML5
                    td 
                      span.about__number 100
                      span.about__static-ricent %
                    td.about__td-svg
                      button.btn-hover.svg.about__pencil
                      button.btn-hover.svg.about__trash
                  tr.about__row
                    td.about__tag CSS3
                    td.about__midline
                      span.about__number 100
                      span.about__static-ricent %
                    td.about__td-svg
                      button.btn-hover.svg.about__pencil
                      button.btn-hover.svg.about__trash
                  tr.about__row
                    td.about__tag JavaScript
                    td.about__midline
                      span.about__number 100
                      span.about__static-ricent %
                    td.about__td-svg
                      button.btn-hover.svg.about__pencil
                      button.btn-hover.svg.about__trash
                  tr.about__row
                    td.about__tag Jquery и Vue.js
                    td.about__midline
                      span.about__number 100
                      span.about__static-ricent %
                    td.about__td-svg
                      button.btn-hover.svg.about__pencil
                      button.btn-hover.svg.about__trash
                .about__new
                  input.input.about__new-skill(type="text" placeholder="Новый навык")
                  input.input.about__pricents(type="text" placeholder="100 %")
                  button.btn-hover.about__btn-add +
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
        section.review
          h2.title-admin Блок &#171Отзыв&#187
          .review__add
            .review__wrapper
              .headline 
                .headline__title Новый отзыв
              form.review__form
                .review__container
                  .review__avatar
                    .review__circle
                      .review__svg
                    a.review__add-photo.link-hover(href="#") Добавить фото
                  .review__inputs
                    .review__person
                      label(for="person").review__label.review__label_indent
                        .name-form Имя автора
                        input.input.review__input#person(type="text" placeholder="Ковальчук Дмитрий")
                      label(for="position").review__label
                        .name-form Титул автора
                        input.input.review__input#position(type="text" placeholder="Основатель LoftSchool")
                    label(for="review-textarea").review__label
                      .name-form Отзыв
                      textarea.review__textarea.textarea#review-textarea(type="textarea" placeholder="Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!")
                .btns
                  button.btn-hover.btn__cancellation Отмена
                  button.btn__save.btn Сохранить
          ul.review__createds
            li.review__createds-item
              button.btn-hover.big-btn
                .big-btn__circle
                  span.big-btn__pluse +
                .big-btn__text Добавить отзыв
            li.review__createds-item
              .review__createds-container
                .review__createds-human.headline
                  img.review__createds-avatar(src="../images/content/saban.png", alt="Аватарка")
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
        .auto
          .auto__overlay
            .auto__content
              .auto__close
                button.btn-hover.auto__cross
              .auto__title Авторизация
              form.auto__form
                label(for="login").auto__label
                  .auto__svg_avatar.auto__svg
                  .auto__block
                    .name-form Логин
                    input.auto__input#login
                label(for="password").auto__label
                  .auto__svg_tick.auto__svg
                  .auto__block
                    .name-form Пароль
                    input.auto__input#password
                .auto__push
                  button.auto__btn.btn Отправить
</template>


<style lang="postcss">
  @import "../styles/mixins.pcss";

  @import "../styles/layout/base.pcss";

  @import "normalize.css";

  .headline {
    padding-bottom: 25px;
    border-bottom: 1px solid rgba(#000, 0.15);
  }

  .headline__edit {
    font-size: 18px;
    font-weight: bold;
  }

  .title-admin {
    font-size: 21px;
    font-weight: bold;
    margin-bottom: 60px;

    @include phones {
      padding-left: 20px;
    }
  }

  .btns {
    display: flex;
    justify-content: flex-end;
    
    @include tablets {
      justify-content: center;
    }
  }

  .btn {
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;
    background: linear-gradient(to right, #f29400, #ea7400);
    transition: 0.4s;

    &:hover {
      border-radius: 30px;
    }

  }

  .btn__cancellation {
    color: #ea7400;
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
    background: linear-gradient(to right, #f29400, #ea7400);
    
    @include phones {
      flex-direction: row;
      padding: 30px 0;
    }
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

    @include phones {
      width: 50px;
      height: 50px;
      font-size: 20px;
      margin-bottom: 0;
      margin-right: 20px;
    }
  }

  .big-btn__text {
    font-size: 18px;
    font-weight: bold;
  }

  .btn-hover {
    transition: 0.4s;

    &:hover {
      opacity: 0.5;
    }
  }

  .link-hover {
    transition: 0.4s;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom-color: #ea7400;
    }
  }

  .edit {
    display: flex;
    justify-content: space-between;
  }

  .edit__rule {
    display: flex;
    background-color: transparent;
  }

  .edit__row {
    opacity: 0.5;
    padding-right: 10px;
    font-weight: 600;
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

  .name-form {
    margin-bottom: 20px;
    opacity: 0.4;
  }

  .textarea {
    border: 1px solid rgba(#000, 0.15);
    padding: 10px 20px;
    resize: none;
    transition: 0.3s;

    &::placeholder {
      line-height: 1.88;
    }

    &:focus {
      border-color: #ea7400;
      outline: none;
    }
  }
  
  .input {
    border: transparent;
    border-bottom: 1px solid #000;
    padding: 10px 0;
    transition: 0.3s;
    outline: none;

    &:focus {
      border-bottom-color: #ea7400;
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
    font-weight: 600;
    margin-right: 20px;
  }

  .header__title {
    font-size: 14px;
    opacity: 0.5;

    @include phones {
      display: none;
    }
  }

  .header__exit {
    text-align: right;
    flex: 1;
    opacity: 0.7;
  }

  .nav {
    margin-bottom: 40px;
    background-color: #fff;
  }

  .nav__list {
    display: flex;

    @include phones {
      justify-content: center;
    }
  }

  .nav__item {
    padding: 28px 0;
    color: #414c63;
    width: 125px;
    height: 100%;
    text-align: center;

    &.active {
      color: #ea7400;
      font-weight: 600;
      border-bottom: 3px solid #ea7400;
    }
  }

  .bg-page {
    background: linear-gradient(rgba(#fff, 0.9)), url("../images/content/bg_parallax.png");
    background-size: cover;
    background-repeat: no-repeat;
    padding: 50px 0;
    color: #414c63;

    @include phones {
      padding: 0;
    }
  }

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

  .works__sample-wrapper {
    margin-bottom: 45px;
  }

  .works__sample-link {
    color: #ea7400;
  }

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
    font-weight: 600;

    @include tablets {
      justify-content: space-between;
    }

    @include phones {
      display: block;
    }
  }
  
  .review__createds-item {
    width: 340px;
    min-height: 380px;
    margin-right: 30px;
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);

    &:last-child {
      margin: 0;
    }

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

  .auto__overlay {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .auto__content {
    max-width: 500px;
    background-color: #fff;
    font-weight: 600;
    color: #414c63;
    padding: 30px;
  }

  .auto__close {
    display: flex;
    justify-content: flex-end;
  }

  .auto__cross {
    width: 20px;
    height: 20px;
    background: svg-load("cross.svg", fill="#414c63", width="100%", height="100%");
    background-repeat: no-repeat;
  }

  .auto__title {
    font-size: 36px;
    text-align: center;
    margin-bottom: 34px;
  }

  .auto__block {
    width: 100%;
  }

  .auto__label {
    display: flex;
    align-items: flex-end;
    border-bottom: 1px solid #000;
    margin-bottom: 40px;
    transition: 0.4s;

    &:focus-within {
      border-bottom-color: #ea7400;
    }

    &:focus-within .auto__svg_avatar {
      background: svg-load("user.svg", fill="#ea7400", width="100%", height="100%");
      background-repeat: no-repeat;
    }

    &:focus-within .auto__svg_tick {
      background: svg-load("tick.svg", fill="#ea7400", width="100%", height="100%");
      background-repeat: no-repeat;
    }
  }

  .auto__input {
    border-color: transparent;
    line-height: 2.67;
    font-weight: 600;
    width: 100%;
  }

  .auto__svg_avatar {
    background: svg-load("user.svg", fill="#414c63", width="100%", height="100%");
  }

  .auto__svg_tick {
    background: svg-load("tick.svg", fill="#414c63", width="100%", height="100%");
  }

  .auto__svg {
    width: 30px;
    height: 30px;
    opacity: 0.3;
    margin-bottom: 10px;
    margin-right: 10px;
    background-repeat: no-repeat;
  }

  .auto__btn {
    padding: 30px 140px;
  }

</style>



