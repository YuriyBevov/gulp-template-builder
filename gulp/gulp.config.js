const SOURCE_PATH = './src/';
const BUILD_PATH = './build/';

const config = {
  fonts: {
    src: `${SOURCE_PATH}assets/fonts/*.{woff,woff2}`,
    watch: `${SOURCE_PATH}assets/fonts/*.{woff,woff2}`, 
    dest: `${BUILD_PATH}assets/fonts/`,
  },

  staticResources: {
    src: `${SOURCE_PATH}root-resources/**`,
    dest: BUILD_PATH
  },

  pug: {
    src: `${SOURCE_PATH}pug/*.pug`,
    watch: `${SOURCE_PATH}pug/**/*.{pug,scss,md}`,
    dest: BUILD_PATH
  },

  styles: {
    src: `${SOURCE_PATH}styles/*.scss`,
    watch: `${SOURCE_PATH}styles/**/*.scss`,
    dest: `${BUILD_PATH}assets/` 
  },

  scripts: {
    src: `${SOURCE_PATH}scripts/*.js`,
    watch: `${SOURCE_PATH}scripts/**/*.js`,
    dest: `${BUILD_PATH}assets/` 
  },

  setEnv() {
    this.isProd = process.argv.includes('build');
    this.isDev = !this.isProd;
  },

}

export default { config, BUILD_PATH }