import path from "node:path";

import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import fg from "fast-glob";
import { type InputOptions, rollup } from "rollup";
import esbuild from "rollup-plugin-esbuild";

import { PKG_NAME, WORKSPACE_NAME } from "../constant";
import { generateExternal } from "../pack-utils/generateExternal";
import { outputPath, packagesPath } from "../pack-utils/path";

export default async function packModule() {
  const input = fg.globSync("**/*.{ts,tsx,vue}", {
    cwd: packagesPath,
    absolute: true,
    onlyFiles: true,
    ignore: ["**/node_modules/**"],
  });

  const inputOption: InputOptions = {
    input,
    external: generateExternal({ full: false }),
    plugins: [
      nodeResolve(),
      vue(),
      vueJsx(),
      commonjs(),
      esbuild(),
      {
        name: "replace-alias",
        resolveId(id) {
          if (!id.startsWith(WORKSPACE_NAME)) return;
          return {
            id: id.replace(WORKSPACE_NAME, PKG_NAME),
            external: "absolute",
          };
        },
      },
    ],
    treeshake: true,
  };

  const bundle = await rollup(inputOption);

  await bundle.write({
    dir: outputPath,
    preserveModules: true,
    preserveModulesRoot: path.join(packagesPath, "core"),
    format: "esm",
    exports: "named",
    sourcemap: true,
    entryFileNames: "[name].js",
  });
}
