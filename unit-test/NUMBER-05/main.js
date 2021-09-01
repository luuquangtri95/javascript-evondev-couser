/**
 * NUMBER-05: Kiểm tra số chính phương
Viết hàm isPerfectSquare(n) để kiểm tra n có phải là số chính phương không?
0 < n < 100000
Số chính phương là số có căn bậc 2 của nó là một số tự nhiên.
Trả về true nếu là số chính phương, ngược lại trả về false.
Ví dụ: 4, 9, 25, 36 là các số chính phương
 */

export function isPerfectSquare(n) {
  if (n < 0 || !Number(n)) return false;
  let number = Math.sqrt(n);
  if (number * number === n) {
    return true;
  }
  return false;
}
