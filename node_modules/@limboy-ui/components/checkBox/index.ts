import type { Plugin } from "vue";
import _Check from "./src/checkBox.vue";
import { withInstall } from "@limboy-ui/utils/with-install";

const Check = withInstall(_Check);

export default Check; //可以通过app.use使用，也可以import用

export * from "./src/checkBox"; //.ts

//让接口可以自动合并
//现在这个类型可以被全局解析
declare module "vue" {
  export interface GlobalComponents {
    SCheckBox: typeof Check;
  }
}
//pnpm i @vicons/ionicons5
