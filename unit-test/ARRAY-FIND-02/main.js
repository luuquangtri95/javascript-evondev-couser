/**
 * Tìm từ dài nhất nhưng nhỏ hơn 5 trong mảng
Viết hàm findLongestWord(wordList) để tìm ra từ dài nhất trong mảng wordList
Từ cần tìm có độ dài không quá 5
Từ cần tìm không có chứa khoảng trắng (space)
Trường hợp không tìm thấy từ thoả điều kiện thì trả về empty string.
 */

function findLongestWord(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return '';

  return wordList.find((word) => {
    if (word.length >= 5 && !word.includes(' ')) {
      return word;
    }
  });
}

console.log(findLongestWord([])); // ''
console.log(findLongestWord(['super', 'cool'])); // 'super'
console.log(findLongestWord(['super', 'super cool']));
