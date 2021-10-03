function countUniqueNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  const numberObj = numberList.reduce((obj, key) => {
    obj[key] = (obj[key] || 0) + 1;

    return obj;
  }, {});

  return Object.keys(numberObj).length;
}

console.log(countUniqueNumbers([])); // 0
console.log(countUniqueNumbers([1, 1, 1])); // 1
console.log(countUniqueNumbers([1, 2, 3])); // 3
console.log(countUniqueNumbers([1, 2, 2, 3, 1])); //3
