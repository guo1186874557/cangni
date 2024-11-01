import { spawnSync } from "node:child_process";
import { createWriteStream, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { Command } from "commander";
import conventionalChangelog from "conventional-changelog";
import createPreset from "conventional-changelog-conventionalcommits";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rootPath = resolve(__dirname, "../");
const corePath = resolve(rootPath, "packages", "core");
const initVersion = "0.0.0";

/**
 * 获取版本号
 */
function getVersion() {
  let version: null | string = initVersion;
  const stdio = spawnSync("git", ["describe", "--tags", "--long", "--match", "v[0-9]*"]);
  const lastTag = stdio.stdout.toString("utf-8").trim();
  if (lastTag !== "") {
    const [lastVersion, commitNum] = lastTag.slice(1).split("-");
    version = Number(commitNum) > 0 ? lastVersion : null;
  }
  return version;
}

/**
 * 修改package.json的版本号
 */
async function updateVersion(version: string) {
  const packageJsonPath = resolve(corePath, "package.json");
  const packageJsonContent = readFileSync(packageJsonPath, "utf-8");
  const pkg = JSON.parse(packageJsonContent);
  pkg.version = version;
  const newPackageJsonContent = JSON.stringify(pkg, null, 2);
  writeFileSync(packageJsonPath, newPackageJsonContent, "utf-8");
  // 生成所有版本的 changelog
  await createChangelog(version, true);
  await gitCommitAndTag(version);
}

/**
 *  生成changelog
 * @param  version change log的版本号
 * @param  isAll  是否生成全部版本的changelog
 * @return  changelog的文件路径
 */
async function createChangelog(version: string, isAll: boolean = false) {
  const config = await createPreset({
    types: [
      { type: "feat", section: "✨ Features | 新增功能" },
      { type: "fix", section: "🐛 Bug Fixes | 修复bug" },
      { type: "perf", section: "⚡ Performance Improvements | 性能优化" },
      { type: "chore", hidden: true },
      { type: "docs", hidden: true },
      { type: "style", hidden: true },
      { type: "refactor", hidden: true },
      { type: "test", hidden: true },
    ],
    commitUrlFormat: "{{host}}/{{owner}}/{{repository}}/commit/{{hash}}",
    compareUrlFormat: "{{host}}/{{owner}}/{{repository}}/compare/{{previousTag}}...{{currentTag}}",
    issueUrlFormat: "{{host}}/{{owner}}/{{repository}}/issues/{{id}}",
    userUrlFormat: "{{host}}/{{user}}",
    releaseCommitMessageFormat: "chore(release): v{{currentTag}}",
    issuePrefixes: ["#"],
  });
  const changeLogFileName = isAll ? "CHANGELOG.md" : `CHANGELOG-${version}.md`;
  const changeLogPath = resolve(rootPath, changeLogFileName);
  const w = createWriteStream(changeLogPath);
  conventionalChangelog(
    {
      config,
      releaseCount: isAll ? 0 : 1,
    },
    { version },
  ).pipe(w);

  return new Promise((resolve, reject) => {
    w.on("close", () => {
      resolve(changeLogPath);
    });
    w.on("error", (err) => {
      reject(err);
    });
  });
}

/**
 * git commit 以及 tag
 */
async function gitCommitAndTag(version: string) {
  spawnSync("git", ["add", "."], { cwd: rootPath });
  spawnSync("git", ["commit", "-m", `v${version}`], { cwd: rootPath });
  spawnSync("git", ["tag", `v${version}`], { cwd: rootPath });
}

const program = new Command();
program
  .name("version")
  .option("-ma, --major", "major version | 大版本更新")
  .option("-mi, --minor", "minor version | 新增功能")
  .option("-pa, --patch", "patch version | 修复bug")
  .option("-np, --not-push", "no push | 不推送代码", false);

program.parse();

const opts = program.opts();

const version = getVersion();

if (version && (opts.major || opts.minor || opts.patch)) {
  const [major, minor, patch] = version.split(".");
  let newVersion: string | undefined;
  if (opts.major) {
    newVersion = `${Number(major) + 1}.0.0`;
  } else if (opts.minor) {
    newVersion = `${major}.${Number(minor) + 1}.0`;
  } else if (opts.patch) {
    newVersion = `${major}.${minor}.${Number(patch) + 1}`;
  }
  updateVersion(newVersion!).then(() => {
    if (!opts.notPush) {
      spawnSync("git", ["push"], { cwd: rootPath });
      spawnSync("git", ["push", "--tags"], { cwd: rootPath });
    }
    console.log(`new version is ${newVersion}`);
  });
}
