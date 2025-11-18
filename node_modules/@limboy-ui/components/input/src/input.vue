<script setup lang="ts">
import { computed, inject, nextTick, onMounted, ref, useAttrs, useSlots, watch } from 'vue';
import { InputEmits, InputProps } from './input';
import { createNameSpacedBem } from '@limboy-ui/utils/create';
import { CloseOutline,EyeOutline, } from "@vicons/ionicons5";
import { formItemContexKey } from '../../form/src/form-item';


const bem = createNameSpacedBem('input');
defineOptions({
  name: "s-input",
  inheritAttrs: false,
});

const props = defineProps<InputProps>()
const emit = defineEmits<InputEmits>()
const slots = useSlots()

const attr = useAttrs()

// 监听modelValue变化, 更新input的value
watch(()=>props.modelValue, 
(value) => {
  formItemContext?.validate('change')
  setNativeInputValue()
})
const inputVal=ref<HTMLInputElement|null>()
function setNativeInputValue() {
  const inputEle = inputVal.value
  if (!inputEle) {
    return
  }
  inputEle.value = String(props.modelValue)
}

const focus = async () => {
  await nextTick() //重新获取焦点
  inputVal.value?.focus()

}

const passwordVisible = ref(false)
const handlePasswordVisible = () => {
  passwordVisible.value =!passwordVisible.value//操作密码
  focus()//获取焦点
}

const showPswVisible = computed(() => {
  return props.modelValue && props.showPassword&&!props.disable&&!props.readonly
})

const showClear = computed(() => {
  return props.modelValue && props.clearable &&!props.disable &&!props.readonly
  
})
function clear(){
    emit('input','' )
    emit('update:modelValue', '')
    emit('clear')
  focus()//获取焦点
    
}

onMounted(() => {
setNativeInputValue()
console.log(showClear.value);

})
const handleInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  emit('input', value)
  emit('update:modelValue', value)
}
const handleChange = (e: Event) => {
  emit('change',(e.target as HTMLInputElement).value)
}
const handleBlur = (e: FocusEvent) => {
  formItemContext?.validate('blur')
  emit('blur', e)
}
const handleFocus= (e: FocusEvent) => {
  emit('focus', e)
}
 
//校验
const formItemContext = inject(formItemContexKey)
console.log(formItemContext);

</script>

<template>
  <div :class="[bem.b()]">
    <div :class="[bem.e('group')]">
      <div v-if="slots.prepend" :class="[bem.be('group','prepend')]">
        <slot name="prepend"></slot>
      </div>
      <div :class="[bem.e('wrapper')]">
        <span v-if="slots.prefixIcon" :class="bem.e('prefix')">
          <slot name="prefixIcon"></slot>
        </span>
        <input :type="showPassword ? (passwordVisible ? 'text' : 'password'): props.type" 
        :placeholder="props.placeholder"
        :disable="props.disable"
        :readonly="props.readonly"
         v-bind="attr" :class="[bem.e('inner')]"
         
         ref="inputVal"
         @input="handleInput"
         @change="handleChange"
         @blur="handleBlur"
         @focus="handleFocus">
        </input>
        <span v-if="slots.sufixIcon" :class="bem.e('suffix')">
          <slot name="sufixIcon">
          </slot>
        </span>
            <s-icon v-if="showPswVisible" 
             :size="25"
            @click="handlePasswordVisible"
            style="line-height: 15px;font-weight: bold;">
              <EyeOutline  />
            </s-icon>
             <s-icon v-if="showClear" 
             :size="25"
            @click="clear"
            style="line-height: 16px;font-weight: bold;">
              <CloseOutline  />
            </s-icon>
      </div>
    <div v-if="slots.append" :class="bem.be('group','append')">
      <slot name="append"></slot>
    </div>
    <div>
    </div>
  </div>

  </div>
 
</template>
