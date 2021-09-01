/**
 * Viết hàm isPrime(n) để kiểm tra n có phải là số nguyên tố không?
Số nguyên tố là số chỉ chia hết cho 1 và chính nó.
0 < n < 100000
Trả về true nếu là số nguyên tố, ngược lại trả về false.
 */

export function isPrime(n) {
  if (n < 2 || !Number(n)) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
