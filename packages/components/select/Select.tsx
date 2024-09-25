import { ElOption, ElSelect } from "element-plus";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const options = [
      {
        label: "Option 1",
        value: 1,
      },
      {
        label: "Option 2",
        value: 2,
      },
    ];
    const val = ref(1);
    return () => (
      <ElSelect modelValue={val.value} onChange={(value) => (val.value = value)}>
        {options.map((option) => (
          <ElOption key={option.value} value={option.value}>
            {option.label}
          </ElOption>
        ))}
      </ElSelect>
    );
  },
});
