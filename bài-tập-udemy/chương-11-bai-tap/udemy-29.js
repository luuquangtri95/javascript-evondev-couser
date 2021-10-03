function mergeArray(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return [];
  if (a.length === 0 && b.length === 0) return [];

  let newArr = [...a, ...b];

  return newArr.filter((item, idx) => newArr.indexOf(item) === idx);
}

console.log(mergeArray([1, 2, 3], [2, 3, 4]));
console.log(mergeArray([], [1, 2, 3]));
console.log(mergeArray([1, 2, 3], []));
