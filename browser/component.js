function createCounter(initValue = 0) {
  let value = initValue;

  function increase() {
    value++;
  }

  function decrease() {
    value--;
  }

  function print() {
    return value;
  }

  function resetCounter() {
    value = 0;
    return value;
  }

  return {
    increase,
    decrease,
    print,
    resetCounter,
  };
}

function doHomeWork(message, callback) {
  setTimeout(() => {
    console.log(`dang lam bai tap ${message}`);
    callback();
  }, 3000);
}

function done() {
  console.log('da xong');
}

console.log(doHomeWork('toan', done));

console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);

function myFunc(param) {
  if (typeof param === 'function') {
    param(123);
  }
}

function myCallBack(value) {
  console.log(`value: ${value}`);
}

myFunc(myCallBack);
