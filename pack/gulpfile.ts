import { parallel, series } from "gulp";

import clearOutDir from "./task/clear-outdir";
import copyFile from "./task/copy-file";
import generateDeclare from "./task/generate-declare";
import packBundle from "./task/pack-bundle";
import packModule from "./task/pack-module";
import packStyle from "./task/pack-style";

export default series(clearOutDir, parallel(packBundle, packModule, packStyle), generateDeclare, copyFile) as any;
