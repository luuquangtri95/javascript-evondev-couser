function isPerfectSquare(n) {
  if (!Number(n) || n < 0) return false;

  let sqrtNumber = Math.sqrt(n);

  if (sqrtNumber * sqrtNumber === n) {
    return true;
  }
  return false;
}

console.log(isPerfectSquare(4));
console.log(isPerfectSquare(9));
console.log(isPerfectSquare(25));
console.log(isPerfectSquare(36));
console.log(isPerfectSquare(20));
