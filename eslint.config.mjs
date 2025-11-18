import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    ignores: [
      "dist/**",
      "node_modules/**",
      "**/*.css",
      "**/*.jpg",
      "**/*.jpeg",
      "**/*.png",
      "**/*.gif",
      "**/*.md",
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        defineProps: "readonly",
      },
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    plugins: {
      js,
      vue: pluginVue,
      "@typescript-eslint": tseslint.plugin,
    },
    extends: [
      js.configs.recommended,
      pluginVue.configs["flat/recommended"],
      tseslint.configs.recommended,
    ],
    rules: {
      "vue/html-self-closing": "off",
      "vue/max-attributes-per-line": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/multi-word-component-names": "off",
    },
  },
]);
