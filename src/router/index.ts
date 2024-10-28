import { createRouter, createWebHistory } from "vue-router";
import guard from "./guard";
import { setupAutoRouter } from "./autoRouter";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/article",
      component: () => import("@/layout/home/index.vue"),
      children: [
        {
          path: "article",
          name: "article",
          // meta: { login: true },
          component: () => import("@/views/article/index.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/index.vue"),
    },

    {
      path: "/:pathMatch(.*)*",
      name: "404",
      redirect: "/",
    },
  ],
});

guard(router);

export default router;
setupAutoRouter();
