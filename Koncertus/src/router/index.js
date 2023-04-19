import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ConcertsPage from "@/views/ConcertsPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import BuyPage from "@/views/BuyPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
      meta: {
        hideNavbar: false,
       },
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
      meta: {
        hideNavbar: false,
       },
    },
    {
      path: "/concerts",
      name: "concerts",
      component: ConcertsPage,
      meta: {
        hideNavbar: false,
       },
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
      meta: {
        hideNavbar: true,
       },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
      meta: {
        hideNavbar: true,
       },
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfilePage,
      meta: {
        hideNavbar: false,
       },
    },  
    {
      path: "/buypage",
      name: "buypage",
      component: BuyPage,
      meta: {
        hideNavbar: false,
       },
    },  
  ],
});

export default router;
