/**
 * every()
 * some()
 * indexOf()
 * lastIndexOf()
 * includes()
 */

// every() thoả tất cả điều kiện
const arr = [1, 2, 3, 4];
arr.every((x) => x % 2 === 0); //false vì 1, 3 không chia hết cho 2

//some() 1 thằng thoả dk trả về true
const arr = [1, 2, 3, 4];
arr.some((x) => x % 2 === 0); // true vì 1 phần tử thoả mãn điều kiện là được

// indexOf() không tìm thấy trả về -1
console.log([1, 1, 1].indexOf(1)); // 0

// lastIndexOf() kiểm tra phần từ cuối, không tìm thấy trả về -1
console.log([1, 1, 1].lastIndexOf(2)); // 2

// includes() kieerm tra mảng có chưa phần tử hay k
console.log([1, 2, 3].includes(1));

// cách lmaf hàm every

function every(numberList) {
  if (!Array.isArray(numberList)) return false;

  let isValid = true;
  for (number of numberList) {
    if (number % 2 !== 0) {
      isValid = false;
      break;
    }
  }
  return isValid;
}

console.log(every([2, 4]));

// cach lam hàm some()

function some(numberList) {
  if (!Array.isArray(numberList)) return false;
  for (number of numberList) {
    if (number % 2 === 0) {
      return true;
      break;
    }
  }
}
console.log(some([2, 4]));

// cách làm hàm indexOf

function indexOf(numberList, index) {
  if (!Array.isArray(numberList)) return false;
  let isValid = -1;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] === index) {
      isValid = i;
      break;
    }
  }
  return isValid;
}

console.log(indexOf([1, 5, 2, 3, 4, 5], 5));

// last indexof
function lastIndex(numberList, index) {
  if (!Array.isArray(numberList)) return false;
  let flagLastIndex = -1;
  for (let i = numberList.length - 1; i >= 0; i--) {
    if (numberList[i] === index) {
      flagLastIndex = i;
      break;
    }
  }
  return flagLastIndex;
}
console.log(lastIndex([1, 2, 2, 3, 4, 5, 5], 2));

// includes
function includes(numberList, number) {
  if (!Array.isArray(numberList)) return false;
  for (value of numberList) {
    if (value === number) {
      return true;
      break;
    }
  }
  return false;
}

console.log(includes([1, 2, 3, 4, 5], 2));
