import { type App } from "vue";

export type SFCWithInstall<T> = T & { install: (app: App) => void };
export function withInstall<T>(comp: T) {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    const name = (comp as any).name;
    app.component(name, comp as SFCWithInstall<T>);
  };
  return comp as SFCWithInstall<T>;
}
