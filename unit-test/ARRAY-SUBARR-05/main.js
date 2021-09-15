/**
 * Tìm mảng con tăng dần có tổng lớn nhất, trả về con số tổng
 * 
Viết hàm findMaxSumArray(numberList) để tìm ra mảng con tăng dần có tổng lớn nhất và trả về tổng
của mảng con đó.
 */

function findMaxSumArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let subArr = [numberList[0]];
  for (let i = 1; i < numberList.length; i++) {
    let prevNumber = numberList[i - 1];
    let currNumber = numberList[i];

    if (prevNumber >= currNumber) {
      subArr = [currNumber];
    }

    if (prevNumber < currNumber) {
      subArr.push(currNumber);
    }
  }

  return subArr.length >= 2 ? subArr.reduce((a, b) => a + b) : subArr[0];
}

console.log(findMaxSumArray([])); // 0
console.log(findMaxSumArray([1])); // 6
console.log(findMaxSumArray([1, 2, 3, 0, 10, 20]));
