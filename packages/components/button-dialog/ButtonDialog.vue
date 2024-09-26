<script setup lang="ts">
import type { GetEmits } from "@hlui/utils";
import { type ButtonProps, type DialogEmits, type DialogProps, ElButton, ElDialog } from "element-plus";
import { createApp, h, onMounted, ref, useAttrs } from "vue";

defineOptions({ inheritAttrs: false, name: "HlButtonDialog" });

/* ---------------------------------- props --------------------------------- */
type DialogPropsType = Partial<
  Omit<DialogProps, "modelValue"> &
    Pick<ButtonProps, "type" | "size" | "circle" | "round"> & {
      triggerText: string;
      showTrigger: boolean;
    }
>;
const props = withDefaults(defineProps<DialogPropsType>(), {
  showClose: true,
  closeOnClickModal: false,
  modal: true,
  triggerText: "打开弹窗",
  type: "primary",
  showTrigger: true,
});

/* ---------------------------------- emits --------------------------------- */
const emit = defineEmits</* @vue-ignore */ GetEmits<DialogEmits>>();
const attr: Partial<Record<keyof DialogEmits, any>> = useAttrs();

const slots = defineSlots<{
  trigger(props: { open: () => void }): any;
  default(): any;
  header(props: { close: () => void }): any;
  footer(props: { close: () => void }): any;
}>();

/* ---------------------------------- 打开弹窗 ---------------------------------- */

const dialogRef = ref<InstanceType<typeof ElDialog> | null>(null);
function close() {
  dialogRef.value!.visible = false;
}

function open() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { open, closed, ...otherAttrs } = attr;
  const div = document.createElement("div");
  const app = createApp({
    setup() {
      onMounted(() => emit("open"));

      return () =>
        h(
          ElDialog,
          {
            ...props,
            ref: (el: any) => (dialogRef.value = el),
            modelValue: true,
            ...otherAttrs,
            onClosed: () => {
              {
                app.unmount();
                document.body.removeChild(div);
                emit("closed");
              }
            },
          },
          {
            default: () => slots.default?.(),
            header: () => slots.header?.({ close }),
            footer: () => slots.footer?.({ close }),
          },
        );
    },
  });
  app.mount(div);
  document.body.appendChild(div);
}

defineExpose({
  open,
  close,
});
</script>

<template>
  <slot name="trigger" :open="open" v-if="showTrigger">
    <el-button :type="type" :size="size" :circle="circle" :round="round" @click="open">
      {{ triggerText }}
    </el-button>
  </slot>
</template>
