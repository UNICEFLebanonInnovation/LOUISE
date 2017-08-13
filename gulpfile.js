var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var fontmin = require('gulp-fontmin');

//TASK TO CREATE AND OPTIMIZE THE JS, CSS, HTML FILES
gulp.task('useref', function() {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dest'))
});

//TASK TO RELOAD AUTOMATICALLY
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
})

//TASK FOR SASS TO CSS
gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
})

//TASK TO WATCH SASS AND RELOAD
gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
})

//TASK TO OPTIMIZE IMAGES
gulp.task('images', function() {
    return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest('dest/images'))
});

//TASK TO MINIFY FONTS
function minifyFont(text, cb) {
    gulp
        .src('app/fonts/*.ttf')
        .pipe(fontmin({
            text: text
        }))
        .pipe(gulp.dest('dest/fonts'))
        .on('end', cb);
}

gulp.task('fonts', function(cb) {
    var buffers = [];
    gulp
        .src('index.html')
        .on('data', function(file) {
            buffers.push(file.contents);
        })
        .on('end', function() {
            var text = Buffer.concat(buffers).toString('utf-8');
            minifyFont(text, cb);
        });
});