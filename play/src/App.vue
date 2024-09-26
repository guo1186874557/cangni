<script setup lang="ts">
import { HlButtonDialog } from "@hlui/components";

function handleOpen() {
  console.log("open");
}

function handleClose() {
  console.log("close");
}
</script>

<template>
  <HlButtonDialog title="弹窗标题" @open="handleOpen" @closed="handleClose" class="my-dialog">
    <template #header="{ close }">
      <button @click="close">关闭1</button>
    </template>
    <template #footer>
      <button>确定</button>
    </template>
  </HlButtonDialog>
  <HlButtonDialog title="弹窗标题" @open="handleOpen" @closed="handleClose" class="my-dialog">
    <template #header="{ close }">
      <button @click="close">关闭2</button>
    </template>
  </HlButtonDialog>
  <HlButtonDialog title="弹窗标题" @open="handleOpen" @closed="handleClose" class="my-dialog">
    <template #header="{ close }">
      <button @click="close">关闭3</button>
    </template>
  </HlButtonDialog>
</template>

<style lang="scss" scoped></style>
