import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect:'login'
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/index.vue"),
  },
  {
    path: "/console",
    name: "console",
    component: () =>
      import(/* webpackChunkName: "console" */ "../views/console/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to,from,next) =>{
  next();
})


export default router;
