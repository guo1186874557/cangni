import { spawnSync } from "node:child_process";

import { rootPath } from "./path";

export default function run(command: string, cwd: string = rootPath) {
  return spawnSync(command, { stdio: "inherit", cwd, shell: true });
}
