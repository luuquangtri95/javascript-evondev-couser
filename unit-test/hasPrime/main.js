/**
 * viết hàm hasPrime(numberList) nhận vào là 1 mảng số nguyên dương
 * trả về true nếu có ít nhấT 1 số nguyên tố
 */

export function hasPrime(numberList) {
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

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
