<script setup lang="ts">
import { ElOption, ElSelect } from "element-plus";
import { ref, watchEffect } from "vue";

defineOptions({ name: "CnSelect", inheritAttrs: false });

defineEmits<{
  change: [val: string | string[]];
}>();

const modelValue = defineModel<string | string[]>({ default: "" });
type OptionType = {
  label: string;
  value: string;
};
const props = withDefaults(
  defineProps<{
    options?: OptionType[];
    multiple?: boolean;
    server?: () => Promise<OptionType[]>;
    placeholder?: string;
  }>(),
  {
    multiple: false,
  },
);

const _options = ref(props.options);
const loading = ref(false);
watchEffect(async () => {
  if (props.server) {
    try {
      loading.value = true;
      _options.value = await props.server();
    } catch (e) {
      console.error(e);
    } finally {
      loading.value = false;
    }
  }
});
</script>

<template>
  <ElSelect
    :placeholder="placeholder"
    clearable
    :loading="loading"
    v-model="modelValue"
    :multiple="multiple"
    @change="$emit('change', $event)">
    <ElOption v-for="item in _options" :key="item.value" :label="item.label" :value="item.value" />
  </ElSelect>
</template>

<style scoped></style>
