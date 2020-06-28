import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/graphs",
    name: "Graphs",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Charts" */ "../views/Graphs.vue")
  },
  {
    path: "/countries/:code",
    name: "Country",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Country" */ "../views/Country.vue")
  },
 
  { path: "*", component: Home }
];

const router = new VueRouter({
  routes
});

export default router;
