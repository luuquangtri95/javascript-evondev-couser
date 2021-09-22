function findMostFrequentNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  const objListNumber = numberList.reduce((obj, key) => {
    if (!(key in obj)) {
      obj[key] = 1;
    } else {
      obj[key] += 1;
    }

    return obj;
  }, {});

  let maxkey = 0;

  for (let key in objListNumber) {
    if (!(maxkey in objListNumber) || objListNumber[maxkey] < objListNumber[key]) {
      maxkey = key;
    }
  }

  return maxkey;
}

console.log(findMostFrequentNumber([1, 2, 3, 3, 2, 3, 4]));
