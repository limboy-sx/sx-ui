<script setup lang="ts">
import { ref } from "vue";
import { genId, uploadProps, UploadRawFile } from "./upload";
import { createNameSpacedBem } from "@limboy-ui/utils/create";
import { UploadContentProps } from "./upload-content";
import { httpRequest } from "./ajax";

defineOptions({ name: "s-upload-content" });

const props = defineProps<UploadContentProps>();
console.log(props); //为什么子组件打印的时候beforeUpload是undifined

const inputRefs = ref<HTMLInputElement>();

const bem = createNameSpacedBem("upload");

async function updated(rawFile: UploadRawFile) {
  //输入框清空
  inputRefs.value!.value = ""; //上传之前清空
  let res = await props.beforeUpload!(rawFile);

  if (res == false) {
    return props.onRemove!(rawFile);
  } //停止上传

  //添加上传过程

  //上传文件
  const { methods, file, name, actions, header, data } = props;
  httpRequest({
    methods,
    file,
    name,
    actions,
    header,
    data,
    onError: (e) => {
      props.onError!(e, rawFile);
    },
    onSuccess(res) {
      props.onSuccess!(res, rawFile);
    },
    onProgress(e) {
      props.onProgress!(e, rawFile);
    },
  });
}
const handleChange = (e: Event) => {
  const files = (e.target as HTMLInputElement).files;

  for (let i = 0; i < files!.length; i++) {
    const rawFile = files![i] as UploadRawFile;
    rawFile.uid = genId();

    updated(rawFile);
  }
};
const handleClick = () => {
  inputRefs.value!.value = "";
  inputRefs.value!.click();
};
</script>

<template>
  <div>
    <slot @click="handleClick"></slot>
    <input
      type="file"
      ref="inputRefs"
      :name="name"
      :accept="accept"
      :multiple="multiple"
      @change="handleChange"
    />
  </div>
</template>
