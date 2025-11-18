import { ExtractPropTypes } from "vue";
import { buttonProps, buttonEmits } from "./button";

export type ButtonProps = Partial<ExtractPropTypes<typeof buttonProps>>;
export type ButtonEmitsType = typeof buttonEmits;
