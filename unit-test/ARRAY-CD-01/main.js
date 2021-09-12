/**
 * Thêm một phần tử tại vị trí k
 * 
Viết hàm insert(arr, newItem, k) để thêm một phần tử mới newItem vào vị trí k (zero based) của mảng arr

Nếu k lớn hơn độ dài của mảng thì thêm vào cuối mảng

Nếu k bé hơn hoặc bằng 0 thì thêm vào đàu mảng

 */

function insert(arr, newItem, k) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  const newArr = [...arr];

  if (k <= 0) {
    newArr.unshift(newItem);
  }

  if (k > newArr.length) {
    newArr.push(newItem);
  }

  newArr.splice(k, 0, newItem);

  return newArr;
}

// console.log(insert([1, 2, 3], 0, -1)); // [0, 1, 2, 3]
// console.log(insert([1, 2, 3], 4, 10)); // [1, 2, 3, 4]
// console.log(insert([1, 2, 3], 10, 2)); // [1, 2, 10, 3]
console.log(insert([1, 3, 4], 2, 1));
