## 简介
基于 Vue3 + TypeScript 的组件库，实现 Monorepo 架构、BEM 规范、Playground 预览与 VitePress 文档系统
这个组建库和我在前公司开发的组件库架构大致相同，也是参考ElementUI的实现方式，主要是给自己一个技术备份，如看客有学习的意愿，可以参考一下
，样式之后会完善，重要的是架构和逻辑，对组件的结构和逻辑的理解有很大的帮助。

### 目前可用组件
 `form` `button` `checkBox` `icon` `input` `tree` `upload` `dayList(开发中)`


## 项目文件架构  
sx-ui <br/>
├─ packages <br/>
│ ├─ components # 组件库源码 <br/>
│ ├─ hooks # 通用 hooks <br/>
│ ├─ utils # 工具函数 <br/>
├─ play # 组件预览环境（Playground） <br/>
├─ docs # 文档系统（VitePress） <br/>
└─ tsconfig.json # TS 配置 <br/>
 
## 使用
<details>
  <summary>推荐环境</summary>
- 使用pnpm实现monorepo架构，具有安装速度快、磁盘空间利用率高的优点  <br/>
- TypeScript配置采用严格模式，支持ES6模块和装饰器语法  <br/>
- 排除了测试文件和构建产物的类型检查  <br/>
</details>

<details>
  <summary>必备构建安装</summary>

 ```

# 全局安装pnpm
npm install pnpm -g

# 初始化项目
pnpm init

# 安装依赖
pnpm install vue typescript -D

```

```

# 工作区配置
workspaces=true
workspace-agents=true

# 共享依赖提升
hoist=true
hoist-pattern=*

# 避免符号链接问题
shamefully-hoist=true

```

```

配置eslint-ts（可选）
pnpm i @vue/eslint-config-typescript -D -w

配置vitepress文档（重要）
「用 Markdown 写伪代码 / 示例，然后自动生成组件库文档」
pnpm install vitepress -D -w

```

```

初始化ts
pnpm tsc --init

创建pnpm-workspace.yaml

pnpm add ./packages/components -w

创建play文件（主文件/play），运行写好的组件
pnpm create vite play --template vue-ts

```

</details>

<details>
  <summary>重要命令行</summary>
  
```

  #运行play测试文件，用于预览，play目录下运行
  npm run dev

  #运行vitepress-docs，预览组件使用文档，根目录下运行
  npm run docs
  
```
</details>

<details>
  <summary>重要开发依赖</summary>
- "vue": "^3.x"  <br/>
- async-validator（表单校验核心库）  <br/>
- @xicons（图标库）  <br/>
- lodash-es（Upload 和工具函数用于控制并发）  <br/>
- dayjs（某些组件格式化时间，如日历（正在开发））  <br/>
</details>

## 技术栈
  *  Vue3：采用 Vue3 + script setup 最新的 Vue3 组合式 API  
  *  Vite：真的很快  
  *  TypeScript：高效清晰的类型检查  
  *  SCSS：和 Element Plus 保持一致，函数式命名规范，方便大型项目的管理  
  *  pnpm：更快速的，节省磁盘空间的包管理工具  
  *  VitePress：极速的 Vite 驱动静态文档生成器，挺方便的

## vue3组件库开发常遇兼容性相关的问题/坑
  1. vite和typescript兼容性问题，ExtractPropTypes + typeof 导致类型丢失

      ```
      
      // 避免使用typeof，可以使用interface替代
      export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
      
      ```

  2. vite和typescript的路径别名需要各自配置

      ```
      //JSON
      "compilerOptions": {
        "paths": {"@/*": ["src/*"]}
      
      //vite.config.ts
      resolve: {
      alias: {"@": path.resolve(__dirname, "src")}}
      
      ```
      
  3. monorepo + tsconfig path 导致 whithInstall 返回类型缺失

      ```
      //TS 不能正确推断 Form 的类型（因为类型从 dist 引入，被擦掉）
      export type FormInstance = InstanceType<typeof Form>;
      
      ```
        
  4. computed<某类型> 返回值必须严格匹配，否则报错  
      props 类型与 UploadContentProps 不完全匹配（多字段/少字段/函数签名不一致）,需要显式构造完整返回值


## 安装方式

```

## 安装（暂未发布到 npm，可本地引用）

```sh
# 安装 sx-ui（未来）
npm install sx-ui

# 目前本地使用（示例）
pnpm add ./packages/components

```
## 快速开始
```

//App.vue
<script setup>
import { SButton, SInput } from "sx-ui";
</script>

<template>
  <SButton type="primary">Primary</SButton>
  <SInput v-model="value" placeholder="请输入内容"></SInput>
</template>

```

 
## 使用示例


input组件 <br/>
   <img src="https://private-user-images.githubusercontent.com/54209506/516256339-133000fd-d262-4525-a0b9-97ff7bc9a805.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjM1NTUzNDksIm5iZiI6MTc2MzU1NTA0OSwicGF0aCI6Ii81NDIwOTUwNi81MTYyNTYzMzktMTMzMDAwZmQtZDI2Mi00NTI1LWEwYjktOTdmZjdiYzlhODA1LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTExMTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMTE5VDEyMjQwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTliNTQ5YzY0YmNhNmFlYjBmNWVjNmVlNTgyYmVmZTk4ODdjMGQyN2Y0NzAyYzkzMTZjZGI1ZDEwNzdkYjdjNzAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.-cN3aWO4Cxt_OH17_AxeK4WXW1iKg2FNjMUZ_by8Cb8" width="350" />

      
      
  ```
  <s-input
    :show-password="true"
    :clearable="true"
    :placeholder="'666'"
    v-model="userName"
    @blur="handleBlur"
  >
    <template #prepend>头部</template>
    <template #prefixIcon>
      <s-icon :size="20"> <AddCircle></AddCircle> </s-icon>
    </template>
    <template #append> 尾部</template>
  </s-input>
  ```
    

  ## Last & No least

这是我参考前公司内部组件库与 ElementUI 设计思想实现的 Vue3 UI 组件库。
主要目的：
- 作为前端工程化 & 组件化的总结
- 稳固自己的前端体系知识
- 未来根据需求持续维护与扩展

欢迎 Issue / PR，如果你也想学习如何从 0 到 1 搭建组件库，这个项目一定能帮到你。

