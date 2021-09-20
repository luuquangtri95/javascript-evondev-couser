/**
 * Tìm mảng con tăng dần có tổng lớn nhất, trả về mảng con đầu tiên
 * 
Viết hàm findMaxSumArray(numberList) để tìm ra mảng con tăng dần có tổng lớn nhất và trả về mảng
con đó.

 */

function findMaxSumArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let subArrList = [];
  let subArr = [numberList[0]];

  for (let i = 1; i < numberList.length; i++) {
    let prevNumber = numberList[i - 1];
    let currNumber = numberList[i];

    if (prevNumber >= currNumber) {
      if (subArr.length >= 2) subArrList.push(subArr);

      subArr = [currNumber];
    }

    if (prevNumber < currNumber) {
      subArr.push(currNumber);
    }

    if (i === numberList.length - 1 && subArr.length >= 2) {
      subArrList.push(subArr);
    }
  }

  if (subArrList.length === 1) return subArr;

  for (let i = 0; i < subArrList.length; i++) {
    if (
      sumArr(subArrList[i]) > sumArr(subArrList[i + 1]) ||
      sumArr(subArrList[i]) === sumArr(subArrList[i + 1])
    ) {
      return subArrList[i];
    } else {
      return subArrList[i + 1];
    }
  }
}
function sumArr(arr) {
  return arr.reduce((a, b) => a + b);
}
console.log(findMaxSumArray([1, 2, 3, 0, 2, 4]));
console.log(findMaxSumArray([]));
console.log(findMaxSumArray([1, 2, 3]));
