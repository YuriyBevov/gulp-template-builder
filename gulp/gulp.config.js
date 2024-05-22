const SOURCE_PATH = './src/';
const BUILD_PATH = './build/';
const TASK_PATHS = './gulp/tasks/';

const DEV_PATHS = {
  pug: {
    src: `${SOURCE_PATH}pug/*.pug`,
    watchSrc: `${SOURCE_PATH}pug/**/*.{pug,scss,md}`,
    dest: BUILD_PATH
  },

  styles: {
    src: `${SOURCE_PATH}styles/*.scss`,
    watchSrc: `${SOURCE_PATH}styles/**/*.scss`,
    dest: `${BUILD_PATH}assets/` 
  }
}

export default { DEV_PATHS, BUILD_PATH, TASK_PATHS }