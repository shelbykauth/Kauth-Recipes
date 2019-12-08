import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/*webpackChunkName: "login"*/ "../views/Login.vue")
  },
  {
    path: "/add",
    name: "addRecipe",
    component: () =>
      import(/*webpackChunkName: "login"*/ "../views/AddRecipe.vue")
  },
  {
    path: "/s/:searchTerms?",
    name: "searchRecipe",
    component: () =>
      import(/*webpackChunkName: "search"*/ "../views/SearchRecipe.vue")
  },
  {
    path: "*",
    name: "404",
    component: () => import(/*webpackChunkName: "404"*/ "../views/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
