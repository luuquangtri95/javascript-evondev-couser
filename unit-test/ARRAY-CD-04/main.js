/**
 * Cho một mảng đã được sắp xếp tăng dần. Cho một số, nhờ bạn add vào mảng
nhưng phải đảm bảo mảng vẫn đc sắp xếp tăng dần.

Viết hàm insert(numberList, newNumber) để chèn newNumber vào mảng numberList sao cho mảng kết
quả vẫn là tăng dần
 */

function insert(numberList, newNumber) {
  if (!Array.isArray(numberList)) return [];

  let newNumberList = [...numberList];
  newNumberList.push(newNumber);

  return newNumberList.sort();
}

console.log(insert([], 3)); // [3]
console.log(insert([1, 2, 4], 3)); // [1, 2, 3, 4]
console.log(insert([1, 2, 3], 3)); // [1, 2, 3, 3]
