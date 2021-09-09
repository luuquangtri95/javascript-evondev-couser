/**
 * Tìm tất cả các số mà nó lớn hơn số đứng trước nó
 * 
Viết hàm findNumbers(numberList) để tìm ra các số thoả điều kiện là lớn hơn số đứng trước nó (không
tính số đầu tiên)
 */

function findNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 1) return [];
  let newNumberList = [];

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] < numberList[i + 1]) {
      newNumberList.push(numberList[i + 1]);
    }
  }

  return newNumberList;
}

function findNumbersV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 1) return [];

  return numberList.filter((number, idx) => idx !== 0 && numberList[idx - 1] < numberList[idx]);
}

console.log(findNumbersV2([2, 5, 3, 7]));
