<script setup lang="ts">
import "@hlui/components/button/style";
import "element-plus/es/components/form/style/css";
import "element-plus/es/components/form-item/style/css";
import "element-plus/es/components/input/style/css";
import "element-plus/es/components/link/style/css";
import "@hlui/components/button-dialog/style";

import { HlButton, HlButtonDialog } from "@hlui/components";
import { ElForm, ElFormItem, ElInput, ElLink } from "element-plus";
import { ref } from "vue";

// 模拟api
function task() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(123);
    }, 3000);
  });
}

const formData = ref({
  name: "",
});
const formRef = ref<InstanceType<typeof ElForm>>();
function resetForm() {
  formRef.value?.resetFields();
}

async function onClick(colse: () => void) {
  // 发送请求
  await task();

  /**操作完成的逻辑 */
  // 。。。。

  colse();
}
</script>

<template>
  <HlButtonDialog title="人员姓名">
    <template #trigger="{ open }">
      <ElLink style="margin-right: 10px" @click="open" type="primary">点击打开</ElLink>
    </template>
    <ElForm :model="formData" ref="formRef">
      <ElFormItem label="姓名" prop="name" required>
        <ElInput placeholder="请输入姓名" v-model="formData.name" />
      </ElFormItem>
    </ElForm>
    <template #footer="{ close }">
      <HlButton type="warning" @click="resetForm">重置</HlButton>
      <HlButton :form-ref="formRef" type="primary" @click="onClick(close)" show-message success-message="编辑成功">
        提交
      </HlButton>
    </template>
  </HlButtonDialog>
</template>

<style scoped></style>
