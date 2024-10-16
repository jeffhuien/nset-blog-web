import { fileURLToPath, URL } from "node:url";
import { AliasOptions } from "vite";

export default {
  "@": fileURLToPath(new URL("../src", import.meta.url)),
  "#": fileURLToPath(new URL("../types", import.meta.url)),
} as AliasOptions;
