/**
 * Tìm số dương nhỏ nhất trong mảng
Viết hàm findMinPositive(numberList) để tìm ra số dương nhỏ nhất trong mảng.
 */

function findMinPositive(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  return numberList.sort((a, b) => a - b).find((number) => number % 2 == 0);
}

console.log(findMinPositive([])); // undefined
console.log(findMinPositive([-1, -5])); // undefined
console.log(findMinPositive([-1, -5, 6, 2])); // 2
