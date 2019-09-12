<template lang="pug">
  nav.nav
    .container.container_admin
      .nav__wrapper
        ul.nav__list
          li.nav__item(v-for="tab in tabs")
            router-link.nav__link(
              tag="a" 
              :to="tab.href"
              exact-active-class = "active"
              ) {{tab.title}}
</template>
<script>
export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/about" },
        { title: "Отзывы", href: "/reviews" },
        { title: "Работы", href: "/works" }
      ]
    };
  }
}
</script>

<style lang="postcss">

  @import "../../styles/mixins.pcss";

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
    min-height: 80px;
    color: #414c63;
    width: 125px;
    text-align: center;
  }

  .nav__link {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    border-bottom: 3px solid transparent;

    &.active {
      color: #ea7400;
      font-weight: 600;
      border-bottom: 3px solid #ea7400;
    }
  }
</style>