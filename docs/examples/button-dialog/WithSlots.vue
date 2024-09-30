<script setup lang="ts">
function handleOpen() {
  console.log("open");
}

function handleClose() {
  console.log("close");
}
</script>

<template>
  <cn-button-dialog
    triggerText="打开弹窗"
    title="弹窗标题"
    @open="handleOpen"
    type="warning"
    @closed="handleClose"
    :show-close="false">
    <template #header="{ close }">
      <div style="display: flex; justify-content: space-between; align-items: center">
        <span>自定义标题</span>
        <cn-button size="small" circle type="danger" @click="close">X</cn-button>
      </div>
    </template>
    默认插槽
    <template #footer="{ close }">
      <cn-button type="primary" @click="close">确定</cn-button>
    </template>
  </cn-button-dialog>
</template>
