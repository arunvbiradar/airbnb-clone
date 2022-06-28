// Less configuration
import gulp from "gulp";
import less from "gulp-less";
import cssmin from "gulp-cssmin";

gulp.task("less", function (cb) {
  gulp
    .src("./views/assets/css/*.less")
    .pipe(less())
    .pipe(
      gulp.dest(function (f) {
        return f.base;
      })
    );
  cb();
});

gulp.task("minify", function () {
  gulp
    .src("./views/assets/css/styles.css")
    .pipe(cssmin())
    .pipe(gulp.dest("./views/assets/css/"));
});

gulp.task(
  "default",
  gulp.series("less", function (cb) {
    gulp.watch("./views/assets/css/**/*.less", gulp.series("less"));
    cb();
  })
);
