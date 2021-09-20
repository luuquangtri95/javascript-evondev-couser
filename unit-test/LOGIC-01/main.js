/**
 * Tìm 2 số có tổng bằng số cho trước
Viết hàm findSumPair(numberList, targetSum) để tìm ra 2 số trong mảng numberList có tổng bằng
targetSum
Lưu ý:
Trường hợp không tìm thấy 2 số thoả yêu cầu thì trả về mảng rỗng
Trường hợp tìm thấy 2 số thoả yêu cầu thì trả về mảng chứa 2 số đó và sắp xếp tăng dần.
 */

function findSumPair(numberList, targetSum) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let sumArrList = [];
  let sumArr = [];

  for (let i = 0; i < numberList.length; i++) {
    for (let j = 1; j < numberList.length - 1; j++) {
      let temp = numberList[i];

      if (temp + numberList[j] !== targetSum) {
        sumArr = [];
        continue;
      }
      sumArr.push(temp, numberList[j]);
      if (sumArr.length === 2) sumArrList.push(sumArr.sort());
    }
  }

  return [sumArrList];
}

console.log(findSumPair([2, 3, 6, 1, 7, 4], 5));
