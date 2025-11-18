import type { Plugin } from "vue";
import _Button from "./src/button.vue";
import { withInstall } from "@limboy-ui/utils/with-install";

const Button = withInstall(_Button);

export default Button; //可以通过app.use使用，也可以import用
export type { ButtonProps } from "./src/button";

//让接口可以自动合并
//现在这个类型可以被全局解析
declare module "vue" {
  export interface GlobalComponents {
    SButton: typeof Button;
  }
}
//pnpm i @vicons/ionicons5
