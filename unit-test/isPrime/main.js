/**
 * số nguyên tố: số chia hết cho 1 và chính no, và bắt đầu từ 2 (2 là số nguyên tố)
 * cách làm: lập qua từng phần tử kiểm tra xem number có chia hết cho từng item hay k ?
 * nếu chia hết thì không phải số nguyên tố
 */

export function isPrime(n) {
  if (!Number(n) || n < 0) return false;
  if (n < 2) return false;

  //processing
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
