function uniqueLetters(str) {
  if (!String(str)) return '';

  const strArr = Array.from(str);

  const objStr = strArr.reduce((obj, key) => {
    obj[key] = (obj[key] || 0) + 1;

    return obj;
  }, {});

  return Object.keys(objStr)
    .filter((alphabet) => objStr[alphabet] === 1)
    .join('');
}

console.log(uniqueLetters('abc'));
console.log(uniqueLetters('easy frontend'));
console.log(uniqueLetters('aabccddeff'));
