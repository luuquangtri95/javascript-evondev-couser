function findAllPositiveEvenSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  let subArrList = [];
  let subArr = [];

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];

    if (number % 2 !== 0) {
      subArr = [];
    }

    if (number % 2 === 0) {
      if (subArr.length >= 2) subArrList.push(subArr);
      subArr.push(number);
    }

    if (subArr.length >= 2 || i === numberList.length - 1) {
      subArrList.push(subArr);
    }
  }

  return subArrList;
}

console.log(findAllPositiveEvenSubArr([1, 2, 4, 3, 5, 10, 20]));

/**
 * subArr = []
 * subArrList = []
 * i : 0 => 0 < 7 => number = 1 => 1 % 2 === 0 => false => subArr = []
 *
 * i : 1 => 1 < 7 => number = 2 => 2 % 2 ===0 => true => subArr length === 0 => subArr = [2]
 *
 * i: 2 => 2 < 7 => number = 4 => 4 % 2 === 0 => true => subArr length === 1 => subArr = [2,4] => chạy if cuối if => subArr length === 2 => sẽ push vào subArrList
 *
 * i: 3 => 3 < 7 => number = 3 => 3 % 2 === 0 => false => subArr = []
 */
