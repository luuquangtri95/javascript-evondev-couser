/**
 * Tổng các số chẳn mà nó lớn hơn số trước đó.
 * 
Viết hàm sumEvenNumbers(numberList) để tính tổng các số chẵn có giá trị lớn hơn số liền kế trước đó.
 */

function sumEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  let sum = 0;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0 && numberList[i] < numberList[i + 1]) {
      sum += numberList[i];
    }
  }

  return sum;
}

console.log(sumEvenNumbers([-10, -4, 2, 8, 5])); // 6 vì lấy -4 + 2 + 8 = 6
console.log(sumEvenNumbers([2, 8, 5, 4])); // 10 vì lấy 2 + 8 = 10
