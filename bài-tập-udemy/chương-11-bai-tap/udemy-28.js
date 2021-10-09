function countWords(str) {
  if (!String(str) || str.length === '') return 0;

  let strArr = str.trim().split(',');

  const objStr = {};

  for (let i = 0; i < strArr.length; i++) {
    let word = strArr[i];
    objStr[word] = (objStr[word] || 0) + 1;

    if (word === '') {
      delete objStr[word];
    }
  }

  return Object.keys(objStr)
    .join(' ')
    .split(' ')
    .filter((x) => x !== '').length;
}

console.log(countWords('dev,,,,,frontend'));
console.log(countWords('dev'));
console.log(countWords('dev frontend'));
console.log(countWords('   dev   frontend   '));

function countWords(str) {
  if (!String(str) || str.length === '') return 0;

  let strArr = str
    .trim()
    .split(' ')
    .filter((x) => x !== '');

  console.log(strArr);

  return strArr.reduce((sum, item) => {
    if (strArr.includes(item)) {
      return sum++;
    }
  }, 0);
}
console.log(countWords('dev,,,,,frontend'));
console.log(countWords('dev'));
console.log(countWords('dev frontend'));
console.log(countWords('   dev  frontend   '));
