// docs/.vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import SIcon from "@limboy-ui/components/icon/src/icon.vue";
import "../../../packages/theme-chalk/src/index.scss";
// import "./overrides.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("s-icon", SIcon); // 改成固定的 's-icon'
  },
};
