/**
 * Tổng của các chữ số trong mảng
 * 
Viết hàm sumAllDigits(numberList) để tính tổng các chữ số của từng số trong mảng numberLis
 */

function sumAllDigits(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  let sum = 0;

  const newNumberList = [...numberList];
  for (let number of newNumberList) {
    sum += calcSumNumber(number);
  }

  return sum;
}

function calcSumNumber(n) {
  return n
    .toString()
    .split('')
    .reduce((a, b) => Number(a) + Number(b), 0);
}

console.log(sumAllDigits([])); // 0
console.log(sumAllDigits([4])); // 4
console.log(sumAllDigits([123, 4])); // 10 vì lấy 1 + 2 + 3 + 4 = 10
console.log(sumAllDigits([1234, 55])); // 20 vì lấy 1 + 2 + 3 + 4 + 5 + 5 = 20

console.log([123, 3].join('').split(''));
