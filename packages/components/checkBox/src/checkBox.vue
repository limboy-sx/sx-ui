<script setup lang="ts">
import { createNameSpacedBem } from "@limboy-ui/utils/create";
import { checkboxProps, checkboxEmits } from "./checkBox";
import { computed, onMounted, ref, watch } from "vue";

const bem = createNameSpacedBem("checkbox");
const props = defineProps(checkboxProps);
const emit = defineEmits(checkboxEmits);

defineOptions({
  name: "s-checkbox",
});

//双向绑定
const model = computed({
  get() {
    return props.modelValue as string | boolean | number;
  },
  set(val: string | boolean | number) {
    emit("update:modelValue", val);
  },
});

const inputRef = ref<HTMLInputElement>();

//半选
function indeterminiate(val: boolean) {
  inputRef.value!.indeterminate = val;
}

function handleChange(e: Event) {
  const target = e.target as HTMLInputElement;

  const value = target.checked ? true : false;
  emit("change", value);
}

watch(() => props.indeterminate, indeterminiate);

onMounted(() => {
  indeterminiate(props.indeterminate);
});
</script>

<template>
  <label :class="bem.b()" @click.stop>
    <span :class="bem.e('inpute')">
      <input
        type="checkbox"
        v-model="model"
        ref="inputRef"
        :disabled="disabled"
        @change="handleChange"
      />
    </span>
    <span v-if="$slots.default || label" :class="bem.b('label')">
      <slot></slot>
      <template v-if="!$slots.default">
        {{ props.label }}
      </template>
    </span>
  </label>
</template>
