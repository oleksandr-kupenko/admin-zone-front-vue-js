import Home from "../components/Home";
import Sign1 from "../components/public/SignIn/sign-1";
import Sign2 from "../components/public/RessetPass/sign-2";
import Sign4 from "../components/public/RessetPass/sign-4";
import SignUp1 from "../components/public/SignUp/SignUp";
import SignUp2 from "../components/public/SignUp/SignUp2";
import AlmostReady from "../components/public/AlmostReady/AlmostReady";

const publicPagesRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/sign-1",
    component: Sign1,
    meta: {
      title: "Sign in",
    },
    props: {
      question: "Do not have an account?",
      offer: "Sign up",
    },
  },
  {
    path: "/sign-2",
    component: Sign2,
    meta: {
      title: "Enter e-mail",
    },
    props: {
      question: "Back to",
      offer: "Sign in",
    },
  },
  {
    path: "/sign-3",
    component: AlmostReady,
    meta: {
      title: "Almost ready",
    },
    props: {
      question: "Back to",
      offer: "Sign in",
      message: "Please check your email to reset your password",
    },
  },
  {
    path: "/sign-4",
    component: Sign4,
    meta: {
      title: "Reset password",
    },
    props: {
      question: "Do not have an account?",
      offer: "Sign up",
    },
  },
  {
    path: "/sign-up-1",
    component: SignUp1,
    meta: {
      title: "Sign up",
    },
    props: {
      question: "Already have an account?",
      offer: "Log In",
    },
  },
  {
    path: "/sign-up-2",
    component: SignUp2,
    meta: {
      title: "Complete your account",
    },
    props: {
      question: "Already have an account?",
      offer: "Log In",
    },
  },
  {
    path: "/sign-up-6",
    component: AlmostReady,
    meta: {
      title: "Almost ready",
    },
    props: {
      question: "Already have an account?",
      offer: "Log In",
      message: "Please check your email to activate your account",
    },
  },
];

export default publicPagesRoutes;
