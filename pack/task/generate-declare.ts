import fs, { copyFileSync } from "node:fs";
import path from "node:path";

import { glob, globSync } from "fast-glob";

import { COMPONENT_PREFIX, PKG_NAME, WORKSPACE_NAME } from "../constant/pkg";
import { outputPath, outputRootPath, packagesPath, rootPath } from "../pack-utils/path";
import run from "../pack-utils/run";

export function generateGlobalDts() {
  const componentNames = globSync("./*", {
    cwd: path.join(packagesPath, "components"),
    onlyDirectories: true,
    dot: true,
  });
  const _componentNames = componentNames.map(
    (name) =>
      COMPONENT_PREFIX +
      name
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(""),
  );
  const content = ` declare module "vue" {
                      interface GlobalComponents {
                        ${_componentNames.map((name) => `${name}: (typeof import("${PKG_NAME}"))["${name}"]`).join("\n")}
                      }
                    }
                    export {};`;

  fs.writeFileSync(path.join(rootPath, "types/global.d.ts"), content);
  run("npx eslint --fix types/global.d.ts");
}

export default async function generateDeclare() {
  run(`npx vue-tsc -p tsconfig.pkg.json --declaration --emitDeclarationOnly --declarationDir ${outputRootPath}/types`);

  const files = await glob("**/*.d.ts", {
    cwd: path.join(outputRootPath, "types"),
    absolute: true,
    onlyFiles: true,
  });

  files.forEach((file) => {
    let destPath = file.split("packages")[1];
    if (new RegExp(`^[\\/]${PKG_NAME}`).test(destPath)) {
      destPath = destPath.replace(new RegExp(`^[\\/]${PKG_NAME}`), "");
    }
    const content = fs.readFileSync(file, "utf-8");
    fs.writeFileSync(path.join(outputPath, destPath), content.replaceAll(WORKSPACE_NAME, PKG_NAME));
  });
  // 生成global.d.ts
  generateGlobalDts();
}
