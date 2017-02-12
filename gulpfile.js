var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var reactify = require('reactify');
var liveReload = require('gulp-livereload');
var less = require('gulp-less');
var path = require('path');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var Server = require('karma').Server;
var eslint = require('gulp-eslint');
var shell = require('gulp-shell');
var nodemon = require('gulp-nodemon');
var nodemonConfig = require('./nodemon');
var htmlhint = require("gulp-htmlhint");
var args = require('yargs').argv;

const { src, dest, client, watchFolder, browserifyInput, browserifyOutput, sourceMapsFolder, docsTask, lessSource, lessDest } = require('./variables');

process.env.NODE_ENV = 'production';

gulp.task('default', ['server']);

gulp.task('server', ['build'], () => {
    if (args.local) {
        nodemon(nodemonConfig);
    }
});

gulp.task('build', ['browserify'], () => {
    if(args.local) {
        liveReload.listen();
        gulp.watch(watchFolder, ['build']);
    }
});

gulp.task('browserify', ['docs'], () => {
    browserify(browserifyInput)
  .transform([babelify])
  .bundle()
  .pipe(source(browserifyOutput))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(sourcemaps.init({ loadMaps: true }))
  .pipe(sourcemaps.write(sourceMapsFolder))
  .pipe(gulp.dest(dest))
  .pipe(liveReload());
});

gulp.task('docs', ['less'], shell.task([docsTask]));

gulp.task('less', ['copy'], function () {
    gulp.src(lessSource)
  .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
  }))
  .pipe(gulp.dest(lessDest));
});

gulp.task('copy', ['test'], function(){
    gulp.src(client + '*.html').pipe(gulp.dest(dest));
    gulp.src(client +'css/*.*').pipe(gulp.dest(lessDest));
    gulp.src(client+'images/*.*').pipe(gulp.dest(dest+'images'));
});

gulp.task('test', ['lint'], function (next) {
    new Server({
        configFile: __dirname + '/karma.conf.js'
    }, next).start();
});

gulp.task('lint', ['htmlhint'], () => {
    gulp.src(['*.js'])
  .pipe(eslint())
  .pipe(eslint.failAfterError());
});

gulp.task('htmlhint', () => {
    gulp.src(client + "*.html")
  .pipe(htmlhint('.htmlhintrc'))
  .pipe(htmlhint.reporter('htmlhint-stylish'))
  .pipe(htmlhint.failReporter());
});