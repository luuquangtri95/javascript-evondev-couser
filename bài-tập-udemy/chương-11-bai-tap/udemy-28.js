function countWords(str) {
  if (!String(str) || str === '') return 0;

  let sumWords = 0;
  let strArr = str.trim().split(' ');
  console.log(strArr);
  for (let word in strArr) {
    if (word !== ' ') {
      sumWords += 1;
    }
  }

  return sumWords;
}

console.log(countWords('easy'));
console.log(countWords('easy frontend'));
console.log(countWords('   easy frontend   '));
console.log(countWords('easy,,,,,frontend'));
