/**
 * closures
 *
 * đây là dạng kỹ thuật
 *
 * closure sẽ tạo ra 1 môi trường function lexical environment
 *
 * hàm count chạy xong, nhưng vẫn có thẻ dùng các function bên trọng và biến value đc
 */

function count(initialValue) {
  let value = initialValue || 0;

  function increase() {
    value++;
  }

  function decrease() {
    value--;
  }

  function getValue() {
    return value;
  }

  return {
    increase,
    decrease,
    getValue,
  };
}

const count1 = count(0);

count1.increase();
count1.increase();
count1.increase();
count1.getValue();
