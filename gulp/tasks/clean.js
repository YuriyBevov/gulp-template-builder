import PATH from '../gulp.config.js';
const { BUILD_PATH } = PATH;

import {deleteAsync} from 'del';

export const clean = () => {
  return deleteAsync([BUILD_PATH]);
}