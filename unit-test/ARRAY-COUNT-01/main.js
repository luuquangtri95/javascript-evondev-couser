/**
 * Ðếm số dương chẵn có trong mảng
Viết hàm countPositiveEvenNumbers(numberList) để đếm có bao nhiêu số dương chẳn có trong mảng
 */

function countPositiveEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  const newNumberList = [...numberList];

  return newNumberList.filter((number) => number % 2 === 0 && number).length;
}

console.log(countPositiveEvenNumbers([-2, -1])); // 0
console.log(countPositiveEvenNumbers([-2, -1, 1, 2, 4])); // 2 (2 và 4 thoả điều kiện)
