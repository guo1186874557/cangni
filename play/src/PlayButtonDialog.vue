<script setup lang="ts">
import { CnButtonDialog } from "@cangni/components";

function handleOpen() {
  console.log("open");
}

function handleClose() {
  console.log("close");
}
</script>

<template>
  <CnButtonDialog title="弹窗标题" @open="handleOpen" @closed="handleClose" class="my-dialog">
    <template #header="{ close }">
      <button @click="close">关闭1</button>
    </template>
    <template #footer>
      <button>确定</button>
    </template>
  </CnButtonDialog>
  <CnButtonDialog title="弹窗标题" @open="handleOpen" @closed="handleClose" class="my-dialog">
    <template #header="{ close }">
      <button @click="close">关闭2</button>
    </template>
  </CnButtonDialog>
  <CnButtonDialog title="弹窗标题" @open="handleOpen" @closed="handleClose" class="my-dialog">
    <template #header="{ close }">
      <button @click="close">关闭3</button>
    </template>
  </CnButtonDialog>
</template>

<style lang="scss" scoped></style>
