function uniqueArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  let objNumber = numberList.reduce((obj, key) => {
    obj[key] = (obj[key] || 0) + 1;

    return obj;
  }, {});
  return Object.keys(objNumber).map(Number);
}

function uniqueArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  let arrDuplicate = [];
  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];
    if (arrDuplicate.indexOf(number) === -1) {
      arrDuplicate.push(number);
    }
  }

  return arrDuplicate;
}

console.log(uniqueArray([1, 1, 2, 2, 3])); // [1, 2, 3]
console.log(uniqueArray([1, 1, 1, 1])); // [1]
