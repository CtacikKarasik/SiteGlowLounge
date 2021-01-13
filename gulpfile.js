var gulp = require('gulp');
var rename = require('gulp-rename');

gulp.task('default', function() {
    return gulp .src('src/original_source/css/*.css')
                .pipe(rename({ suffix: ".min" }))
                .pipe(gulp.dest('src/css'));
});


  