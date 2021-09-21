function hasEvenNumberGreaterThanN(numberList, n) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  for (let value of numberList) {
    if (value % 2 === 0 && value > n) {
      return true;
    }
  }

  return false;
}

console.log(hasEvenNumberGreaterThanN([2, 3, 4], 5)); // false
console.log(hasEvenNumberGreaterThanN([2, 3, 4, 6], 5)); // true
