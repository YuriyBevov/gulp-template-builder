import paths from './gulp/gulp.config.js';

const { TASK_PATHS, DEV_PATHS, BUILD_PATH } = paths;

import gulp from 'gulp';
const { series, parallel, src, dest, task, watch } = gulp;

// GULP TASKS
import { clean } from './gulp/tasks/clean.js';
import { pug } from './gulp/tasks/pug.js';
import { styles as sass } from './gulp/tasks/sass.js';
import { server, refresh } from './gulp/tasks/server.js';

task(clean);
task(pug);
task(sass);
task(server);

watch(DEV_PATHS.pug.watchSrc, series(pug, sass, refresh));
watch(DEV_PATHS.styles.watchSrc, series(sass, refresh));

export const start = series(clean, parallel(pug, sass), server );