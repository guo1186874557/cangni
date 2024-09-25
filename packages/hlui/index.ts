import * as comps from "@hlui/components";
import type { App } from "vue";

export * from "@hlui/components";
export * from "@hlui/utils";

if (__DEV__) {
  console.log("hlui dev mode");
} else {
  console.log("hlui prod mode");
}
console.log("version: 0.0.1");

export default {
  install(app: App) {
    Object.values(comps).forEach((comp) => {
      comp.install(app);
    });
  },
};
