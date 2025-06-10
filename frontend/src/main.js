import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style/main.js";

createApp(App).use(router).mount("#app");
