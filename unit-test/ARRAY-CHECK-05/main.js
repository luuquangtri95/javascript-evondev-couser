/**
 * Kiểm tra có giá trị falsy nào trong mảng không
 *
 * Viết hàm hasFalsy(arr) để kiểm tra xem trong mảng arr có giá trị falsy không?
 */

function hasFalsy(arr) {
  if (!Array(arr)) return false;

  return arr.some((item) => {
    if (
      item === false ||
      item === '' ||
      item === 0 ||
      item === null ||
      item === undefined ||
      item === NaN
    ) {
      return true;
    }
  });
}
console.log(hasFalsy([]));
console.log(hasFalsy([false, '']));
console.log(hasFalsy([false, 123]));
console.log(hasFalsy(['easy', 123]));
