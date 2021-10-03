function sumAllDigits(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  if (numberList.length === 1) return numberList[0];

  let sum = 0;

  for (let number of numberList) {
    let digitNumber = Array.from(number.toString())
      .map(Number)
      .reduce((a, b) => a + b);

    sum += digitNumber;
  }

  return sum;
}

console.log(sumAllDigits([])); // 0
console.log(sumAllDigits([4])); // 4
console.log(sumAllDigits([123, 4])); // 10 vì lấy 1 + 2 + 3 + 4 = 10
console.log(sumAllDigits([1234, 55])); // 20 vì lấy 1 + 2 + 3 + 4 + 5 + 5 = 2
