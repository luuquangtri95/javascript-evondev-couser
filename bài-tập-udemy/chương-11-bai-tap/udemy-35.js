function findSumPair(numberList, targetSum) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  if (targetSum < 0) return [];

  let subArr = [];

  for (let i = 0; i < numberList.length - 1; i++) {
    let firstNumber = numberList[i];
    for (let j = 1; j < numberList.length; j++) {
      let secondNumber = numberList[j];

      if (firstNumber + secondNumber === targetSum) {
        subArr.push(firstNumber, secondNumber);
      }
    }

    break;
  }

  return subArr.sort();
}

console.log(findSumPair([3, 2, 1], 5));
console.log(findSumPair([1, 2], 2));
console.log(findSumPair([3, 3, 1, 2], 6));
console.log(findSumPair([5, 3, 1, 2], 7));


