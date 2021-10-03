function mostFrequent(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let maxkey = undefined;

  const objNumber = numberList.reduce((obj, key) => {
    obj[key] = (obj[key] || 0) + 1;

    return obj;
  }, {});

  for (let key in objNumber) {
    if (maxkey === undefined || objNumber[maxkey] < objNumber[key]) {
      maxkey = key;
    }
  }

  return Number(maxkey);
}

console.log(mostFrequent([2, 2, 3, 3, 2, 3, 3, 2, 2]));
console.log(mostFrequent([2, 1, 3]));
console.log(mostFrequent([1, 2, 3]));
