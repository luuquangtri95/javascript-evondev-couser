/**
 * Tìm tất cả các số bằng với số dương chẳn đầu tiên trong mảng
 * 
Viết hàm findAllNumbers(numberList) để tìm ra tất cả các số bằng với số dương chẳn đầu tiên trong
mảng.

Trường hợp mảng không có số dương chẳn thì trả về mảng rỗng.

Mảng kết quả không bao gồm số dương chẵn đầu tiên.
 */

function findAllNumbers(numberList) {
  if (!Array.isArray(numberList)) return [];
  let newNumberList = [...numberList];

  const firstNumberEven = newNumberList.find((number) => number % 2 === 0);
  if (!firstNumberEven) return [];

  return newNumberList.filter((number) => firstNumberEven === number).slice(1);
}

console.log(findAllNumbers([1, 3, 5]));
console.log(findAllNumbers([1, 4, 5, -6, 4, 5, 4]));
console.log(findAllNumbers([1, 2, 3, 2, -6, 4, 5, 4, 2]));
