<script setup lang="ts">
import { createNameSpacedBem } from "@limboy-ui/utils/create";
import { iconProps } from "./icon";
import { computed, defineOptions } from "vue";

/* -------------- 定义名字了 ------------- */
defineOptions({
  name: "s-icon",
});
const bem = createNameSpacedBem("icon");


const props = defineProps(iconProps);

//计算样式处理
const style = computed(() => {
  if (!props.size && !props.color) return {};

  return {
    ...(props.size ? { fontSize: props.size + "px" } : {}),
    ...(props.color ? { color: props.color } : {}),
  };
});
</script>

<template>
  <i :class="bem.b()" :style="style">
    <slot :size="props.size"></slot>
  </i>
</template>

<style></style>
