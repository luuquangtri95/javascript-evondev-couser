/**
 * Kiểm tra số có tổng của 2 chữ số bằng số cho trước
Viết hàm hasTwoDigitsWithSum(n, sum) để kiểm tra n (9 < n < 1000000) có chứa 2 chữ số bất kỳ nào có
tổng bằng sum (0 < sum < 19) cho trước không?
Ví dụ:
hasTwoDigitsWithSum(10, 1) --> true vì 0 + 1 = 1
hasTwoDigitsWithSum(101, 3) --> false vì không có 2 chữ số nào cộng lại bằng 3
hasTwoDigitsWithSum(11, 2) --> true

 */

export function hasTwoDigitsWithSum(n, sum) {
  if (!Number(n) && !Number(sum)) return false;
  if (n < 0 && sum < 0) return false;
  // let flag = false;
  // number to array
  let numberList = n
    .toString()
    .split('')
    .reduce((prev, cur) => {
      prev.push(parseInt(cur));
      return prev;
    }, []);

  // processing
  for (let i = 0; i < numberList.length; i++) {
    if (numberList.length === 2) {
      if (numberList[i] + numberList[i + 1] === sum) {
        return true;
      }
    }
    for (let j = i; j < numberList.length; j++) {
      if (numberList.length <= 3) {
        if (numberList[i] === sum || numberList[j] === sum) {
          return false;
        }
      }
      if (numberList[i] + numberList[j] === sum) {
        return true;
      }
    }
  }

  // return
  return false;
}

console.log(hasTwoDigitsWithSum(211, 4));
