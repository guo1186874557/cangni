import { parallel, series } from "gulp";

import generateDeclare from "./task/generate_declare";
import packBundle from "./task/pack_bundle";
import packModule from "./task/pack_module";

export default series(parallel(packBundle, packModule()), generateDeclare()) as any;
