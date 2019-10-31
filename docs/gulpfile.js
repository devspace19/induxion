const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const touch = require('gulp-touch-cmd');

const config = {
    src: '_styles/**/*.scss',
    dest: 'assets/css'
};

const SCSSTask = () => {
    return src(config.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(dest(config.dest))
        .pipe(touch());
};

const defaultTask = cb => {
    watch('_styles/**/*.scss', {
        ignoreInitial: false
    }, SCSSTask);
    cb();
};

exports.default = defaultTask;