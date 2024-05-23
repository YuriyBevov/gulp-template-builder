import config from '../gulp.config.js';
let { DEV_PATHS } = config;

import gulp from 'gulp';
const { src, dest } = gulp;

import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

import plumber from 'gulp-plumber';
import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';

export const styles = () => {
	return src(DEV_PATHS.styles.src, { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false,
      grid: true,
      overrideBrowserslist: ["last 3 versions"]
    }))
    .pipe(cleanCss({
      level: 2
    }))
    .pipe(dest(DEV_PATHS.styles.dest, { sourcemaps: '.' }))
}
