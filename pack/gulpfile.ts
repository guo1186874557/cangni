import { parallel, series } from "gulp";

import { PKG_NAME, PKG_NAME_PLAY } from "./constant/pkg";
import generateDeclare from "./task/generate_declare";
import packBundle from "./task/pack_bundle";
import packModule from "./task/pack_module";

export default series(parallel(packBundle, packModule(PKG_NAME_PLAY)), generateDeclare(PKG_NAME_PLAY)) as any;
// export default series(parallel(packBundle, packModule()), generateDeclare()) as any;
