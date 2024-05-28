import _config from '../gulp.config.js';
const { config } = _config;

import gulp from 'gulp';
import { src, dest } from 'gulp';

import svgSprite from 'gulp-svg-sprite';
import svgmin from 'gulp-svgmin';
import replace from 'gulp-replace';
import cheerio from 'gulp-cheerio';
import diffableHtml from 'gulp-diffable-html';

export const sprite = (done) => {
	src(config.sprite.src)
	  // minify svg
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		// remove all fill, style and stroke declarations in out shapes
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
		}))
		// cheerio plugin create unnecessary string '&gt;', so replace it.
		.pipe(replace('&gt;', '>'))
    
		// build svg sprite
		.pipe(svgSprite({
      mode: {
        stack: {
          symbol: true, // Activate the «symbol» mode*/
          sprite: config.sprite.name,
          dest: ''
        },
      },
    }))
    .pipe(diffableHtml())
		.pipe(dest(config.sprite.dest));

  done();
}