function insert(numberList, newNumber) {
  if (!Array.isArray(numberList)) return [];

  numberList.push(newNumber);

  return numberList.sort();
}

console.log(insert([], 3)); // [3]
console.log(insert([1, 2, 4], 3)); // [1, 2, 3, 4]
console.log(insert([1, 2, 3], 3)); // [1, 2, 3, 3]
console.log(insert([1, 2, 3], 2)); // [1, 2, 3, 3]
