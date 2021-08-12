/**
 * bài tập về function:
 * so sánh 2 số, tìm ra số lớn hơn
 */

function compare(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return -1;
  }
  let max = a;
  if (b > a) return (max = b);
  return max;
}

console.log(compare(5, 3));

/**
 * in hoa chữ cái đầu
 */

function uppercaseText(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  let extentionString = str.slice(1).toLowerCase();
  return `${str.split('')[0].toUpperCase()}${extentionString}`;
}
console.log(uppercaseText('nam'));

function uppercaseText(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  let newStr = str.toLowerCase().charAt(0).toUpperCase();
  let orther = str.toLowerCase().slice(1);

  return `${newStr}${orther}`;
}
console.log(uppercaseText('tRi'));

// viết func có sử dụng callback (function là parameter của func khác) in ra kết quả của hàm compare

function useCallBack(a, b, callback) {
  let max = compare(a, b);
  callback(max);
}
function printf(number) {
  console.log('max number ís' + number);
}
console.log(useCallBack(5, 10, printf));
