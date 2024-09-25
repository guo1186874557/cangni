import path from "node:path";

import { nodeResolve } from "@rollup/plugin-node-resolve";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { type InputOptions, rollup } from "rollup";
import esbuild from "rollup-plugin-esbuild";

import { PKG_NAME } from "../constant/pkg";
import { generateExternal } from "../pack-utils/generateExternal";
import { outputPath, packagesPath } from "../pack-utils/path";

async function pack(minify: boolean = false) {
  const plugins: InputOptions["plugins"] = [nodeResolve(), vue(), vueJsx()];
  plugins.push(
    esbuild({
      minify: minify,
      define: {
        __DEV__: minify ? "false" : "true",
      },
    }),
  );

  const inputOption: InputOptions = {
    input: path.join(packagesPath, PKG_NAME, "index.ts"),
    external: generateExternal({ full: true }),
    plugins: plugins,
    treeshake: true,
  };

  const bundle = await rollup(inputOption);

  await bundle.write({
    file: path.join(outputPath, "dist", `index${minify ? ".prod" : ""}.mjs`),
    format: "esm",
    sourcemap: true,
    exports: "named",
  });

  await bundle.write({
    file: path.join(outputPath, "dist", `index.umd${minify ? ".prod" : ""}.js`),
    format: "umd",
    sourcemap: true,
    exports: "named",
    name: PKG_NAME[0].toLocaleUpperCase() + PKG_NAME.slice(1),
    globals: {
      vue: "Vue",
      "element-plus": "ElementPlus",
    },
  });
}

const packBundle = async () => {
  return Promise.all([pack(false), pack(true)]);
};

export default packBundle;
