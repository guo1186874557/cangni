// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import escookTheme from "@escook/vitepress-theme";
import "@escook/vitepress-theme/style.css";
import DemoPreview, { useComponents } from "@vitepress-code-preview/container";
import "@vitepress-code-preview/container/dist/style.css";

import 'element-plus/dist/index.css'
import "element-plus/theme-chalk/dark/css-vars.css";
import 'cangni/dist/index.css'

import "./style.css";
import Logo from "./Logo.vue";
export default {
  extends: escookTheme,
  Layout: () => {
    return h(escookTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "home-hero-image": () => {
        return h(Logo);
      },
    });
  },
  enhanceApp({ app, router, siteData }) {
    useComponents(app, DemoPreview);
  },
} satisfies Theme;
