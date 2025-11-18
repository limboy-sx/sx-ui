import { ExtractPropTypes, PropType } from "vue";

// 类型声明
export type Size = "small" | "medium" | "large";
export type Type =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "default";
export type NativeType = "button" | "submit" | "reset";
export type Placement = "left" | "right";

// props 定义
export interface ButtonProps {
  size?: "small" | "medium" | "large";
  type?: "primary" | "success" | "warning" | "danger" | "info" | "default";
  round?: boolean;
  loading?: boolean;
  disabled?: boolean;
  nativeType?: "button" | "submit" | "reset";
  iconPlacement?: "left" | "right";
}

export interface ButtonEmitsType {
  (e: "click", event: MouseEvent): void;
  (e: "mouseDown", event: MouseEvent): void;
}

// export type ButtonPropstype = Partial<ExtractPropTypes<typeof buttonProps>>;
// export type ButtonEmitsType = Partial<ExtractPropTypes<typeof buttonEmits>>;
