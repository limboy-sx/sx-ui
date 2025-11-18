# 快速开始

# Icon 图标

s-ui 推荐使用 xicons 作为图标库。

```bash
$ pnpm install @vicons/ionicons5
```

## 使用图标

- 如果你想像例一样直接使用，你需要全局注册组件，才能够直接在项目里使用。

<script setup lang="ts">
  import { PersonOutline  } from "@vicons/ionicons5";
</script>


<s-icon color="white" size="40">

  <PersonOutline/>
</s-icon>

<s-icon color="red" size="30">
  <PersonOutline/>
</s-icon>

<s-icon color="blue" size="20">
  <PersonOutline/>
</s-icon>
<div>

<s-icon color="white" size="40">
  <PersonOutline/>
</s-icon>

<s-icon color="green" size="30">
  <PersonOutline/>
</s-icon>

<s-icon color="blue" size="20">
  <PersonOutline/>
</s-icon>


</div>

```vue
<script setup lang="ts">
import { PersonOutline } from "@vicons/ionicons5";
</script>
<template>
  <s-icon color="red" size="40">
    <PersonOutline />
  </s-icon>
</template>
``` 

## API

### Icon Props

| 名称  | 类型               | 默认值     | 说明     |
| ----- | ----------------- | ---------- | -------- |
| color | string            | undefined  | 图标颜色 |
| size  | number \| string  | undefined  | 图片大小 |


