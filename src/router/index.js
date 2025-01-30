import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductDetail from "../views/ProductDetail.vue";
import BlogDetail from "../views/BlogDetail.vue";
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/shop-all",
      name: "shop-all",
      component: () => import("../views/ShopAllView.vue"),
    },
    {
      path: "/our-story",
      name: "our-story",
      component: () => import("../views/OurStoryView.vue"),
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("../views/BlogView.vue"),
    },
    {
      path: "/blog/:id",
      name: "blog-detail",
      component: () => import("../views/BlogDetail.vue"),
    },
    {
      path: "/pages",
      name: "pages",
      component: () => import("../views/PagesView.vue"),
    },
    {
      path: "/shop-all/:id",
      name: "product-detail",
      component: () => import("../views/ProductDetail.vue"),
    },
  ],
});

export default router;
