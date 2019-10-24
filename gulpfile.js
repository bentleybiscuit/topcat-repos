var gulp = require("gulp")
var sass = require("gulp-sass")
var babel = require("gulp-babel")

//this is a really simple task for gulp
function hello(cb) {
    console.log('hello');
    cb();
}


exports.hello = hello;

function sassCompile(cb) {
    return gulp.src('scss/style.scss')
        .pipe(sass()) //convert SASS to CSSS with gulp sass
        .pipe(gulp.dest('css')) //dest is where it's going
    cb()
}

exports.sass = sassCompile

function watch() {
    gulp.watch('scss/**/*.scss', sassCompile)
    gulp.watch('js/es6/**/*.js', babelGulp)
}

exports.watch = watch;

function babelGulp(cb) {
    return gulp.src("js/es6/index.js")
        .pipe(babel())
        .pipe(gulp.dest("js/es5"));
    cb()
}
exports.babelGulp = babelGulp