/**
 * : Kiểm tra mảng có tăng dần không
Viết hàm isIncreasingNumberList(numberList) để kiểm tra xem mảng số này có phải tăng dần không?
Mảng tăng dần cần thoả các điều kiện sau:

1: có ít nhất 2 phần tử
2: phần tử sau luôn lớn hơn phần tử đầu
 */
function isIncreasingNumberList(numberList) {
  let flag = false;

  for (let i = 0; i < numberList.length; i++) {
    let currNumber = numberList[i];
    let nextNumber = numberList[i + 1];

    if (nextNumber > currNumber) {
      flag = true;
    }
    break;
  }

  // return true / false
  return flag;
}
console.log(isIncreasingNumberList([1, 1]));
console.log(isIncreasingNumberList([1, 2, 3, 4, 5]));
console.log(isIncreasingNumberList([2, 1, 3, 5]));

function isIncreasingNumberList(numberList) {
  if (numberList.length < 2 || !Array(numberList)) return [];

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i + 1] > numberList[i]) {
      return true;
    }
    break;
  }

  return false;
}
console.log(isIncreasingNumberList([1, 1]));
console.log(isIncreasingNumberList([1, 2, 3, 4, 5]));
console.log(isIncreasingNumberList([2, 1, 3, 5]));
