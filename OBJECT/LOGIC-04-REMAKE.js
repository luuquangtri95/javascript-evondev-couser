function findMostFrequentNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  const objNumber = numberList.reduce((obj, key) => {
    if (obj[key] === undefined) {
      obj[key] = 1;
    } else {
      obj[key] += 1;
    }

    return obj;
  }, {});

  let maxKey = 0;
  for (let key in objNumber) {
    if (!(maxKey in objNumber) || objNumber[maxKey] < objNumber[key]) {
      maxKey = key;
    }
  }

  return maxKey;
}

console.log(findMostFrequentNumber([1, 2, 3, 2, 3, 3, 4]));
