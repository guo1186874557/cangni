import { parallel, series } from "gulp";

import clearOutDir from "./task/clearOutDir";
import generateDeclare from "./task/generate_declare";
import packBundle from "./task/pack_bundle";
import packModule from "./task/pack_module";

export default series(clearOutDir, parallel(packBundle, packModule()), generateDeclare()) as any;
