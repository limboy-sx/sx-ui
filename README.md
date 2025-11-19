## 简介
基于 Vue3 + TypeScript 的组件库，实现 Monorepo 架构、BEM 规范、Playground 预览与 VitePress 文档系统
这个组建库和我在前公司开发的组件库架构大致相同，也是参考ElementUI的实现方式，主要是给自己一个技术备份，如看客有学习的意愿，可以参考一下
，样式之后会完善，重要的是架构和逻辑，对组件的结构和逻辑的理解有很大的帮助。

### 目前可用组件
 `form` `button` `checkBox` `icon` `input` `tree` `upload` `dayList(开发中)`


## 项目文件架构  
packages/ 组建库主文件   
docs/ VitePress 文档，组件文档  
play/ Playground 预览，用于本地测试  
package.json  
tsconfig.json  
README.md  
.gitignore    

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
  
 
## 使用实例

      
   
    
      
