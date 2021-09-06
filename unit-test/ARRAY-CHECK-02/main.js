/**
 * Kiểm tra có số lẻ và chia hết cho 3 không
Viết hàm hasOddNumberDivisibleBy3(numberList) để kiểm tra trong mảng numberList có chứa số lẻ nào
chia hết cho 3 không
 */

function hasOddNumberDivisibleBy3(numberList) {
  if (!Array(numberList)) return false;

  return numberList.some((number) => number % 3 === 0);
}
console.log(hasOddNumberDivisibleBy3([1, 5, 7]));
console.log(hasOddNumberDivisibleBy3([1, 6]));
