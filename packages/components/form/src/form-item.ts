//form-item用来定义 formItem中需要的属性
//prop  校验输入框
//label 标签显示内容
//rules 表单输入框的验证规则
//show-message 是否显示错误信息:true显示，false不显示

//change|blure 事件

import type { RuleItem } from "async-validator";
import { ExtractPropTypes, InjectionKey, PropType } from "vue";

export type Arrayable<T> = T | T[];

export interface formItemProps {
  prop?: string;
  label?: string;
  rules?: Arrayable<formItemRule>;
  showMessage?: {
    type: boolean;
    default: true;
  };
}

export interface formItemRule extends RuleItem {
  trigger?: Arrayable<string>;
}

export const formItemValidateState = ["success", "error", ""];
export type FormItemValidateState = (typeof formItemValidateState)[number];

// export type formItemProps = Partial<ExtractPropTypes<typeof formItemProps>>;

export interface formItemContext extends formItemProps {
  validate: (
    trigger: string,
    callback?: (isValid: boolean) => void
  ) => Promise<void>;
}
export const formItemContexKey: InjectionKey<formItemContext> =
  Symbol("formItemContext");
