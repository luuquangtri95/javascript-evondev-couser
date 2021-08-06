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

function formatSecondsV3(seconds) {
  return '0'.concat(seconds).slice(-2);
}
console.log(formatSecondsV3(9));

/**
 * viết hàm formatTime(seconds) nhâp vào seconds 0 <= seconds <= 86400
 * trả về hh:mm:ss
 * hh,mm,ss luôn hiển thị 2 số kể cả < 10;
 */

// please try to use these constants in your code
const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

function formatTime(seconds) {
  // checking
  if (seconds < 0) return -1;

  //processing
  if (seconds < 10) return `00:00:0${seconds}`;
  let min = Math.trunc(seconds / SECONDS_PER_MIN);
  let hour = Math.trunc(min / SECONDS_PER_MIN).toString();
  hour = '0'.concat(hour).slice(-2);
  min = min % 60;
  let s = seconds.toString().slice(-2);
  return `${hour}:${min}:${s}`;
}
console.log(formatTime(4256));

/**
 * viết hàm isSecureUrl(url) nhận vào url và trả về true nếu url có sử dụng phuong thức boả mật
 * wss, https
 */

//startsWith
function isSecureUrlV2(url) {
  if (url.startsWith('https') || url.startsWith('wss')) return true;
  return false;
}
console.log(isSecureUrl('https://abc.com'));

//indexOf
function isSecureUrlV1(url) {
  if (url.indexOf('https') >= 0 || url.indexOf('wss') >= 0) {
    return true;
  }
  return false;
}
console.log(isSecureUrlV1('https://abc.com'));

/**
 * viết hàm extractDomain(email) nhập vào địa chỉ email trả về domain sau kí tư @
 */
// using split
function extractDomain(email) {
  if (email === '') return '';

  let newEmail = email.split('@')[1]; // ["bob","abc.com"] =>> split('@')[1] sẽ remove phần tử đầu tiên
  console.log(newEmail);
}
console.log(extractDomain('bob@gmail.com'));

// using indexOf() and slice()
function extractDomainV2(email) {
  if (email === '') return '';

  let extention = email.indexOf('@');
  let extentionEmail = email.slice(extention + 1);
  return extentionEmail;
}
console.log(extractDomainV2('bob@abc.com'));

/**
 * viết hàm findSecret(code) tìm ra chuỗi mật mã với quy tắc:
 * bỏ đi tất cả ký tự HOA trong code => chuỗi còn lại chính là chuỗi cần tìm
 * findSecret("SUPPER") => ""
 * findSecret(SUPERhelloCODE) =>> hello
 */

function findSecret(code) {
  if (code === '') return 0;
  let newCode = '';

  for (let i = 0; i < code.length; i++) {
    let codeC = code.split('')[i];
    if (codeC !== codeC.toUpperCase()) {
      newCode += codeC;
    }
  }
  return newCode;
}

console.log(findSecret('SUPERhelloCODE'));

/**
 * viết hàm getFullName(firstName, lastName) nhận vào firstName và LastName trả về chuỗi full name
 *
 */

function getFullName(firstName, lastName) {
  if (firstName === '' && lastName === '') return '';
  if (firstName && lastName) {
    let newFirstName = firstName
      .split('')[0]
      .toUpperCase()
      .concat(firstName.slice(1).toLowerCase())
      .trim();
    let newLastName = lastName
      .split('')[0]
      .toUpperCase()
      .concat(lastName.slice(1).toLowerCase())
      .trim();
    return `${newFirstName} ${newLastName}`;
  }
  if (firstName) {
    let newFirstName = firstName
      .split('')[0]
      .toUpperCase()
      .concat(firstName.slice(1).toLowerCase());
    return newFirstName;
  }
  if (lastName) {
    let newLastName = lastName
      .split('')[0]
      .toUpperCase()
      .concat(lastName.slice(1).toLowerCase())
      .trim();
    return newLastName;
  }
}
console.log(getFullName('joIn', ''));
