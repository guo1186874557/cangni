<script setup lang="ts">
import "@cangni/components/select/style";

import { CnSelect } from "@cangni/components";
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
</script>

<template>
  <CnSelect v-model="modelValue" :server="getOptions"></CnSelect>
</template>

<style scoped></style>
