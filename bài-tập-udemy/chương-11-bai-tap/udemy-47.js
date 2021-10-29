function divisibleBy(n) {
  function isCheck(value) {
    if (value <= 1) return false;
    return n % value === 0 ? true : false;
  }

  return isCheck;
}

const isDivisibleByFive = divisibleBy(5);

console.log(isDivisibleByFive(5));
console.log(isDivisibleByFive(4));
console.log(isDivisibleByFive(3));
console.log(isDivisibleByFive(2));
console.log(isDivisibleByFive(1));
