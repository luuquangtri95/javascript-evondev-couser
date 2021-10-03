/**
 * function
 * if
 * for
 * logic
 * kieu du kieu (number, string, array, undefined, null, boolean, obj, function)
 */

function sum(a, b) {
  return true;
}
console.log(sum(1, 2));
/**
 * ! sum: function name
 * ! sum() : call function
 * ! a, b: params (tham so)
 *
 * ! return: khi ham muon tra ve 1 gia tri j do
 */

// so nguyen to

/**
 * số chia hết cho 1 và chính nó =>> 3 5 7...
 *
 */

function isPrime(number) {
  if (number < 2) return false;

  for (let i = 2; i < number; i++) {
    // 2 - 7
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(isPrime(7));

// number 8
/**
 * i:2 => 2 <= 8 => if(8 % 2 === 0) false
 * i:3 => 3 <= 8 => if(8 % 3 === 0)
 * i:4 => 4 <=8 => if(8 % 4 === 0)
 * ...
 * i:8 => 8 <= 8 => if(8 % 8 === 0)
 */

console.log(isPrime(8));

// 2 - 7

// 2: 8 % 2 === 0 ?
// 3: 8 % 3 === 0 ?
// 4: 8 % 4 === 0
// 5: 8 % 5 === 0
// 6: 8 % 6 === 0
// 7: 8 % 7 === 0 ?

// check íncreasingNumber

// 123: là số tăng dần
// 11: false
// 12321: false

function increasingNumber(number) {
  let remaining = number;

  while (remaining >= 10) {
    let lastCurrNumber = remaining % 10; //1

    remaining = Math.trunc(remaining / 10); // 1232

    let numberRemain = remaining % 10; //2

    if (lastCurrNumber > numberRemain) {
      return true;
    } else {
      return false;
    }
  }

  return false;
}

console.log(increasingNumber(9));

// kiểm tra số hoàn hảo
//vd: 6: 1+2+3 = 6

function isperfectNumber(number) {
  let sum = 0;

  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum = sum + i;
    }
  }
  if (sum === number) {
    return true;
  }
  return false;
}
console.log(isperfectNumber(10));

// 6 % 1=== 0 sum 0 + 1 =1
// 6 % 2 === 0 sum 1+2 = 3;
// 6 % 3 === 0 sum 3+3 = 6 = number

function increasingNumber(n) {
  let remaining = n;

  while (remaining >= 10) {
    let lastCurrNumber = remaining % 10;

    remaining = Math.trunc(remaining / 10);

    let prevLastCurrNumber = remaining % 10;

    if (prevLastCurrNumber < lastCurrNumber) {
      return true;
    }
  }

  return false;
}

// % : chia lay du: 10 % 2 = 0
// / : chia lay phan nguyen: 10 / 2 = 5

// 456 % 10 = 6 => 45
// 45 % 10 = 5
// 45 / 10 = 4

// 321 % 10 = 1
// 32 % 10 = 2
// 32 / 10 = 3

// 12321 % 10 = 1 => 1232
// 1232 % 10 = 2 => 123
// 123 % 10 = 3 => 12
// 12 % 10 = 2 => 1
// 12 / 10 = 1

function checkInc(number) {
  let remaining = number;

  let lastNumber = number % 10; // 3
  remaining = Math.trunc(number / 10); // 12
  let midNumber = remaining % 10; // 2
  let firstNumber = remaining / 10; // 1

  if (firstNumber < midNumber && midNumber < lastNumber) return true;

  return false;
}

console.log(checkInc(123));

// 6 = 1 + 2 + 3= 6

function isperfectNumber(number) {
  if (number < 0) return false;

  let sum = 0;

  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum = sum + i;
    }
  }

  if (sum === number) return true;

  return false;
}
console.log(isperfectNumber(6));

/**
 * sum = 0;
 * i = 1 => i < 6 => true => if(6 % 1 === 0 ) => sum = 1
 * i = 2 => i < 6 => true => if(6 % 2===0) => sum = 1+ 2= 3;
 * i = 3 => i < 6 => true => if(6 % 3 ===0) => sum = 3+ 3;
 * => sum = 6 === number => true
 */

function test(number) {
  for (let i = 0; i < Math.sqrt(number); i++) {
    console.log(i);
  }
}
console.log(test(15));
console.log(Math.sqrt(15));

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function test(numberList) {
  let subArr = [];
  let subArrList = [];

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];

    subArr.push(number);
    if (subArr.length === 2) {
      subArrList.push(subArr);
      subArr = [];
    }
    if (i === numberList.length - 1 && subArr.length === 1) {
      subArrList.push(subArr);
    }
  }

  return subArrList;
}
console.log(test(numberList));

/**
 * subArr = []
 * subArrList = []
 *
 * i = 0 => number = 1 => subArr = [1] => 0 === length - 1 => false
 * i = 1 => number = 2 => subArr = [1,2] => length === 2 => subArrList = [[1,2]] => subArr = [] => 1 === length => false
 * i = 2 => number = 3 => subArr = [3] => 3 === length - 1 => false
 * i = 3 => number = 4 => subArr = [3,4] => subArrList = [[1,2], [3,4]] => subArr = []
 * i = 4 => number = 5 => subArr = [5]
 * i = 5 => number = 6 => subArr = [5, 6]
 * i = 6 => number = 7 => subArrList = [[1,2],[3,4],[5,6]] => subArr = []
 * i = 7 => i === leng - 1 => true && subArr.length = 0 === 1 false => break
 *
 * return subArr
 */

// 100% number

//123 321
function sortArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  for (let i = 0; i < numberList.length - 1; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      let currNumber = numberList[i];
      let nextNumber = numberList[j];

      let temp;
      if (nextNumber > currNumber) {
        temp = numberList[i]; // 1
        numberList[i] = numberList[j];
        numberList[j] = temp;
      }
    }
  }

  return numberList;
}
console.log(sortArr([1, 5, 3, 4, 2])); // 5 4 3 2 1

// let a = [1, 2, 3, 4];
// let value = a[2]; //3
// value = 4;
// console.log(a);

function groupIndex(numberList, target) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  let newArr = [];
  let newArrList = [];

  for (let i = 0; i <= numberList.length - 1; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      if (numberList[i] + numberList[j] === target) {
        newArr.push(i, j);
        if (newArr.length === 2) newArrList.push(newArr);
        newArr = [];
      }
    }
  }

  if (newArrList.length === 1) {
    const [newArr] = newArrList;
    return newArr;
  } else {
    return newArrList;
  }
}
console.log(groupIndex([2, 7, 11, 15], 9));
console.log(groupIndex([6, 5, 7, 8, 9, 3], 10));

/**
 * i:0 => 0 < 3
 * j: 0 + 1 = 1 => 1 < 4 => 6 + 5 === 12 => false
 *
 * i:1 => 1 < 5
 * j:2 => 2 < 6 => 5+7 === 12 => true;
 *
 * i:2
 * j:3 => 3 < 6 =>
 */

let arr = [1, 2, 3, 4, 5, 6, 7];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 5) {
    newArr.push(arr[i]);
    newArr = [];
    // continue;
  }

  // newArr.push(arr[i]);
}

console.log(newArr);

[1, 2, 3, 4, 5, 6, 7];

/**
 * i = 0
 * j = 0 => a[j] a[j+1] => 1 5 => 5 1 4 3 2
 * j = 1
 * j = 2
 * j = 3
 * j = 4
 *
 * i = 1
 * j = 0 => a[j] a[j+1] => 1 5 => 5 1 4 3 2
 * j = 1
 * j = 2
 * j = 3
 * j = 4
 *
 * i = 2
 * j = 0 => a[j] a[j+1] => 1 5 => 5 1 4 3 2
 * j = 1
 * j = 2
 * j = 3
 * j = 4
 *
 * ....
 *
 * i = 4
 * j = 0 => a[j] a[j+1] => 1 5 => 5 1 4 3 2
 * j = 1
 * j = 2
 * j = 3
 * j = 4
 */

// i = 0; j = i + 1 => 1 5 => 5 1 4 3 2
// i = 1; j = i + 1 => 1 4 => 5 4 1 3 2
// i = 2; j = i + 1 => 1 3 => 5 4 3 1 2
// i = 3; j = i + 1 => 1 2 => 5 4 3 2 1

// [5,4,3,2,1]
// [5,4] [3,2] [1]

function group(numberList) {
  let arr = [];
  let list = [];

  for (let i = 0; i < numberList.length; i++) {
    arr.push(numberList[i]);
    for (let j = 1; j < numberList.length; j++) {
      arr.push(numberList[j]);
      if (j === numberList.length - 1 || arr.length === 2) {
        list.push(arr);
        arr = [];
      }
    }
    break;
  }

  return list;
}

console.log(group([5, 4, 3, 2, 1]));

function findAllDecreasingSubArr(numberList) {
  let arr = [];
  let listArr = [];

  for (let i = 0; i < numberList.length; i++) {
    let currNumber = numberList[i];
    let nextNumber = numberList[i + 1];

    if (currNumber > nextNumber) {
      arr.push(currNumber);
    } else {
      arr.push(currNumber);
      if (i === numberList.length - 1 || arr.length >= 3) listArr.push(arr);
      arr = [];
    }
  }

  return listArr;
}

console.log(findAllDecreasingSubArr([3, 2, 1, 15, 10, 9, 5]));

// 29/09/2021

function countNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let newArr = [];

  for (let i = 0; i < numberList.length; i++) {
    let currNumber = numberList[i];
    let nextNumber = numberList[i + 1];
    if (currNumber > nextNumber) {
      newArr.push(nextNumber);
    }
  }

  return newArr;
}
console.log(countNumbers([1, 2, 3, 10, 9, 8]));
console.log(countNumbers([1, 2, 3]));

function countPositiveEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let newArr = [];

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];
    if (number > 0 && number % 2 === 0) {
      newArr.push(number);
    }
  }

  return newArr;
}

console.log(countPositiveEvenNumbers([-2, -1])); // 0
console.log(countPositiveEvenNumbers([-2, -1, 1, 2, 4])); // 2 (2 và 4 thoả điều kiện)

function countUniqueNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let newArr = [];

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];
    if (!newArr.includes(number)) {
      newArr.push(number);
    }
  }

  return newArr.length;
}
console.log(countUniqueNumbers([1, 1, 1]));
console.log(countUniqueNumbers([]));
console.log(countUniqueNumbers([1, 2, 3]));
console.log(countUniqueNumbers([1, 2, 2, 3, 1]));

function countNumbersNotInB(a, b) {
  if (!Array.isArray(a) || a.length === 0) return 0;
  if (!Array.isArray(b) || b.length === 0) return 0;

  let newArr = [];

  for (let i = 0; i < a.length; i++) {
    let number = a[i];
    if (!b.includes(number)) {
      newArr.push(number);
    }
  }

  return newArr;
}
console.log(countNumbersNotInB([1, 2, 3], [4, 5])); // 3
console.log(countNumbersNotInB([1, 2, 3], [1, 2, 3])); // 0
console.log(countNumbersNotInB([1, 2, 3], [3, 4, 5])); // 2

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
console.log(sumEvenNumbers([-10, -4, 2, 8, 5]));
console.log(sumEvenNumbers([2, 8, 5, 4]));

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

console.log(sumAllDigits([123, 4]));
console.log(sumAllDigits([1234, 55]));

function sumAllMinDigits(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let sum = 0;

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];
    sum += findMin(number);
  }

  return sum;
}

function findMin(number) {
  let min = 10;
  let remaining = number;

  while (remaining > 0) {
    let digit = remaining % 10;
    if (min > digit) {
      min = digit;
    }

    remaining = Math.trunc(remaining / 10);
  }

  return min;
}
console.log(sumAllMinDigits([123, 532, 567]));

//30/09/2021

function insert(numberList, newNumber) {
  if (!Array.isArray(numberList)) return [];

  numberList.push(newNumber);

  for (let i = 0; i < numberList.length - 1; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      let currNumber = numberList[i];
      let nextNumber = numberList[j];

      let temp;
      if (currNumber > nextNumber) {
        temp = numberList[i];
        numberList[i] = numberList[j];
        numberList[j] = temp;
      }
    }
  }

  return numberList;
}
console.log(insert([1, 2, 4], 3)); // [1, 2, 3, 4]
console.log(insert([1, 2, 3], 3)); // [1, 2, 3, 3]

function findAllNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let newArr = [];

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];
    let min = [];

    while (number > 0) {
      let digit = number % 10;
      number = Math.trunc(number / 10);

      min.push(digit);
    }

    if (min[min.length - 1] % 2 !== 0) {
      newArr.push(numberList[i]);
    }
  }

  return newArr;
}

console.log(findAllNumbers([234, 421, 123])); // [123]
console.log(findAllNumbers([1, 5, 6])); // [1, 5]

/**
 * [1,2,3,4,5] => length = 5
 *  0 1 2 3 4 =>> index => [3] = 4
 */

function findAllNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let newArr = [];
  let evenNumber;
  let indexFirstEvenNumber;

  // ! get first even Number
  for (let i = 0; i < numberList.length; i++) {
    let currNumber = numberList[i];

    if (currNumber % 2 === 0) {
      evenNumber = numberList[i];
      break;
    }
  }

  //? get index first evenNumber in numberList
  indexFirstEvenNumber = numberList.indexOf(evenNumber);

  // numberList = numberList.slice(indexFirstEvenNumber + 1);

  //run last length numberList to > first index of evenNumber
  for (j = numberList.length - indexFirstEvenNumber; j > indexFirstEvenNumber; j--) {
    let currNumber = numberList[j];

    if (currNumber === evenNumber) {
      newArr.push(numberList[j]);
    }
  }

  return newArr;
}

console.log(findAllNumbers([1, 4, 5, -6, 4, 5, 4]));

function findAllNumbersV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let indexFirstEvenNumber = numberList.findIndex((number) => number % 2 === 0);
  return numberList
    .slice(indexFirstEvenNumber + 1)
    .filter((number) => number === numberList[indexFirstEvenNumber]);
}
console.log(findAllNumbersV2([1, 2, 5]));
/**
 * length: 7
 * index: 1
 * 7 - 1 = 6
 * 6 : 4
 * 5 : 5
 * 4 : 4
 * 3 : -6
 * 2 : 5
 * 1 : 4
 */

function generatePrimeNumbers(n) {
  const numberList = Array.from({ length: n }, (_, idx) => idx + 1);

  let primeNumberList = [];

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];

    if (isPrime(number)) {
      primeNumberList.push(number);
    }
  }

  return primeNumberList;
}

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(generatePrimeNumbers(20));
console.log(generatePrimeNumbers(10));

function findNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let newArr = [];

  for (let i = 0; i < numberList.length; i++) {
    let currNumber = numberList[i];
    let nextNumber = numberList[i + 1];

    if (nextNumber > currNumber) {
      newArr.push(numberList[i + 1]);
    }
  }

  return newArr.slice(1);
}

console.log(findNumbers([1, 3, 2, 5, 3, 7]));

function generateNumberInRange(a, b) {
  if (b < a) return [];

  let newArr = [];

  for (let i = a; i <= b; i++) {
    newArr.push(i);
  }

  return newArr;
}
console.log(generateNumberInRange(1, 5));

function findLastPerfectSquare(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let newArr = [];

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];

    if (isperfectNumber(number)) {
      newArr.push(numberList[i]);
    }
  }

  return newArr[newArr.length - 1];
}

function isperfectNumber(number) {
  if (!Number(number)) return false;

  let sqrtNumber = Math.sqrt(number);

  if (sqrtNumber * sqrtNumber === number) return true;

  return false;
}
console.log(findLastPerfectSquare([4, 16, 25, 36, 40]));

function findSecondLargestNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  for (let i = 0; i < numberList.length - 1; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      let currNumber = numberList[i];
      let nextNumber = numberList[j];

      let temp;

      if (currNumber < nextNumber) {
        temp = numberList[i];
        numberList[i] = numberList[j];
        numberList[j] = temp;
      }
    }
  }

  return numberList[1];
}
console.log(findSecondLargestNumber([1, 2, 3, 4]));

function findLastNegativeOdd(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let lastNumber;

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];

    if (number < 0 && number % 2 !== 0) {
      lastNumber = number;
    }
  }

  return lastNumber;
}

console.log(findLastNegativeOdd([-1, -3, -5]));
console.log(findLastNegativeOdd([1, 3, 5]));

function findFirstPositiveEven(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let firstNumber;

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];

    if (number > 0 && number % 2 === 0) {
      firstNumber = number;
      break;
    }
  }

  return firstNumber;
}

console.log(findFirstPositiveEven([1, 4, 2, 5]));
console.log(findFirstPositiveEven([1, 3, 5]));

function findMinPositive(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let newArr = [];

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];

    if (number > 0) {
      newArr.push(number);
    }
  }

  let minNumberInArr = newArr[0]; //1

  for (let j = 1; j < newArr.length; j++) {
    let currNumber = newArr[j];

    if (currNumber < minNumberInArr) {
      minNumberInArr = currNumber;
    }
  }

  return minNumberInArr;
}

console.log(findMinPositive([])); // undefined
console.log(findMinPositive([-1, -5])); // undefined
console.log(findMinPositive([-1, -5, 3, 6, 2, 1, 5])); // 2

function isSymmetricList(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  let reverseNumberList = [];

  for (let i = numberList.length - 1; i >= 0; i--) {
    let number = numberList[i];
    reverseNumberList.push(number);
  }

  return reverseNumberList.toString() === numberList.toString();
}

console.log(isSymmetricList([])); // false
console.log(isSymmetricList([1])); // true
console.log(isSymmetricList([1, 2, 2, 1])); // true
console.log(isSymmetricList([1, 2, 3])); // false

function findMostFrequentNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let objNumber = {};

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];

    objNumber[number] = (objNumber[number] || 0) + 1;
  }

  let values = Object.values(objNumber);

  let max = Math.max(...values);

  for (let key in objNumber) {
    if (objNumber[key] === max) {
      return Number(key);
    }
  }
}

console.log(findMostFrequentNumber([1, 2, 2, 2, 2, 2, 3, 2, 3, 3, 3, 4]));

function fibonancy(n) {
  let newArr = [0, 1];

  for (let i = 2; i < n; i++) {
    if (newArr[i - 2] + newArr[i - 1] < 100) {
      newArr.push(newArr[i - 2] + newArr[i - 1]);
    }
  }

  return newArr;
}
console.log(fibonancy(10));

// 0 1 => 
/**
 * i: 2
 * 0 + 1 = 1
 * i:3
 * 1+1=2
 * i:4
 * 1+2=3
 * i:5
 * 3+2=5
 * i:6
 * 5+3=8
 * i:7
 * 8+5=13
 */