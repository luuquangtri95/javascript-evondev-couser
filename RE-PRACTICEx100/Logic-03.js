function statisticsNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  return numberList.reduce((obj, key) => {
    obj[key] = (obj[key] || 0) + 1;

    return obj;
  }, {});
}

console.log(statisticsNumbers([1, 1, 1, 2, 2, 3]));

// const a = null || undefined || 0;
// console.log(a);
