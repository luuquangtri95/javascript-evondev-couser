/**
 * Tổng các chữ số nhỏ nhất của số trong mảng
 * 
Viết hàm sumAllMinDigits(numberList) để tính tổng các chữ số nhỏ nhất của từng số trong mảng
numberList
 */

function sumAllMinDigits(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  let sum = 0;
  const newNumberList = [...numberList];

  for (let number of newNumberList) {
    let digitNumber = Array.from(number.toString()).map(Number);
    sum += Math.min(...digitNumber);
  }

  return sum;
}

console.log(sumAllMinDigits([])); // 0
console.log(sumAllMinDigits([123])); // 1 vì chỉ lấy chữ số nhỏ nhất của 123 là 1
console.log(sumAllMinDigits([123, 532])); // 3 (lấy 1 từ 123 và 2 từ 532, tổng bằng 3)

//https://www.codegrepper.com/code-examples/javascript/how+to+convert+number+to+array+in+javascript
/**
 * conver number to array theo nhiều cách
 */
