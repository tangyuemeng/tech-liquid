// src/router/index.js
import { createRouter, createWebHashHistory } from "vue-router";
import MainBoard from "../views/MainBoard.vue";
import ContactPage from "../views/ContactPage.vue";
import Privacy from "../views/Privacy.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainBoard,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
  },
  {
    path: "/privacy-policy",
    name: "Privacy",
    component: Privacy,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
