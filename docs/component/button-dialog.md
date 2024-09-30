# ButtonDialog 按钮弹窗

## 基础用法

:::demo src=examples/button-dialog/Basic.vue
:::

## 使用插槽

:::demo src=examples/button-dialog/WithSlots.vue
:::

## Props

```ts
import type { ButtonProps, DialogProps } from "element-plus";
type DialogPropsType = Partial<
  Omit<DialogProps, "modelValue" | "destroyOnClose"> &
    Pick<ButtonProps, "type" | "size" | "circle" | "round"> & {
      triggerText: string;
      showTrigger: boolean;
    }
>;
```

这段代码定义了一个名为 `DialogPropsType` 的类型。它结合了 `element-plus` 库中的 `DialogProps` 和部分 `ButtonProps` 属性，并添加了一些自定义属性。具体来说：

- 从 `DialogProps` 中选取除了 `modelValue` 、 `destroyOnClose` 之外的所有属性。
- 从 `ButtonProps` 中选取特定的属性：`type, size, circle, round`。
- 添加两个自定义属性：`triggerText` 和 `showTrigger`。

最终形成的 `DialogPropsType` 可以用于描述一个带有对话框属性和部分按钮样式的组件的属性类型：

| 属性名      | 类型      | 默认值 | 说明                                                                                   |
| ----------- | --------- | ------ | -------------------------------------------------------------------------------------- |
| triggerText | `string`  | -      | 触发按钮的文本                                                                         |
| showTrigger | `boolean` | true   | 是否显示触发按钮                                                                       |
| type        | `string`  | -      | 按钮类型，可选值：`primary`、`success`、`warning`、`danger`、`info`、`text`、`default` |
| size        | `string`  | -      | 按钮尺寸，可选值：`large`、`medium`、`small`、`mini`                                   |
| circle      | `boolean` | false  | 是否为圆形按钮                                                                         |
| round       | `boolean` | false  | 是否为圆角按钮                                                                         |

查看 [DialogProps](https://element-plus.org/zh-CN/component/dialog.html#attributes)

## Events

| 事件名 | 说明             | 回调参数 |
| ------ | ---------------- | -------- |
| open   | 打开对话框时触发 | -        |
| close  | 关闭对话框时触发 | -        |

查看 [DialogEvents](https://element-plus.org/zh-CN/component/dialog.html#events)

## Exposes

| 属性名 | 类型       | 说明       |
| ------ | ---------- | ---------- |
| open   | () => void | 打开对话框 |
| close  | () => void | 关闭对话框 |

## Slots

```ts
const slots = defineSlots<{
  trigger(props: { open: () => void }): any;
  default(): any;
  header(props: { close: () => void }): any;
  footer(props: { close: () => void }): any;
}>();
```

| 名称    | 说明             |
| ------- | ---------------- |
| default | 对话框内容       |
| header  | 对话框头部       |
| footer  | 对话框底部       |
| trigger | 打开弹出的触发器 |
