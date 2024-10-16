// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from "unocss";

export default defineConfig({
  shortcuts: {
    "flex-center": "flex justify-center items-center",
    "flex-x-center": "flex justify-center",
    "flex-y-center": "flex items-center",
    "flex-x-between": "flex items-center justify-between",
    "flex-x-end": "flex items-center justify-end",
    "absolute-lt": "absolute left-0 top-0",
    "absolute-rt": "absolute right-0 top-0 ",
    "fixed-lt": "fixed left-0 top-0",
    "cancel-btn": "b-2 b-primary  bg-conBg text-primary",
    center: "flex justify-center items-center gap-2 flex-wrap",
  },
  rules: [
    //
    [/^text-primary(\d+)$/, ([, d]) => ({ color: `var(--el-color-primary-light-${d})` })],
    [/^bg-primary(\d+)$/, ([, d]) => ({ "background-color": `var(--el-color-primary-light-${d})` })],
    [/^b-primary(\d+)$/, ([, d]) => ({ "border-color": `var(--el-color-primary-light-${d})` })],
  ],

  theme: {
    colors: {
      primary: "var(--el-color-primary)",
      primary_dark: "var(--el-color-primary-light-9)",
      textColor: "var(--text-color)",
      conBg: "var(--component-bg)",
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
