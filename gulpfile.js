const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");


gulp.task("default", ["copyhtml", "imagemin", "minify", "sass"]);

gulp.task("copyhtml", function() {
	gulp.src("src/*.html")
		.pipe(gulp.dest("dist/"));
});

gulp.task("imagemin", function() {
	gulp.src("src/images/*")
		.pipe(imagemin())
		.pipe(gulp.dest("dist/images"));
});

gulp.task("minify", function() {
	gulp.src("src/js/*")
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"));
});

gulp.task("sass", function() {
	gulp.src("src/css/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest("dist/css"))
});
