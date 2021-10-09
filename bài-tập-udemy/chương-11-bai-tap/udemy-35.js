function findSumPair(numberList, targetSum) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  if (targetSum < 0) return [];

  let subArr = [];

  for (let i = 1; i < numberList.length; i++) {
    let currNumber = numberList[i];
    let prevNumber = numberList[i - 1];

    if (currNumber + prevNumber === targetSum) {
      subArr.push(prevNumber, currNumber);
    }
  }

  return subArr.sort();
}
console.log(findSumPair([3, 2, 1], 5));
console.log(findSumPair([1, 2], 2));
console.log(findSumPair([3, 3, 1, 2], 6));
