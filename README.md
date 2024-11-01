# 藏匿

[![GitHub license](https://img.shields.io/github/license/guo1186874557/cangni)](https://github.com/guo1186874557/cangni/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/guo1186874557/cangni)](https://github.com/guo1186874557/cangni/issues)
[![GitHub stars](https://img.shields.io/github/stars/guo1186874557/cangni)](https://github.com/guo1186874557/cangni/stargazers)

## 文档地址

[https://guo1186874557.github.io/cangni/](https://guo1186874557.github.io/cangni/)

## 项目简介

基于 element-plus 二次开发的一些常用组件

## 技术栈

- **前端框架**：Vue
- **样式框架**：ElementPlus
- **编程语言**：TypeScript
- **构建工具**：Vite

## 快速开始

### 安装

```bash
npm i cangni
```

## 全局使用

main.ts

```ts
import { createApp } from "vue";
import App from "./App.vue";

// 组件
import * as cangni from "cangni";

// 样式
import "element-plus/dist/index.css";
import "cangni/dist/style.css";

const app = createApp(App);
app.use(cangni);
app.mount("#app");
```

## 局部使用

```html
<template>
  <CnButton>按钮</CnButton>
</template>
<script setup lang="ts">
  import "cangni/components/button/style";
  import { CnButton } from "cangni";
</script>
```

## 贡献者

<a href="https://github.com/guo1186874557/cangni/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=guo1186874557/cangni" />
</a>

## LICENSE

[MIT](./LICENSE)
