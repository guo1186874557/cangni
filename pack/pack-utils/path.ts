import path from "node:path";

import { PKG_NAME } from "../constant/pkg";
/** 仓库根路径 */
export const rootPath = path.resolve(__dirname, "..", "..");

/** packages路径 */
export const packagesPath = path.resolve(rootPath, "packages");

/** 打包输出路径 */
export const outputPath = path.resolve(rootPath, PKG_NAME);
