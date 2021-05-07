import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./router";
import VueCookies from "vue3-cookies";

createApp(App).use(router).use(PrimeVue).use(VueCookies).mount("#app");
