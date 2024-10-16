import { defineConfig } from "vite";

import plugins from "./vite/plugin";
import alias from "./vite/alias";

// https://vite.dev/config/
export default defineConfig({
  plugins,

  resolve: {
    alias,
  },

  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // 或 "modern"，"legacy"
        additionalData: `@import "@/style/variables.scss";`,
      },
    },
  },
});
