var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');


var paths = {
  scripts: [
  ],

  styles: [
  	'sass/**/*.scss'
  	
  ]

};

gulp.task('styles', function() {
  return gulp.src(paths.styles)
		.pipe(sass({
			includePaths: [

			]
		}))
		.pipe(gulp.dest('./css'))
		.pipe(notify({ message: 'styles task complete' }));
});


gulp.task('watch', function() {
	//gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.styles, ['styles']);
	//gulp.watch(paths.prints, ['prints']);
});

gulp.task('default', function() {
	gulp.start('styles','watch');
});