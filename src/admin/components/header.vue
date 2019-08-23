<template lang="pug">
  header.header
    .container.container_admin
      .header__wrapper
        .header__avatar
          img(src="../../images/content/ava.jpg", class="header__img", alt="Фото администратора")
        .header__name Арнаутов Александр
        .header__title Панель администрирования
        .header__exit
          a.header__exit-link.link-hover(href="#") Выйти
</template>

<style lang="postcss">
  @import "../../styles/mixins.pcss";

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
</style>