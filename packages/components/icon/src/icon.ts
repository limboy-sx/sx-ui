//这里准备组件相关的属性 和 ts 类型定义

import type { ExtractPropTypes, PropType } from "vue"; //可以推断类型
export const iconProps = {
  color: String,
  size: {
    type: [String, Number] as PropType<string | number>,
  },
} as const;

export type IconProps = ExtractPropTypes<typeof iconProps>;
