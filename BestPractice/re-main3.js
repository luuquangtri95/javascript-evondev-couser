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

        subArr = [currNumber]; // [0]
      }
      continue;
    }

    subArr.push(currNumber);

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

// subArr fixed
function findMaxSumArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let subArr = [numberList[0]];
  let subArrList = [];

  for (let i = 1; i < numberList.length; i++) {
    let prevNumber = numberList[i - 1];
    let currNumber = numberList[i];

    if (currNumber <= prevNumber) {
      // case false
      if (subArr.length > 2) {
        subArrList.push(subArr);

        subArr = [currNumber];
      }
      continue;
    }

    subArr.push(currNumber);

    if (i === numberList.length - 1 && subArr.length > 2) {
      subArrList.push(subArr);
    }
  }

  console.log(subArrList);

  let maxSubArr = subArrList[0];

  for (let i = 0; i < subArrList.length - 1; i++) {
    if (subArrList.length === 2) {
      if (
        sumArr(subArrList[i]) > sumArr(subArrList[i + 1]) ||
        sumArr(subArrList[i]) === sumArr(subArrList[i + 1])
      ) {
        return subArrList[i];
      } else {
        return subArrList[i + 1];
      }
    }

    if (sumArr(maxSubArr) < sumArr(subArrList[i + 1])) {
      maxSubArr = subArrList[i + 1];
    }
  }

  return maxSubArr;
}

function sumArr(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(findMaxSumArray([1, 2, 3, 0, 2, 4, 1, 3, 4]));

//ARRAY_SUBARR_05

function findMaxSumArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let subArr = [numberList[0]];
  let subArrList = [];

  for (let i = 1; i < numberList.length; i++) {
    let prevNumber = numberList[i - 1];
    let currNumber = numberList[i];

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

  let maxSubArr = subArrList[0];

  for (let i = 0; i < subArrList.length - 1; i++) {
    if (subArrList.length === 2) {
      if (
        sumArr(subArrList[i]) > sumArr(subArrList[i + 1]) ||
        sumArr(subArrList[i]) === sumArr(subArrList[i + 1])
      ) {
        return subArrList[i];
      } else {
        return subArrList[i + 1];
      }
    }

    if (sumArr(maxSubArr) < sumArr(subArrList[i + 1])) {
      maxSubArr = subArrList[i + 1];
    }
  }

  return maxSubArr;
}

function sumArr(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(findMaxSumArray([1, 2, 3, 0, 10, 20, 10, 50, 100]));

//Array subArr 04

function findAllPositiveEvenSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let subArr = [];
  let subArrList = [];

  for (let i = 0; i < numberList.length; i++) {
    let currNumber = numberList[i];

    if (currNumber % 2 === 0) {
      subArr.push(currNumber);
      if (subArr.length >= 2) {
        subArrList.push(subArr);

        subArr = [];
      }
    }

    if (currNumber)
      if (i === numberList.length - 1 && subArr.length >= 2) {
        subArrList.push(subArr);
      }
  }

  return subArrList;
}

console.log(findAllPositiveEvenSubArr([1, 2, 4, 3, 5, 10, 20]));

//Array-subArr-03

const ADJACENCY_ODER_1_UNIT = 1;

function isSubArray(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length > b.length) return false;
  if (a.length === 0) return true;

  let arrIndex = [];

  for (let i = 0; i < b.length; i++) {
    if (a.indexOf(b[i]) !== -1) {
      // khác trừ 1 là tìm thấy
      arrIndex.push(i);
    }
  }

  for (let i = 0; i < arrIndex.length; i++) {
    let nextNumber = arrIndex[i + 1];
    let currNumber = arrIndex[i];

    if (nextNumber - currNumber === ADJACENCY_ODER_1_UNIT) {
      return true;
    }
  }

  return false;
}

console.log(isSubArray([5, 2], [4, 10, 5, 1, 2, 3]));
console.log(isSubArray([1, 2], [2, 3, 4]));
console.log(isSubArray([1, 2], [4, 10, 1, 2, 3]));

function isSubArray(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length > b.length) return false;
  if (a.length === 0) return true;

  let bString = b.join('');
  let aString = a.join('');

  return bString.includes(aString);
}

console.log(isSubArray([5, 2], [4, 10, 5, 1, 2, 3]));
console.log(isSubArray([1, 2], [2, 3, 4]));
console.log(isSubArray([1, 2], [4, 10, 1, 2, 3]));

//Array subArr 02

const BASE_LENGTH = 2;

function findAllDecreasingSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let subArr = [numberList[0]];
  let subArrList = [];

  for (let i = 1; i < numberList.length; i++) {
    let prevNumber = numberList[i - 1];
    let currNumber = numberList[i];

    if (currNumber >= prevNumber) {
      if (subArr.length > BASE_LENGTH) {
        subArrList.push(subArr);
      }
      subArr = [currNumber];
    }

    if (currNumber < prevNumber) {
      subArr.push(currNumber);
    }

    if (i === numberList.length - 1 && subArr.length > BASE_LENGTH) {
      subArrList.push(subArr);
    }
  }

  return subArrList;
}

console.log(findAllDecreasingSubArr([3, 2, 1, 15, 10, 20, 50, 30, 1]));

//Array subArr 01

function findAllIncreasingSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let subArr = [numberList[0]];
  let subArrList = [];

  for (let i = 1; i < numberList.length; i++) {
    let prevNumber = numberList[i - 1];
    let currNumber = numberList[i];

    if (currNumber <= prevNumber) {
      if (subArr.length > 2) {
        subArrList.push(subArr);
      }
      subArr = [currNumber];
    }

    if (currNumber > prevNumber) {
      subArr.push(currNumber);
    }

    if (i === numberList.length - 1 && subArr.length > 2) {
      subArrList.push(subArr);
    }
  }

  return subArrList;
}

console.log(findAllIncreasingSubArr([1, 2, 3, -5, -10, 5, 10]));

//array cd 06

function uniqueArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let dulicateArr = [];

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];
    if (!dulicateArr.includes(number)) {
      dulicateArr.push(number);
    }
  }

  return dulicateArr;
}

console.log(uniqueArray([1, 1, 2, 2, 3])); // [1, 2, 3]
console.log(uniqueArray([1, 1, 1, 1])); // [1]

//ARRAY-CD-05

function removeDuplicatedNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  numberList.sort();
  let countDigitInNumberList = [];
  let dulicateArr = [];

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];
    if (!dulicateArr.includes(number)) {
      dulicateArr.push(number);
    }
  }

  for (let i = 0; i < dulicateArr.length; i++) {
    let count = 0;

    for (let j = 0; j < numberList.length; j++) {
      if (dulicateArr[i] === numberList[j]) {
        count += 1;
      }
    }
    countDigitInNumberList.push(count);
  }

  console.log(dulicateArr);
  console.log(countDigitInNumberList);

  let findMinIndex = countDigitInNumberList.indexOf(Math.min(...countDigitInNumberList));

  return dulicateArr.splice(findMinIndex, 1);
}

console.log(removeDuplicatedNumbers([1, 1, 2, 3, 3, 5, 5, 5]));

//array-cd-04

function insert(numberList, newNumber) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let newNumberList = [...numberList];
  newNumberList.push(newNumber);

  for (let i = 0; i < newNumberList.length - 1; i++) {
    for (let j = i + 1; j < newNumberList.length; j++) {
      let currNumber = newNumberList[i];
      let nextNumber = newNumberList[j];

      let temp;

      if (currNumber > nextNumber) {
        temp = newNumberList[i];
        newNumberList[i] = newNumberList[j];
        newNumberList[j] = temp;
      }
    }
  }

  return newNumberList;
}

console.log(insert([1, 2, 4], 3));

//ARRAY-SUM-03
function sumAllMinDigits(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let sum = 0;

  for (let i = 0; i < numberList.length; i++) {
    let remaining = numberList[i];
    let min = [];

    while (remaining > 0) {
      let firstCurrNumber = remaining % 10;
      remaining = Math.trunc(remaining / 10);

      min.push(firstCurrNumber);
    }
    console.log(min);
    sum += Math.min(...min);
  }

  return sum;
}

console.log(sumAllMinDigits([123]));
console.log(sumAllMinDigits([123, 5326789]));

//ARRAY-SUM-02
function sumAllDigits(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let sum = 0;

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];

    while (number > 0) {
      let lastCurrNumber = number % 10;

      number = Math.trunc(number / 10);

      sum += lastCurrNumber;
    }
  }

  return sum;
}

console.log(sumAllDigits([])); // 0
console.log(sumAllDigits([4])); // 4
console.log(sumAllDigits([123, 4])); // 10 vì lấy 1 + 2 + 3 + 4 = 10
console.log(sumAllDigits([1234, 55])); // 20 vì lấy 1 + 2 + 3 + 4 + 5 + 5 = 20

function sumEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let sum = 0;

  for (let i = 0; i < numberList.length; i++) {
    let currNumber = numberList[i];
    let nextNumber = numberList[i + 1];

    if (nextNumber > currNumber && nextNumber % 2 === 0) {
      sum += nextNumber;
    }
  }

  return sum;
}

console.log(sumEvenNumbers([-10, -4, 2, 8, 5])); // 6 vì lấy -4 + 2 + 8 = 6
console.log(sumEvenNumbers([2, 8, 5, 4]));

//ARRAY-COUNT-06

function countNumbersNotInB(a, b) {
  if (!Array.isArray(a) || a.length === 0) return 0;
  if (!Array.isArray(b) || b.length === 0) return 0;

  let newItemList = [];

  for (let i = 0; i < a.length; i++) {
    let number = a[i];

    if (!b.includes(number)) {
      newItemList.push(number);
    }
  }

  return newItemList.length;
}

console.log(countNumbersNotInB([1, 2, 3], [4, 5])); // 3
console.log(countNumbersNotInB([1, 2, 3], [1, 2, 3])); // 0
console.log(countNumbersNotInB([1, 2, 3], [3, 4, 5])); // 2

//ARRAY-COUNT-04:
function countUniqueNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let itemUniqueList = [];

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];

    if (!itemUniqueList.includes(number)) {
      itemUniqueList.push(number);
    }
  }

  return itemUniqueList.length;
}
console.log(countUniqueNumbers([])); // 0
console.log(countUniqueNumbers([1, 1, 1])); // 1
console.log(countUniqueNumbers([1, 2, 3])); // 3
console.log(countUniqueNumbers([1, 2, 2, 3, 1])); // 3

function uniqueLetters(str) {
  if (!String(str)) return '';

  let obj = {};
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];

    if (obj[letter] === undefined) {
      obj[letter] = 1;
    } else {
      obj[letter] += 1;
    }
  }

  console.log(obj);

  for (let key in obj) {
    if (obj[key] > 1) {
      continue;
    }

    newStr += key;
  }

  return newStr;
}

console.log(uniqueLetters('aabccddeff'));

//ARRAY-COUNT-03
function countWords(wordList, n) {
  if (!Array.isArray(wordList) || wordList.length === 0) return 0;

  let newArr = [];

  for (let i = 0; i < wordList.length; i++) {
    let word = wordList[i];

    if (word.length >= n) {
      newArr.push(word);
    }
  }

  return newArr.length;
}

console.log(countWords(['easy', 'frontend'], 4)); // 2
console.log(countWords(['easy', 'frontend'], 5)); // 1
console.log(countWords(['easy', 'frontend'], 10)); // 0

//ARRAY-COUNT-02
function countNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let newArr = [];

  for (let i = 0; i < numberList.length - 1; i++) {
    let currNumber = numberList[i];
    let nextNumber = numberList[i + 1];

    if (currNumber < nextNumber) {
      continue;
    }

    newArr.push(nextNumber);
  }

  return newArr.length;
}

console.log(countNumbers([1, 2, 3])); // 0
console.log(countNumbers([1, 2, 3, 10, 9, 8])); // 2 (9 và 8 thoả điều kiện)

//ARRAY-COUNT-01:

function countPositiveEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let newArr = [];

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];

    if (number < 0 || number % 2 !== 0) {
      continue;
    }

    newArr.push(number);
  }

  return newArr;
}

console.log(countPositiveEvenNumbers([-2, -1])); // 0
console.log(countPositiveEvenNumbers([-2, -1, 1, 2, 4])); // 2 (2 và 4 thoả điều kiện)

//ARRAY-FILTER-06

function findAllNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let oddNumberList = [];

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];
    let firstDigit;

    while (number > 0) {
      let lastCurrNumber = number % 10;
      number = Math.trunc(number / 10);

      firstDigit = lastCurrNumber;
    }

    if (firstDigit % 2 === 0) {
      continue;
    }

    oddNumberList.push(numberList[i]);
  }

  return oddNumberList;
}

console.log(findAllNumbers([1, 5, 6])); // [1, 5]
console.log(findAllNumbers([234, 421, 123])); // [123]

function findAllNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let newArr = [];

  const firstEvenNumber = numberList.find((number) => number % 2 === 0);
  const indexFirstEvenNumber = numberList.indexOf(firstEvenNumber);

  if (!firstEvenNumber) {
    return [];
  }

  for (let i = indexFirstEvenNumber; i < numberList.length; i++) {
    let nextNumber = numberList[i + 1];

    if (nextNumber !== firstEvenNumber) {
      continue;
    }

    newArr.push(nextNumber);
  }

  return newArr;
}

console.log(findAllNumbers([1, 4, 5, -6, 4, 5, 4]));
console.log(findAllNumbers([1, 3, 5]));
console.log(findAllNumbers([1, 2, 5]));

//ARRAY-FILTER-04

function generatePrimeNumbers(n) {
  if (n < 0) return 0;

  let isPrimeNumberList = [];

  for (let i = 2; i <= n; i++) {
    if (!isPrime(i)) {
      continue;
    }

    isPrimeNumberList.push(i);
  }

  return isPrimeNumberList;
}

function isPrime(number) {
  if (number < 2) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(generatePrimeNumbers(20));
console.log(generatePrimeNumbers(10));

//ARRAY-FILTER-03

function generateFibonaci(n) {
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    if (arr[i - 1] + arr[i - 2] < n) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }

  return arr;
}

console.log(generateFibonaci(10));
console.log(generateFibonaci(5));

//ARRAY-FILTER-02

function findNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let newArr = [];

  for (let i = 0; i < numberList.length - 1; i++) {
    let currNumber = numberList[i];
    let nextNumber = numberList[i + 1];

    if (currNumber > nextNumber) {
      continue;
    }

    newArr.push(nextNumber);
  }

  return newArr;
}

console.log(findNumbers([1])); // []
console.log(findNumbers([5, 2, 5, 3, 7])); // [5, 7] vì 5 > 2 và 7 > 3

//ARRAY-FILTER-01
function generateNumberInRange(a, b) {
  if (b < a) return [];

  let newArr = [];

  for (let i = a; i <= b; i++) {
    newArr.push(i);
  }

  return newArr;
}

console.log(generateNumberInRange(1, 5)); // [1, 2, 3, 4, 5]
console.log(generateNumberInRange(5, 7)); // [5, 6, 7]
console.log(generateNumberInRange(7, 5)); // []

//ARRAY-FIND-06

function findLastPerfectSquareV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  for (let i = numberList.length; i > 0; i--) {
    if (!isPerfectSquare(numberList[i])) {
      continue;
    }

    return numberList[i];
  }
}

function findLastPerfectSquareV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let lastPerfectNumber;

  for (let i = 0; i < numberList.length; i++) {
    if (!isPerfectSquare(numberList[i])) {
      continue;
    }

    lastPerfectNumber = numberList[i];
  }

  return lastPerfectNumber;
}

function isPerfectSquare(number) {
  let sqrtNumber = Math.sqrt(number);

  return sqrtNumber * sqrtNumber === number ? true : false;
}

console.log(findLastPerfectSquareV2([2, 3, 5])); // undefined
console.log(findLastPerfectSquareV2([4, 16, 25, 36, 40])); // 36

//ARRAY-FIND-05

//ARRAY-FIND-04

function findLastNegativeOdd(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let lastOddNumber;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0 || numberList[i] % 2 === 0) {
      continue;
    }

    lastOddNumber = numberList[i];
  }

  return lastOddNumber;
}

console.log(findLastNegativeOdd([-1, -3, -5])); // -5 vì 5 là số âm lẻ cuối cùng
console.log(findLastNegativeOdd([1, 3, 5]));

//ARRAY-FIND-03

function findFirstPositiveEven(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] < 0 || numberList[i] % 2 !== 0) {
      continue;
    }

    return numberList[i];
  }
}

console.log(findFirstPositiveEven([1, 4, 5])); // 4
console.log(findFirstPositiveEven([1, 3, 5]));

//ARRAY-FIND-01
function findMinPositive(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  numberList.sort();

  for (let i = 1; i < numberList.length - 1; i++) {
    let currNumber = numberList[i];

    if (currNumber < 0) {
      continue;
    }

    return currNumber;
  }
}

console.log(findMinPositive([-1, -5, 2, 6, 1, 3, 5])); // 2
console.log(findMinPositive([])); // undefined
console.log(findMinPositive([-1, -5])); // undefined

//ARRAY-CHECK-12
function hasFibonaciNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (generateFibonaci(numberList[i])) {
      return true;
    }
  }

  return false;
}

function generateFibonaci(number) {
  let arr = [0, 1];

  for (let i = 2; i <= 100; i++) {
    if (arr[i - 1] + arr[i - 2] < 100) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }

  return arr.includes(number) ? true : false;
}

console.log(hasFibonaciNumber([4, 6, 7])); // false
console.log(hasFibonaciNumber([0, 1, 2, 3, 4, 5])); // true
console.log(hasFibonaciNumber([89])); // true

//ARRAY-CHECK-11

function isSymmetricList(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  if (numberList.length === 1) return true;

  let reverseNumberList = [];

  for (let i = numberList.length - 1; i >= 0; i--) {
    reverseNumberList.push(numberList[i]);
  }

  return reverseNumberList.toString() === numberList.toString() ? true : false;
}

console.log(isSymmetricList([1, 2, 2, 1])); // true
console.log(isSymmetricList([])); // false
console.log(isSymmetricList([1])); // true
console.log(isSymmetricList([1, 2, 3])); // false

// ARRAY-CHECK-09

function isIncreasingNumberList(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  for (let i = 0; i < numberList.length - 1; i++) {
    let currNumber = numberList[i];
    let nextNumber = numberList[i + 1];

    if (currNumber >= nextNumber) {
      continue;
    }

    return true;
  }

  return false;
}

console.log(isIncreasingNumberList([1, 1])); // false
console.log(isIncreasingNumberList([1, 2])); // true
console.log(isIncreasingNumberList([2, 1])); // false

//ARRAY-CHECK-02
function hasOddNumberDivisibleBy3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];

    if (number % 3 !== 0) {
      continue;
    }

    return true;
  }

  return false;
}

console.log(hasOddNumberDivisibleBy3([1, 5, 7])); // false
console.log(hasOddNumberDivisibleBy3([1, 6])); // true

// ARRAY-CHECK-01
function hasEvenNumberGreaterThanN(numberList, n) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  let isValid = false;

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];

    if (number % 2 !== 0) {
      continue;
    }

    if (number > n) {
      isValid = true;
    }
  }

  return isValid;
}
console.log(hasEvenNumberGreaterThanN([2, 3, 4], 5)); // false
console.log(hasEvenNumberGreaterThanN([2, 3, 4, 6], 5)); // true

//logic4

function findMostFrequentNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  if (numberList.length === 1) return numberList[0];

  let map = {};
  let maxKey = undefined;

  for (let i = 0; i < numberList.length; i++) {
    let digit = numberList[i];
    map[digit] = (map[digit] || 0) + 1;
  }

  for (let key in map) {
    if (maxKey === undefined || map[maxKey] < map[key]) {
      maxKey = key;
    }
  }

  return maxKey;
}
console.log(findMostFrequentNumber([1, 2, 3, 2, 3, 4]));

//LOGIC-03

function statisticsNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return {};

  let map = {};

  for (let i = 0; i < numberList.length; i++) {
    let digit = numberList[i];

    map[digit] = (map[digit] || 0) + 1;
  }

  return map;
}
console.log(statisticsNumbers([1, 1, 1, 2, 2, 3]));

//LOGIC-02
function findMissingNumber(numberList, n) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let nList = [];

  for (let i = 5; i <= n; i++) {
    nList.push(i);
  }

  return nList.find((item) => !numberList.includes(item));
}
console.log(findMissingNumber([5, 6, 8, 9, 10], 10));
console.log(findMissingNumber([5], 6));

//LOGIC-01
function findSumPairV2(numberList, targetSum) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let subArr = [];
  let subArrList = [];

  for (let i = 0; i < numberList.length - 1; i++) {
    let currNumber = numberList[i]; // 3
    let nextNumber = numberList[i + 1]; //2
  }

  return subArrList;
}
console.log(findSumPairV2([5, 3, 2, 1, 4, 5], 5));
