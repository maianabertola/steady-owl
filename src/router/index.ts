import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";
import UseCase from "@/views/UseCase.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/privacy-policy",
      name: "Privacy Policy",
      component: PrivacyPolicy,
    },
    {
      path: "/use-cases",
      name: "UseCase",
      component: UseCase,
    },
  ],
});

export default router;
