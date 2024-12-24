const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");

async function getAutoprefixer() {
  const { default: autoprefixer } = await import("gulp-autoprefixer");
  return autoprefixer;
}

const paths = {
  scss: {
    src: "src/scss/**/*.scss",
    dest: "dist/css/",
  },
};

async function compileSCSS() {
  const autoprefixer = await getAutoprefixer();
  return gulp
    .src(paths.scss.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.scss.dest));
}

function watchFiles() {
  gulp.watch(paths.scss.src, compileSCSS);
}

exports.default = gulp.series(compileSCSS, watchFiles);
