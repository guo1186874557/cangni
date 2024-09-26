import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

import { nodeResolve } from "@rollup/plugin-node-resolve";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import fg from "fast-glob";
import { type InputOptions, rollup } from "rollup";
import esbuild from "rollup-plugin-esbuild";

import { PKG_NAME, WORKSPACE_NAME } from "../constant/pkg";
import { generateExternal } from "../pack-utils/generateExternal";
import { outputPath, packagesPath } from "../pack-utils/path";

export default function packModule(pkgName?: string) {
  return async () => {
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
        esbuild(),
        {
          name: "replace-alias",
          resolveId(id) {
            if (!id.startsWith(WORKSPACE_NAME)) return;
            return {
              id: id.replace(WORKSPACE_NAME, pkgName || PKG_NAME),
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
      preserveModulesRoot: path.join(packagesPath, PKG_NAME),
      format: "esm",
      exports: "named",
      sourcemap: true,
      entryFileNames: "[name].js",
    });

    const content = readFileSync(path.join(packagesPath, PKG_NAME, "package.json"), "utf-8");
    const packageJson = JSON.parse(content);
    packageJson.name = pkgName || PKG_NAME;
    writeFileSync(path.join(outputPath, "package.json"), JSON.stringify(packageJson, null, 2));
  };
}
