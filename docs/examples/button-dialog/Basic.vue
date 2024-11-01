<script setup lang="ts">
import { CnButtonDialog } from "cangni";
import { ElLink, ElSpace } from "element-plus";

function handleOpen() {
  console.log("open");
}

function handleClose() {
  console.log("close");
}
</script>

<template>
  <el-space>
    <cn-button-dialog title="弹窗标题" @open="handleOpen" @closed="handleClose" triggerText="打开弹窗">
      弹框内容
    </cn-button-dialog>

    <cn-button-dialog title="弹窗标题" @open="handleOpen" @closed="handleClose" triggerText="打开弹窗">
      <template #trigger="{ open }">
        <el-link :underline="false" type="primary" @click="open"> 自定义触发器 </el-link>
      </template>
      弹框内容
    </cn-button-dialog>
  </el-space>
</template>
