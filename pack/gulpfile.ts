import { series } from "gulp";

import packBundle from "./task/pack_bundle";
import packModule from "./task/pack_module";

export default series(packBundle, packModule) as any;
