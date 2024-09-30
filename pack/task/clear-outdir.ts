import fs from "node:fs";

import { outputRootPath } from "../pack-utils/path";
/**
 * 清空输出目录
 */
export default async function clearOutDir() {
  if (!fs.existsSync(outputRootPath)) return;
  fs.rmSync(outputRootPath, { recursive: true, force: true });
}
