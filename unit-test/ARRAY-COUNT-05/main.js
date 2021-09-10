/**
 * Ðếm số lượng các số có trong mảng a mà không có trong mảng b
 * 
Viết hàm countNumbersNotInB(a, b) để đếm có bao nhiếu số xuất hiện trong mảng a, mà không có trong
mảng b
 */

function countNumbersNotInB(a, b) {
  if (!Array.isArray(a) && !Array.isArray(b)) return undefined;

  const newA = [...a];
  const newB = [...b];

  return newA.filter((n) => !newB.includes(n)).length;
}

console.log(countNumbersNotInB([1, 2, 3], [4, 5])); // 3
console.log(countNumbersNotInB([1, 2, 3], [1, 2, 3])); // 0
console.log(countNumbersNotInB([1, 2, 3], [3, 4, 5])); // 2
