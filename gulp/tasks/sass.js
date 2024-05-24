import _config from '../gulp.config.js';
const { config } = _config;

import gulp from 'gulp';
const { src, dest } = gulp;

import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

import plumber from 'gulp-plumber';
import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';
import gulpIf from 'gulp-if';

export const styles = (done) => {
	src(config.styles.src, { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass())
    .pipe(
      gulpIf(
        config.isProd, 
        autoprefixer({
          cascade: false,
          grid: true,
          overrideBrowserslist: ["last 3 versions"]
        })
      )
    )
    .pipe(
      gulpIf(
        config.isProd, 
        cleanCss({
          level: 2
        })
      )
    )
    .pipe(dest(config.styles.dest, { sourcemaps: '.' }))

  done();
}
