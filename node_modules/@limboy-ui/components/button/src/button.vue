<script setup lang="ts">
import { createNameSpacedBem } from "@limboy-ui/utils/create";
import { ButtonEmitsType, ButtonProps } from "./button";
import LoadingComponent from "@limboy-ui/components/internal-icon/Loading.jsx";
import SIcon from "@limboy-ui/components/icon/index.ts";
import { useSlots } from "vue";

const bem = createNameSpacedBem("button"); //s-button
defineOptions({
  name: "s-button",
});
const props = defineProps<ButtonProps>();
const emit = defineEmits<ButtonEmitsType>();

const slots = useSlots();

const emitClick = (e: MouseEvent) => {
  emit("click", e);
};

const emitMousedown = (e: MouseEvent) => {
  emit("mouseDown", e);
};
</script>

<template>
  <div>
    <button
      :class="[
        bem.b(),
        bem.m(type),
        bem.m(size),
        bem.is('round', round!),
        bem.is('loading', loading!),
        bem.is('disabled', disabled!),
      ]"
      :type="nativeType"
      :disabled="disabled || loading"
      @click="emitClick"
      @mousedown="emitMousedown"
    >
      <template v-if="iconPlacement === 'left'">
        <s-icon>
          <LoadingComponent v-if="loading"></LoadingComponent>
          <template v-else-if="slots.icon">
            <Component :is="slots.icon"></Component>
          </template>
        </s-icon>
      </template>

      <slot> </slot>
      <template v-if="iconPlacement === 'right'">
        <s-icon>
          <LoadingComponent v-if="loading"></LoadingComponent>
          <template v-else-if="slots.icon">
            <Component :is="slots.icon"></Component>
          </template>
        </s-icon>
      </template>
    </button>
  </div>
</template>
