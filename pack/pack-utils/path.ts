import path from "node:path";

import { OUTPUT_DIR, PKG_NAME } from "../constant";
/** 仓库根路径 */
export const rootPath = path.resolve(__dirname, "..", "..");

/** packages路径 */
export const packagesPath = path.resolve(rootPath, "packages");
/** 打包输出根路径 */
export const outputRootPath = path.resolve(rootPath, OUTPUT_DIR);
/** 打包输出路径 */
export const outputPath = path.resolve(outputRootPath, PKG_NAME);
