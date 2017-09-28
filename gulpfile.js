const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const concat = require("gulp-concat");

gulp.task("default", ["copyhtml", "imagemin", "minify", "sass"]);

gulp.task("watch", function() {
	gulp.watch("src/js/*.js", ["minify"]);
	gulp.watch("src/css/*.scss", ["sass"]);
	gulp.watch("src/images/", ["imagemin"]);
	gulp.watch("src/*.html", ["copyhtml"]);
});

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
		.pipe(concat("main.js"))
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"));
});

gulp.task("sass", function() {
	gulp.src("src/css/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest("dist/css"))
});
