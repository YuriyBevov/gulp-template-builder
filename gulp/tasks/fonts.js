import _config from '../gulp.config.js';
const { config } = _config;

import gulp from 'gulp';
const { src, dest } = gulp;

import ttf2woff2 from 'gulp-ttf2woff2';
// import plumber from 'gulp-plumber';

console.log(config.ttf.src);
console.log(config.ttf.dest);
export const fc = (done) => {
  // setTimeout(() => {
    src(config.ttf.src)
      .pipe(ttf2woff2({
        clone: true,
        ignoreExt: true
      }))
      .pipe(dest(config.ttf.dest));
    done();
  // }, 500);
}
