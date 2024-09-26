import fs from "node:fs";

import { globSync } from "fast-glob";

import { outputPath } from "../pack-utils/path";
/**
 * 清空输出目录
 */
export default async function clearOutDir() {
  if (!fs.existsSync(outputPath)) return;
  const files = globSync("./*", { cwd: outputPath, absolute: true, onlyFiles: true, ignore: ["**/node_modules/**"] });
  files.forEach((file) => {
    fs.unlinkSync(file);
  });
  const dirs = globSync("**/*", {
    cwd: outputPath,
    absolute: true,
    onlyDirectories: true,
    ignore: ["**/node_modules/**"],
  });
  dirs.forEach((dir) => {
    fs.rmSync(dir, { recursive: true, force: true });
  });
}
