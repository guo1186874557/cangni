export type GetEmits<T> = Required<{ [K in keyof T]: T[K] extends (...args: infer A) => any ? A : never }>;

/**
 * 给事件名字符加上 `on` 前缀
 */
export type WithEmitsOn<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
