<script setup lang="ts">
import { createNameSpacedBem } from "@limboy-ui/utils/create";
// import { iconProps } from "./tree.ts";
import SvirtulList from "@limboy-ui/components/virtual-list/src/virtual-list.jsx";
import {
  computed,
  defineOptions,
  onMounted,
  provide,
  ref,
  useSlots,
  watch,
} from "vue";
import {
  treeEmits,
  treeInjectKey,
  treeNode,
  treeOptions,
  treeProps,
} from "./tree";
import { log } from "node:console";
import ZTreeNode from "./treeNode.vue";

const bem = createNameSpacedBem("tree");

/* -------------- 定义名字了 ------------- */

defineOptions({
  name: "s-tree",
});

const props = defineProps(treeProps);
const tree = ref<treeNode[]>([]);

/* ------------ 格式化传入的数据 ------------ */
//获取对应字段
function creatOptions(key: string, label: string, children: string) {
  return {
    getKey(node: treeOptions) {
      return node[key] as string | number; //用户传入的key
    },
    getLabel(node: treeOptions) {
      return node[label] as string; //用户传递的label
    },
    getChildren(node: treeOptions) {
      return node[children] as treeOptions[]; //用户传递的children
    },
  };
}
const treeOptions = creatOptions(
  props.keyField,
  props.labelField,
  props.childrenField
);
//对用户传入的数据进行格式化
function createTree(data: treeOptions[], parent?: treeNode | null) {
  function traversal(data: treeOptions[], parent: treeNode | null = null) {
    // 遍历数据，格式化数据
    return data.map((node) => {
      const children = treeOptions.getChildren(node) || [];
      const treeNode: treeNode = {
        key: treeOptions.getKey(node),
        label: treeOptions.getLabel(node),
        children: [],
        rawNode: node,
        level: parent ? parent.level + 1 : 0,
        disabled: !!node.disabled,
        //判断节点是否自带isLeaf如果自带了就用自带的，没有就判断是否有children

        isLeaf: node.isLeaf ?? children.length === 0,
        parentKey: parent ? parent.key : null,
      };
      if (children.length) {
        treeNode.children = traversal(children, treeNode);
      }
      return treeNode;
    });
  }
  const result: treeNode[] = traversal(data, parent);

  return result;
}
// 当被 createTree() 包装后，它变成这样：

// {
//   key: 1,
//   label: "中国",
//   children: [],
//   isLeaf: false,
//   level: 1,
//   parent: null,
//   rawNode: { key: 1, label: "中国", children: [], isLeaf: false } // 保存原始数据
// }

watch(
  () => props.data,
  (data: treeOptions[]) => {
    tree.value = createTree(data);
    console.log(tree.value);
  },
  { immediate: true }
);
//把tree拍平，实现展开操作
const expandedKeysSet = ref(new Set(props.defaultExpandedKeys));

const flattenTree = computed(() => {
  let expanedKeys = expandedKeysSet.value; //展开的节点

  //最终拍平的节点
  let flattenNodes: treeNode[] = []; //存放拍平后的节点

  const nodes = tree.value || []; //获取被格式化节点

  const stack: treeNode[] = []; //存放节点的栈
  //[41,40]
  //倒叙遍历树
  for (let i = nodes.length - 1; i >= 0; i--) {
    stack.push(nodes[i]);
  }
  //[41,32,31,30]
  //深度遍历
  //如果该节点是展开状态，就把它的 children 压入栈（同样倒序）
  while (stack.length) {
    const node = stack.pop();
    if (!node) continue;
    flattenNodes.push(node);
    if (expanedKeys.has(node.key)) {
      const children = node.children || []; //[30,31,32]
      if (children) {
        for (let i = children.length - 1; i >= 0; i--) {
          stack.push(children[i]);
        }
      }
    }
  }
  return flattenNodes;
  //40
  /////4030
  /////4040
  /////4050
  //////405010
  //////405020
  //////405030
  //50

  //stack = [50];
});

console.log(flattenTree.value);

//加载展开内容
const loadingKeysRef = ref(new Set<string | number>());
//触发加载流程
function triggerLoading(node: treeNode) {
  //这个节点需要异步加载
  if (!node.children.length && !node.isLeaf) {
    //如果没有加载过，加载这个节点
    if (!loadingKeysRef.value.has(node.key)) {
      loadingKeysRef.value.add(node.key);
      if (props.onLoad) {
        props.onLoad(node.rawNode).then((child) => {
          //修改原来的节点
          node.rawNode.children = child;
          //更新自定义node
          node.children = createTree(child, node);
          loadingKeysRef.value.delete(node.key);
        });
      }
    }
  }
}

//展开功能
function isExpanded(node: treeNode) {
  return expandedKeysSet.value.has(node.key);
}
//折叠功能
function collpase(node: treeNode) {
  expandedKeysSet.value.delete(node.key);
  // 触发响应式更新
  expandedKeysSet.value = new Set(expandedKeysSet.value);
}
//展开功能
function expand(node: treeNode) {
  expandedKeysSet.value.add(node.key);
  // 触发响应式更新
  expandedKeysSet.value = new Set(expandedKeysSet.value);
  //展开后加载的逻辑
  triggerLoading(node);
}
//切换功能，点击展开
function toggleExpand(node: treeNode) {
  const expandedKeys = expandedKeysSet.value;
  if (expandedKeys.has(node.key) && !loadingKeysRef.value.has(node.key)) {
    collpase(node);
  } else {
    expand(node);
  }
}
//实现选中的节点
const emit = defineEmits(treeEmits);

const selectedKeysRef = ref<(string | number)[]>([]);

watch(
  () => props.selectedKeys,
  (value) => {
    if (value) {
      selectedKeysRef.value = value;
      console.log("selectedKeysRef", value);
    }
  },
  { immediate: true }
);

//处理选中节点
function handleSelect(node: treeNode) {
  let keys = Array.from(selectedKeysRef.value);

  if (!props.selectable) return; //如果不可选，就不处理
  if (props.multiple) {
    const index = keys.findIndex((key) => key === node.key);
    if (index !== -1) {
      keys.splice(index, 1);
    } else {
      keys.push(node.key);
    }
  } else {
    if (keys.includes(node.key)) {
      keys = [];
    } else {
      keys = [node.key];
    }
  }
  emit("update:selectedKeys", keys);
}

provide(treeInjectKey, {
  slots: useSlots(),
  emit,
});

const showCheckbox = computed(() => {
  return !props.showCheckbox || props.multiple;
});

// const checkedKeyRefs = ref(new Set(props.defaultCheckedKeys));
const checkedKeyRefs = ref<Set<string | number>>(new Set());
// 标记是否已经初始化了默认选中状态
const isDefaultCheckedInitialized = ref(false);

function isChecked(node: treeNode) {
  return checkedKeyRefs.value.has(node.key);
}

const indeterminate = computed(() => {
  console.log(props.indeterminate); //undefined
  return props.indeterminate;
});

const indeterminateRef = ref<Set<string | number>>(new Set());

// 收集所有需要更新的节点（包括子节点）
function collectNodes(node: treeNode, result: treeNode[] = []) {
  // console.log(node);

  result.push(node);
  if (node?.children && node.children.length > 0) {
    node.children.forEach((childNode) => {
      if (!childNode.disabled) {
        collectNodes(childNode, result);
      }
    });
  }
  return result;
}

function toogle(node: treeNode, checked: boolean) {
  // 收集当前节点及其所有子节点
  const nodesToUpdate = collectNodes(node);

  // 批量更新所有节点
  nodesToUpdate.forEach((n) => {
    if (checked) {
      //去掉半选状态
      indeterminateRef.value.delete(n?.key);
      //添加选中状态
      checkedKeyRefs.value.add(n?.key);
    } else {
      //移除选中状态
      checkedKeyRefs.value.delete(n.key);
    }
  });

  // 统一触发 Vue 响应式更新：重新赋值整个 Set
  checkedKeyRefs.value = new Set(checkedKeyRefs.value);

  console.log(
    node,
    checked,
    "checkedKeyRefs:",
    Array.from(checkedKeyRefs.value)
  );
}

function findNode(key: string | number) {
  return flattenTree.value.find((node) => node.key === key);
}

//自下而上
function updateCheckedKeys(node: treeNode) {
  if (node.parentKey) {
    let parentNode = findNode(node.parentKey);

    if (parentNode) {
      let allChecked = true; //默认儿子全选
      let hasChecked = false; //是否有选中的儿子

      const nodes = parentNode.children || []; //获取父节点的儿子
      for (const node of nodes) {
        if (checkedKeyRefs.value.has(node.key)) {
          hasChecked = true;
        } else if (indeterminateRef.value.has(node.key)) {
          allChecked = false; //有半选的父节点，父节点不全选
          hasChecked = true; //有选中的儿子
        } else {
          allChecked = false; //有未选中的儿子，父节点不全选
        }
      }
      if (allChecked) {
        checkedKeyRefs.value.add(parentNode.key);
        indeterminateRef.value.delete(parentNode.key);
      } else if (hasChecked) {
        checkedKeyRefs.value.delete(parentNode.key);
        indeterminateRef.value.add(parentNode.key);
      }
      updateCheckedKeys(parentNode);
    }
  }
}

function toggleCheck(node: treeNode, checked: boolean) {
  console.log(node, checked);
  toogle(node, checked);
}
onMounted(() => {
  checkedKeyRefs.value.forEach((key: string | number) => {
    toggleCheck(findNode(key)!, true);
  });
});

// 初始化默认选中状态
function initializeDefaultChecked() {
  if (isDefaultCheckedInitialized.value) return; // 已经初始化过了，不再执行

  const value = props.defaultCheckedKeys;
  if (value && value.length > 0) {
    // 只设置 defaultCheckedKeys 中的节点，不重置整个 Set
    value.forEach((key) => {
      checkedKeyRefs.value.add(key);
    });

    // 递归处理默认选中的节点及其子节点
    value.forEach((key) => {
      const findNode = (nodes: treeNode[]): treeNode | null => {
        for (const node of nodes) {
          if (node.key === key) {
            return node;
          }
          if (node.children.length > 0) {
            const found = findNode(node.children);
            if (found) return found;
          }
        }
        return null;
      };
      const node = findNode(tree.value);
      if (node) {
        // 只添加，不重置
        const nodesToUpdate = collectNodes(node);
        nodesToUpdate.forEach((n) => {
          checkedKeyRefs.value.add(n.key);
        });
      }
    });

    // 触发响应式更新
    checkedKeyRefs.value = new Set(checkedKeyRefs.value);
    isDefaultCheckedInitialized.value = true;
  }
}

// 监听 tree 数据变化，在数据加载完成后初始化默认选中
watch(
  () => tree.value,
  () => {
    if (tree.value.length > 0 && !isDefaultCheckedInitialized.value) {
      initializeDefaultChecked();
    }
  },
  { immediate: true, deep: false }
);
</script>

<template>
  <div :class="bem.b()">
    <!-- <template v-for="node in flattenTree" :key="node.key">
      <div :class="bem.b('element')">{{ node.label }}</div>
    </template> -->
    <SvirtulList :items="flattenTree" :remain="8" :size="35">
      <template #default="{ node }">
        <ZTreeNode
          :key="node.key"
          :node="node"
          :expanded="isExpanded(node)"
          :loadingKeys="loadingKeysRef"
          @toggle="toggleExpand"
          :selectedKeys="selectedKeysRef"
          @select="handleSelect"
          :show-checkbox="showCheckbox"
          :checked="isChecked(node)"
          :disable="true"
          :indeterminte="indeterminate"
          @check="toggleCheck"
        >
        </ZTreeNode>
      </template>
    </SvirtulList>
  </div>
</template>

<style scoped></style>
