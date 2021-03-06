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

// using filter

function isAllPerfectNumbersV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  console.log(numberList.filter((number) => isPerfectNumber(number)).length);
  // điều kiện khi filter lọc ra 1 mảng mới thoả mãn length mảng mới sẽ bằng với length mảng cũ
  return numberList.filter((number) => isPerfectNumber(number)).length === numberList.length;
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

console.log(isAllPerfectNumbersV2([6, 28]));

// using every

function isAllPerfectNumbersV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  return numberList.every((number) => isPerfectNumber(number));
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
console.log(isAllPerfectNumbersV3([1, 6]));

// using reduce

function isAllPerfectNumbersV4(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  let newArr = numberList.reduce(
    (pre, cur, index, array) => (isPerfectNumber(cur) ? [...pre, cur] : pre),
    []
  );
  if (newArr.length === numberList.length) return true;
  return false;
}
function isAllPerfectNumbersV5(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  let count = numberList.reduce((pre, cur) => {
    if (isPerfectNumber(cur)) {
      pre = pre + 1;
    }
    return pre;
  }, 0);
  return count === numberList.length ? true : false;
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
console.log(isAllPerfectNumbersV5([6, 28]));

/**
 * viết hàm calcAvgOfAllEvenNumbers(numberList)
 * trả về 1 con số duy nhất cho biết trung bình của tất cả số chẵn có sẵn trong mảng, nếu kết là số thực thì làm tròn về số nguyên gần nhất
 *
 */

function calcAvgOfAllEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length <= 1) return 0;
  console.log(numberList.some((number) => number <= 0));
  if (
    numberList.some((number) => number <= 0) ||
    numberList.findIndex((number) => number % 2 === 0) < 0 // tim không có số chẵn trả về trừ -1 < 0 return 0
  )
    return 0;

  // main
  let newNumberList = numberList.filter((number) => number % 2 === 0);
  let sum = newNumberList.reduce((pre, cur) => {
    return pre + cur;
  }, 0);

  return Math.round(sum / newNumberList.length);
}

console.log(calcAvgOfAllEvenNumbers([1, 5]));

// =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/**
 * đây là phần fixed code để code gọn hơn và tốt hơn
 */

/**
 * bài 1: viết hàm createArrayInRange(a,b) tạo ra mảng gồm các số trong khoảng [a,b]
 * điều kiện: -100 < a < 100
 */

// using for...i

function createArrayInRange(a, b) {
  if (!Number(a) || !Number(b)) return false;
  let newArr = [];

  // main
  for (let i = a; i <= b; i++) {
    newArr.push(i);
  }

  return newArr;
}

console.log(createArrayInRangeV1(-2, 1));

// ussing Array.from
function createArrayInRangeV1(a, b) {
  if (!Number(a) || !Number(b)) return false;
  const RANGE = b - a;

  // main
  let NumberList = Array.from({ length: RANGE + 1 }, (_, idx) => idx + a);

  return NumberList;
}
console.log(createArrayInRangeV1(-2, 1));

/**
 * kiểm tra số nguyên tố
 * số nguyên tố là số chỉ có 2 ước là 1 và chính nó
 * number < 2 =>> k phải snt
 *
 * tại sao lại kiểm tra đến sqrt(number)
 * vi khi nhập vào 1 số rất lớn thì sẽ chạy rất nhiều, giảm hiệu xuất, trong khi chạy từ i - sqrt(number) 1 số chia thì return false k phải snt
 */

function isPrimeV1(number) {
  if (number < 2) return false;
  if (number >= 2) {
    for (let i = 2; i < number - 1; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  }
  return true;
}
console.log(isPrimeV1(6));

function isPrimeV2(number) {
  if (number < 2) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    console.log(i);
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrimeV2(99));

/**
 * viết hàm getDivisorList(n) trả về 1 mảng các ước của n
 */

// for...i
function getDivisorListV1(n) {
  if (!Number(n)) return false;
  let newArr = [];

  // main
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      newArr.push(i);
    }
  }

  return newArr;
}

console.log(getDivisorListV1(12));

// Array form + filter
function getDivisorListV2(n) {
  if (!Number(n)) return false;
  // main
  return Array.from({ length: n }, (_, idx) => idx + 1).filter((item) => n % item === 0);
}
console.log(getDivisorListV2(12));

//Array.from + foreach + sort
function getDivisorListV3(n) {
  if (!Number(n)) return false;
  let newArr = [];

  // main
  Array.from({ length: n }, (_, idx) => idx + 1).forEach((item) => {
    if ((item <= Math.sqrt(n) || item >= Math.sqrt(n)) && n % item === 0) {
      newArr.push(item);
    }
  });

  return newArr;
}
console.log(getDivisorListV3(12));

/**
 * viết hàm isPerfectNumber(n) kiểm tra số hoàn hảo hay không
 * số hoàn hảo: ước chung + lại bằng number
 * 6 = 1 + 2 + 3
 */

function isPerfectNumber(n) {
  if (!Number(n)) return false;
  let sumNumber = 0;
  // main
  for (let i = 0; i < n; i++) {
    if (n % i === 0) {
      sumNumber += i;
    }
  }
  if (sumNumber === n) return true;
  return false;
}
console.log(isPerfectNumber(7));

/**
 * viết hàm transformNumbers(numberList) biến đổi theo công thức : f(i) = f(i-1) +f(i+1) i = index
 * trường hợp đầu mảng lấy phần tử liền kề
 * trường hợp có ít hơn 1 phần tử giữ nguyên không biến đổi
 */

//for...i

function transformNumbers(numberList) {
  if (!Array.isArray(numberList)) return false;
  if (numberList.length === 0) return [];
  if (numberList.length <= 1) return numberList;

  let newArr = [];

  // main
  for (let i = 0; i < numberList.length; i++) {
    // numberlist.length = 4
    if (i === 0) {
      newArr.push(numberList[i + 1]);
    }
    if (i === numberList.length - 1) {
      newArr.push(numberList[i - 1]);
    }
    if (i >= 1 && i < numberList.length - 1) {
      newArr.push(numberList[i - 1] + numberList[i + 1]);
    }
  }

  return newArr;
}
console.log(transformNumbers([2]));

// foreach

function transformNumbers(numberList) {
  if (!Array.isArray(numberList)) return false;
  if (numberList.length === 0) return [];
  if (numberList.length <= 1) return numberList;
  let newArr = [];

  numberList.forEach((number, index) => {
    if (index === 0) {
      newArr.push(numberList[index + 1]);
    }
    if (index === numberList.length - 1) {
      newArr.push(numberList[index - 1]);
    }
    if (index > 0 && index < numberList.length - 1) {
      newArr.push(numberList[index - 1] + numberList[index + 1]);
    }
  });

  return newArr;
}

console.log(transformNumbers([2, 4, 6, 8]));

// map()
function transformNumbers(numberList) {
  if (!Array.isArray(numberList)) return false;
  let newNumberList = [...numberList];
  if (newNumberList.length === 0) return [];
  if (newNumberList.length <= 1) return newNumberList;

  return newNumberList.map((item, index) => {
    if (index === 0) {
      return newNumberList[index + 1];
    }
    if (index === newNumberList.length - 1) {
      return newNumberList[index - 1];
    }
    if (index > 0 && index < newNumberList.length - 1) {
      return newNumberList[index - 1] + newNumberList[index + 1];
    }
  });
}
console.log(transformNumbers([2, 4]));

/**
 * viết hàm hasPrime(numberList)
 * trả về true nếu có ít nhất 1 số nguyên tố
 */

// for...i
function hasPrimeV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  let flag = false;

  // main
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
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(hasPrimeV1([1, 2, 6, 8]));

//foreach (foreach not breack :v)
function hasPrimeV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  let flag = false;

  // main
  numberList.forEach((number) => {
    if (isPrime(number)) {
      flag = true;
    }
  });

  return flag;
}
function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(hasPrimeV2([1, 4, 6, 8]));

// find (khi không thoả mãn sẽ trả về undefined)
function hasPrimeV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  // main
  return numberList.find((number) => isPrime(number)) >= 0;
}
function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(hasPrimeV3([1, 4, 6, 8]));

// findIndex (khi không thoả mãn sẽ trả về -1)
function hasPrimeV4(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  // main
  return numberList.findIndex((number) => isPrime(number)) !== -1;
}

function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(hasPrimeV4([1, 2, 6, 8]));

// some (khi không thoả mãn sẽ trả về -1)
function hasPrimeV5(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  // main
  return numberList.some((number) => isPrime(number));
}

function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(hasPrimeV5([1, 4, 6, 8]));

/**
 * viết hàm isAllperfectNumbers(numberList)
 * trả về true nết tất cả là số hoàn hảo
 */

// for...i
function isAllperfectNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  let flag = false;

  // main
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
  let sum = 0;

  for (let i = 0; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  return sum === number ? true : false;
}
console.log(isAllperfectNumbers([1, 6]));

//reduce
function isAllperfectNumbersV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  let newArr = numberList.reduce((pre, cur) => {
    if (isPerfectNumber(cur)) {
      pre.push(cur);
    }
    console.log(pre);
    return pre;
  }, []);

  return newArr.length === numberList.length ? true : false;
}
function isPerfectNumber(number) {
  let sum = 0;

  for (let i = 0; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  return sum === number ? true : false;
}

console.log(isAllperfectNumbersV1([1, 6]));

// every()
function isAllperfectNumbersV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  // main
  return numberList.every((number) => isPerfectNumber(number));
}
function isPerfectNumber(number) {
  let sum = 0;

  for (let i = 0; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  return sum === number ? true : false;
}

console.log(isAllperfectNumbersV1([6, 28]));

/**
 * viết hàm calcAvgOfAllEvenNumbers(numberList)
 * trả về 1 con số duy nhất cho biết trung bình cộng của tất cả số chẵn trong mảng, làm tròn về số nguyên gần nhất
 */

function calcAvgOfAllEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  if (
    numberList.some((number) => number <= 0) ||
    numberList.findIndex((number) => number % 2 === 0) < 0
  )
    return 0;
  // main
  let evenNumberList = numberList.filter((number) => number % 2 === 0);
  let calcEvenNumber = evenNumberList.reduce((pre, cur) => pre + cur);

  return Math.round(calcEvenNumber / evenNumberList.length);
}

console.log(calcAvgOfAllEvenNumbers([1, 2]));
