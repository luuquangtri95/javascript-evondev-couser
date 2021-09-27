function hasTwoDigitsWithSum(n, sum) {
  if (!Number(n) || n < 0) return false;

  const numberList = n
    .toString()
    .split('')
    .map(Number)
    .reduce((a, b) => {
      return a + b;
    });

  return numberList === sum ? true : false;
}

function hasTwoDigitsWithSum(n, sum) {
  let remaining = n;
  let sumNumber = 0;
  while (remaining > 0) {
    let lastCurrNumber = remaining % 10;

    remaining = Math.trunc(remaining / 10);

    sumNumber += lastCurrNumber;
  }

  return sumNumber === sum ? true : false;
}

console.log(hasTwoDigitsWithSum(10, 1)); //--> true vì 0 + 1 = 1
console.log(hasTwoDigitsWithSum(101, 3)); //--> false vì không có 2 chữ số nào cộng lại bằng 3
console.log(hasTwoDigitsWithSum(11, 2)); //--> true
