declare module "vue" {
  interface GlobalComponents {
    HlButton: (typeof import("hlui"))["HlButton"];
    HlButtonDialog: (typeof import("hlui"))["HlButtonDialog"];
  }
}
export {};
