const gulp = require("gulp");
const imagemin = require("imagemin");
const jpegtran = require("imagemin-jpegtran");

gulp.task("images", function (done) {
  imagemin(["src/assets/images/**/*.{jpg,png}"], {
    destination: "src/assets/images/optimized",
    plugins: [jpegtran()],
  });
  done();
});
