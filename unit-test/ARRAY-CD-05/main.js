/**
 * Xoá các số trùng nhau trong mảng
 * 
Viết hàm removeDuplicatedNumbers(numberList) để xoá tất cả các số xuất hiện hơn 1 lần.
 */

function removeDuplicatedNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  const newNumberList = [...numberList].sort();

  const objNumberList = newNumberList.reduce((obj, currentValue, idx) => {
    if (obj[currentValue] === undefined) {
      obj[currentValue] = 1;
    } else {
      obj[currentValue] += 1;
    }

    return obj;
  }, {});

  return Object.keys(objNumberList)
    .filter((item) => objNumberList[item] === 1)
    .map(Number);
}

console.log(removeDuplicatedNumbers([1, 1, 2, 3, 2])); // [3]
console.log(removeDuplicatedNumbers([1, 2, 3])); // [1, 2, 3]
console.log(removeDuplicatedNumbers([])); // []
