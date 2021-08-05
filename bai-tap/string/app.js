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
}
console.log(hasEmail('tribi331@gmail'));
