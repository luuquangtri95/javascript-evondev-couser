function chunkArray(array, size) {
  if (!Array.isArray(array) || array.length === 0) return [];
  if (size < 0) return [];

  let subArr = [];
  let subArrList = [];

  for (let i = 0; i < array.length; i++) {
    let number = array[i];

    subArr.push(number);

    if (subArr.length === size) {
      subArrList.push(subArr);

      subArr = [];
    }

    if (i === array.length - 1 && subArr.length >= 1) {
      subArrList.push(subArr);
    }

    if (subArrList.length > 20) throw new Error('Too many chunks');
  }

  return subArrList;
}

console.log(chunkArray([1, 2, 3], 1));
