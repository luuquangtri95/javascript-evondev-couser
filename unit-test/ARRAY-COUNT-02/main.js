/**
 * Ðếm số mà nó nhỏ hơn số liền trước của nó
 * 
Viết hàm countNumbers(numberList) để đếm xem trong mảng có bao nhiêu số mà nó nhỏ hơn số đừng
liền trước của nó.
 */

function countNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  const newNumberList = [...numberList];

  return newNumberList.filter((number, idx) => newNumberList[idx] > newNumberList[idx + 1]).length;
}

console.log(countNumbers([1, 2, 3])); // 0
console.log(countNumbers([1, 2, 3, 10, 9, 8])); // 2 (9 và 8 thoả điều kiện)
