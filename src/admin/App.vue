
<template lang="pug">
  .one-element
    headerTemp
    .bg-page        
      navbar
      .container.container_admin
        router-view

</template>


<script>
  export default {

    components: {
      headerTemp: () => import("./components/header"),
      navbar: ()=> import("./components/nav")
    }
  }

</script>


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

    &_save {
      padding: 22px 40px;
    }

    &_cancellation {
      color: #ea7400;
      background-color: transparent;
      font-weight: 600;
      margin-right: 30px;
    }

    &_form {
      border: none;
    }
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
    justify-content: flex-end;
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
    width: 100%;

    &:focus {
      border-bottom-color: #ea7400;
    }
  }

  .bg-page {
    background: linear-gradient(rgba(#fff, 0.9)), url("../images/content/bg_parallax.png");
    background-size: cover;
    background-repeat: no-repeat;
    color: #414c63;

    @include phones {
      padding: 0;
    }
  }

</style>



