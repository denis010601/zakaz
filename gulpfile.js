const {watch, series, parallel} = require('gulp');
const browerSync = require('browser-sync').create();
// Конфигурация
const path = require("./config/path.js");

//Задачи
const clear = require('./tasks/clear.js');
const html = require('./tasks/html.js');
const scss = require('./tasks/scss.js');
const img = require('./tasks/img.js');
const fonts = require('./tasks/fonts.js');
const js = require('./tasks/js.js');

// server
const server = () => {
  browerSync.init({
    server: {
      baseDir: path.root
    }
  })
}
// Налюдатель
const watcher = () => {
  watch(path.html.watch, html).on("all", browerSync.reload);
  watch(path.scss.watch, scss).on("all", browerSync.reload);
  watch(path.js.watch, js).on("all", browerSync.reload);
  watch(path.img.watch, img).on("all", browerSync.reload);
  watch(path.fonts.watch, fonts).on("all", browerSync.reload);
  
  
}

exports.html = html;
exports.scss = scss;
exports.img = img;
exports.fonts= fonts;
exports.js = js;
//Сборка
exports.dev = series (
  clear,
  parallel(html, scss, js, img, fonts),
  parallel(watcher, server)
);