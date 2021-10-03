function countNumbersNotInB(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return 0;
  if (a.length === 0 && b.length === 0) return 0;

  let newArr = [];

  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      newArr.push(a[i]);
    }
  }

  return newArr.length;
}

console.log(countNumbersNotInB([1, 2, 3], [4, 5])); // 3
console.log(countNumbersNotInB([1, 2, 3], [1, 2, 3])); // 0
console.log(countNumbersNotInB([1, 2, 3], [3, 4, 5])); // 2
