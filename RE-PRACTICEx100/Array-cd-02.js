function remove(arr, k, n) {
  if (!Array.isArray(arr) || arr.length === 0) return [];

  const newArr = [...arr];

  if (k < 0 || k >= arr.length) return arr;
  if (!n) return [];

  newArr.splice(k, n);

  return newArr;
}

console.log(remove([1, 2, 3], -1, 10)); // [1, 2, 3]
console.log(remove([1, 2, 3], 3, 10)); // [1, 2, 3]
console.log(remove([1, 2, 3], 1, 2)); // [1]
console.log(remove([1, 2, 3], 0)); // []

console.log([1, 2, 3].splice(1, 2));
