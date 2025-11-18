import { Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin;
export function withInstall<T>(comp: T) {
  (comp as SFCWithInstall<T>).install = function (app: any) {
    const { name } = comp as unknown as { name: string };
    app.component(name, comp); //组件注册成全局组件
  };
  return comp as SFCWithInstall<T>;
}
