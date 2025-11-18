import type { Plugin } from "vue";
import _Icon from "./src/icon.vue";
import { withInstall } from "@limboy-ui/utils/with-install";

const Icon = withInstall(_Icon);

export default Icon; //可以通过app.use使用，也可以import用

export * from "./src/icon"; //.ts

//让接口可以自动合并
//现在这个类型可以被全局解析
declare module "vue" {
  export interface GlobalComponents {
    SIcon: typeof Icon;
  }
}
//pnpm i @vicons/ionicons5
