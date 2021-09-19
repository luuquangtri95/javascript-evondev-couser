/**
 * Sửa hàm calculate(a, b) sao cho kết quả trả về là tổng của 2 số a và b chuyền vào.
VD: kết quả của calculate(3, 4) là 7, kết quả của calculate(5, -12) là -7

 */

function calculate(a, b) {
  if (!Number(a) || !Number(b)) return -1;

  return a + b;
}
console.log(calculate(5, -12));
console.log(calculate(3, 4));
