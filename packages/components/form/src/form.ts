//form表单属性
//model
//rules

import { ExtractPropTypes, InjectionKey, PropType } from "vue";
import { Arrayable, formItemContext, formItemRule } from "./form-item";

export interface formProps {
  model?: any;
  rules?: {
    type?: Record<string, Arrayable<formItemRule>>;
  };
  showMessage?: true | false;
}

// export type FormProps = Partial<ExtractPropTypes<typeof formProps>>;

export interface FormContext extends formProps {
  addField: (field: formItemContext) => void;
}

export const FormContextKey: InjectionKey<FormContext> = Symbol("FormContext");
