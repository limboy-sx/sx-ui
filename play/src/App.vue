<script setup lang="ts">
import type { treeOptions } from "@limboy-ui/components/tree/src/tree";
import { AddCircle } from "@vicons/ionicons5";
import { ref, onMounted, reactive, watch } from "vue";
import type { FormInstance } from "@limboy-ui/components/form";
import type { UploadRawFile } from "@limboy-ui/components/upload";

// 创建树形数据的函数
function createData(level = 4, parentKey = ""): any {
  if (!level) return [];

  const arr = new Array(20 - level).fill(0); //[]
  return arr.map((_, idx: number) => {
    const key = parentKey + level + idx; // 唯一标识键
    return {
      label: createLabel(level), // 生成标签文本
      key, // 唯一标识键,是字符串类型
      children: createData(level - 1, key), // 递归创建子节点
    };
  });
}

// 生成标签文本的辅助函数
function createLabel(level: number): string {
  if (level === 4) return "诞生一";
  if (level === 3) return "一生二";
  if (level === 2) return "二生三";
  if (level === 1) return "三生万物";
  return "";
}

// 使用 ref 创建响应式数据
const data = ref(createData());

onMounted(() => {
  console.log(data.value);
});

// function createData() {
//   return [
//     {
//       label: nextLabel(),
//       key: 1,
//       isLeaf: false,
//     },
//     {
//       label: nextLabel(),
//       key: 2,
//       isLeaf: false,
//     },
//   ];
// }

function nextLabel(currentLabel?: string | number): string {
  if (!currentLabel) return "Out of Tao, One is born";
  if (currentLabel === "Out of Tao, One is born") return "Out of One, Two";
  if (currentLabel === "Out of One, Two") return "Out of Two, Three";
  if (currentLabel === "Out of Two, Three") {
    return "Out of Three, the created universe";
  }
  if (currentLabel === "Out of Three, the created universe") {
    return "Out of Tao, One is born";
  }
  return "";
}

// 加载数据的方法
function handleLoad(node: treeOptions) {
  return new Promise<treeOptions[]>((resolve) => {
    setTimeout(() => {
      console.log("handleLoad");
      resolve([
        {
          label: nextLabel(node.label),
          key: node.key + nextLabel(node.label),
          isLeaf: false,
        },
      ]);
    }, 1000);
  });
}

const value = ref<(string | number)[]>([]);

//禁用节点
// const data = ref<treeOptions[]>([
//   {
//     key: "0",
//     label: "0",
//     children: [
//       {
//         key: "0-0",
//         label: "0-0",
//       },
//       {
//         disabled: true, // 禁用此节点
//         key: "0-1",
//         label: "0-1",
//         children: [
//           {
//             label: "0-1-0",
//             key: "0-1-0",
//           },
//           {
//             label: "0-1-1",
//             key: "0-1-1",
//           },
//         ],
//       },
//     ],
//   },
// ]);

const check = ref(false);

function handleChange(val: boolean) {
  console.log(val, "handleChange/checkBox");
}

function handleClick() {
  console.log("click");
}
function handleMouseDonw() {
  console.log("mousedonw-button");
}

const userName = ref("hello");
function handleBlur() {
  console.log("blue");
}

const state = ref({
  userName: "",
  password: "",
});

watch(
  () => state.value.userName,
  () => {
    console.log(state);
  }
);

const formRef = ref<FormInstance>();
formRef.value?.validate;

const validateForm = () => {
  const form = formRef.value;
  form?.validate((valid, fields?) => {
    //为什么error打印是undifined
    console.log(valid, fields);
  });
};

function beforeUpload(rawFile: UploadRawFile) {
  return true;
}
</script>

<template>
  {{ value }}
  <div class="box">
    <div class="inner-boxs">
      <s-icon :color="'red'" :size="20">
        <AddCircle> </AddCircle>
        s-icon
      </s-icon>
      <s-icon :color="'green'" :size="20">
        <AddCircle></AddCircle>
      </s-icon>
    </div>
    <div class="inner-boxs">
      <!-- <s-tree
        :data="data"
        label-field="label"
        key-field="key"
        children-field="children"
        :default-expanded-keys="['40', '41']"
      ></s-tree> -->
      <s-tree
        :data="data"
        :on-load="handleLoad"
        v-model:selected-keys="value"
        selectable
        multiple
        :show-checkbox="true"
        :defaultCheckedKeys="[40, 41]"
        :indeterminate="false"
      >
        <template #default="{ node }">
          {{ node!.key }}-
          {{ node!.label }}
        </template>
      </s-tree>

      <s-checkbox
        v-model="check"
        :disabled="false"
        :indeterminate="true"
        label="label标签"
        @change="handleChange"
        :show-checkbox="true"
        :defaultCheckedKeys="[40, 41]"
        :indeterminte="false"
        >插槽</s-checkbox
      >
    </div>
    <br />
    <s-button
      type="primary"
      :round="true"
      :loading="false"
      icon-placement="left"
      :disabled="false"
      @click="handleClick"
      @mouseDown="handleMouseDonw"
    >
      <template #icon>
        <s-icon :size="20">
          <AddCircle></AddCircle>
        </s-icon>
      </template>
      123
    </s-button>
  </div>
  <!-- update:selectedKeys -->
  <!-- <s-icon :size="20"> <AddCircle></AddCircle> </s-icon> -->

  <s-input
    :show-password="true"
    :clearable="true"
    :placeholder="'666'"
    v-model="userName"
    @blur="handleBlur"
  >
    <template #prepend>212</template>
    <template #prefixIcon>
      <s-icon :size="20"> <AddCircle></AddCircle> </s-icon>
    </template>
    <!-- <template #sufixIcon>
      <s-icon :size="20">
        <AddCircle></AddCircle>
      </s-icon>
    </template> -->
    <template #append> 311</template>
  </s-input>
  {{ userName }}
  <s-form
    ref="formRef"
    :model="state"
    :rules="[
      {
        userName: {
          min: 6,
          max: 10,
          message: '用户名长度必须在6到10个字符之间',
          trigger: ['blur', 'change'],
        },
      },
    ]"
    :show-message="true"
  >
    <s-form-item
      prop="userName"
      label="请输入用户名"
      :rules="[
        {
          required: true,
          message: '请输入用户名',
          trigger: 'blur',
        },
      ]"
    >
      <s-input
        v-model="state.userName"
        placeholder="请输入用户名"
        clearable
      ></s-input>
      <template #label>用户名</template>
    </s-form-item>
    <s-form-item
      prop="password"
      label="请输入密码"
      :rules="[{ required: true, message: '输入正确格式', trigger: 'blur' }]"
    >
      <s-input
        v-model="state.password"
        placeholder="请输入密码"
        type="password"
        show-password
      ></s-input>
    </s-form-item>
  </s-form>
  <s-button a="1" size="medium" type="primary" @click="validateForm"
    >提交</s-button
  >

  <s-upload
    :before-upload="beforeUpload"
    action="/upload模拟接口"
    name="file"
    :multiple="true"
    methods="post"
  >
    <s-button>上传文件</s-button>
  </s-upload>
</template>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 800px;
  .inner-boxs {
    margin-right: 20px;
    width: 100%;
  }
}
</style>
