function hasOddNumberDivisibleBy3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  for (let value of numberList) {
    if (value % 3 === 0) return true;
  }

  return false;
}

console.log(hasOddNumberDivisibleBy3([1, 5, 7])); // false
console.log(hasOddNumberDivisibleBy3([1, 6])); // true
