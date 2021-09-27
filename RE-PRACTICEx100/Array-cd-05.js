function removeDuplicatedNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  const objNumber = numberList.reduce((obj, key) => {
    obj[key] = (obj[key] || 0) + 1;

    return obj;
  }, {});

  return Object.keys(objNumber)
    .filter((key) => objNumber[key] <= 1) // ! objNumber[key] lấy value
    .map(Number);
}
console.log(removeDuplicatedNumbers([1, 1, 2, 3, 2]));
console.log(removeDuplicatedNumbers([1, 2, 3])); // [1, 2, 3]
console.log(removeDuplicatedNumbers([])); // []
