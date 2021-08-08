/**
 * anonymous function (function expression) // function vô danh
 * điểm khác so với function decreration
 * =>> không bị hosting
 */
const logName = function () {
  console.log('your name');
};
console.log(logName());
