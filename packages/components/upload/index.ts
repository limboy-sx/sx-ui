//整个表单组件，表单组件路口

import _Upload from "./src/upload.vue";
import { withInstall } from "@limboy-ui/utils/with-install";

const Upload = withInstall(_Upload);

// export { Upload };

export default Upload; //可以通过app.use使用，也可以import用
// export type { formItemProps } from "./src/form-item";

//让接口可以自动合并
//现在这个类型可以被全局解析
declare module "vue" {
  export interface GlobalComponents {
    SUpload: typeof Upload;
  }
}
export * from "./src/upload";
