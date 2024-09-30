import { join } from "node:path";

import autoprefixer from "autoprefixer";
import { dest, src } from "gulp";
import cleanCSS from "gulp-clean-css";
import postcss from "gulp-postcss";
import gulpSass from "gulp-sass";
import dartSass from "sass";

import { outputPath, packagesPath } from "../pack-utils/path";

const sass = gulpSass(dartSass);
export default async function packStyle() {
  return src(join(packagesPath, "theme-chalk/src/**/*.scss"))
    .pipe(dest(join(outputPath, "theme-chalk/src/")))
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS())
    .pipe(dest(join(outputPath, "theme-chalk/")));
}
