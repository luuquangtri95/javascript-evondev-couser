/**
 * Liệt kê các số trong khoảng [a, b]
 * 
Viết hàm generateNumberInRange(a, b) để tạo ra một mảng các số từ a đến b (có bao gồm a và b)
 */

function generateNumberInRangeV1(a, b) {
  if (!Number(a) || !Number(b)) return [];
  let newNumberInRange = [];

  for (let i = a; i <= b; i++) {
    newNumberInRange.push(i);
  }

  return newNumberInRange;
}

function generateNumberInRangeV2(a, b) {
  if (!Number(a) || !Number(b)) return [];

  return Array.from({ length: b - a + 1 }, (_, idx) => idx + a);
}

console.log(generateNumberInRangeV2(1, 5));
console.log(generateNumberInRangeV2(5, 7));
console.log(generateNumberInRangeV2(7, 5));
