import config from '../config'
import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import bowerFiles from 'main-bower-files'

const $ = gulpLoadPlugins()

gulp.task('library', cb =>
gulp.src(bowerFiles())
    .pipe($.filter('**/*.js'))
    .pipe($.debug())
    .pipe($.concat(config.library.js.output.filename))
    .pipe(gulp.dest(config.library.js.build))
    .pipe($.uglify())
    .pipe($.rename({suffix: '.min'}))
    .pipe($.size({showFiles: true}))
    .pipe(gulp.dest(config.library.js.dist)))