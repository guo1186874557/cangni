import fs from "node:fs";
import path from "node:path";

import { outputPath, packagesPath, rootPath } from "../pack-utils/path";

export default async function copyFile() {
  fs.copyFileSync(path.join(packagesPath, "core", "package.json"), path.join(outputPath, "package.json"));
  fs.copyFileSync(path.join(rootPath, "types", "global.d.ts"), path.join(outputPath, "global.d.ts"));
  fs.copyFileSync(path.join(rootPath, "LICENSE"), path.join(outputPath, "LICENSE"));
  fs.copyFileSync(path.join(rootPath, "README.md"), path.join(outputPath, "README.md"));
  fs.copyFileSync(path.join(outputPath, "theme-chalk", "index.css"), path.join(outputPath, "dist/index.css"));
}
