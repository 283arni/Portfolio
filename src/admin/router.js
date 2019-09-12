import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);



const routes = [
  {
    path: "/",
    component: () => import("./components/pages/auto.vue")
  },
  {
    path: "/works",
    component: () => import("./components/pages/works.vue")
  },
  {
    path: "/reviews",
    component: () => import("./components/pages/review.vue")
  },  
  {
    path: "/about",
    component: () => import("./components/pages/about.vue")
  }
];

export default new VueRouter({ routes });