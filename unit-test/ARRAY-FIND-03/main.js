/**
 * Tìm số dương chẵn đầu tiên trong mảng
Viết hàm findFirstPositiveEven(numberList) để tìm ra số dương chẵn đầu tiên trong mảng numberList
 */

function findFirstPositiveEven(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  return numberList.find((number) => number % 2 === 0);
}

console.log(findFirstPositiveEven([1, 4, 5, 6])); // 4
console.log(findFirstPositiveEven([1, 3, 5]));
