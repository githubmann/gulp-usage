/* 
* @Author: 波
* @Date:   2016-02-01 22:34:24
* @Last Modified by:   波
* @Last Modified time: 2016-02-01 23:20:45
*/

var gulp = require('gulp');
var sass = require('gulp-sass');
var broswerSync = require('broswer-sync');
//sass静态任务
//你的任务是否在这些前置依赖的任务完成之前运行了？
//请一定要确保你所依赖的任务列表中的任务都使用了正确的异步执行方式：
//使用一个 callback，或者返回一个 promise 或 stream。
gulp.task('sass',function  () {
  return gulp.src('./scss/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./css/'));//如果css不存在会自动创建
})
//broswerSync静态任务
gulp.task('broswerSync',['sass'],function  () {
  broswerSync({
    server:{
      baseDir:'./'
    }
  })
})
gulp.task('watch',function  () {
  gulp.watch('scss/*.scss',['sass']);
})