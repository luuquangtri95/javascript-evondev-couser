/**
 * kiểm tra tất cả số trong mảng đều là số hoàn hảo
 */

export function isAllPerfectNumbers(numberList) {
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
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum === number ? true : false;
}

console.log(isAllPerfectNumbers([6, 28]));
