<script setup lang="ts">
import type { GetEmits, WithEmitsOn } from "@hlui/utils";
import { type ButtonProps, ElButton, ElForm, ElMessage } from "element-plus";
import { ref, useAttrs } from "vue";

defineOptions({ name: "HlButton", inheritAttrs: false });
type ButtonPropType = Partial<Omit<ButtonProps, "loading">> & {
  showMessage?: boolean;
  successMessage?: string;
  errorMessage?: string;
  formRef?: InstanceType<typeof ElForm>;
};
const props = withDefaults(defineProps<ButtonPropType>(), {
  showMessage: false,
  successMessage: "操作成功",
  errorMessage: "操作失败",
});

const slots = defineSlots<InstanceType<typeof ElButton>["$slots"]>();
type ButtonEmitsType = {
  click?: (event: MouseEvent) => void | Promise<void>;
};
defineEmits</* @vue-ignore */ GetEmits<ButtonEmitsType>>();
const attrs = useAttrs() as WithEmitsOn<ButtonEmitsType>;

const loading = ref(false);
async function onClick(event: MouseEvent) {
  if (!attrs.onClick) return;
  if (props.formRef) {
    try {
      await props.formRef.validate();
    } catch (error) {
      return;
    }
  }
  try {
    loading.value = true;
    await attrs.onClick(event);
    props.showMessage && ElMessage.success(props.successMessage);
  } catch (error) {
    props.showMessage && ElMessage.error(props.errorMessage);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <ElButton v-bind="props" @click="onClick" :loading="loading">
    <template v-for="(_, slot) in slots" #[slot]="scoped">
      <template v-if="slot === 'default'">
        <slot></slot>
      </template>
      <slot v-else :name="slot" v-bind="scoped"></slot>
    </template>
  </ElButton>
</template>

<style scoped></style>
