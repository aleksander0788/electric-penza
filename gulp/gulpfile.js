
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var nunjucksRender = require('gulp-nunjucks-render');
var prettify = require('gulp-prettify');
var config = require('./config');
var merge         = require('merge-stream');
var spritesmith   = require('gulp.spritesmith');

gulp.task('nun', function () {
  return gulp.src(config.src.templates + '/**/[^_]*.html')
    .pipe(nunjucksRender({
      path: [config.src.templates] // String or Array
    }))
    .pipe(prettify({
        indent_with_tabs: true,
        preserve_newlines: false,
        end_with_newline: true
    }))
    .pipe(gulp.dest(config.dest.html));
});

gulp.task('sass', function () {
  return gulp.src(config.src.sass + '/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.dest.css));
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });

    browserSync.watch('public/**/*.*').on('change', browserSync.reload);
    browserSync.watch('public/*.html').on('change', browserSync.reload);

});

gulp.task('default', ['sass', 'nun', 'serve'], function () {
    gulp.watch("./src/sass/*.scss", ['sass']);
    gulp.watch("./src/templates/**/*.html", ['nun']);
});


gulp.task('sprite', function () {
  var spriteData = gulp.src(config.src.icons + '/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: '_sprite.scss',
    imgPath: '/images/sprite.png',
    padding: 1,
    cssFormat: 'scss',
    cssOpts: {
      // for remove prefix icon-
      cssSelector: function (sprite) {
        return '.' + sprite.name;
      },
      algorithmOpts: {sort: true}
    }
  }));

  var imgStream = spriteData.img
    .pipe(gulp.dest('public/images/'));

  var cssStream = spriteData.css
    .pipe(gulp.dest('src/sass'));

  return merge(imgStream, cssStream);
  // return spriteData.pipe(gulp.dest('css/'));
});