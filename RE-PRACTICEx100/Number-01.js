/**
 * Kiểm tra số tăng dần
 * 
Viết hàm isIncreasingNumber(n) để kiểm tra n có phải là số tăng dần hay không?
0 < n < 1000000

Số tăng dần có ít nhất 2 chữ số

Chữ số bên phải luôn lớn hơn chữ số bên trái

Trả về true nếu là số tăng dần, ngược lại trả về false.
 */

/**
 * 
isIncreasingNumber(11) --> false

isIncreasingNumber(123) --> true

isIncreasingNumber(12321) --> false
 */

function isIncreasingNumber(n) {
  if (!Number(n) || n < 0) return false;

  const numberArr = n.toString().split('').map(Number);

  for (let i = 0; i < numberArr.length; i++) {
    let number = numberArr[i];
    let nextNumber = numberArr[i + 1];

    if (nextNumber - number < 0) {
      return false;
    }
    if (nextNumber === number) {
      return false;
    }
  }

  return true;
}
console.log(isIncreasingNumber(12321));

console.log(isIncreasingNumber(123));
console.log(isIncreasingNumber(11));
