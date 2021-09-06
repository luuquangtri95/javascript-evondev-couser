/**
 * Kiểm tra mảng có giảm dần không
Viết hàm isIncreasingNumberList(numberList) để kiểm tra xem mảng số này có phải giảm dần không?
Mảng tăng dần cần thoả các điều kiện sau:

1: có ít nhất 2 phần tử
2: phần tử sau luôn nhỏ hơn phần tử phía trước
 */

function isIncreasingNumberList(numberList) {
  if (!Array.isArray(numberList) || numberList.lengths < 2) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > numberList[i + 1]) {
      return true;
    }
    break;
  }

  return false;
}

console.log(isIncreasingNumberList([1, 1]));
console.log(isIncreasingNumberList([1, 5, 3, 2]));
console.log(isIncreasingNumberList([5, 4, 2, 1]));
