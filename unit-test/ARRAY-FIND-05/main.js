/**
 * Tìm số lớn thứ 2 trong mảng
Viết hàm findSecondLargestNumber(numberList) để tìm ra số lớn thứ 2 trong mảng numberList
 */

function findSecondLargestNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 1) return undefined;

  const newNumberList = [...numberList].sort((a, b) => b - a);

  return newNumberList[1];
}

console.log(findSecondLargestNumber([1])); // undefined
console.log(findSecondLargestNumber([1, 2])); // 1
console.log(findSecondLargestNumber([1, 2, 3, 4])); // 3
