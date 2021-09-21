function statisticsWords(str) {
  return str.split(' ').reduce((obj, key) => {
    if (obj[key] === undefined) {
      obj[key] = 1;
    } else {
      obj[key] += 1;
    }

    return obj;
  }, {});
}

console.log(statisticsWords('easy frontend easy'));
