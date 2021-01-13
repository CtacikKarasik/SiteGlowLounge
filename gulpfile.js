var gulp = require('gulp');
var rename = require('gulp-rename');

gulp.task('main_js', function() {
    return gulp .src('src/original_source/js/*.js')
                .pipe(rename({ suffix: ".min" }))
                .pipe(gulp.dest('src/js'));
});

gulp.task('services_js', function() {
    return gulp .src('src/original_source/js/services/*.js')
                .pipe(rename({ suffix: ".min" }))
                .pipe(gulp.dest('src/js/services'));
});

gulp.task('vm_js', function() {
    return gulp .src('src/original_source/js/vm/*.js')
                .pipe(rename({ suffix: ".min" }))
                .pipe(gulp.dest('src/js/vm'));
});

gulp.task('lib_js', function() {
    return gulp .src('src/original_source/js/lib/*.js')
                .pipe(rename({ suffix: ".min" }))
                .pipe(gulp.dest('src/js/lib'));
});

gulp.task('css', function() {
    return gulp .src('src/original_source/css/*.css')
                .pipe(rename({ suffix: ".min" }))
                .pipe(gulp.dest('src/css'));
});

gulp.task('js', gulp.parallel('main_js', 'services_js', 'vm_js', 'lib_js'));


gulp.task('watch', function() {
    gulp.watch('src/original_source/js/*.js', gulp.series('main_js'));
    gulp.watch('src/original_source/js/services/*.js', gulp.series('services_js'));
    gulp.watch('src/original_source/js/vm/*.js', gulp.series('vm_js'));
    gulp.watch('src/original_source/js/lib/*.js', gulp.series('lib_js'));
    gulp.watch('src/original_source/css/*.css', gulp.series('css'));
});

gulp.task('default', gulp.series('watch'));
  