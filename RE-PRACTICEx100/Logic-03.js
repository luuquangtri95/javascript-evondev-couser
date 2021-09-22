function statisticsNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  return numberList.reduce((obj, key) => {
    if (!(key in obj)) {
      obj[key] = 1;
    } else {
      obj[key] += 1;
    }

    return obj;
  }, {});
}

console.log(statisticsNumbers([1, 1, 1, 2, 2, 3]));
