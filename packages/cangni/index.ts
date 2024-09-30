import * as comps from "@cangni/components";
import type { App } from "vue";

export * from "@cangni/components";
export * from "@cangni/utils";

export function install(app: App) {
  Object.values(comps).forEach((comp) => {
    app.use(comp);
  });
}
