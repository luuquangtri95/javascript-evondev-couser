/**
 * bài tập chuỗi:
 * viết 1 function tranform string
 * - ký tự đầu tiên viết hoa
 * - còn lại viết thường
 *
 */
function capitalize(str) {
  // checking
  if (str === '') return '';
  //processing
  const firstLetter = str[0].toUpperCase();
  const rest = str.slice(1).toLowerCase();

  return `${firstLetter}${rest}`;
}
console.log(capitalize('luu QUANG TRI'));

/**
 * kiểm tra string có chưa email address với @gmail.com hay không
 * indexOf
 * lastIndexOf
 * Includes
 */

function hasEmail(str) {
  return str.includes('@gmail.com');
  return str.indexOf('@gmail.com') >= 0; //không tìm thấy trả về -1
  return str.lastIndexOf('@gmail.com') >= 0; //không tìm thấy trả về -1
}
console.log(hasEmail('tribi331@gmail.com tri@gmail.com'));

/**
 * viết 1 function chuyển hoá parameter strings
 * code js is fun =>> code-js-is-fun
 * p1:replaceAll
 * p2: split & join
 */

function parameterize(str) {
  const lowerStr = str.toLowerCase();
  // p1
  // return lowerStr.replaceAll(' ', '-');
  // p2
  return lowerStr.split(' ').join('-');
}

console.log(parameterize('code js is fun'));

/**
 * truyền vào 1 text, kieerm tra maxlength, nếu dài quá thì replace "..."
 * truncate("easy fronten", 4) =>> 'easy...'
 */

function trucate(text, maxLength) {
  if (text.length === maxLength) return text;
  const shortStr = text.slice(0, maxLength - 1);
  return `${shortStr}\u2026`;
}
console.log(trucate('luu quang tri', 4));

/**
 * viết hàm removeVowel(str) tìm và remove tất cả nguyên âm trong cấu văn
 */
function removeVowel(str) {
  if (str === '') return '';
  const lowerStr = str.toLowerCase();
  console.log(lowerStr);
  if (
    lowerStr.includes('a') ||
    lowerStr.includes('e') ||
    lowerStr.includes('u') ||
    lowerStr.includes('o') ||
    lowerStr.includes('i')
  ) {
    return lowerStr
      .replace('a', '')
      .replace('e', '')
      .replace('u', '')
      .replace('i', '')
      .replace('o', '')
      .trim();
  }
}
console.log(removeVowel('say hello'));

/**
 * viết hàm formatSeconds(seconds) nhập vào số giây trả về chuỗi luôn có 2 chữ số của giây
 */
function formatSecondsV1(seconds) {
  if (seconds < 0) return -1;

  if (seconds < 10) {
    return `0${seconds}`;
  } else {
    return seconds.toString();
  }
}
console.log(formatSecondsV1(6));

function formatSecondsV2(seconds) {
  if (seconds < 0) return -1;
  let newSeconds = seconds / 10;
  return newSeconds.toFixed(1).split('.').join('');
}
console.log(formatSecondsV2(45));
