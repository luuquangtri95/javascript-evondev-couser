/**
 * Kiểm tra số có tổng chữ số chia hết cho 10
Viết hàm isDivisibleBy10(n) để kiểm tra n (0 < n < 1000000) có tổng chữ số chia hết cho 10 hay không?
Ví dụ:
isDivisibleBy10(10) --> false
isDivisibleBy10(1234) --> true vì 1 + 2 + 3 + 4 = 10 chia hết cho 10
isDivisibleBy10(123455) --> true vì 1 + 2 + 3 + 4 + 5 + 5 = 20 chia hết cho 10
 */

export function isDivisibleBy10(n) {
  if (!Number(n) || n < 0) return false;
  let sum = 0;
  //convert n to arr;
  const numberList = n
    .toString()
    .split('')
    .reduce((prev, cur) => {
      prev.push(parseInt(cur));
      return prev;
    }, []);
  for (let i = 0; i < numberList.length; i++) {
    sum += numberList[i];
  }

  return sum % 10 === 0 ? true : false;
}
