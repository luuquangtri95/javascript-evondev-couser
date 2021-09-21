function statisticsCharacters(str) {
  if (!String(str) || str.length === 0) return '';

  return str.split('').reduce((obj, key) => {
    if (key === ' ') {
      key = 'space';
    }

    if (obj[key] === undefined) {
      obj[key] = 1;
    } else {
      obj[key] += 1;
    }

    return obj;
  }, {});
}

console.log(statisticsCharacters('aa b cc '));
