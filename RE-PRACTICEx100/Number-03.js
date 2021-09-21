function isPrime(n) {
  if (!Number(n) || n < 1) return false;

  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(isPrime(3)); //--> true
console.log(isPrime(4)); //--> false
console.log(isPrime(11)); //--> true
