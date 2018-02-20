const gulp = require('gulp');
const pump = require('pump');
// const del = require('del') //删除文件
// const rename = require("gulp-rename"); //重命名文件
const concat = require('gulp-concat'); //合并文件
// const filter = require('gulp-filter'); //过滤出某文件
const uglify = require("gulp-uglify"); //压缩JS文件
// const csso = require('gulp-csso'); //压缩CSS文件
// const htmlminify = require('gulp-html-minify'); //压缩HTML文件
// const imagemin = require('gulp-imagemin');   //压缩图片文件
// const zip = require('gulp-zip');  //zip压缩文件
// const autoprefixer = require('gulp-autoprefixer'); //自动添加浏览器兼容性前缀
// const sass = require('gulp-sass');  //编译sass文件
const babel = require('gulp-babel'); //编译ES6
// const rev = require('gulp-rev');  //给静态资源文件名添加hash值:unicorn.css => unicorn-d41d8cd98f.css

gulp.task('default', function(cb) {
    pump([
            gulp.src('./public/scripts/*.js'),
            babel({
                presets: ['env']
            }),
            uglify(),
            concat('all.min.js'),
            gulp.dest('./dist')
        ],
        cb
    );
});
gulp.watch('./public/scripts/*.js', ['default'])