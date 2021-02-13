const
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    cleanCSS = require('gulp-clean-css');

var mode = require('gulp-mode')({
    modes: ["production", "development"],
    default: "production",
    verbose: false
    });

gulp.task('main_js', function() {
    return gulp .src('src/original_source/js/*.js')
                .pipe(rename({ suffix: ".min" }))
                .pipe(mode.production(uglify()))
                .pipe(gulp.dest('src/js'));
});

gulp.task('reserv_js', function() {
    return gulp .src('src/original_source/js/reservation_service/*.js')
                .pipe(babel({
                    presets: ['@babel/env']
                }))
                .pipe(rename({ suffix: ".min" }))
                .pipe(mode.production(uglify()))
                .pipe(gulp.dest('src/js/reservation_service/'));
});

gulp.task('reserv_service_js', function() {
    return gulp .src('src/original_source/js/reservation_service/services/*.js')
                .pipe(babel({
                    presets: ['@babel/env']
                }))
                .pipe(rename({ suffix: ".min" }))
                .pipe(mode.production(uglify()))
                .pipe(gulp.dest('src/js/reservation_service/services'));
});

gulp.task('reserv_vm_js', function() {
    return gulp .src('src/original_source/js/reservation_service/vm/*.js')
                .pipe(babel({
                    presets: ['@babel/env']
                }))
                .pipe(rename({ suffix: ".min" }))
                .pipe(mode.production(uglify()))
                .pipe(gulp.dest('src/js/reservation_service/vm'));
});

gulp.task('control_js', function() {
    return gulp .src('src/original_source/js/control_service/*.js')
                .pipe(babel({
                    presets: ['@babel/env']
                }))
                .pipe(rename({ suffix: ".min" }))
                .pipe(mode.production(uglify()))
                .pipe(gulp.dest('src/js/control_service/'));
});

gulp.task('control_service_js', function() {
    return gulp .src('src/original_source/js/control_service/services/*.js')
                .pipe(babel({
                    presets: ['@babel/env']
                }))
                .pipe(rename({ suffix: ".min" }))
                .pipe(mode.production(uglify()))
                .pipe(gulp.dest('src/js/control_service/services'));
});

gulp.task('control_vm_js', function() {
    return gulp .src('src/original_source/js/control_service/vm/*.js')
                .pipe(babel({
                    presets: ['@babel/env']
                }))
                .pipe(rename({ suffix: ".min" }))
                .pipe(mode.production(uglify()))
                .pipe(gulp.dest('src/js/control_service/vm'));
});

gulp.task('libs_js', function() {
    return gulp .src('src/original_source/js/libs/*.js')
                .pipe(rename({ suffix: ".min" }))
                .pipe(mode.production(uglify()))
                .pipe(gulp.dest('src/js/libs'));
});

gulp.task('css', function() {
    return gulp .src('src/original_source/css/*.css')
                .pipe(mode.production(cleanCSS({compatibility: 'ie8'})))
                .pipe(rename({ suffix: ".min" }))
                .pipe(gulp.dest('src/css'));
});

gulp.task('js', gulp.parallel('main_js', 'reserv_service_js','reserv_js', 'reserv_vm_js', 'control_js', 'control_service_js', 'control_vm_js', 'libs_js'));


gulp.task('watch', function() {
    gulp.watch('src/original_source/js/*.js', gulp.series('main_js'));
    gulp.watch('src/original_source/js/reservation_service/*.js', gulp.series('reserv_js'));
    gulp.watch('src/original_source/js/reservation_service/services/*.js', gulp.series('reserv_service_js'));
    gulp.watch('src/original_source/js/reservation_service/vm/*.js', gulp.series('reserv_vm_js'));
    gulp.watch('src/original_source/js/control_service/*.js', gulp.series('control_js'));
    gulp.watch('src/original_source/js/control_service/services/*.js', gulp.series('control_service_js'));
    gulp.watch('src/original_source/js/control_service/vm/*.js', gulp.series('control_vm_js'));
    gulp.watch('src/original_source/js/libs/*.js', gulp.series('libs_js'));
    gulp.watch('src/original_source/css/*.css', gulp.series('css'));
});

gulp.task('default', gulp.series('watch'));
gulp.task('build', gulp.series('js','css'));