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
import { scripts } from './gulp/tasks/scripts.js';

task(clean);
task(copyStatic);
task(pug);
task(sass);
task(scripts);
task(server); 

watch(config.fonts.watch, series(copyStatic, refresh));
watch(config.pug.watch, series(pug, sass, refresh));
watch(config.styles.watch, series(sass, refresh));
watch(config.scripts.watch, series(scripts, refresh));

export const start = series(clean, parallel(copyStatic, pug, sass, scripts), server );
export const build = start;