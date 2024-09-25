import { spawnSync } from "node:child_process";
import path from "node:path";

import { nodeResolve } from "@rollup/plugin-node-resolve";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import fg from "fast-glob";
import { type InputOptions, rollup } from "rollup";
import esbuild from "rollup-plugin-esbuild";

import { PKG_NAME } from "../constant/pkg";
import { generateExternal } from "../pack-utils/generateExternal";
import { outputPath, packagesPath, rootPath } from "../pack-utils/path";

async function packModule() {
  const input = fg.globSync("**/*.{ts,tsx,vue}", {
    cwd: packagesPath,
    absolute: true,
    onlyFiles: true,
    ignore: ["**/node_modules/**"],
  });

  const inputOption: InputOptions = {
    input,
    external: generateExternal({ full: false }),
    plugins: [nodeResolve(), vue(), vueJsx(), esbuild()],
    treeshake: false,
  };

  const bundle = await rollup(inputOption);

  await bundle.write({
    dir: outputPath,
    preserveModules: true,
    preserveModulesRoot: path.join(packagesPath, PKG_NAME),
    format: "esm",
    exports: "named",
    sourcemap: true,
    entryFileNames: "[name].js",
  });
  spawnSync("npx vue-tsc -p tsconfig.pkg.json --declaration --declarationDir hlui/types --emitDeclarationOnly", {
    shell: true,
    stdio: "inherit",
    cwd: rootPath,
  });
}
export default packModule;
