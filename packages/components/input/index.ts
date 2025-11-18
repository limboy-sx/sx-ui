import type { Plugin } from "vue";
import _Input from "./src/input.vue";
import { withInstall } from "@limboy-ui/utils/with-install";

const Input = withInstall(_Input);

export default Input; //可以通过app.use使用，也可以import用
export type { InputProps } from "./src/input";

//让接口可以自动合并
//现在这个类型可以被全局解析
declare module "vue" {
  export interface GlobalComponents {
    SInput: typeof Input;
  }
}
//pnpm i @vicons/ionicons5
