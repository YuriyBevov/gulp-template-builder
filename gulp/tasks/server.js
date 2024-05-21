// const browserSync = require('browser-sync').create();
import paths from '../gulp.config.js';
const { BUILD_PATH } = paths;

import browserSync from 'browser-sync';
browserSync.create();

export const server = () => {
  browserSync.init({
    server: {
      baseDir: BUILD_PATH,
      open: true,
      cors: true,
      port: 3000
    }
  });
}

export const refresh = (done) => {
  browserSync.reload();
  done();
}