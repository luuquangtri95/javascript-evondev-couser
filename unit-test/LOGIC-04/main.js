/**
 *  Tìm số có số lần xuất hiện nhiều nhất
Viết hàm findMostFrequentNumber(numberList) tìm số có số lần xuất hiện nhiều nhất trong mảng
numberList, trường hợp có nhiều số cùng tần số xuất hiện thì trả về số đầu tiên
 */

function findMostFrequentNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  let max = undefined;

  const objArrList = numberList.reduce((obj, value) => {
    if (obj[value] === undefined) {
      obj[value] = 1;
    } else {
      obj[value] += 1;
    }

    return obj;
  }, {});

  for (let key in objArrList) {
    if (max === 0 || objArrList[max] < objArrList[key]) {
      max = key;
    }
  }

  console.log(objArrList);
  return Number(max);
}
console.log(findMostFrequentNumber([1, 2, 3, 2, 3, 3, 3, 4])); // 3

console.log(findMostFrequentNumber([1])); // 1

console.log(findMostFrequentNumber([1, 2, 3, 2])); // 2
