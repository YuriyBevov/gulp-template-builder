import paths from '../gulp.config.js';
const { DEV_PATHS } = paths;

import gulp from 'gulp';
const { src, dest } = gulp;

import merge from 'merge-stream';
 
export const copyStatic = () => {
  return merge(
    src([DEV_PATHS.fonts.src]).pipe(dest(DEV_PATHS.fonts.dest)),
    src([DEV_PATHS.staticResources.src]).pipe(dest(DEV_PATHS.staticResources.dest))
  );
}
