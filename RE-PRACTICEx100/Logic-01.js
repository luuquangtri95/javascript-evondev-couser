function findSumPair(numberList, targetSum) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  if (targetSum < 0) return [];

  let arrList = [];
  let sumArr = [];

  for (let i = 0; i < numberList.length; i++) {
    let currNumber = numberList[i];
    let nextNumber = numberList[i + 1];

    if (currNumber + nextNumber !== targetSum) {
      sumArr = [];
    }

    if (currNumber + nextNumber === targetSum) {
      sumArr.push(currNumber, nextNumber);
      if (sumArr.length === 2) {
        sumArr.sort();
        arrList.push(sumArr);
      }
    }
  }

  return arrList;
}

console.log(findSumPair([3, 2, 1, 4, 0], 5));

/**
 * i:0 => 3 2 => 3 + 2 = 5 => sumArr = [3,2] => sort [2,3] => arrList = [[2,3]]
 * i:1 => 2 1 => 2 + 1 != 5 => sumArr = []
 * i:2 => 1 + 4.............................................. arrList = [[2,3] , [1,4]]
 * i:3 => 4 + 0 => .......... sumArr = []
 */
