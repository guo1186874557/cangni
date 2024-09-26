import fs, { copyFileSync } from "node:fs";
import path from "node:path";

import { glob, globSync } from "fast-glob";

import { PKG_NAME, WORKSPACE_NAME } from "../constant/pkg";
import { outputPath, packagesPath, rootPath } from "../pack-utils/path";
import run from "../pack-utils/run";

export function generateGlobalDts() {
  const componentNames = globSync("./*", {
    cwd: path.join(packagesPath, "components"),
    onlyDirectories: true,
    dot: true,
  });
  const _componentNames = componentNames.map(
    (name) =>
      "Hl" +
      name
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(""),
  );
  const content = ` declare module "vue" {
                      interface GlobalComponents {
                        ${_componentNames.map((name) => `${name}: (typeof import("hlui"))["${name}"]`).join("\n")}
                      }
                    }
                    export {};`;

  fs.writeFileSync(path.join(rootPath, "types/global.d.ts"), content);
  run("npx eslint --fix types/global.d.ts");
  copyFileSync(path.join(rootPath, "types", "global.d.ts"), path.join(outputPath, "global.d.ts"));
}

export default function generateDeclare(pkgName?: string) {
  return async () => {
    run(`npx vue-tsc -p tsconfig.pkg.json --declaration --emitDeclarationOnly --declarationDir hlui/types`);

    const files = await glob("**/*.d.ts", {
      cwd: path.join(outputPath, "types"),
      absolute: true,
      onlyFiles: true,
    });

    files.forEach((file) => {
      let destPath = file.split("packages")[1];
      if (new RegExp(`^[\\/]${PKG_NAME}`).test(destPath)) {
        destPath = destPath.replace(new RegExp(`^[\\/]${PKG_NAME}`), "");
      }
      const content = fs.readFileSync(file, "utf-8");
      fs.writeFileSync(path.join(outputPath, destPath), content.replaceAll(WORKSPACE_NAME, pkgName || PKG_NAME));
    });
    if (fs.existsSync(path.join(outputPath, "types"))) {
      fs.rmSync(path.join(outputPath, "types"), { recursive: true });
    }

    const tsbuildinfoFiles = await glob("./*.tsbuildinfo", {
      cwd: rootPath,
      absolute: true,
      onlyFiles: true,
    });
    tsbuildinfoFiles.forEach((file) => {
      fs.rmSync(file);
    });

    // 生成global.d.ts
    generateGlobalDts();
  };
}
