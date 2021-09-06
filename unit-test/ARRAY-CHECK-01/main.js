/**
 * Kiểm tra có số chẵn lớn hơn n trong mảng không
Viết hàm hasEvenNumberGreaterThanN(numberList, n) để kiểm tra trong mảng số numberList truyền
vào có số chẵn mà lớn hơn n hay không
 */

function hasEvenNumberGreaterThanN(numberList, n) {
  if (!Array(numberList) || n < 0) return false;

  return numberList.some((item) => item % 2 === 0 && item > n);
}
console.log(hasEvenNumberGreaterThanN([2, 3, 4], 5));
console.log(hasEvenNumberGreaterThanN([2, 3, 4, 6], 5));
