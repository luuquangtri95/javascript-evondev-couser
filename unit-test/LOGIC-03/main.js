/**
 * Thống kê số lần xuất hiện của các số trong mảng
Viết hàm statisticsNumbers(numberList) để thống kê số lần xuất hiện của các số trong mảng
numberList.
 */

function statisticsNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  const objList = numberList.reduce((obj, value) => {
    if (obj[value] === undefined) {
      obj[value] = 1;
    } else {
      obj[value] += 1;
    }
    return obj;
  }, {});

  return objList;
}

console.log(statisticsNumbers([1, 1, 1, 2, 2, 3]));
