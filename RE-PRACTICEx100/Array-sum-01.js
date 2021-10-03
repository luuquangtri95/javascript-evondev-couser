function sumEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let sum = 0;

  for (let i = 0; i < numberList.length; i++) {
    let currNumber = numberList[i];
    let nextNumber = numberList[i + 1];

    if (currNumber % 2 === 0 && nextNumber % 2 === 0) {
      if (nextNumber > currNumber) {
        sum += nextNumber;
      }
    }
  }

  return sum;
}

console.log(sumEvenNumbers([-10, -4, 2, 8, 5])); // 6 vì lấy -4 + 2 + 8 = 6
console.log(sumEvenNumbers([2, 8, 5, 4])); // 8
