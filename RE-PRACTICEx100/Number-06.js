function isPerfectNumber(n) {
  if (!Number(n) || n < 0) return false;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  return sum === n ? true : false;
}

console.log(isPerfectNumber(10));
console.log(isPerfectNumber(6));
