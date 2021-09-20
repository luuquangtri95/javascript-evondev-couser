/**
 * Tìm số bị thiếu cho trong một mảng từ [5..n]
Viết hàm findMissingNumber(numberList, n) để tìm ra con số bị thiếu trong dãy số [5..n]
Mảng numberList sẽ đảm bảo chỉ chứa các con số trong phạm vi từ 5 đến n.
Mỗi số chỉ xuất hiện một lần trong mảng.
Chắc chắn sẽ luôn có một con số bị thiếu trong mảng (ko hơn, ko kém)
 */

function findMissingNumber(numberList, n) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  let arrN = Array.from({ length: n }, (_, idx) => idx + 1).filter((item) => item > 5);

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];
    if (number < 5) {
      return 0;
    }

    return arrN.find((item) => !numberList.includes(item));
  }
}

console.log(findMissingNumber([5, 6, 8, 9, 10], 10));
console.log(findMissingNumber([5], 6));
