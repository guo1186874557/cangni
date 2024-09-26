import { spawnSync } from "node:child_process";
import { appendFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

import { Command } from "commander";
import { mkdirSync } from "fs";
import { packagesPath } from "pack/pack-utils/path";

const generateCommand = new Command("generate");

type GenerateOptions = {
  component: boolean;
  hook?: boolean;
};

generateCommand
  .alias("g")
  .argument("name", "生成的名称")
  .option("-comp, --component", "生成组件")
  .option("-tsx, --tsx", "生成tsx文件")
  .option("-hook, --hook", "生成hook")
  .helpOption("-h, --help")
  .action((name: string, opt: GenerateOptions) => {
    const optionsCount = Object.values(opt).filter(Boolean).length;
    if (optionsCount > 1) {
      console.error("只能选择一个选项");
      return;
    }
    if (opt.component) {
      generateComp(name);
    } else if (opt.hook) {
      console.log(`生成hook${name}`);
    } else {
      console.error("请选择一个选项");
    }
  });

function generateComp(name: string, isTsx: boolean = false) {
  if (!isValidCompName(name)) {
    console.error("组件名称不合法");
    return;
  }
  const componentName = `${name}${isTsx ? ".tsx" : ".vue"}`;
  const componentDirName = name.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`).slice(1);
  const componentDir = path.resolve(packagesPath, "components", componentDirName);

  if (!existsSync(componentDir)) {
    mkdirSync(componentDir);
  }
  if (!existsSync(path.resolve(componentDir, "style"))) {
    mkdirSync(path.resolve(componentDir, "style"));
  }
  if (!existsSync(path.resolve(componentDir, "style", "index.ts"))) {
    writeFileSync(path.resolve(componentDir, "style", "index.ts"), ``);
  }
  if (!existsSync(path.resolve(componentDir, componentName))) {
    writeFileSync(
      path.resolve(componentDir, componentName),
      `<script setup lang="ts">
         </script>

         <template>
          <div>${name}</div>
         </template>

         <style scoped></style>`,
    );
  }

  if (!existsSync(path.resolve(componentDir, "index.ts"))) {
    writeFileSync(
      path.resolve(componentDir, "index.ts"),
      ` import { withInstall } from "@hlui/utils";
          import ${name} from "./${componentName}";
          export const Hl${name} = withInstall(${name});
       `,
    );
  }

  const writeContent = `export * from "./${componentDirName}";\n`;
  if (!existsSync(path.resolve(packagesPath, "components", "index.ts"))) {
    writeFileSync(path.resolve(packagesPath, "components", "index.ts"), writeContent);
  } else {
    const fileContent = readFileSync(path.resolve(packagesPath, "components", "index.ts"), "utf-8");
    if (!fileContent.includes(componentDirName)) {
      appendFileSync(path.resolve(packagesPath, "components", "index.ts"), writeContent);
    }
  }

  spawnSync(`npx eslint --fix ./components/${name}/**/* ./components/index.ts`, {
    cwd: packagesPath,
    shell: true,
    stdio: "inherit",
  });

  console.log("组件生成完成");
}

/**
 * 判断是否是合法的组件名称
 * @param name 组件名称
 */
function isValidCompName(name: string) {
  return /^[A-Z][a-zA-Z0-9-]*$/.test(name);
}
export default generateCommand;
