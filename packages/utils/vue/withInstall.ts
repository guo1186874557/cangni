import { type App } from "vue";

export function withInstall<T extends { name: string }>(component: T): T & { install: (app: App) => void } {
  const comp = component as T & { install: (app: App) => void };
  comp.install = (app: App) => {
    app.component(component.name, component);
  };
  return comp;
}
