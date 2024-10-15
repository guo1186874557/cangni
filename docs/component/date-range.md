# DateRange 日期范围选择器

## 基础用法

:::demo src=examples/date-range/Basic.vue
:::

## Props

```ts
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
```

| 属性名           | 类型      | 默认值     | 说明             |
| ---------------- | --------- | ---------- | ---------------- |
| showSelectTime   | `boolean` | false      | 是否显示选择时间 |
| placeholder      | `string`  | 请选择时间 | 占位符           |
| startValueFormat | `string`  | ''         | 开始日期格式化   |
| endValueFormat   | `string`  | ''         | 结束日期格式化   |
| separator        | `string`  | ~          | 分隔符           |
