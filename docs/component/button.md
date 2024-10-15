# ButtonDialog 按钮弹窗

## 基础用法

:::demo src=examples/button/Basic.vue
:::

## 校验表单

:::demo src=examples/button/ValidateForm.vue
:::

## Props

```ts
type ButtonPropType = Partial<Omit<ButtonProps, "loading">> & {
  showMessage?: boolean;
  successMessage?: string;
  errorMessage?: string;
  formRef?: InstanceType<typeof ElForm>;
};
```

移除 `loading` 属性

扩展属性
| 属性名 | 类型 | 默认值 | 说明 |
| -------------- | -------------- | ---------- | -------------------- |
| showMessage | `boolean` | false | 是否显示提示信息 |
| successMessage | `string` | '操作成功' | 成功的提示 |
| errorMessage | `string` | '操作失败' | 失败的提示 |
| formRef | `FormInstance` | - | element-plus表单实例 |

其他参考 [el-button](https://element-plus.org/zh-CN/component/button.html#button-api)
