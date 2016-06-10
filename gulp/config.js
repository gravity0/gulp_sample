const baseDir = './'
const srcDir = baseDir + 'src/'
const srcMainDir = srcDir + 'main/'
const buildDir = baseDir + '.build/'
const buildMainDir = buildDir + 'main/'
const distDir = baseDir + 'dist/'
const diffDir = buildDir + '.diff/'

export default {
    srcDir: srcDir,
    srcMainDir: srcMainDir,
    buildDir: buildDir,
    buildMainDir: buildMainDir,
    distDir: distDir,
    backendjson: srcDir + 'backendjson',
    html: {
        src: srcMainDir + '**/*.html',
        dist: distDir
    },
    script: {
        src: srcMainDir + 'scripts/**/*.js',
            diff: diffDir + 'scripts/',
            build: buildMainDir + 'js/',
            dist: distDir + 'js/',
            output: {
            filename: 'bundle.js'
        }
    }
}