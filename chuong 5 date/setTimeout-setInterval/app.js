/**
 * timer: setTimeOut - setInterval
 * setTimeOut: sau bao lâu sẽ làm việc gì đó
 */

// setTimeOut(function(), mili giây (1s = 1000))

setTimeout(function () {
  console.log('hello');
}, 3000);
// clearTimeOut
const timer = setInterval(function () {
  console.log('call me');
}, 1000);
clearInterval(timer);
