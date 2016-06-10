import config from '../config'
import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
const $ = gulpLoadPlugins()

gulp.task('html', () =>
gulp.src(config.html.src)
    .pipe($.useref({searchPath: [config.buildDir, config.src]}))
    .pipe($.if('*.html', $.minifyHtml()))
    .pipe(gulp.dest(config.html.dist)))