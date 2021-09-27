function findAllIncreasingSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let subArrList = [];
  let subArr = [numberList[0]];

  for (let i = 1; i < numberList.length; i++) {
    let prevNumber = numberList[i - 1];
    let currNumber = numberList[i];

    if (prevNumber >= currNumber) {
      if (subArr.length >= 2) subArrList.push(subArr);

      subArr = [currNumber];
    }

    if (prevNumber < currNumber) {
      subArr.push(currNumber);
    }

    if (i === numberList.length - 1 && subArr.length >= 2) {
      subArrList.push(subArr);
    }
  }

  return subArrList;
}

console.log(findAllIncreasingSubArr([1, 2, 3, -5, -10, 5, 10]));

/**
 * subArr = [1]
 * i = 1 => prev: 1 , curr: 2 => prev < curr => push => subArr = [1,2]
 * i = 2 => prev: 2 , curr: 3 => prev < curr => push => subArr = [1,2,3]
 * i = 3 => prev: 3 , curr: -5 => prev >= curr => subArrList = [[1,2,3]] => subArr = [-5]
 * i = 4 => prev: -5 , curr: -10 => prev >= curr => subArr.length = 1 false => subArr = [-10]
 * i = 5 => prev: - 10 , curr: 5 => prev < curr => subArr [-10, 5]
 * i = 6 => prev: 5 , curr: 10 => prev < curr => subArr [-10,5,10]
 *
 * =>> i = 6 === numberList.length - 1 && subArr = [-10,5,10].length >= 2 => [[1,2,3],[-10,5,10]]
 */
