const SOURCE_PATH = './src/';
const BUILD_PATH = './build/';
const TASK_PATHS = './gulp/tasks/';

const DEV_PATHS = {
  fonts: {
    src: `${SOURCE_PATH}assets/fonts/*.{woff,woff2}`,
    watchSrc: `${SOURCE_PATH}assets/fonts/*.{woff,woff2}`,
    dest: `${BUILD_PATH}assets/fonts/`,
  },

  staticResources: {
    src: `${SOURCE_PATH}root-resources/**`,
    dest: BUILD_PATH
  },

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