<script setup lang="ts">
import { createNameSpacedBem } from "@limboy-ui/utils/create";
import uploadContent from "./upload-content.vue";
import { uploadProps } from "./upload";
import { computed } from "vue";
import { UploadContentProps } from "./upload-content";

defineOptions({ name: "s-upload" });
const bem = createNameSpacedBem("upload");

const props = defineProps<uploadProps>();

const uploadContentProps = computed<UploadContentProps>(() => ({
  ...props,
  onStart: (rawFile) => {
    console.log("onStart");
  },
  onProgress: (e) => {
    console.log("[onProgress]");
  },
  onRemove: (rawFile) => {
    console.log("onStart");
  },
  onError: (err) => {
    console.log("error");
  },
  onSuccess: (res) => {
    console.log("res");
  },
}));
console.log(uploadContentProps.value); //打印了没问题,数据没问题
</script>

<template>
  <uploadContent v-bind="uploadContentProps">
    <slot></slot>
  </uploadContent>
</template>
