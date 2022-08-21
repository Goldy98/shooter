import { createRouter, createWebHistory } from "vue-router";
import Menu from "../views/MenuScreen.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "menu",
      component: Menu,
    },
    {
      path: "/game",
      name: "game",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/GameArea.vue"),
    },
  ],
});

export default router;
