/**
 * Xoá các số trùng nhau nhưng giữ lại một số
 * 
Viết hàm uniqueArray(numberList) để xoá các số xuần hiện hơn 1 lần, nhưng giữ lại 1 số.
 */

function uniqueArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  const newNumberList = [...numberList];

  const objNum = newNumberList.reduce((obj, value) => {
    if (obj[value] === undefined) {
      obj[value] = 1;
    } else {
      obj[value] += 1;
    }

    return obj;
  }, {});

  return Object.keys(objNum)
    .filter((item) => {
      if (objNum[item] >= 1) {
        return objNum;
      }
    })
    .map(Number);
}

console.log(uniqueArray([1, 1, 2, 2, 3])); // [1, 2, 3]
console.log(uniqueArray([1, 1, 1, 1])); // [1]
