const gulp = require('gulp');
const scss = require('gulp-sass');
const gulpConnect = require('gulp-connect');

gulp.task('scss', () => {
	return gulp.src('./scss/*.scss')
	.pipe(scss())
	.pipe(gulp.dest('./public/css'))
})

gulp.task('connect', function() {
	gulpConnect.server({
		root: 'public',
		livereload: true
	})
})

gulp.task('livereload', function () {
	gulp.src('./public/**/*')
	.pipe(gulpConnect.reload());
});

gulp.task('watch', ['livereload'], () => {
	gulp.watch('./scss/**/*.scss', ['scss'])
})

gulp.task('default', ['connect', 'scss', 'watch']);
