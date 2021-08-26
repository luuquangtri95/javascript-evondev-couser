/**
 * liệt kê ước số của n
 * vd: 10 => 1 2 5 10
 */

// Array from , foreach, sort
function getDivisorListV2(number) {
  if (number < 0) return false;
  let newArr = [];
  Array.from({ length: number }, (_, idx) => idx + 1).forEach((item) => {
    if (item >= Math.sqrt(number) && number % item === 0) {
      newArr.push(item);
    }
    if (item <= Math.sqrt(number) && number % item === 0) {
      newArr.push(item);
    }
  });
  return newArr;
}
console.log(getDivisorListV2(12));

function getDivisorListV3(number) {
  if (number < 0) return false;
  let newArr = [];
  Array.from({ length: number }, (_, index) => index + 1).forEach((item) => {
    if (
      (item > Math.sqrt(number) && number % item === 0) ||
      (item < Math.sqrt(number) && number % item === 0)
    ) {
      newArr.push(item);
    }
  });
  return newArr;
}
console.log(getDivisorListV3(10));
/**
 * số nguyên tố: số chia hết cho 1 và chính no, và bắt đầu từ 2 (2 là số nguyên tố)
 * cách làm: lập qua từng phần tử kiểm tra xem number có chia hết cho từng item hay k ?
 * nếu chia hết thì không phải số nguyên tố
 */
// for...i
function isPrimeV1(number) {
  if (number < 2) return false;
  for (let i = 2; i <= number - 1; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrimeV1(5));

function isPrimeV2(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrimeV2(5));

function isPrimeV3(number) {
  if (number < 2) return false;
  Array.from({ length: number }, (_, idx) => idx + 1).forEach((item) => {
    if (number % item === 0) {
      return false;
    }
  });
  return true;
}
console.log(isPrimeV3(5));

function isPrimeV4(number) {
  if (number < 2) return false;
  // tạo mảng bằng array from
  Array.from({ length: number }, (_, idx) => idx + 1).forEach((item) => {
    if (number % item === 0 && item >= 2 && item <= Math.sqrt(number)) {
      return false;
    }
  });
  return true;
}
console.log(isPrimeV4(5));

/**
 * kiểm tra số hoàn hảo: là số mà tổng ước + lại bằng number
 * vd:6 = 1+2+3
 */

//for...i
function isPerfectNumber(number) {
  if (number < 0) return false;
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum === number ? true : false;
}

console.log(isPerfectNumber(6));

//using Array from
function isPerfectNumberV2(number) {
  if (number < 0) return false;
  let sum = Array.from({ length: number }, (_, idx) => idx + 1)
    .filter((x) => (x < number && number % x) === 0)
    .reduce((pre, cur) => {
      return pre + cur;
    }, 0);
  return sum === number ? true : false;
}
console.log(isPerfectNumberV2(6));

/**
 * viết hàm transformNumbers(numberList) biến đổi mảng với công thức f(i) = f(i-1) + f(i+1) với i là index
 */

// ussing for...i
function transformNumbersV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  let newArr = [];
  for (let i = 0; i < numberList.length; i++) {
    if (i === 0) {
      newArr.push(numberList[i + 1]);
    }
    if (i === numberList.length - 1) {
      newArr.push(numberList[i - 1]);
    }
    if (i !== 0 && i !== numberList.length - 1) {
      newArr.push(numberList[i - 1] + numberList[i + 1]);
    }
  }
  return newArr;
}

console.log(transformNumbersV1([2, 4, 6, 8])); // [4,4,6,1]

// using foreach
// recheck tomorrow !!!
function transformNumbersV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  let newArr = [];
  let first = parseInt(numberList.slice(1, 2).toString());
  let end = parseInt(numberList.slice(-2, -1).toString());
  if (numberList.length < 2) {
    newArr.push(numberList[0]);
  }
  if (numberList.length >= 2) {
    newArr.push(first);
    numberList.forEach((item, index) => {
      if (index > 0 && index < numberList.length - 1) {
        newArr.push(numberList[index - 1] + numberList[index + 1]);
      }
    });
    newArr.push(end);
  }
  return newArr;
}
console.log(transformNumbersV2([2, 4, 6, 8])); // [4,4,6,1]

// ussing map()
function transformNumbersV3(numberList) {
  if (!Array.isArray(numberList)) return [];

  let newList = [...numberList];

  if (newList.length <= 1) return newList;

  return newList.map((item, i) => {
    if (i === 0) return newList[i + 1];
    if (i === newList.length - 1) return newList[i - 1];
    // if (i !== 0 && i !== newList.length - 1) return newList[i - 1] + newList[i + 1];
  });
}

console.log(transformNumbersV3([2, 4, 6, 8]));

function transformNumbersV4(numberList) {
  if (!Array.isArray(numberList)) return [];

  let newArr = [];
  numberList.map((item, index) => {
    console.log(index);
    if (index === 0) {
      newArr.push(numberList[index + 1]);
    }
    if (index === numberList.length - 1) {
      newArr.push(numberList[index - 1]);
    }
    if (index !== 0 && index !== numberList.length - 1) {
      newArr.push(numberList[index - 1] + numberList[index + 1]);
    }
  });
  return newArr;
}

console.log(transformNumbersV4([2, 4, 6, 8]));

/**
 * viết hàm hasPrime(numberList) nhận vào là 1 mảng số nguyên dương
 * trả về true nếu có ít nhấT 1 số nguyên tố
 */

// ussing for...i

function hasPrime(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  let flag = false;
  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];
    if (isPrime(number)) {
      flag = true;
      break;
    }
  }
  return flag;
}
function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i < number - 1; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(hasPrime([1, 4, 5, 8]));

// ussing foreach
function hasPrimeV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  let flag = false;
  numberList.forEach((number) => {
    if (isPrime(number)) {
      flag = true;
    }
  });
  return flag;
}
function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i < number - 1; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(hasPrimeV2([1, 4, 5, 8]));

// ussing find
function hasPrimeV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  // find: trả về value phần tử tìm thấy, không tìm thấy return undefined
  return numberList.find((number) => isPrime(number)) !== undefined;
}
function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i < number - 1; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(hasPrimeV3([1, 4, 6, 8]));

// ussing findIndex
function hasPrimeV4(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  // findIndex: 1 nếu không thoả điều kiện sẽ trả về "-1"
  return numberList.findIndex((value) => isPrime(value)) >= 0;
}
function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i < number - 1; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(hasPrimeV4([1, 4, 6, 8]));

// some
function hasPrimeV5(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  return numberList.some((number) => isPrime(number));
}
function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i < number - 1; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(hasPrimeV5([1, 4, 6, 8]));

/**
 * viết hàm isAllPerfectNumbers(numberList)
 * trả về true tất cả là số hoàn hảo, ngược lại false
 */

// ussing for...i
function isAllPerfectNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  let flag = false;
  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];
    if (isPerfectNumber(number)) {
      flag = true;
    }
    break;
  }
  return flag;
}
function isPerfectNumber(number) {
  if (number <= 1) return false;
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum === number ? true : false;
}

console.log(isAllPerfectNumbers([1, 6]));


