/**
 * tham số là function
 * lưu function vào 1 biến rồi gọi sau
 */

function add(a = 0, b = 0) {
  return a + b;
}

const sum = add; // gán function cho biến sum => chưa gọi hàm vì chưa có  ()
console.log(sum(3, 2)); // gọi biến

//tính trung bình 2 số a và b: (a+b)/2
// fn: viết tắc function
function average(a, b, fn) {
  const total = fn(a, b); // sum(a,b)
  return total / 2;
}
let result = average(3, 2, sum);
console.log(result);
