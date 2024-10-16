# Select 选择器

## 基础用法

可使用接口获取options

:::demo src=examples/select/Basic.vue
:::

## Props

```ts
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
```

| 属性名      | 类型                          | 默认值      | 说明       |
| ----------- | ----------------------------- | ----------- | ---------- |
| modelValue  | `string or string[]`          | ''          |            |
| options     | `OptionType[]`                | `[]`        | 本地选项   |
| multiple    | `boolean`                     | `false`     | 是否多选   |
| server      | `() => Promise<OptionType[]>` | `undefined` | 服务器选项 |
| placeholder | `string`                      | `''`        | 占位符     |

## Events

```ts
const emit = defineEmits<{
  (e: "change", value: string | string[]): void;
}>();
```

| 事件名 | 说明             | 回调参数   |
| ------ | ---------------- | ---------- |
| change | 选择值变化时触发 | 更新后的值 |
