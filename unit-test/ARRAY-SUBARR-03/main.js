/**
 * Kiểm tra mảng a có phải là mảng con của mảng b
 * 
Viết hàm isSubArray(a, b) để kiểm tra xem a có phải là mảng con của b không?
Nếu a là mảng rỗng thì luôn trả về true.

Nếu a có độ dài lớn hơn b thì luôn trả về false.
Trả về true nếu toàn bộ mảng a nằm trong mảng b theo đúng thứ tự của từng phần tử trong mảng a
 */

function isSubArray(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length > b.length) return false;
  if (a.length === 0) return true;

  //conver array a, array b to string
  let stringA = a.join('');
  let stringB = b.join('');

  // check string b includes string a ? true : false
  if (stringB.includes(stringA)) return true;
  return false;
}

// way 2
function isSubArray(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length > b.length) return false;
  if (a.length === 0) return true;

  // return arrayTemp is Common point(điểm chung) b and a
  let arrTemp = b.filter((item) => a.includes(item));

  // trick compare(so sanh) 2 array
  if (JSON.stringify(arrTemp) === JSON.stringify(a)) return true;

  return false;
}

console.log(isSubArray([], [1])); // true
console.log(isSubArray([1], [1, 2])); // true
console.log(isSubArray([1, 2], [2, 3, 4])); // false
console.log(isSubArray([1, 2, 3, 4], [4, 10, 1, 2, 3])); // true
