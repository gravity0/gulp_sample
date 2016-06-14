import config from '../config'
import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import bowerFiles from 'main-bower-files'
var webpack = require('webpack-stream')

const $ = gulpLoadPlugins()

gulp.task('webpack', function () {
    gulp.src(config.webpack.entry)
        .pipe(webpack(config.webpack))
        .pipe($.if(config.script.uglify, $.uglify()))
        .pipe(gulp.dest(config.script.dist));
});
