/**
 * Ðếm số từ có độ dài lớn hơn n
 * 
Viết hàm countWords(wordList, n) để đếm xem có bao nhiều từ có độ dài lớn hơn hoặc bằng n
 */

function countWords(wordList, n) {
  if (!Array.isArray(wordList) || wordList.length === 0) return 0;
  if (n < 0) return 0;

  const newWordList = [...wordList];

  return newWordList.filter((word) => word.length >= n).length;
}

console.log(countWords(['easy', 'frontend'], 4)); // 2
console.log(countWords(['easy', 'frontend'], 5)); // 1
console.log(countWords(['easy', 'frontend'], 10)); // 0
