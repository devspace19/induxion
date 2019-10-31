const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');

const config = {
    src: '_styles/main.scss',
    dest: 'assets/css'
};

const SCSSTask = () => {
    return src(config.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(dest(config.dest));
};

const defaultTask = cb => {
    watch('_styles/*.scss', {
        ignoreInitial: false
    }, SCSSTask);
    cb();
};

exports.default = defaultTask;