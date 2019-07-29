<template lang="pug">
  .auto
    .auto__overlay
      .auto__content
        .auto__close
          button.btn-hover.auto__cross
        .auto__title Авторизация
        form.auto__form(@submit.prevent="login")
          label(for="login").auto__label
            .auto__svg_avatar.auto__svg
            .auto__block
              .name-form Логин
              input.auto__input#login(v-model="user.name")
          label(for="password").auto__label
            .auto__svg_tick.auto__svg
            .auto__block
              .name-form Пароль
              input.auto__input#password(v-model="user.password" type="password")
          .auto__push
            button.auto__btn.btn Отправить
</template>

<script>
import $axios from "../request"

export default {
  data() {
    return {
      user: {
        name: "",
        password: ""
      }
    }
  },
  methods: {
    async login() {
      try{
        const response = await $axios.post('/login', this.user);
        const token = response.data.token
        localStorage.setItem('token', token);
        $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        this.$router.replace("/about")
      } catch (error) {
        alert(error.response.data.errors.title)
      }
    }
  }
}
</script>


<style lang="postcss">

  @import "../../styles/mixins.pcss";

  .auto {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  .auto__overlay {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(#fff, 0.9)), url("../../images/content/bg_parallax.png");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .auto__content {
    min-width: 400px;
    background-color: #fff;
    font-weight: 600;
    color: #414c63;
    padding: 30px;

    @include phones {
      min-width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
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

  .auto__push {
    text-align: center;
  }

  .auto__btn {
    padding: 25px 120px;

    @include phones {
      padding: 6% 30%;
    }
  }

</style>

