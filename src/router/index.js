import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Sign1 from "../views/sign-1.vue";
import Sign2 from "../views/sign-2.vue";
import Sign3 from "../views/sign-3.vue";
import Sign4 from "../views/sign-4.vue";
import SignUp1 from "../views/sign-up-1";
import SignUp2 from "../views/sign-up-2";
import SignUp3 from "../views/sign-up-3";
import SignUp4 from "../views/sign-up-4";
import SignUp5 from "../views/sign-up-5";
import SignUp6 from "../views/sign-up-6";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/sign-1",
    name: "Sign1",
    component: Sign1,
  },
  {
    path: "/sign-2",
    name: "Sign2",
    component: Sign2,
  },
  {
    path: "/sign-3",
    name: "Sign3",
    component: Sign3,
  },
  {
    path: "/sign-4",
    name: "Sign4",
    component: Sign4,
  },
  {
    path: "/sign-up-1",
    name: "SignUp1",
    component: SignUp1,
  },
  {
    path: "/sign-up-2",
    name: "SignUp2",
    component: SignUp2,
  },
  {
    path: "/sign-up-3",
    name: "SignUp3",
    component: SignUp3,
  },
  {
    path: "/sign-up-4",
    name: "SignUp4",
    component: SignUp4,
  },
  {
    path: "/sign-up-5",
    name: "SignUp5",
    component: SignUp5,
  },
  {
    path: "/sign-up-6",
    name: "SignUp6",
    component: SignUp6,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
