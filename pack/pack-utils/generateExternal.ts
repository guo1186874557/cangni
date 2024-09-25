import path from "node:path";

import { PKG_NAME } from "../constant/pkg";
import { getDependencies } from "./getDependencies";
import { packagesPath } from "./path";

/**
 * 生成 external 配置
 * @param option
 * @param option.full 是否打包所有依赖
 */
export function generateExternal(option: { full: boolean } = { full: false }) {
  const { dependencies, peerDependencies } = getDependencies(path.join(packagesPath, PKG_NAME, "package.json"));
  return (id: string) => {
    const packageNames = [...peerDependencies];
    if (!option.full) {
      packageNames.push(...dependencies);
    }
    return [...new Set(packageNames)].some((packageName) => packageName === id || id.startsWith(`${packageName}/`));
  };
}
