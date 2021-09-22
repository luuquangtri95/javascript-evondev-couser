/**
 * Tìm các mảng con tăng dần
 * 
Viết hàm findAllIncreasingSubArr(numberList) để tìm ra tất cả các mảng con tăng dần có trong mảng
numberList.

Mảng có tính chất tăng dần phải có ít nhất 2 phần tử và phần tử tại vị trí bất kỳ luôn lớn phần từ liền
trước nó (trừ phần tử đầu tiên)

findAllIncreasingSubArr([1, 2, 3, -5, -10, 5, 1
 */

function findAllIncreasingSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let subArrList = [];
  let subArr = [numberList[0]];

  for (let i = 1; i < numberList.length; i++) {
    let prevNumber = numberList[i - 1];
    let currNumber = numberList[i];

    if (prevNumber >= currNumber) {
      // check if we need to reset subArr
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

  return subArrList;
}

console.log(findAllIncreasingSubArr([1, 2, 3, -5, -10, 5, 10]));
