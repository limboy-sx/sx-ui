## 简介
基于 Vue3 + TypeScript 的组件库，实现 Monorepo 架构、BEM 规范、Playground 预览与 VitePress 文档系统
这个组建库和我在前公司开发的组件库架构大致相同，主要是给自己一个技术备份，如看客有学习的意愿，可以拉下
来，样式之后会完善，重要的是架构和逻辑，对组件的结构和逻辑的理解有很大的帮助。


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


