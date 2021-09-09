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

// thuật toán sẵp xếp
function findSecondLargestNumber(numberList) {
  for (let i = 0; i < numberList.length; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      console.log(j);
      let temp;
      if (numberList[i] < numberList[j]) {
        temp = numberList[i];
        numberList[i] = numberList[j];
        numberList[j] = temp;
      }
    }
  }
  return numberList[1];
}
console.log(findSecondLargestNumber([1, 2, 3, 4]));
console.log(findSecondLargestNumber([1])); // undefined
console.log(findSecondLargestNumber([1, 2])); // 1
