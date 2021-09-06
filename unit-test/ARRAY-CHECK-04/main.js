/**
 * Kiểm tra có giá trị truthy nào trong mảng không
 *
 * Viết hàm hasTruthy(arr) để kiểm tra xem trong mảng arr có giá trị truthy không
 */

function hasTruthy(arr) {
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
      return false;
    }
    return true;
  });
}
console.log(hasTruthy([]));
console.log(hasTruthy([false, '']));
console.log(hasTruthy([false, 123]));
