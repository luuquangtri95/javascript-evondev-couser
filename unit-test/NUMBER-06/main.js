/**
 * Viết hàm isPerfectNumber(n) để kiểm tra n có phải là số hoàn hảo hay không?
Với n thoả điều kiện 1 < n < 1000
Số hoàn hảo là số mà tổng của tất cả ước số (không tính chính nó, tức từ 1 đến n - 1) bằng chính nó.
Trả về true nếu đúng, ngược lại trả về false
Ví dụ: 6 = 1 + 2 + 3 (như vậy 6 là một số hoàn hảo
 */

export function isPerfectNumber(n) {
  if (!Number(n) || n < 0) return false;
  let newArr = [];
  for (let i = 0; i < n; i++) {
    if (n % i === 0) {
      newArr.push(i);
    }
  }

  let number = newArr.reduce((a, b) => a + b, 0);

  return number === n ? true : false;
}
