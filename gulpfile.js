const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const del = require("del");
const merge = require("merge-stream");
const autoprefixer = require('gulp-autoprefixer');



// Clean vendor
function clean() {
  return del(["./vendor/"]);
}


// Bring third party dependencies from node_modules into vendor directory
function modules() {
  // jQuery files
  let jquery = gulp.src('./node_modules/jquery/dist/*')
    .pipe(gulp.dest('./vendor/jquery'));
  // Popper.js JS files
  let popper = gulp.src('./node_modules/popper.js/dist/umd/*')
    .pipe(gulp.dest('./vendor/popper'));
  // Bootstrap files
  let bootstrap = gulp.src('./node_modules/bootstrap/dist/**/*')
    .pipe(gulp.dest('./vendor/bootstrap'));
  // Font Awesome CSS file
  let fontawesome = gulp.src('./node_modules/@fortawesome/fontawesome-free/**/*')
    .pipe(gulp.dest('./vendor/fontawesome'));

  return merge(jquery, popper, bootstrap, fontawesome);
}


// Compile scss files into a single minified css file
// This will also compile bootstrap
function style() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}


// Create a local server and watch for changes
function watch() {
  browserSync.init({
    server: {
      baseDir: ".",
      index: "./index.html"
    }
  });
  gulp.watch('./**/*.scss', style)
  gulp.watch('./**/*.html').on('change',browserSync.reload)
  gulp.watch('./**/*.js').on('change', browserSync.reload)
}


// Define tasks
const build = gulp.series(clean, modules, style);


// Export tasks
exports.default = build;
exports.build = build;
exports.watch = watch;
