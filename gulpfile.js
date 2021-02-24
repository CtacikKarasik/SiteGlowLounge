const
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    inlinesource = require('gulp-inline-source'),
    cleanCSS = require('gulp-clean-css');

var mode = require('gulp-mode')({
    modes: ["production", "development"],
    default: "production",
    verbose: false
    });

/*------------- JS ---------------*/

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

gulp.task('control_model_js', function() {
    return gulp .src('src/original_source/js/control_service/model/*.js')
                .pipe(babel({
                    presets: ['@babel/env']
                }))
                .pipe(rename({ suffix: ".min" }))
                .pipe(mode.production(uglify()))
                .pipe(gulp.dest('src/js/control_service/model'));
});

gulp.task('components_js', function() {
    return gulp .src('src/original_source/js/components/blockReservInfo/*.js')
                .pipe(babel({
                    presets: ['@babel/env']
                }))
                .pipe(rename({ suffix: ".min" }))
                .pipe(mode.production(uglify()))
                .pipe(gulp.dest('src/js/components/blockReservInfo'));
});

gulp.task('libs_js', function() {
    return gulp .src('src/original_source/js/libs/*.js')
                .pipe(rename({ suffix: ".min" }))
                .pipe(mode.production(uglify()))
                .pipe(gulp.dest('src/js/libs'));
});

/*------------- CSS ---------------*/

gulp.task('main_css', function() {
    return gulp .src('src/original_source/css/*.css')
                .pipe(mode.production(cleanCSS({compatibility: 'ie8'})))
                .pipe(rename({ suffix: ".min" }))
                .pipe(gulp.dest('src/css'));
});

/*------------- HTML ---------------*/
gulp.task('main_html', function() {
    return gulp .src('src/original_source/html/*.html')
                .pipe(inlinesource({saveRemote: false}))
                .pipe(gulp.dest('src/html'));
});

gulp.task('components_html', function() {
    return gulp .src('src/original_source/js/components/blockReservInfo/*.html')
                .pipe(inlinesource({saveRemote: false}))
                .pipe(gulp.dest('src/js/components/blockReservInfo'));
});

gulp.task('js', gulp.parallel('main_js', 'reserv_service_js','reserv_js', 'reserv_vm_js', 'control_js', 'control_service_js', 'control_vm_js', 'libs_js', 'components_js', 'control_model_js'));
gulp.task('css', gulp.parallel('main_css'));
gulp.task('html', gulp.parallel('components_html', 'main_html'));


gulp.task('watch', function() {
    gulp.watch('src/original_source/html/*.html', gulp.series('main_html'));
    gulp.watch('src/original_source/js/components/blockReservInfo/*.html', gulp.series('components_html'));
    gulp.watch('src/original_source/js/*.js', gulp.series('main_js'));
    gulp.watch('src/original_source/js/reservation_service/*.js', gulp.series('reserv_js'));
    gulp.watch('src/original_source/js/reservation_service/services/*.js', gulp.series('reserv_service_js'));
    gulp.watch('src/original_source/js/reservation_service/vm/*.js', gulp.series('reserv_vm_js'));
    gulp.watch('src/original_source/js/control_service/*.js', gulp.series('control_js'));
    gulp.watch('src/original_source/js/control_service/services/*.js', gulp.series('control_service_js'));
    gulp.watch('src/original_source/js/control_service/vm/*.js', gulp.series('control_vm_js'));
    gulp.watch('src/original_source/js/control_service/model/*.js', gulp.series('control_model_js'));
    gulp.watch('src/original_source/js/components/blockReservInfo/*.js', gulp.series('components_js'));
    gulp.watch('src/original_source/js/libs/*.js', gulp.series('libs_js'));
    gulp.watch('src/original_source/css/*.css', gulp.series('main_css'));
});

gulp.task('default', gulp.series('watch'));
gulp.task('build', gulp.series('js','css', 'html'));