import fs from "node:fs";
import path from "node:path";

import { glob } from "fast-glob";

import { PKG_NAME, WORKSPACE_NAME } from "../constant/pkg";
import { outputPath, rootPath } from "../pack-utils/path";
import run from "../pack-utils/run";

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
  };
}
