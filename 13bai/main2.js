/**
 * Sửa hàm calculateArr(numbersArray) sao cho kết quả trả về là tổng của tất cả các số bên trong numbersArray chuyền vào, kết quả thỏa các điều kiện dưới đây:
 */

function calculateArr(numbersArray) {
  if (!Array.isArray(numbersArray) || numbersArray.length === 0) return 0;
  if (numbersArray.includes(null)) return 0;

  return numbersArray.reduce((a, b) => a + b);
}

console.log(calculateArr([2, 3, 5]));
console.log(calculateArr(null));
