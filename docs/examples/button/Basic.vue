<script setup lang="ts">
async function apiMock() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("success");
    }, 2000);
  });
}

async function onClick() {
  await apiMock();
}

function asyncOnClick() {
  alert("同步函数");
}
</script>

<template>
  <CnButton @click="asyncOnClick" type="primary">按钮</CnButton>
  <CnButton @click="onClick" type="warning" show-message>按钮</CnButton>
  <CnButton @click="onClick" type="info" show-message success-message="自定义message">按钮</CnButton>
</template>

<style scoped></style>
