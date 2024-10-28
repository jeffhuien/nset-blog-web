import type { App } from "vue";
import { setupPinia } from "./pinia";
import { setupRouter } from "./router";
import { setupElementPlus } from "./elementPlus";

export function bootstrap(app: App) {
  setupRouter(app);
  setupPinia(app);
  setupElementPlus(app);
}
