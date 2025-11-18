import { ExtractPropTypes, InjectionKey, PropType, SetupContext } from "vue";

export interface treeNode extends Required<treeOptions> {
  level: number;
  rawNode: treeOptions;
  children: treeNode[];
  isLeaf: boolean;
}

export interface treeOptions {
  label?: string | number;
  key?: string | number;
  children?: treeOptions[];
  [key: string]: unknown;
  isLeaf?: boolean;
  disabled?: boolean;
  parentKey?: string | number | null;
}

export const treeProps = {
  data: {
    type: Array as PropType<treeOptions[]>,
    default: () => [],
  },
  defaultExpandedKeys: {
    type: Array as PropType<(string | number)[]>,
    default: () => [],
  },
  labelField: {
    type: String,
    default: "label",
  },
  keyField: {
    type: String,
    default: "key",
  },
  childrenField: {
    type: String,
    default: "children",
  },
  onLoad: Function as PropType<(node: treeOptions) => Promise<treeOptions[]>>,
  selectedKeys: {
    type: Array as PropType<(string | number)[]>,
  },
  selectable: {
    type: Boolean,
    default: true,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  defaultCheckedKeys: {
    type: Array as PropType<(string | number)[]>,
    default: () => [],
  },
  showCheckbox: {
    type: Boolean,
    default: false,
  },
  indeterminate: {
    type: Boolean,
    default: false,
  },
} as const; //转成常量，仅读的

export const treeNodeProps = {
  node: {
    type: Object as PropType<treeNode>,
    required: true,
  },
  expanded: {
    type: Boolean,
    required: true,
  },
  loadingKeys: {
    type: Object as PropType<Set<string | number>>,
  },
  selectedKeys: {
    type: Array as PropType<(string | number)[]>,
    default: () => [],
  },
  showCheckbox: {
    type: Boolean,
    default: false,
  },
  checked: Boolean,
  disabled: Boolean,
  indeterminte: Boolean,
};

export const treeNodeEmits = {
  toggle: (node: treeNode) => node,
  select: (node: treeNode) => node,
  check: (node: treeNode, val: boolean) => typeof val === "boolean",
};
export const treeEmits = {
  //内部发射的事件用来同步响应式数据
  "update:selectedKeys": (keys: (string | number)[]) => keys,
};

export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>; //取出类型
export type TreeNodeProps = Partial<ExtractPropTypes<typeof treeNodeProps>>; //取出类型

export interface TreeContext {
  slots: SetupContext["slots"];
  emit: SetupContext<typeof treeEmits>["emit"];
}
//用于provide/inject的key
export const treeInjectKey: InjectionKey<TreeContext> = Symbol("tree");

export const treeNodeContentProps = {
  node: {
    type: Object as PropType<treeNode>,
    required: true,
  },
};
