import * as comps from "@hlui/components";
import type { App } from "vue";

export * from "@hlui/components";
export * from "@hlui/utils";

export function install(app: App) {
  Object.values(comps).forEach((comp) => {
    comp.install(app);
  });
}
