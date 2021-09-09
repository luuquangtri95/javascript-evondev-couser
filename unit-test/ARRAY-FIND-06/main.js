/**
 * Tìm số chính phương cuối cùng trong mảng
Viết hàm findLastPerfectSquare(numberList) để tìm ra số chính phương cuối cùng trong mảng
numberList
 */

function findLastPerfectSquare(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  const newNumberList = [...numberList];
  // sort array
  for (let i = 0; i < newNumberList.length; i++) {
    for (let j = i + 1; j < newNumberList.length; j++) {
      let temp;
      if (newNumberList[i] < newNumberList[j]) {
        temp = newNumberList[i];
        newNumberList[i] = newNumberList[j];
        newNumberList[j] = temp;
      }
    }
  }

  // find perfect square
  return newNumberList.find((number) => {
    let sqrtNumber = Math.sqrt(number);
    if (sqrtNumber * sqrtNumber === number) {
      return number;
    }
  });
}

console.log(findLastPerfectSquare([4, 16, 25, 36, 40]));
