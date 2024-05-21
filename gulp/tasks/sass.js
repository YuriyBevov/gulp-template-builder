import paths from '../gulp.config.js';
const { DEV_PATHS } = paths;

import gulp from 'gulp';
const { src, dest } = gulp;

import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

import plumber from 'gulp-plumber';

export const styles = () => {
	return src(DEV_PATHS.styles.src, { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass())
    // .pipe(autoprefixer({
    //   cascade: false,
    //   grid: true,
    //   overrideBrowserslist: ["last 5 versions"]
    // }))
    // .pipe(gulpif(isProd, cleanCss({
    //   level: 2
    // })))
    .pipe(dest(DEV_PATHS.styles.dest, { sourcemaps: '.' }))
}
