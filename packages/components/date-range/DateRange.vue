<script setup lang="ts">
import dayjs from "dayjs";
import { ElConfigProvider, ElDatePicker } from "element-plus";
import { computed } from "vue";

defineOptions({ name: "CnDateRange" });
const props = withDefaults(
  defineProps<{
    showSelectTime?: boolean;
    placeholder?: string;
    startValueFormat?: string;
    endValueFormat?: string;
    separator?: string;
  }>(),
  {
    showSelectTime: false,
    placeholder: "请选择时间",
    startValueFormat: "",
    endValueFormat: "",
    separator: "~",
  },
);
const start = defineModel<string>("start", { default: "" });
const end = defineModel<string>("end", { default: "" });
const _startValueFormat = computed(() => {
  if (props.startValueFormat) {
    return props.startValueFormat;
  }
  if (props.showSelectTime) {
    return "YYYY-MM-DD HH:mm:ss";
  }
  return "YYYY-MM-DD";
});
const _endValueFormat = computed(() => {
  if (props.endValueFormat) {
    return props.endValueFormat;
  }
  if (props.showSelectTime) {
    return "YYYY-MM-DD HH:mm:ss";
  }
  return "YYYY-MM-DD";
});

const dateType = computed<"date" | "datetime">(() => `${props.showSelectTime ? "datetime" : "date"}`);

function startDisabeldDate(date: Date) {
  if (!end.value) return false;
  return dayjs(date).isAfter(dayjs(end.value));
}
function endDisabeldDate(date: Date) {
  if (!start.value) return false;
  return dayjs(date).isBefore(dayjs(start.value));
}
</script>

<template>
  <div class="hl-date-range">
    <ElConfigProvider value-on-clear="">
      <ElDatePicker
        v-model="start"
        :value-format="_startValueFormat"
        :type="dateType"
        :placeholder="placeholder"
        :disabled-date="startDisabeldDate"></ElDatePicker>
    </ElConfigProvider>
    <!-- 分隔符 -->
    <div class="separator">{{ separator }}</div>
    <ElConfigProvider value-on-clear="">
      <ElDatePicker
        v-model="end"
        :value-format="_endValueFormat"
        :type="dateType"
        :placeholder="placeholder"
        :disabled-date="endDisabeldDate"
        :default-time="new Date(0, 0, 0, 23, 59, 59)"></ElDatePicker>
    </ElConfigProvider>
  </div>
</template>
