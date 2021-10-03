function countWords(wordList, n) {
  if (!Array.isArray(wordList) || wordList.length === 0) return 0;
  if (n < 0) return 0;

  return wordList.filter((word) => word.length >= n).length;
}

console.log(countWords(['easy', 'frontend'], 4)); // 2
console.log(countWords(['easy', 'frontend'], 5)); // 1
console.log(countWords(['easy', 'frontend'], 10)); // 0
