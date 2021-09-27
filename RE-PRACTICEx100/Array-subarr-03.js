function isSubArray(a, b) {
  if (!Array.isArray(a)) return false;
  if (!Array.isArray(b) || b.length === 0) return false;
  if (a.length > b.length) return false;
  if (a.length === 0) return true;

  let aString = a.join('');
  let bString = b.join('');

  return bString.includes(aString) ? true : false;
}

function isSubArray(a, b) {
  if (!Array.isArray(a)) return false;
  if (!Array.isArray(b) || b.length === 0) return false;
  if (a.length > b.length) return false;
  if (a.length === 0) return true;

  let arrDuplicateAandB = b.filter((item) => a.indexOf(item) !== -1).slice(0, a.length);

  return JSON.stringify(arrDuplicateAandB) === JSON.stringify(a) ? true : false;
}

console.log(isSubArray([1, 2, 3], [4, 10, 1, 2, 2, 3, 2])); // false
console.log(isSubArray([1, 2], [2, 3, 4])); // false
console.log(isSubArray([], [1])); // true
console.log(isSubArray([1], [1, 2])); // true
