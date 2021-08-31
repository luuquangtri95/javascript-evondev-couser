/**
 *  Kiểm tra số tăng dần đều theo khoảng cách cho trước
 * Viết hàm isIncreasingNumberByDistance(n, x) để kiểm tra n có phải là số tăng dần đều với khoảng cách
giữa 2 chữ số là x không?

0 < n < 1000000, 0 < x < 5
Số tăng dần có ít nhất 2 chữ số
Chữ số bên phải luôn lớn hơn chữ số bên trái
Khoảng cách của 2 chữ số liền kề là x
 */

export function isIncreasingNumberByDistance(n, x) {
  if (!Number(n) || !Number(x)) return false;
  if (n < 0) return false;

  const arrNumber = n
    .toString()
    .split('')
    .reduce((prev, cur) => {
      prev.push(parseInt(cur));
      return prev;
    }, []);

  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] + x === arrNumber[i + 1]) {
      return true;
    }
  }
  return false;
}
console.log(isIncreasingNumberByDistance(123, 1));
