<script setup lang="ts">
import { createNameSpacedBem } from "@limboy-ui/utils/create";
import { computed, inject, onMounted, provide, ref } from "vue";
import {
  FormItemValidateState,
  formItemProps,
  formItemRule,
  formItemContext,
  formItemContexKey,
  Arrayable,
} from "./form-item";
import { FormContextKey } from "./form";
import AsyncValidator, { Values } from "async-validator";

const FormContext = inject(FormContextKey);
console.log(FormContext);

defineOptions({
  name: "s-form-item",
});
const props = defineProps<formItemProps>();

const bem = createNameSpacedBem("form-item");

const validataState = ref<FormItemValidateState>("");
const validataMessage = ref<string>("");
//校验错误显示
const showValiMessage = ref(false);

const converArray = (
  rules: Arrayable<formItemRule> | undefined
): formItemRule[] => {
  return rules ? (Array.isArray(rules) ? rules : [rules]) : [];
};
const _rules = computed(() => {
  const rules = converArray(props.rules);
  const formRules = FormContext?.rules;
  console.log(formRules, "***********");

  if (formRules && props.prop) {
    console.log(props.prop);

    const _temp = formRules[0];

    if (_temp) {
      rules.push(...converArray(_temp[props.prop]));
    }
  }

  return rules;
});

//拿到规则
const getRuleFiltered = (trigger: string) => {
  const rules = _rules.value;
  console.log(rules);

  return rules.filter((rule) => {
    if (!rule.trigger || trigger) {
      return true;
    }
    if (Array.isArray(rule!.trigger)) {
      return rule.trigger.includes(trigger);
    } else {
      return rule.trigger === trigger;
    }
  });
};
const onValidationSuccessded = () => {
  validataState.value = "success";
  validataMessage.value = "成功";
};
const onValidationFailed = (errors: Values) => {
  console.log(errors);

  validataState.value = "error";
  const { error } = errors;
  validataMessage.value = error ? error[0].message : "失败";
};

const validate: formItemContext["validate"] = async (trigger, callback?) => {
  //拿到触发时机，调用是否通过调用callback，或调用promise方法
  const rules = getRuleFiltered(trigger);
  console.log(rules);

  //rule是触发规则，trigger是触发时机
  //需要找到对应的数据源头，上面的props
  const modeName = props.prop!;
  console.log([modeName], rules);

  //拿到校验器
  const validator = new AsyncValidator({
    [modeName]: rules, //传入验证器的值
  });
  console.log(validator);

  //拿到值
  const model = (FormContext?.model || "") as Record<string, any>;
  console.log(FormContext); //找到问题了，这里的model拿不到值，model是undifind

  //拿到校验器
  console.log(model);

  return validator
    .validate({
      [modeName]: model[modeName],
    })
    .then(() => {
      console.log("成功");
      onValidationSuccessded();
      // if (FormContext?.showMessage) {
      //   showValiMessage.value = false;
      // }
    })
    .catch((err) => {
      console.log("失败666");
      onValidationFailed(err);
      return Promise.reject(err);
      // if (FormContext?.showMessage) {
      //   showValiMessage.value = true;
      // }
    });
};
//上下文
const context: formItemContext = {
  ...props,
  validate,
};

provide(formItemContexKey, context);

onMounted(() => {
  FormContext?.addField(context); //我将自己上下文传递给了父亲
});
</script>

<template>
  <div
    :class="[
      bem.b(),
      bem.is('success', validataState === 'success'),
      bem.is('error', validataState === 'error'),
    ]"
  >
    <label :class="bem.e('label')">
      <slot name="label">{{ props.label }}</slot>
    </label>
    <div :class="bem.e('content')">
      <slot></slot>
      <div :class="bem.e('error')">
        <slot name="error">
          {{ validataMessage }}
        </slot>
      </div>
    </div>
    {{ showValiMessage }}
  </div>
</template>
