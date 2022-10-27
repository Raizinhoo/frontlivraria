import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/categorias",
      name: "categorias",
      component: () => import("../views/CategoriasView.vue"),
    },
    {
      path: "/editoras",
      name: "editoras",
      component: () => import("../views/EditorasView.vue"),
    },
  ],
});

export default router;
