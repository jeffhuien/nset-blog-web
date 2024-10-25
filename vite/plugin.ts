import { PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";
import Unocss from "unocss/vite";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default [
  //
  vue(),
  vueJsx(),
  vueDevTools(),
  Unocss(),

  AutoImport({
    resolvers: [ElementPlusResolver()],
    imports: ["vue", "vue-router", "pinia", "@vueuse/core"],
    dirs: ["src/enum", "src/api/*"],
    dts: "types/auto-imports.d.ts",
  }),

  Components({
    resolvers: [ElementPlusResolver()],
    dirs: ["src/components"],
    dts: "types/auto-components.d.ts",
  }),
] as PluginOption[];
