<script setup lang="ts">
import { createNameSpacedBem } from "@limboy-ui/utils/create";
import Switcher from "../../internal-icon/Switch.jsx";

import SIcon from "@limboy-ui/components/icon";
import { treeNodeProps, treeNodeEmits, treeInjectKey, treeNode } from "./tree";
import { computed, inject, onMounted } from "vue";
import Loading from "../../internal-icon/Loading.jsx";
import SCheckbox from "@limboy-ui/components/checkbox";

import STreeNodeContent from "./tree-node-content.jsx";
const bem = createNameSpacedBem("tree-node");
const props = defineProps(treeNodeProps);
const emit = defineEmits(treeNodeEmits);

//展开逻辑
const handleExpand = (node: treeNode) => {
  // console.log(bem.is("leaf", props.node!.isLeaf));
  // console.log(props.node);
  // console.log(node);

  emit("toggle", props.node!);
  handleSelected();
};

const isLoading = computed(() => {
  return props.loadingKeys?.has(props.node!.key);
});

const isSelected = computed(() => {
  return props.selectedKeys!.includes(props.node!.key);
});

//选中逻辑
function handleSelected() {
  // console.log("handleSelected");
  // console.log(props.node!.disabled);
  if (props.node!.disabled) return;
  emit("select", props.node!);
}
//拿到父组件tree的上下文
const treeContext = inject(treeInjectKey);

//选中逻辑
function handleCheckChange(val: boolean) {
  emit("check", props.node!, val);
}

onMounted(() => {});
</script>

<template>
  <div
    :class="[
      bem.b(),
      bem.is('selected', isSelected),
      bem.is('disabled', !!props.node?.disabled),
    ]"
  >
    <div
      :class="[bem.e('content')]"
      style="display: flex; align-items: center"
      @click="handleExpand(node!)"
    >
      <span
        :style="{
          display: 'inline-block',
          width: `${(props.node?.level || 0) * 16}px`,
        }"
      >
      </span>
      <span
        :class="[
          bem.e('expand-icon'),
          { expanded: props.expanded && !(props.node && props.node.isLeaf) },
          bem.is('leaf', props.node!.isLeaf),
        ]"
      >
        <s-icon size="25" color="pink">
          <Switcher v-if="!isLoading" />
          <Loading v-else />
        </s-icon>
      </span>
      <s-checkbox
        v-if="props.showCheckbox"
        :model-value="props.checked"
        :indeterminate="props.indeterminte"
        @change="handleCheckChange"
      ></s-checkbox>
      <span style="margin-left: 4px" :class="bem.e('label')">
        <slot :node="props.node"> </slot>
        <STreeNodeContent :node="props.node" />
      </span>
    </div>
    <!-- {{ treeContext.slots.default({ 1: 2 }) }} -->
  </div>
</template>
