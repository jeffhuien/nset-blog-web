import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";

import "uno.css";
import "@unocss/reset/tailwind-compat.css";

import { bootstrap } from "./plugins";

const app = createApp(App);

bootstrap(app);
app.mount("#app");
