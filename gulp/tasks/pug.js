import paths from '../gulp.config.js';
const { DEV_PATHS } = paths;

import gulp from 'gulp';
const { src, dest } = gulp;

import gulpPug from 'gulp-pug';
import plumber from 'gulp-plumber';

export const pug = () => {
	return src([DEV_PATHS.pug.src])
    .pipe(plumber())
    .pipe(gulpPug({
      pretty: true
    }))
    .pipe(dest(DEV_PATHS.pug.dest))
}
