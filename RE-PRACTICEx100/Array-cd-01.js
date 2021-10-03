function insert(arr, newItem, k) {
  if (!Array.isArray(arr) || arr.length === 0) return [];

  if (k <= 0) {
    arr.unshift(newItem);
    return arr;
  }

  if (k > arr.length) {
    arr.push(newItem);
    return arr;
  } else {
    arr.splice(k, 0, newItem);
  }

  return arr;
}

console.log(insert([1, 2, 3], 0, -1)); // [0, 1, 2, 3]
console.log(insert([1, 2, 3], 4, 10)); // [1, 2, 3, 4]
console.log(insert([1, 2, 3], 10, 2)); // [1, 2, 10, 3]

// const n = [1, 2, 3];
// n.splice(-2, 2, 99, 9);
// console.log(n);
