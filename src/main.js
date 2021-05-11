import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./router";
import VueCookies from "vue3-cookies";
import VueNextSelect from "vue-next-select";

createApp(App)
  .use(router)
  .use(PrimeVue)
  .use(VueCookies)
  .component("vue-select", VueNextSelect)
  .mount("#app");
