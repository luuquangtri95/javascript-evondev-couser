/**
 * Xoá một phần tử tại vị trí k
 * 
Viết hàm remove(arr, k, n) để xoá n phần tử ra khỏi mảng arr kể từ vị trị k (zero based)

Nếu k < 0 hoặc k >= arr.length thì trả về mảng hiện tại.

Nếu k hợp lệ thì remove n phần tử kể tử vị trí k và trả về mảng kết quả.

Nếu n không truyền vào thì remove tới cuối mảng.

Lưu ý không được làm thay đổi mảng arr truyền vào.
 */

function remove(arr, k, n) {
  if (!Array.isArray(arr) || arr.length === 0) return [];

  const newArr = [...arr];

  if (k < 0 || k >= newArr.length) {
    return newArr;
  }

  if (!n) {
    return [];
  }

  newArr.splice(k, n);

  return newArr;
}

console.log(remove([1, 2, 3], -1, 10)); // [1, 2, 3]
console.log(remove([1, 2, 3], 3, 10)); // [1, 2, 3]
console.log(remove([1, 2, 3], 1, 2)); // [1]
console.log(remove([1, 2, 3], 0)); // []
