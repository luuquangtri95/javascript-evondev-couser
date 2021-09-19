/**
 * Sửa hàm getIndexInArray(a, arr) sao cho kết quả trả về là số thứ tự của số a đầu tiên được tìm thấy bên trong mảng arr, số thứ tự bắt đầu từ 0. Nếu số a không tồn tại bên trong mảng, kết quả trả về là -1. Các trường hợp mong muốn:
 */

function getIndexInArray(a, arr) {
  if (!Array.isArray(arr) || arr.length === 0) return -1;

  return arr.findIndex((number) => number === a);
}

console.log(getIndexInArray(2, [2, 5, 2, 2, 3]));
console.log(getIndexInArray(4, [0, 2, 4]));
console.log(getIndexInArray(3, [2, 1, 4]));
