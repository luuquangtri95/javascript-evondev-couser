/**
 *  Kiểm tra mang có đối xứng không
Viết hàm isSymmetricList(numberList) để kiểm tra mảng có tính chất đổi xứng không?
Mảng đối xứng là mảng đọc từ trái qua phải giống như đọc từ phải sang trái.
Mảng đối xứng phải có ít nhất một phần tử.
 */

function isSymmetricList(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  if (numberList.length === 1) return true;

  const reverseNumberList = [...numberList].reverse();

  return JSON.stringify(reverseNumberList) === JSON.stringify(numberList) ? true : false;
}

console.log(isSymmetricList([]));
console.log(isSymmetricList([1]));
console.log(isSymmetricList([1, 2, 2, 1]));
console.log(isSymmetricList([1, 2, 3]));
