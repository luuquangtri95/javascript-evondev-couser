/**
 * kiểm tra số hoàn hảo: là số mà tổng ước + lại bằng number
 * vd:6 = 1+2+3
 */

export function isPerfectNumber(n) {
  if (!Number(n) || n < 0) return false;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  return sum === n ? true : false;
}
