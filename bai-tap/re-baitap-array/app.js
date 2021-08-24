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
  // tạo mảng bằng array from
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

//
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
