import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SettingsView from "../views/SettingsView.vue";
import PasswordsView from "../views/PasswordsView.vue";
import DocumentView from "../views/DocumentView.vue";

import PocketBase from "pocketbase";

const pb = new PocketBase(import.meta.env.VITE_PB_URL);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
          meta: { requiresAuth: true },
        },
        {
          path: "passwords",
          name: "passwords",
          component: PasswordsView,
          meta: { requiresAuth: true },
        },
        {
          path: "settings",
          name: "settings",
          component: SettingsView,
          meta: { requiresAuth: true },
        },
        {
          path: "document/:id",
          name: "document",
          component: DocumentView,
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log("Route navigation:", to.path);
  if (to.meta.requiresAuth && !pb.authStore.isValid) {
    console.log("Redirecting to login");
    next("/login");
  } else {
    console.log("Proceeding to route");
    next();
  }
});

export default router;
