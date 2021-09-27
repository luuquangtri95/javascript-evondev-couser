function findAllDecreasingSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let subArrList = [];
  let subArr = [numberList[0]];

  for (let i = 0; i < numberList.length; i++) {
    let prevNumber = numberList[i - 1];
    let currNumber = numberList[i];

    if (prevNumber <= currNumber) {
      if (subArr.length > 2) subArrList.push(subArr);

      subArr = [currNumber];
    }

    if (prevNumber > currNumber) {
      subArr.push(currNumber);
    }

    if (i === numberList.length - 1 && subArr.length > 2) {
      subArrList.push(subArr);
    }
  }

  return subArrList;
}

console.log(findAllDecreasingSubArr([3, 2, 1, 15, 10, 20]));
