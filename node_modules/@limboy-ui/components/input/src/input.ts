// Input 组件 Props 接口
export interface InputProps {
  /** 输入类型，默认 text */
  type?: string;

  /** v-model 绑定值，默认 "" */
  modelValue?: string | number;

  /** 占位符，默认 "" */
  placeholder?: string;

  /** 是否可清除，默认 false */
  clearable?: boolean;

  /** 是否显示密码，默认 false */
  showPassword?: boolean;

  /** 是否禁用，默认 false */
  disable?: boolean;

  /** 是否只读，默认 false */
  readonly?: boolean;

  /** 标签显示内容，默认空字符串 */
  label?: string;
}

// Input 组件 Emits 接口
export interface InputEmits {
  /** v-model 更新事件 */
  "update:modelValue": (value: string) => void;

  /** 输入事件 */
  input: (value: string) => void;

  /** change 事件 */
  change: (value: string) => void;

  /** focus 事件 */
  focus: (event: FocusEvent) => void;

  /** blur 事件 */
  blur: (event: FocusEvent) => void;

  /** clear 清空事件 */
  clear: () => void;
}
