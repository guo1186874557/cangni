import fs from "node:fs";

/**
 *  获取 package.json 中的依赖列表
 * @param filePath  package.json 的文件路径
 */
export function getDependencies(filePath: string): {
  dependencies: string[];
  peerDependencies: string[];
} {
  const content = fs.readFileSync(filePath, "utf-8");
  const json = JSON.parse(content);
  return {
    dependencies: Object.keys(json.dependencies || {}),
    peerDependencies: Object.keys(json.peerDependencies || {}),
  };
}
