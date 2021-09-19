/**
 * Tìm mảng con tăng dần có tổng lớn nhất, trả về con số tổng
 * 
Viết hàm findMaxSumArray(numberList) để tìm ra mảng con tăng dần có tổng lớn nhất và trả về tổng
của mảng con đó.
 */

function findMaxSumArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  if (numberList.length === 1) return numberList[0];

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

  for (let i = 0; i < subArrList.length - 1; i++) {
    return Math.max(sumArr(subArrList[i]), sumArr(subArrList[i + 1]));
    // if (sumArr(subArrList[i]) > sumArr(subArrList[i + 1])) {
    //   return sumArr(subArrList[i]);
    // }
    // return sumArr(subArrList[i + 1]);
  }
}

function sumArr(arr) {
  return arr.reduce((a, b) => a + b);
}
// console.log(findMaxSumArray([-5, -4, -3, -2]));

console.log(findMaxSumArray([])); // 0
console.log(findMaxSumArray([1])); // 6
console.log(findMaxSumArray([1, 2, 30, 8, -2, 0, 10, 20]));
