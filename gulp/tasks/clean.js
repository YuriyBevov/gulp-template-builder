import paths from '../gulp.config.js';
const { BUILD_PATH } = paths;

import {deleteAsync} from 'del';

export const clean = () => {
  return deleteAsync([BUILD_PATH]);
}