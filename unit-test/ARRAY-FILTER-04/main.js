/**
 * Dãy số nguyên tố nhỏ hơn n
 * 
Viết hàm generatePrimeNumbers(n) để tạo ra mảng các số nguyên tố nhỏ hơn n (0 < n < 1000
 */

function generatePrimeNumbers(n) {
  if (!Number(n)) return [];

  let newNumberList = Array.from({ length: n }, (_, idx) => idx + 1);

  return newNumberList.filter((number) => isPrime(number));
}

function isPrime(number) {
  if (number < 2) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(generatePrimeNumbers(10));
console.log(generatePrimeNumbers(20));
