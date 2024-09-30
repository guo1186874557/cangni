declare module "vue" {
  interface GlobalComponents {
    CnButton: (typeof import("cangni"))["CnButton"];
    CnButtonDialog: (typeof import("cangni"))["CnButtonDialog"];
    CnDateRange: (typeof import("cangni"))["CnDateRange"];
  }
}
export {};
