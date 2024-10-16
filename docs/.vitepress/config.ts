import { defineConfigWithTheme } from "vitepress";
import vueJsx from "@vitejs/plugin-vue-jsx";
import escookConfig from "@escook/vitepress-theme/config";
import { viteDemoPreviewPlugin, demoPreviewPlugin } from "@vitepress-code-preview/plugin";
import { fileURLToPath } from "node:url";

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  extends: escookConfig,
  title: "藏匿",
  description: "基于element-plus封装的组件库",
  themeConfig: {
    logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
    ],

    sidebar: {
      "/component/": [
        {
          text: "基础组件",
          collapsed: false,
          items: [
            { text: "Button 按钮", link: "/component/button" },
            { text: "ButtonDialog 按钮弹窗", link: "/component/button-dialog" },
            { text: "DateRange 日期范围", link: "/component/date-range" },
            { text: "select 选择器", link: "/component/select" },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/guo1186874557/second-ui" }],
    musicBall: {
      visible: true,
      src: "https://music.163.com/song/media/outer/url?id=138695.mp3",
    },
    confetti: false,
  },
  vite: {
    plugins: [vueJsx(), viteDemoPreviewPlugin()],
    server: {
      port: 3000,
      host: true,
    },
  },
  markdown: {
    config: (md) => {
      const docRoot = fileURLToPath(new URL("../", import.meta.url));
      md.use(demoPreviewPlugin, { docRoot });
    },
  },
});
