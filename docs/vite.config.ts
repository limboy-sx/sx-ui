// vite.config.ts
import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "@limboy-ui/theme-chalk/src/index.scss": path.resolve(
        __dirname,
        "node_modules/@limboy-ui/theme-chalk/dist/index.css"
      ),
    },
  },
});
