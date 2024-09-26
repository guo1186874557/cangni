import { Command } from "commander";

import generateCommand from "./commands/generate";

const program = new Command("hlui").showHelpAfterError(true);
program.version("0.0.1", "-v, -V, --version", "输出版本信息");

program.addCommand(generateCommand);
program.parse(process.argv);
