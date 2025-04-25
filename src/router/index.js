// src/router/index.js
import { createRouter, createWebHashHistory } from "vue-router";
import MainBoard from "../views/MainBoard.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainBoard,
  },
//   {
//     path: "/aboutus",
//     name: "About",
//     component: AboutPage,
//   },
//   {
//     path: "/contact",
//     name: "Contact",
//     component: ContactPage,
//   },
//   {
//     path: "/faq",
//     name: "FAQ",
//     component: FAQPage,
//   },
//   {
//     path: "/terms-of-service",
//     name: "TermsOfUse",
//     component: TermsOfUse,
//   },
//   {
//     path: "/privacy-policy",
//     name: "Privacy",
//     component: Privacy,
//   },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
});

export default router;
