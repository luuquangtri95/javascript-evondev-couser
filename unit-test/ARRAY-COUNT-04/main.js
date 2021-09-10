/**
 * Ðếm số lượng các số khác nhau có trong mảng
 * 
Viết hàm countUniqueNumbers(numberList) để tìm ra có bao nhiêu số khác nhau trong mảng
 */

function countUniqueNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  const newNumberList = [...numberList];
  return newNumberList.sort().filter((number, idx) => newNumberList[idx + 1] !== number).length;
}
console.log(countUniqueNumbers([])); // 0
console.log(countUniqueNumbers([1, 1, 1])); // 1
console.log(countUniqueNumbers([1, 2, 3])); // 3
console.log(countUniqueNumbers([1, 2, 2, 3, 1])); //3
