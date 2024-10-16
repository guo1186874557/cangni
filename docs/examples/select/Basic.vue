<script setup lang="ts">
import { ElDivider } from "element-plus";
import { ref } from "vue";

async function getOptions(): Promise<any[]> {
  return new Promise((r) => {
    setTimeout(() => {
      r([
        { label: "选项1", value: "1" },
        { label: "选项2", value: "2" },
        { label: "选项3", value: "3" },
      ]);
    }, 3000);
  });
}

const modelValue = ref("");

const options = [
  { label: "选项5", value: "5" },
  { label: "选项6", value: "6" },
  { label: "选项7", value: "7" },
];
</script>

<template>
  <cn-select v-model="modelValue" :server="getOptions"></cn-select>
  <el-divider />
  <cn-select v-model="modelValue" :options="options"></cn-select>
</template>

<style scoped></style>
