// kiểm tra số tăng dần

export function isIncreasingNumber(n) {
  if (!Number(n) || n < 0) return false;
  let arrNumber = n.toString().split('');

  //procesing
  for (let i = 0; i < arrNumber.length; i++) {
    if (parseInt(arrNumber[i + 1]) - parseInt(arrNumber[i]) < 0) {
      return false;
    }
    if (parseInt(arrNumber[i + 1]) === parseInt(arrNumber[i])) {
      return false;
    }
  }

  return true;
}
console.log(isIncreasingNumber(11));
