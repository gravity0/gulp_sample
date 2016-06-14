import config from '../config'
import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import bowerFiles from 'main-bower-files'
import source from 'vinyl-source-stream'
import named from 'vinyl-named'
const $ = gulpLoadPlugins()

gulp.task("script", () =>
gulp.src(config.script.src)
    .pipe(named())
    .pipe($.webpack())
    .pipe($.if(config.script.uglify, $.uglify()))
    .pipe(gulp.dest(config.script.dist)))
