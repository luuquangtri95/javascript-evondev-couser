/**
 * Viết hàm isSymetricNumber(n) để kiểm tra n có phải là số đối xứng hay không?
Với n thoả điều kiện 1 < n < 1000000
Số đối xứng là số đọc từ trái sang phải cũng giống như đọc từ phải sang trái.
Trả về true nếu đúng, ngược lại trả về false
Ví dụ:
isSymetricNumber(10) --> false
isSymetricNumber(11) --> true
isSymetricNumber(12321) --> true
 */

export function isSymetricNumber(n) {
  if (!Number(n) || n < 0) return false;
  // convert number to Arr
  const numberList = n
    .toString()
    .split('')
    .reduce((prev, cur) => {
      prev.push(parseInt(cur));
      return prev;
    }, []);
  const numberListReverse = [...numberList].reverse();

  return JSON.stringify(numberList) === JSON.stringify(numberListReverse) ? true : false;
}

console.log(isSymetricNumber(10));
