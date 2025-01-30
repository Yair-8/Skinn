import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import BlogDetail from "@/views/BlogDetail.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/shop-all",
      name: "shop-all",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ShopAllView.vue"),
    },
    {
      path: "/our-story",
      name: "our-story",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/OurStoryView.vue"),
    },
    {
      path: "/blog",
      name: "blog",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/BlogView.vue"),
    },
    {
      path: "/blog/:id",
      name: "blog-detail",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/BlogDetail.vue"),
    },
    {
      path: "/pages",
      name: "pages",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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
