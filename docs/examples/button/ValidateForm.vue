<script setup lang="ts">
import { ElForm, ElFormItem, ElInput } from "element-plus";
import { ref } from "vue";

const formData = ref({
  username: "",
  password: "",
});

const formRef = ref();

async function apiMock() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("success");
    }, 2000);
  });
}
async function onLogin() {
  await apiMock();
}
</script>

<template>
  <ElForm ref="formRef" :model="formData" label-position="right" label-width="auto">
    <ElFormItem label="用户名" prop="username" required>
      <ElInput v-model="formData.username"></ElInput>
    </ElFormItem>
    <ElFormItem label="密码" prop="password" required>
      <ElInput v-model="formData.password"></ElInput>
    </ElFormItem>
    <ElFormItem label=" ">
      <CnButton @click="onLogin" show-message :form-ref="formRef" success-message="登录成功">登录</CnButton>
    </ElFormItem>
  </ElForm>
</template>

<style scoped></style>
