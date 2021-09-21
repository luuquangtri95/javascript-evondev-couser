function isDivisibleBy10(n) {
  if (!Number(n) || n < 0) return false;

  //conver number to array
  return n
    .toString()
    .split('')
    .map(Number)
    .reduce((prev, curr) => {
      return prev + curr;
    }) %
    10 ===
    0
    ? true
    : false;
}

console.log(isDivisibleBy10(10)); //--> false
console.log(isDivisibleBy10(1234)); //--> true vì 1 + 2 + 3 + 4 = 10 chia hết cho 10
console.log(isDivisibleBy10(123455)); //--> true vì 1 + 2 + 3 + 4 + 5 + 5 = 20 chia hết cho 10
