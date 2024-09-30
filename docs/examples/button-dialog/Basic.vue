<script setup lang="ts">
function handleOpen() {
  console.log("open");
}

function handleClose() {
  console.log("close");
}
</script>

<template>
  <cn-button-dialog title="弹窗标题" @open="handleOpen" @closed="handleClose" triggerText="打开弹窗">
    弹框内容
  </cn-button-dialog>
</template>
