/**
 * Tìm số âm lẻ cuối cùng trong mảng
Viết hàm findLastNegativeOdd(numberList) để tìm ra số âm lẻ cuối cùng trong mảng numberList
 */

function findLastNegativeOdd(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  return numberList.reverse().find((number) => number % 2 !== 0 && number < 0);
}

console.log(findLastNegativeOdd([-5, -1, -3]));
console.log(findLastNegativeOdd([1, 3, 5]));
