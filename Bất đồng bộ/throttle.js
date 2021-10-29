// always using with scroll event

// chạy liên tục trong 1 khoảng tg và chỉ trigger 1 lần / second

// vd 100 lần gọi, nhưng đúng 500ms thì chỉ call 1 lần

function log() {
  console.log('tada');
}

function throttle(callback, wait) {
  let isThrottling = false;

  return function () {
    if (isThrottling) return; // 2,3,4 come hear

    isThrottling = true; // 1

    setTimeout(() => {
      callback();
      /**
       * khi thực hiện xong phải cập nhất biến isThrottling lại để cho những lần call tiếp theo
       */

      isThrottling = false;
    }, wait);
  };
}

const throttleLog = throttle(log, 500);

throttleLog(); // 1
throttleLog(); // 2
throttleLog(); // 3
throttleLog(); // 4

setTimeout(throttleLog, 600);
setTimeout(throttleLog, 600);
setTimeout(throttleLog, 600);
setTimeout(throttleLog, 700);
setTimeout(throttleLog, 800);
