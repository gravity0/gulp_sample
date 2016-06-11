import config from '../config'
import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import bowerFiles from 'main-bower-files'

const $ = gulpLoadPlugins()

gulp.task("script", () =>
gulp.src(config.script.src)
    .pipe($.webpack(config.webpack))
    .pipe($.if(config.script.uglify, $.uglify()))
    .pipe(gulp.dest(config.script.dist)))
