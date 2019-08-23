import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);



const routes = [
  {
    path: "/",
    component: () => import("./components/auto.vue")
  },
  {
    path: "/works",
    component: () => import("./components/works.vue")
  },
  {
    path: "/reviews",
    component: () => import("./components/review.vue")
  },  
  {
    path: "/about",
    component: () => import("./components/about.vue")
  }
];

export default new VueRouter({ routes });