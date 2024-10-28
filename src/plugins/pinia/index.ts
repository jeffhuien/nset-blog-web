import type { App } from "vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
export const setupPinia = (app: App) => {
  pinia.use(piniaPluginPersistedstate);
  app.use(pinia);
};
export { pinia };
