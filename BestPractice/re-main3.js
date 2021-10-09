//logic 4

function findMostFrequentNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let obj = {};
  let max = undefined;

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];

    if (obj[number] === undefined) {
      obj[number] = 1;
    } else {
      obj[number] += 1;
    }
  }

  console.log(obj);

  for (let key in obj) {
    if (max === undefined || obj[max] < obj[key]) {
      max = key;
    }
  }

  return Number(max);
}

console.log(findMostFrequentNumber([1, 2, 3, 3, 2, 3, 4]));

/**
 * i:0
 * number:1
 * {1:1}
 *
 * i:1
 * number:2
 * {1:1, 2:1}
 *
 * i:3
 * number:3
 * {1:1, 2:1, 3:1}
 *
 * i:4
 * number:2
 * {1:1, 2:2, 3:1}
 *
 * i:5
 * number:3
 * {1:1, 2:2, 3:2}
 *
 * i:6
 * number:4
 * {1:1, 2:2, 3:2, 4:1}
 */

//LOGIC 3

function statisticsNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return {};

  let obj = {};

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];

    if (obj[number] === undefined) {
      obj[number] = 1;
    } else {
      obj[number] += 1;
    }
  }

  return obj;
}

console.log(statisticsNumbers([1, 1, 1, 2, 2, 3]));

//LOGIC 2

function findMissingNumber(numberList, n) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let nList = [];

  for (let i = 5; i <= n; i++) {
    nList.push(i);
  }

  return nList.find((number) => !numberList.includes(number));
}

function findMissingNumber(numberList, n) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let nList = [];

  for (let i = 5; i <= n; i++) {
    nList.push(i);
  }

  for (let i = 0; i < nList.length; i++) {
    let number = nList[i];

    if (!numberList.includes(number)) {
      return number;
    }
  }
}

console.log(findMissingNumber([5, 6, 8, 9, 10], 10)); // 7 vì trong mảng thiếu mất số 7
console.log(findMissingNumber([5], 6)); // 6 vì trong mảng thiếu mất số 6

//LOGIC 1

function findSumPair(numberList, targetSum) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let subArr = [];
  let subArrList = [];

  for (let i = 0; i < numberList.length; i++) {
    let currNumber = numberList[i];
    let nextNumber = numberList[i + 1];

    if (currNumber + nextNumber === targetSum) {
      subArr.push(currNumber, nextNumber);
      subArr.sort();
      if (subArr.length === 2) subArrList.push(subArr);

      subArr = [];
    }

    if (currNumber === targetSum) {
      subArr.push(currNumber);
    }

    if (i === numberList.length - 1 || subArr.length === 1) {
      subArrList.push(subArr);

      subArr = [];
    }
  }

  return subArrList;
}

console.log(findSumPair([5, 3, 2, 1, 4, 5], 5));

//ARRAY-SUBARR-06
function findMaxSumArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let subArr = [numberList[0]];
  let subArrList = [];

  for (let i = 1; i < numberList.length; i++) {
    let prevNumber = numberList[i - 1]; //3
    let currNumber = numberList[i]; //0

    if (currNumber <= prevNumber) {
      if (subArr.length > 2) {
        subArrList.push(subArr);

        subArr = [currNumber];
      }
    }

    if (currNumber > prevNumber) {
      subArr.push(currNumber);
    }

    if (i === numberList.length - 1 && subArr.length > 2) {
      subArrList.push(subArr);
    }
  }

  for (let i = 0; i < subArrList.length - 1; i++) {
    if (
      sumArr(subArrList[i]) > sumArr(subArrList[i + 1]) ||
      sumArr(subArrList[i]) === sumArr(subArrList[i + 1])
    ) {
      return subArrList[i];
    }

    return subArrList[i + 1];
  }
}

function sumArr(array) {
  if (!Array.isArray(array) || array.length === 0) return 0;

  return array.reduce((a, b) => a + b);
}

console.log(findMaxSumArray([1, 2, 3, 0, 2, 4]));
