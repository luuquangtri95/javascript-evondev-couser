/**
 * Tìm các mảng con giảm dần có ít nhất 3 phần tử
 * 
Viết hàm findAllDecreasingSubArr(numberList) để tìm ra tất cả các mảng con giảm dần có độ dài ít nhất
3 phần tử.

Mảng có tính chất giảm dần phải có ít nhất 2 phần tử và phần tử tại vị trí bất kỳ luôn nhỏ phần từ liền
trước nó (trừ phần tử đầu tiên
 */

function findAllDecreasingSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  let subArrList = [];
  let subArr = [numberList[0]];

  for (let i = 1; i < numberList.length; i++) {
    let prevNumber = numberList[i - 1];
    let currNumber = numberList[i];

    if (prevNumber <= currNumber) {
      if (subArr.length >= 3) subArrList.push(subArr);

      subArr = [currNumber];
    }

    if (prevNumber > currNumber) {
      subArr.push(currNumber);
    }

    if (i === numberList.length - 1 && subArr.length >= 3) {
      subArrList.push(subArr);
    }
  }

  return subArrList;
}

console.log(findAllDecreasingSubArr([3, 2, 1, 15, 10, 9, 10]));
