const baseDir = './'
const srcDir = baseDir + 'src/'
const srcMainDir = srcDir + 'main/'
const buildDir = baseDir + '.build/'
const buildMainDir = buildDir + 'main/'
const distDir = baseDir + 'dist/'
const diffDir = buildDir + '.diff/'
const librarySrcDir = baseDir + 'library/'
const libraryBuildDir = buildMainDir + 'library/'
const libraryDistDir = distDir + 'library/'

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
    },
    library: {
        srcDir: librarySrcDir,
        buildDir: libraryBuildDir,
        distDir: libraryDistDir,
        js: {
          build: libraryBuildDir + 'js/',
          dist: libraryDistDir + 'js/',
          output: {
          filename: 'bundle.js'
        }
      }
    },
    webpack: {
      entry: srcMainDir + "scripts/" + "main.js",
      output: {
        filename: "main.js"
      },
      module: {
        // babel Loaderを指定してWebpackがBabelのコンパイルをできるように
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
          }
        ]
      }
    }
}
