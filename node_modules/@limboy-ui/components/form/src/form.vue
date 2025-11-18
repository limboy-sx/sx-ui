<script setup lang="ts">
import { createNameSpacedBem } from "@limboy-ui/utils/create";
import { computed, provide } from "vue";
import { FormContext, FormContextKey, formProps } from "./form";
import { formItemContext } from "./form-item";
import { Values } from "async-validator";

const bem = createNameSpacedBem("form");
defineOptions({
  name: "s-form",
});

const props = defineProps<formProps>();

//form校验,在父级调用所有儿子校验方法
const validate = async (
  callback?: (valid: boolean, fields?: Values) => void
) => {
  let erros: Values = {};
  for (const field of fields) {
    try {
      await field.validate("");
    } catch (error) {
      erros = {
        ...erros,
        ...(error as Values),
      };
    }
  }
  //没有错误成功
  if (Object.keys(erros).length === 0) {
    return callback?.(true);
  } else {
    //有错误失败
    if (callback) {
      callback?.(false, erros);
    } else {
      return Promise.reject(erros);
    }
  }
};
const fields: formItemContext[] = []; //父亲收集儿子
const addField: FormContext["addField"] = (context) => {
  fields.push(context);

  setTimeout(() => {
    console.log(fields);
  }, 1000);
};

const context = {
  ...props,
  addField,
};
console.log(context); //打印出context对象,里面的model和showmessage是undifine

provide(FormContextKey, context);

//暴露给用户方法,用户可以通过ref来检测
defineExpose({
  validate,
  addField,
});
</script>

<template>
  <div><slot></slot></div>

  156
</template>
