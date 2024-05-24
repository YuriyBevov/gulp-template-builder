import _config from './gulp/gulp.config.js';

const { config } = _config;

import gulp from 'gulp';
const { series, parallel, task, watch } = gulp;

config.setEnv();

// GULP TASKS
import { clean } from './gulp/tasks/clean.js';
import { copyStatic } from './gulp/tasks/copyStatic.js';
import { pug } from './gulp/tasks/pug.js';
import { styles as sass } from './gulp/tasks/sass.js';
import { server, refresh } from './gulp/tasks/server.js';

task(clean);
task(copyStatic);
task(pug);
task(sass);
task(server); 

watch(config.fonts.watch, series(copyStatic, refresh));
watch(config.pug.watch, series(pug, sass, refresh));
watch(config.styles.watch, series(sass, refresh));

export const start = series(clean, parallel(copyStatic, pug, sass), server );
export const build = start;