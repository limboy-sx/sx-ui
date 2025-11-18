//整个表单组件，表单组件路口
import _FormItem from "./src/form-item.vue";
import _Form from "./src/form.vue";
import { withInstall } from "@limboy-ui/utils/with-install";

const FormItem = withInstall(_FormItem);
const Form = withInstall(_Form);

export { FormItem, Form };

export default {}; //可以通过app.use使用，也可以import用
export type { formItemProps } from "./src/form-item";
export type { formProps } from "./src/form";

export type FormInstance = InstanceType<typeof Form>; //这个类型暴露出去是干嘛的
//让接口可以自动合并
//现在这个类型可以被全局解析
declare module "vue" {
  export interface GlobalComponents {
    SFormItem: typeof FormItem;
    SForm: typeof Form;
  }
}
