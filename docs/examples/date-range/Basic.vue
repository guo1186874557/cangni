<script setup lang="ts">
import { CnDateRange } from "@cangni/components";
import { ref } from "vue";

const dateRange = ref({
  startDate: "2022-01-01",
  endDate: "2022-01-31",
});

const dateRangeWithTime = ref({
  startDate: "2024-10-16 00:00:00",
  endDate: "2024-10-31 23:59:59",
});
</script>

<template>
  <pre>
    {{ dateRange }}
  </pre>
  <CnDateRange v-model:start="dateRange.startDate" v-model:end="dateRange.endDate"></CnDateRange>

  <pre>
    {{ dateRangeWithTime }}
  </pre>
  <CnDateRange
    v-model:start="dateRangeWithTime.startDate"
    v-model:end="dateRangeWithTime.endDate"
    separator="###"
    show-select-time></CnDateRange>
</template>

<style scoped></style>
