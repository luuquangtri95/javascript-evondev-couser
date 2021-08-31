//Viết hàm isDecreasingNumber(n) để kiểm tra n có phải là số giảm dần hay không?

export function isDecreasingNumber(n) {
  if (!Number(n) || n < 0) return false;
  // create new arr
  let arrNumber = n
    .toString()
    .split('')
    .reduce((pre, cur) => {
      pre.push(parseInt(cur));
      return pre;
    }, []);
  console.log(arrNumber);
  //processing
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] - arrNumber[i + 1] < 0) {
      return false;
    }
    if (arrNumber[i] === arrNumber[i + 1]) {
      return false;
    }
  }

  return true;
}
console.log(isDecreasingNumber(321));
