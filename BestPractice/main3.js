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
console.log(sortArr([1,5,3,4,2])); // 5 4 3 2 1

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



[1, 2, 3, 4, 5, 6, 7]

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

1 5 2

