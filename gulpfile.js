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
var variables = require('./variables');
var eslint = require('gulp-eslint');
var shell = require('gulp-shell');
var nodemon = require('gulp-nodemon');
var nodemonConfig = require('./nodemon');
var notify = require("gulp-notify");
var htmlhint = require("gulp-htmlhint");
var args = require('yargs').argv;
var dest = variables.dest;

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
    gulp.watch('./src/**/*.*', ['build']);
  }
});

gulp.task('browserify', ['docs'], () => {
  browserify('./src/client/js/index.js')
  .transform([babelify])
  .bundle()
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(sourcemaps.init({ loadMaps: true }))
  .pipe(sourcemaps.write('map'))
  .pipe(gulp.dest(dest))
  .pipe(notify('Building files.'))
  .pipe(liveReload());
});

gulp.task('docs', ['less'], shell.task(['./node_modules/.bin/jsdoc ./src/client/js/components/ -c ./jsdoc.conf.json -r']));

gulp.task('less', ['copy'], function () {
  gulp.src('./src/client/css/style.less')
  .pipe(less({
    paths: [ path.join(__dirname, 'less', 'includes') ]
  }))
  .pipe(gulp.dest(dest+'/css'));
});

gulp.task('copy', ['test'], function(){
  gulp.src('./src/client/*.html').pipe(gulp.dest(dest));
  gulp.src('./src/client/css/*.*').pipe(gulp.dest(dest+'/css'));
  gulp.src('./src/client/images/*.*').pipe(gulp.dest(dest+'/images'));
});

gulp.task('test', ['lint'], function (next) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, next).start();
});

gulp.task('lint', ['htmlhint'], () => {
  gulp.src(['*.js'])
  .pipe(eslint())
  // .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('htmlhint', () => {
  gulp.src("./client/src/*.html")
  .pipe(htmlhint('.htmlhintrc'))
  .pipe(htmlhint.reporter('htmlhint-stylish'))
  .pipe(htmlhint.failReporter());
});



