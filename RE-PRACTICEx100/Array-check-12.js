function hasFibonaciNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  return numberList.some((number) => generateFibonancy(number));
}

function generateFibonancy(n) {
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    let nextNumber = arr[i - 1] + arr[i - 2];
    if (nextNumber < 100) {
      arr.push(nextNumber);
    }
  }

  return arr.includes(n) ? true : false;
}

console.log(hasFibonancyNumber([4, 6, 7])); // false
console.log(hasFibonancyNumber([0, 1, 2, 3, 4, 5])); // true
console.log(hasFibonancyNumber([89])); // true
