function findMaxSumArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let subArrList = [];
  let subArr = [numberList[0]];

  for (let i = 1; i < numberList.length; i++) {
    let prevNumber = numberList[i - 1];
    let currNumber = numberList[i];

    if (prevNumber >= currNumber) {
      if (subArr.length >= 2) subArrList.push(subArr);

      subArr = [currNumber]; // [0,2,4]
    }
    if (prevNumber < currNumber) {
      subArr.push(currNumber);
    }

    if (subArr.length >= 2 && i === numberList.length - 1) {
      subArrList.push(subArr);
    }
  }

  // case : subArrList.length === 1 => return subArr
  if (subArrList.length === 1) return [...subArr];

  // case: subArrList.length > 1
  for (let i = 0; i < subArrList.length; i++) {
    if (
      sum(subArrList[i]) > sum(subArrList[i + 1]) ||
      sum(subArrList[i]) === sum(subArrList[i + 1])
    ) {
      return subArrList[i];
    }
    return subArrList[i + 1];
  }
}

function sum(arr) {
  return arr.reduce((a, b) => a + b);
}

console.log(findMaxSumArray([1, 2, 3, 0, 2, 4]));

// length: 6;
// i:1 => i < 6 true => prev: 1, curr: 2 => 1 >= 2 => false => 1 < 2 true => [1,2]
// i:2 => i < 6 true => prev: 2, curr: 3 => 2 >= 3 => false => 2 < 3 true => [1,2,3]
// i:3 => i < 6 true => prev: 3 curr: 0 => 3 >= 0 => true => [1,2,3] = 3 => subArrList = [[1,2,3]] => subArr = [0]

// i:4 => i < 6 true => prev:0 curr: 2 => 0 >= 2 => false => 0 < 2 true => [0,2]
// i:5 => i < 6 true => prev:2 curr:4 => 2 >= 4 => false => 2 < 4 true => [0,2,4]
